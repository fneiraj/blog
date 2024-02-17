export async function onRequestGet(context) {
  const id = context.params.id;

  if (!id) {
    return new Response("Not found", { status: 404 });
  }

  console.log(context)
  console.log('------')
  console.log(context.env)

  const post = await context.env.PAGE_VIEW_RECORDS?.get("post:" + id);

  if (!post) {
    await context.env.PAGE_VIEW_RECORDS.put("post:" + id, { views: 1 });
    return Response.json({ id, view: 1 });
  }

  return Response.json({ id, view: post.views });
}
