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
