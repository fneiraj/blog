const DEFAULT_HEADERS = {
  "Access-Control-Allow-Origin": "https://fneira.dev",
  "Access-Control-Allow-Methods": "GET",
  "Access-Control-Max-Age": "86400",
};

export const onRequestGet = async (context) => {
  const { request, env } = context;
  const encodedPath = new URL(request.url).searchParams.get("path");

  if (!encodedPath) {
    return new Response(
      JSON.stringify({
        error: "Path not provided",
      }),
      {
        status: 400,
      },
    );
  }

  const path = decodeURIComponent(encodedPath);

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

  if (ua.includes("bot")) {
    var html = `<!DOCTYPE html><html><head><meta name="robots" content="noindex"></head><body></body></html>`;
    return new Response(html, {
      headers: {
        "Content-Type": "text/html;charset=utf-8",
        ...DEFAULT_HEADERS,
      },
    });
  }

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

  if (counter === null) {
    await env.PAGE_COUNTER.put(path, 1);
  } else {
    await env.PAGE_COUNTER.put(path, Number(counter) + 1);
  }

  return new Response(JSON.stringify({ path, views: counter ?? 1 }), {
    headers: {
      "Content-Type": "application/json",
      ...DEFAULT_HEADERS,
    },
  });
};
