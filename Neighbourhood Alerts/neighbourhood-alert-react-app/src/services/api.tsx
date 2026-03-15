// src/services/api.js
export const submitForm = async (data: string) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/your-endpoint`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};