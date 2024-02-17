export async function onRequestGet(context) {
  const id = context.params.id;

  if (!id) {
    return new Response("Not found", { status: 404 });
  }

  const post = JSON.parse(await context.env.PAGE_VIEW_RECORDS?.get("post:" + id));

  if (!post) {
    const post = await context.env.PAGE_VIEW_RECORDS.put("post:" + id, { views: 1 });
    return Response.json({ id, view: 1 });
  }

  return Response.json({ id, view: post.views });
}
