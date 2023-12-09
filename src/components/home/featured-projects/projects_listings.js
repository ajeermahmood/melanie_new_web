import listings from "@/data/listings";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ProjectsListings = () => {
  const investor_deals = [
    {
      title: "Studios",
      image:
        "https://premium.indusre.com/Admin/pages/forms/uploads/property/29_1771030087152406_main.webp",
      link: "/studios",
    },
    {
      title: "1 Beds",
      image:
        "https://premium.indusre.com/Admin/pages/forms/uploads/property/12_1770842749813807_main.webp",
      link: "/1-beds",
    },
    {
      title: "2+ Beds",
      image:
        "https://premium.indusre.com/Admin/pages/forms/uploads/property/34_1771215218439336_main_.webp",
      link: "/2plus-beds",
    },
    {
      title: "Projects",
      image:
        "https://premium.indusre.com/Admin/pages/forms/uploads/property/32_1771128471555195_main_.webp",
      link: "/projects",
    },
  ];

  const router = useRouter();
  return (
    <>
      {investor_deals.map((listing, index) => (
        <div className="col-sm-6 col-lg-3" key={index}>
          <div
            className="listing-style9 bdrs0 maxh25rem"
            onClick={() => router.push(listing.link)}
          >
            <div className="list-thumb">
              <Image
                width={382}
                height={465}
                className="w-100 cover "
                src={listing.image}
                alt="listings"
              />
            </div>

            {/* <div className="list-content">
              <h6 className="list-title my-1 text-light">
                <Link href={listing.link}>{listing.title}</Link>
              </h6>
            </div> */}
          </div>
          <h6 className="list-title my-1">
            <Link className="custom-link" href={listing.link}>{listing.title}</Link>
          </h6>
        </div>
      ))}
    </>
  );
};

export default ProjectsListings;
