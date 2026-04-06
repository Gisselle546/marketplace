import { getStorageValue } from "@/redux/hooks/useSessionStorage";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1";

async function customFetch(endpoint: string, options: RequestInit = {}) {
  const token = getStorageValue("token");
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error: any = new Error("Request failed");
    const contentType = response.headers.get("content-type") || "";
    try {
      if (contentType.includes("application/json")) {
        error.response = { data: await response.json() };
      } else {
        const text = await response.text();
        error.response = { data: text || response.statusText };
      }
    } catch {
      error.response = { data: response.statusText };
    }
    throw error;
  }

  const data = await response.json();
  console.log('[customFetch] response for', endpoint, ':', data);
  return { data };
}

customFetch.get = (endpoint: string) => customFetch(endpoint);

customFetch.post = (endpoint: string, body: any) =>
  customFetch(endpoint, {
    method: "POST",
    body: JSON.stringify(body),
  });

export default customFetch;
