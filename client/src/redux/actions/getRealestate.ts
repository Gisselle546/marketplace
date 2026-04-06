import customFetchRealEstate from "../../utils/realestate";

export async function getRealestate(params: any, type: string) {
  type === "sale" ? (type = "/for-sale") : (type = "/for-rent");

  const sort = type === "/for-rent" ? "freshness" : "newest";
  const response = await customFetchRealEstate.get(type, {
    params: {
      offset: "0",
      limit: "10",
      state_code: params.state_code,
      city: params.city,
      sort,
      price_min: params?.price_min,
      price_max: params?.price_max,
      beds_min: params?.beds_min,
      beds_max: params?.beds_max,
      baths_min: params?.baths_min,
      baths_max: params?.baths_max,
    },
  });
  return response;
}
