"use client";
import Link from "next/link";

import { useEffect, useState } from "react";

import { getFeaturedProperties } from "@/api/listings";
import ProjectsListings from "./projects_listings";

export default function ProjectsListing() {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    getFeaturedProperties().then((res) => {
      setPageData(res);
      console.log(res);
    });
  }, []);

  const [currentType, setCurrentType] = useState("rent");
  // useEffect(() => {
  //   if (currentType == "rent") {
  //     const filtered = listings.filter((elm) => elm.forRent);
  //     setPageData(filtered);
  //   } else {
  //     const filtered = listings.filter((elm) => !elm.forRent);
  //     setPageData(filtered);
  //   }
  // }, [currentType]);
  return (
    <section className="bg-dark pt30">
      <div className="container pt30 top-border-grey">
        <div className="row">
          <div className="col-lg-8">
            <div className="main-title2 mb30">
              <h2 className="title fw400 text-light fz20 ">
                Investor Deals
              </h2>
            </div>
          </div>
          {/* End .col-lg-9 */}

          {/* <div className="col-lg-4">
            <div className="dark-light-navtab style2 text-start text-lg-end mb20">
              <ul
                className="nav nav-pills justify-content-start justify-content-lg-end"
                id="pills-tab"
                role="tablist"
              >
                <li
                  className="nav-item d-flex align-items-center mx30"
                  role="presentation"
                >
                  <Link className="custom-link" href={"#"}>
                    View More
                  </Link>
                </li>
                <li
                  className="nav-item"
                  role="presentation"
                  onClick={() => setCurrentType("rent")}
                >
                  <button
                    className={`nav-link ${
                      currentType == "rent"
                        ? "sort-btn-active"
                        : "sort-btn-not-active"
                    } `}
                    type="button"
                  >
                    For Rent
                  </button>
                </li>
                <li
                  className="nav-item"
                  role="presentation"
                  onClick={() => setCurrentType("sale")}
                >
                  <button
                    className={`nav-link me-0 ${
                      currentType == "sale"
                        ? "sort-btn-active"
                        : "sort-btn-not-active"
                    } `}
                    type="button"
                  >
                    For Sale
                  </button>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        {/* End .row */}

        <div className="row">
          <ProjectsListings />
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
