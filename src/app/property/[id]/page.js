// export async function generateStaticParams() {
//   // Call an external API endpoint to get posts
//   const res = await fetch(
//     `https://alsimatower.ae/int_web_api/listings/get_all_listings.php`,
//     {
//       method: "GET",
//     }
//   );
//   const props = await res.json();

import PropertyDetailsPage from "..";

//   return props.map((p) => ({
//     id: p.prop_id,
//   }));
// }

export async function generateMetadata({ params }) {
  const staticData = await fetch(
    `https://indusspeciality.com/api/melanie/home/get_property_details.php`,
    {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify({
        prop_id: params.id,
      }),
    }
  );

  const data = await staticData.json();
  return {
    title: `${data.address}`,
  };
}

async function PropertyPage({ params }) {
  const staticData = await fetch(
    `https://indusspeciality.com/api/melanie/home/get_property_details.php`,
    {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify({
        prop_id: params.id,
      }),
    }
  );

  const data = await staticData.json();

  return <PropertyDetailsPage data={data} />;
}

export default PropertyPage;

export const revalidate = 0
