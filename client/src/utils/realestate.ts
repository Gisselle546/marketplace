const BASE_URL = process.env.NEXT_PUBLIC_REAL_ESTATE || "";

async function customFetchRealEstate(
  endpoint: string,
  options: { params?: Record<string, any> } = {},
) {
  const headers: Record<string, string> = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPIKEY || "",
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPIHOST || "",
  };

  const base = BASE_URL.replace(/\/+$/, "");
  const url = new URL(`${base}${endpoint}`);
  if (options.params) {
    Object.entries(options.params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, String(value));
      }
    });
  }

  const response = await fetch(url.toString(), { headers });

  if (!response.ok) {
    const error: any = new Error("Request failed");
    try {
      error.response = { data: await response.json() };
    } catch {
      error.response = { data: response.statusText };
    }
    throw error;
  }

  const data = await response.json();
  return { data };
}

customFetchRealEstate.get = (
  endpoint: string,
  options: { params?: Record<string, any> } = {},
) => customFetchRealEstate(endpoint, options);

export default customFetchRealEstate;
