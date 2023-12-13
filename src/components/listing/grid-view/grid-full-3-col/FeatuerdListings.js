"use client";

import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const FeaturedListings = ({ data, colstyle, loading }) => {
  const skeletonLoader = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const currencyFormatter = new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    minimumFractionDigits: 0,
  });

  const router = useRouter();
  return loading
    ? skeletonLoader.map((listing, index) => (
        <div
          className={` ${
            colstyle ? "col-sm-12 col-lg-6" : "col-sm-6 col-lg-4"
          }  `}
          key={index}
        >
          <div className="listing-style8 bg-light-hover bdrs0-mbl">
            <div className="p15 p0-mbl">
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
                <Skeleton
                  className="mt5"
                  variant="rectangular"
                  width={200}
                  height={15}
                />
                <Skeleton
                  className="mt5"
                  variant="rectangular"
                  width={200}
                  height={15}
                />
                <Skeleton
                  className="mt5"
                  variant="rectangular"
                  width={240}
                  height={15}
                />
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
          <div
            className="listing-style8 bg-light-hover bdrs0-mbl"
            onClick={() =>
              router.push(
                `/property/${listing.prop_id}&prj=${
                  listing.completion_status == "Off Plan" ? "1" : "0"
                }`
              )
            }
          >
            <div className="p15 p0-mbl">
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
                    {listing.prop_id == "9"
                      ? "SOLD"
                      : listing.status == "Sale"
                      ? "FOR SALE"
                      : "FOR RENT"}
                    {/* {listing.status == "Sale" ? "FOR SALE" : "FOR RENT"} */}
                  </div>
                </div>
                <div className="list-meta">
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
                    href={`/property/${listing.prop_id}&prj=${
                      listing.completion_status == "Off Plan" ? "1" : "0"
                    }`}
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
                {/* <p className="list-text lh-base color-black-grey-2">
                  For {listing.status}
                </p> */}
                <p className="list-text text-dark lh-base">
                  {listing.price != "0"
                    ? currencyFormatter.format(listing.price)
                    : "Price On Application"}
                </p>
                <p className="list-text text-dark lh-base">
                  {listing.cat_name} {" · "}{" "}
                  {listing.beds != "0" ? listing.beds + " " + "Beds" : "Studio"}{" "}
                  {" · "}{" "}
                  {new Intl.NumberFormat("en-AE", {
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
