export async function RawJSONFetch(url) {
  try {
    const response = await fetch(url).then((r) => r.text());
    return response;
  } catch (error) {
    console.error(error);
  }
}
