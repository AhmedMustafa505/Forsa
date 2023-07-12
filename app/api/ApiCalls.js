import axios from "axios";

export const fetchSectors = async () => {
  try {
    const response = await axios.get(
      "https://forsa-staging.bit68.com/api/v1/stores/get_sectors/"
    );
    const sectorsData = response.data.results.map((sector) => ({
      value: sector.value,
      label: sector.label,
    }));
    return sectorsData;
  } catch (error) {
    console.error("Error fetching sectors:", error);
  }
};

export const fetchBrands = async (value) => {
  try {
    const response = await axios.get(
      `https://forsa-staging.bit68.com/api/v1/stores/get_brands?sector=${
        value || ""
      }`
    );
    const brandsData = response.data.results;
    return brandsData;
  } catch (error) {
    console.error("Error fetching brands:", error);
  }
};

export const fetchOffers = async () => {
  try {
    const response = await axios.get(
      "https://forsa-staging.bit68.com/api/v1/stores/get_offers/"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching offers:", error);
  }
};
