import customFetchRealEstate from "../../utils/realestate";

export async function getDetails(params: any) {
  const response = await customFetchRealEstate.get("/property-detail", {
    params: { property_id: params },
  });
  return response;
}
