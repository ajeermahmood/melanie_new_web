"use client";

import { getFeaturedPremiumRentals } from "@/api/listings";
import FeatureProperties from "@/components/home/home-v6/FeatureProperties";
import Link from "next/link";
import { useEffect, useState } from "react";

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
          <div className="nav justify-content-between">
            <p className="text-light text-start fz20 mb10">Premium Rentals</p>
            <li
              className="nav-item d-flex align-items-center "
              role="presentation"
            >
              <Link className="custom-link" href={"/premium-rentals"}>
                See All
              </Link>
            </li>
          </div>
          <p className="text-light text-start mb30 mt0">{bodyText}</p>

          <div className="row">
            <FeatureProperties data={data} />
          </div>
        </div>
      </section>
    </>
  ) : (
    <></>
  );
};

export default PremiumRentals;
