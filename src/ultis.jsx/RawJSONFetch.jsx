export async function RawJSONFetch(header) {
  try {
    const response = await fetch(header.url, header.options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}
