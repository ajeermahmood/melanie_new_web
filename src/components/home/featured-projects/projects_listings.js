import listings from "@/data/listings";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ProjectsListings = () => {
  const investor_deals = [
    {
      title: "Studios",
      image: "/images/investor-deals/investor deal - studios.png",
      link: "/studios",
    },
    {
      title: "1 Beds",
      image: "/images/investor-deals/investor deal - 1 beds.png",
      link: "/1-beds",
    },
    {
      title: "2+ Beds",
      image: "/images/investor-deals/investor deal - 2 beds+.png",
      link: "/2plus-beds",
    },
    {
      title: "Projects",
      image: "/images/investor-deals/schindler-uptown-tower-1.jpg",
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
            <Link className="custom-link" href={listing.link}>
              {listing.title}
            </Link>
          </h6>
        </div>
      ))}
    </>
  );
};

export default ProjectsListings;
