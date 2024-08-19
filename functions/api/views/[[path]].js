export const onRequestPut = async (context) => {
  const {
    request,
    env: { BLOG_INFO },
  } = context;

  // CF way to access the body of the put request
  const { path } = await request.json();

  let currentCount = Number(
    await BLOG_INFO.get(path.replace("/api/views", "")),
  );
  if (!currentCount || isNaN(currentCount)) {
    currentCount = 0;
  }

  // KV store does not allows "Number" as value
  await BLOG_INFO.put(path, String(currentCount + 1));

  return new Response(null, {
    status: 204,
    statusText: "ok",
  });
};

export const onRequestGet = async (context) => {
  const { request, env } = context;
  const url = new URL(request.url);
  const path = url.pathname;
  const rayID = request.headers.get("CF-RAY");
  const ip = request.headers.get("CF-CONNECTING-IP");
  const ua = request.headers.get("user-agent");
  var date = new Date(Date.now());
  date.setHours(date.getHours() - 4);
  var time = date
    .toISOString()
    .replace(/T/, "")
    .replace(/Z/, "")
    .replace(/-/g, "")
    .replace(/:/g, "")
    .replace(".", "");

  var response;
  if (!ua.includes("bot")) {
    await env.PAGE_VIEW_RECORDS.put(
      rayID,
      JSON.stringify({
        path: path,
        country: request.cf.country,
        time: time,
        "cf-ray": rayID,
        ip: ip,
        "user-agent": ua,
      }),
    );

    const counter = await env.PAGE_COUNTER.get(path);
    response = new Response(JSON.stringify({ pv: counter }));
  } else {
    var html = `<!DOCTYPE html><html><head><meta name="robots" content="noindex"></head><body></body></html>`;
    response = new Response(html, {
      headers: { "Content-Type": "text/html;charset=utf-8" },
    });
  }

  response.headers.set("Access-Control-Allow-Origin", "https://fneira.dev");
  response.headers.set("Access-Control-Allow-Methods", "GET");
  response.headers.set("Access-Control-Max-Age", "86400");

  return response;
};
