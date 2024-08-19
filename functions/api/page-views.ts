const DEFAULT_HEADERS = {
  "Access-Control-Allow-Origin": "https://fneira.dev",
  "Access-Control-Allow-Methods": "GET",
  "Access-Control-Max-Age": "86400",
};

function response({ data, status = 200, headers = {}, isRaw = false }) {
  return new Response(isRaw ? data : JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      ...DEFAULT_HEADERS,
      ...headers,
    },
    status,
  });
}

export const onRequestGet = async (context) => {
  const { request, env } = context;
  const encodedPath = new URL(request.url).searchParams.get("path");

  if (!encodedPath) {
    return response({
      data: {
        error: "Path not provided",
      },
      status: 400,
    });
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
    return response({
      data: html,
      isRaw: true,
      headers: {
        "Content-Type": "text/html;charset=utf-8",
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

  const data = await env.PAGE_DATA.get(path);

  if (data === null) {
    await env.PAGE_DATA.put(path, {
      views: 1,
      lastView: new Date(Date.now()),
    });
  } else {
    await env.PAGE_DATA.put(path, {
      views: Number(data.views) + 1,
      lastView: new Date(Date.now()),
    });
  }

  return response({
    data: { path, views: data ?? 1 },
  });
};
