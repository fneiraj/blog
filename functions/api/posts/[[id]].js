export function onRequestGet(context) {
  const id = context.params.id;

  if (!id) {
    return new Response("Not found", { status: 404 });
  }

  return Response.json({
    views: Random.integer(0, 100),
  });
}
