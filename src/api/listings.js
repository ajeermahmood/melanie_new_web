import axios from "axios";

export async function getAllBannersHome() {
  const response = await axios.get(
    "https://indusspeciality.com/api/melanie/home/get_home_banners.php"
  );
  return response.data;
}
export async function getAllAgents() {
  const response = await axios.get(
    "https://indusspeciality.com/api/melanie/home/get_all_agents.php"
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

export async function getAllListingsSale(limit, pageNumber, filter) {
  try {
    const response = await axios.post(
      "https://indusspeciality.com/api/melanie/home/get_all_listings_sale.php",
      {
        limit: limit,
        pageNumber: pageNumber,
        filter: filter,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching listings:", error);
    throw error; // Rethrow the error to handle it outside this function
  }
}

export async function getAllListingsRent(limit, pageNumber, filter) {
  const response = await axios.post(
    "https://indusspeciality.com/api/melanie/home/get_all_listings_rent.php",
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

export async function getPremiumRentalsTopText() {
  const response = await axios.get(
    "https://indusspeciality.com/api/melanie/home/get_premium_rentals_top_text.php"
  );
  return response.data;
}

export async function getInvestorDealsTopText() {
  const response = await axios.get(
    "https://indusspeciality.com/api/melanie/home/get_investor_deals_top_text.php"
  );
  return response.data;
}
