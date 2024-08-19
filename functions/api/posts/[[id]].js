export const onRequestPut = async (context) => {
  const {
    request,
    env: { BLOG_INFO },
  } = context;

  // CF way to access the body of the put request
  const { path } = await request.json();

  let currentCount = Number(await BLOG_INFO.get(path));
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

// GET /api/pageViews
export const onRequestGet = async (context) => {
  const {
    request,
    env: { BLOG_INFO },
  } = context;

  const path = new URL(request.url).searchParams.get("path");

  if (!path) {
    return new Response(null, {
      status: 404,
    });
  }

  const encodedPath = encodeURIComponent(path);
  const count = (await BLOG_INFO.get(encodedPath)) ?? 0;

  return new Response(JSON.stringify({ count }), {
    status: 200,
  });
};
