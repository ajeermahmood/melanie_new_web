"use client";

import { getFeaturedPremiumRentals } from "@/api/listings";
import FeatureProperties from "@/components/home/home-v6/FeatureProperties";
import Link from "next/link";
import { useEffect, useState } from "react";
import PremiumRentalsMobile from "./premium_rentals_mobile";

const PremiumRentals = () => {
  const [data, setData] = useState("");
  const [bodyText, setBodyText] = useState("");
  var body_text_div =
    typeof document !== "undefined" && document.createElement("div");
  useEffect(() => {
    getFeaturedPremiumRentals().then((res) => {
      setData(res.prop);
      body_text_div.innerHTML = res.info.body_text;
      setBodyText(body_text_div.innerText);
    });
  }, []);
  return data != "" ? (
    <>
      <section className="bg-dark pt30 pb50">
        <div className="container pt30 top-border-grey">
          <div className="nav justify-content-between pt20-mbl">
            <p className="text-light text-start fz20 mb0">Premium Rentals</p>
            <li
              className="nav-item d-flex align-items-center "
              role="presentation"
            >
              <Link className="custom-link" href={"/premium-rentals"}>
                See All
              </Link>
            </li>
          </div>
          <p className="text-light text-start mb30 mt10">{bodyText}</p>

          <div className="row mobile-hide">
            <FeatureProperties data={data} />
          </div>
          <div className="row pc-hide">
            <PremiumRentalsMobile data={data} />
          </div>
        </div>
      </section>
    </>
  ) : (
    <></>
  );
};

export default PremiumRentals;
