export async function onRequestGet(context) {
  const id = context.params.id;

  if (!id) {
    return new Response("Not found", { status: 404 });
  }

  console.log(context)
  console.log('------')
  console.log(context.env)

  const rawPost = await context.env.PAGE_VIEW_RECORDS?.get("post:" + id);

  if (!rawPost) {
    await context.env.PAGE_VIEW_RECORDS.put("post:" + id, JSON.stringify({ views: 1 }));
    return Response.json({ id, view: 1 });
  }

  const { views: currentViews } = JSON.parse(rawPost);

  await context.env.PAGE_VIEW_RECORDS.put("post:" + id, JSON.stringify({ views: currentViews + 1 }));

  return Response.json({ id, view: currentViews + 1 });
}
