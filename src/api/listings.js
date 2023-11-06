import axios from "axios";

export async function getAllBannersHome() {
  const response = await axios.get(
    "https://indusspeciality.com/api/melanie/home/get_home_banners.php"
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
