import axios from "axios";

export async function getAllBannersHome() {
  const response = await axios.get(
    "https://indusspeciality.com/api/melanie/home/get_home_banners.php"
  );
  return response.data;
}

export async function getAllPropertyCategories() {
  const response = await axios.get(
    "https://indusspeciality.com/api/melanie/home/get_all_property_types.php"
  );
  return response.data;
}

export async function getInFocusData() {
  const response = await axios.get(
    "https://indusspeciality.com/api/melanie/home/get_in_focus.php"
  );
  return response.data;
}

export async function getInvestorDealsData() {
  const response = await axios.get(
    "https://indusspeciality.com/api/melanie/home/get_investor_deals_data.php"
  );
  return response.data;
}

export async function getFeaturedProperties() {
  const response = await axios.get(
    "https://indusspeciality.com/api/melanie/home/get_featured_properties.php"
  );
  return response.data;
}

export async function getFeaturedPremiumRentals() {
  const response = await axios.get(
    "https://indusspeciality.com/api/melanie/home/get_featured_premium_rentals.php"
  );
  return response.data;
}

export async function getPropertyDetails(id) {
  const response = await axios.post(
    "https://indusspeciality.com/api/melanie/home/get_property_details.php",
    {
      prop_id: id,
    }
  );
  return response.data;
}

export async function getAllListings(limit, pageNumber, filter) {
  const response = await axios.post(
    "https://indusspeciality.com/api/melanie/home/get_all_listings.php",
    {
      limit: limit,
      pageNumber: pageNumber,
      filter: filter,
    }
  );
  return response.data;
}

export async function getAllDeals(limit, pageNumber, filter) {
  const response = await axios.post(
    "https://indusspeciality.com/api/melanie/home/get_all_deals.php",
    {
      limit: limit,
      pageNumber: pageNumber,
      filter: filter,
    }
  );
  return response.data;
}
