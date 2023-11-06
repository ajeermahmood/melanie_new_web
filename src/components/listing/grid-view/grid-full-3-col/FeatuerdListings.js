"use client";

import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const FeaturedListings = ({ data, colstyle, loading }) => {
  const skeletonLoader = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const currencyFormatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "AED",
    minimumFractionDigits: 0,
  });
  return loading
    ? skeletonLoader.map((listing, index) => (
        <div
          className={` ${
            colstyle ? "col-sm-12 col-lg-6" : "col-sm-6 col-lg-4"
          }  `}
          key={index}
        >
          <div className="listing-style8 bg-light-hover">
            <div className="p15">
              <div className="list-thumb">
                <Skeleton
                  // className="w-100 h-100"
                  variant="rectangular"
                  className="w-100 cover"
                  width={382}
                  height={248}
                />
              </div>
              <div className="list-content bg-white01 pl0">
                <h6 className="list-title lh-lg">
                  <Skeleton variant="rectangular" width={230} height={20} />
                </h6>
                <Skeleton className="mt5" variant="rectangular" width={200} height={15} />
                <Skeleton className="mt5" variant="rectangular" width={200} height={15} />
                <Skeleton className="mt5" variant="rectangular" width={240} height={15} />
              </div>
            </div>
          </div>
        </div>
      ))
    : data.map((listing) => (
        <div
          className={` ${
            colstyle ? "col-sm-12 col-lg-6" : "col-sm-6 col-lg-4"
          }  `}
          key={listing.id}
        >
          <div className="listing-style8 bg-light-hover">
            <div className="p15">
              <div className="list-thumb">
                <Image
                  width={382}
                  height={248}
                  className="w-100 cover"
                  src={`https://premium.indusre.com/Admin/pages/forms/uploads/property/${listing.image1}`}
                  alt="listings"
                />
                <div className="sale-sticker-wrap">
                  <div className="list-tag2 rounded-0 fz12 bg-light color-dark fw400">
                    FOR SALE
                  </div>
                </div>
                <div className="list-meta">
                  <a className="rounded-0 mr5" href="#">
                    <span className="flaticon-like"></span>
                  </a>
                  <a className="rounded-0 mr5" href="#">
                    <span className="flaticon-new-tab"></span>
                  </a>
                  <a className="rounded-0" href="#">
                    <span className="flaticon-fullscreen"></span>
                  </a>
                </div>
              </div>
              <div className="list-content bg-white01 pl0">
                <h6 className="list-title lh-lg">
                  <Link
                    className="text-dark hover-gold fw500"
                    href={`/property-details?id=${listing.prop_id}`}
                    style={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      display: "block",
                    }}
                  >
                    {listing.address}
                  </Link>
                </h6>
                <p className="list-text lh-base color-black-grey-2">
                  For {listing.status}
                  {" · "}
                  {listing.completion_status}
                </p>
                <p className="list-text text-dark lh-base">
                  {currencyFormatter.format(listing.price)}
                </p>
                <p className="list-text text-dark lh-base">
                  {listing.cat_name} {" · "} {listing.beds} Beds {" · "}{" "}
                  {new Intl.NumberFormat("en-IN", {
                    maximumSignificantDigits: 3,
                  }).format(listing.area)}{" "}
                  sq. ft.
                </p>
              </div>
            </div>
          </div>
        </div>
      ));
};

export default FeaturedListings;
