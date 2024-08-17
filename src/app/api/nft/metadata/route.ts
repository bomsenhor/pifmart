export async function POST(request: Request) {
  try {
    const data = await request.json();
    if (!data.uri) {
      return new Response(null, { status: 400 });
    }
    const response = await fetch(data.uri);
    const metadata = await response.json();
    return Response.json(metadata);
  } catch (error) {
    console.error(error);
  }
}
