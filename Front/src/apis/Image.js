const API_IMAGE = "http://localhost:8000/api/image";

export async function getImage(filename) {
  const response = await fetch(`${API_IMAGE}/${filename}`);
  return await response;
}
