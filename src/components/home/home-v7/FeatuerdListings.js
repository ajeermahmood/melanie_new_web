import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const FeaturedListings = ({ data, loading }) => {
  const skeleton = [1, 2, 3, 4, 5, 6];
  const currencyFormatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "AED",
    minimumFractionDigits: 0,
  });
  return loading
    ? skeleton.map((listing, index) => (
        <div className="col-sm-6 col-lg-4" key={index}>
          <div className="listing-style8">
            <div className="list-thumb">
              <Skeleton
                // className="w-100 h-100"
                variant="rectangular"
                className="w-100 cover bg-grey"
                width={382}
                height={248}
              />
            </div>
            <div className="list-content">
              <h6 className="list-title lh-lg mb10">
                <Skeleton
                  // className="w-100 h-100"
                  variant="rectangular"
                  className=" cover bg-grey"
                  width={180}
                  height={20}
                />
              </h6>
              <Skeleton
                // className="w-100 h-100"
                variant="rectangular"
                className=" cover bg-grey mb10"
                width={150}
                height={15}
              />
              <Skeleton
                // className="w-100 h-100"
                variant="rectangular"
                className=" cover bg-grey mb10"
                width={150}
                height={15}
              />
              <Skeleton
                // className="w-100 h-100"
                variant="rectangular"
                className=" cover bg-grey"
                width={250}
                height={15}
              />
            </div>
          </div>
        </div>
      ))
    : data.map((listing) => (
        <div className="col-sm-6 col-lg-4" key={listing.prop_id}>
          <div className="listing-style8">
            <div className="list-thumb">
              <Image
                width={382}
                height={248}
                // style={{
                //   height: "15rem !Important",
                // }}
                className="w-100 cover"
                src={`https://premium.indusre.com/Admin/pages/forms/uploads/property/${listing.image1}`}
                alt="listings"
              />
              <div className="sale-sticker-wrap">
                <div className="list-tag2 rounded-0 fz12">FOR SALE</div>
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
            <div className="list-content">
              <h6 className="list-title lh-lg">
                <Link
                  className="text-light hover-gold"
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
              <p className="list-text text-light lh-base">
                For {listing.status}
                {" · "}
                {listing.completion_status}
              </p>
              <p className="list-text text-light lh-base">
                {currencyFormatter.format(listing.price)}
              </p>
              <p className="list-text text-light lh-base">
                {listing.cat_name} {" · "} {listing.beds} Beds {" · "}{" "}
                {new Intl.NumberFormat("en-IN", {
                  maximumSignificantDigits: 3,
                }).format(listing.area)}{" "}
                sq. ft.
              </p>
            </div>
          </div>
        </div>
      ));
};

export default FeaturedListings;
