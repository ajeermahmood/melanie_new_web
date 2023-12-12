"use client";
import Link from "next/link";

import { useEffect, useState } from "react";

import { getFeaturedProperties } from "@/api/listings";
import FeaturedListings from "./FeatuerdListings";
import PremiumSalesMobile from "@/app/home/premium_sales_mobile";
import Image from "next/image";

export default function PropertyListing() {
  const [pageData, setPageData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getFeaturedProperties()
      .then((res) => {
        setPageData(res);
        // console.log(res);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <section className="bg-dark pt0 pb30">
      <div className="container">
        <div className="col-sm-12 row pt20-mbl pc-hide">
          <div className="col-8">
            <div className="main-title2 mb30">
              <h2 className="title fw400 text-light fz20">Premium Sales</h2>
            </div>
          </div>
          {/* End .col-lg-9 */}

          <div className="col-4">
            <div className="dark-light-navtab style2 text-start text-lg-end mb20 ">
              <ul
                className="nav nav-pills justify-content-end justify-content-lg-end"
                id="pills-tab"
                role="tablist"
              >
                <li
                  className="nav-item d-flex align-items-center "
                  role="presentation"
                >
                  <Link className="custom-link" href={"/premium-sales"}>
                    View More
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-12 row mobile-hide">
          <div className="premium-properties-pc p-0">
            <Image
              className="cover w-100 p-0"
              src="/images/premium-properties/banner-02.jpg"
              alt="img"
              width={1200}
              height={400}
            />
          </div>

          <div className="col-lg-8 mt30">
            <div className="main-title2 mb30">
              <h2 className="title fw500 text-light fz40">
                Premium Properties
              </h2>
            </div>
          </div>
          {/* End .col-lg-9 */}

          <div className="col-lg-4 mt35">
            <div className="dark-light-navtab style2 text-start text-lg-end mb20">
              <ul
                className="nav nav-pills justify-content-start justify-content-lg-end"
                id="pills-tab"
                role="tablist"
              >
                <li
                  className="nav-item d-flex align-items-center "
                  role="presentation"
                >
                  <Link className="custom-link" href={"/premium-sales"}>
                    View More
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End .row */}

        <div className="row mobile-hide mt10">
          <FeaturedListings data={pageData} loading={loading} />
        </div>
        <div className="row pc-hide">
          <PremiumSalesMobile data={pageData} loading={loading} />
        </div>
        {/* End .row */}

        {/* <div className="d-grid d-md-block text-center mt30 mt0-md">
          <Link href="#" className="ud-btn banner-btn fw500 btn-thm mt10 mt0-xs">
            VIEW MORE
          </Link>
        </div> */}
      </div>
    </section>
  );
}
