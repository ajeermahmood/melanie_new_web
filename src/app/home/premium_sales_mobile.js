"use client";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const PremiumSalesMobile = ({ data, loading }) => {
  const skeleton = [1, 2, 3, 4, 5, 6, 7];
  const currencyFormatter = new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    minimumFractionDigits: 0,
  });
  return (
    <>
      <Swiper
        spaceBetween={10}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".featured-next__active",
          prevEl: ".featured-prev__active",
        }}
        pagination={{
          el: ".featured-pagination__active",
          clickable: true,
        }}
        slidesPerView={1}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {loading
          ? skeleton.map((listing, index) => (
              <SwiperSlide key={index}>
                <div className="listing-style8">
                  <div className="p10">
                    <div className="list-thumb">
                      <Skeleton
                        // className="w-100 h-100"
                        variant="rectangular"
                        className="w-100 cover bg-grey"
                        width={382}
                        height={248}
                      />
                    </div>
                    <div className="list-content pl0">
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
              </SwiperSlide>
            ))
          : data.map((listing) => (
              <SwiperSlide key={listing.id}>
                <div className="listing-style8">
                  <div className="p10">
                    <div className="list-thumb">
                      <Image
                        width={382}
                        height={248}
                        className="w-100 cover"
                        src={`https://premium.indusre.com/Admin/pages/forms/uploads/property/${listing.image1}`}
                        alt="listings"
                      />
                      <div className="sale-sticker-wrap">
                        <div className="list-tag2 rounded-0 fz12 bg-light color-dark">
                          {listing.status == "Sale" ? "FOR SALE" : "FOR RENT"}
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
                    <div className="list-content bg-dark pl0">
                      <h6 className="list-title lh-lg">
                        <a
                          className="text-light hover-gold fw500"
                          href={`/property-details?id=${listing.prop_id}`}
                          style={{
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            display: "block",
                          }}
                        >
                          {listing.address}
                        </a>
                      </h6>
                      <p className="list-text lh-base text-light">
                        For {listing.status}
                        {/* {" · "}
                      {listing.completion_status} */}
                      </p>
                      <p className="list-text text-light lh-base">
                        {listing.price != "0"
                          ? currencyFormatter.format(listing.price)
                          : "Price On Application"}
                      </p>
                      <p className="list-text text-light lh-base">
                        {listing.cat_name} {" · "}{" "}
                        {listing.beds != "0"
                          ? listing.beds + " " + "Beds"
                          : "Studio"}{" "}
                        {" · "}{" "}
                        {new Intl.NumberFormat("en-AE", {
                          maximumSignificantDigits: 3,
                        }).format(listing.area)}{" "}
                        sq. ft.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
      <div className="row align-items-center justify-content-start">
        {/* <div className="col-auto">
          <button className="featured-prev__active swiper_button text-light">
            <i className="far fa-arrow-left-long" />
          </button>
        </div> */}
        {/* End prev */}

        <div className="col-auto">
          <div className="pagination swiper--pagination featured-pagination__active" />
        </div>
        {/* End pagination */}

        {/* <div className="col-auto">
          <button className="featured-next__active swiper_button text-light">
            <i className="far fa-arrow-right-long" />
          </button>
        </div> */}
        {/* End Next */}
      </div>
    </>
  );
};

export default PremiumSalesMobile;
