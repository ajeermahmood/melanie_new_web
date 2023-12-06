"use client";

import Link from "next/link";
import ProjectsListings from "./projects_listings";
import { getInvestorDealsData } from "@/api/listings";
import { useEffect, useState } from "react";
import InvestorDealsMobile from "@/app/home/investor_deals_mobile";

export default function ProjectsListing() {
  const [data, setData] = useState([]);
  const [bodyText, setBodyText] = useState("");
  const [headerText, setHeaderText] = useState("");

  var body_text_div =
    typeof document !== "undefined" && document.createElement("div");
  var header_text_div =
    typeof document !== "undefined" && document.createElement("div");

  useEffect(() => {
    getInvestorDealsData().then((res) => {
      setData(res);
      body_text_div.innerHTML = res.body;
      header_text_div.innerHTML = res.header;
      setBodyText(body_text_div.innerText);
      setHeaderText(header_text_div.innerText);
    });
  }, []);
  return (
    <section className="bg-dark pt30 pb0">
      <div className="container pt30 top-border-grey">
        <div className="nav justify-content-between align-items-center pt20-mbl">
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
        <p className="text-light text-start mb30 mt10">
          {headerText}{bodyText}
        </p>

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
