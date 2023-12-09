"use client";

import InvestorDealsMobile from "@/app/home/investor_deals_mobile";
import Link from "next/link";
import ProjectsListings from "./projects_listings";

export default function ProjectsListing() {
  return (
    <section className="bg-dark pt30 pb0">
      <div className="container pt30 top-border-grey">
        <div className="nav justify-content-between align-items-center pt20-mbl mb20">
          <p className="text-light text-start fz20 mb0">Investor Deals</p>
          <li
            className="nav-item d-flex align-items-center "
            role="presentation"
          >
            <Link className="custom-link" href={"/see-all"}>
              See All
            </Link>
          </li>
        </div>
        {/* <p className="text-light text-start mb30 mt10">
          {headerText}{bodyText}
        </p> */}

        <div className="row mobile-hide">
          <ProjectsListings />
        </div>
        <div className="row m-0 pc-hide">
          <InvestorDealsMobile />
        </div>
      </div>
    </section>
  );
}
