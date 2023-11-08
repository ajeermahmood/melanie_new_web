import listings from "@/data/listings";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const InvestorDealsMobile = () => {
  const investor_deals = [
    {
      title: "Studios",
      image:
        "https://premium.indusre.com/Admin/pages/forms/uploads/property/29_1771030087152406_main.webp",
      link: "/studios",
    },
    {
      title: "1 Beds",
      image:
        "https://premium.indusre.com/Admin/pages/forms/uploads/property/12_1770842749813807_main.webp",
      link: "/1-beds",
    },
    {
      title: "2+ Beds",
      image:
        "https://premium.indusre.com/Admin/pages/forms/uploads/property/34_1771215218439336_main_.webp",
      link: "/2plus-beds",
    },
    {
      title: "Projects",
      image:
        "https://premium.indusre.com/Admin/pages/forms/uploads/property/32_1771128471555195_main_.webp",
      link: "/projects",
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={10}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".featured-deals-next__active",
          prevEl: ".featured-deals-prev__active",
        }}
        pagination={{
          el: ".featured-deals-pagination__active",
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
        {investor_deals.map((listing, index) => (
          <SwiperSlide key={index}>
            <div className="col-sm-6 col-lg-3">
              <div
                className="listing-style9 bdrs0"
                style={{
                  maxHeight: "25rem !important",
                }}
              >
                <div className="list-thumb overlay-from-bottom">
                  <Image
                    width={382}
                    height={465}
                    className="w-100 cover "
                    src={listing.image}
                    alt="listings"
                  />
                </div>

                <div className="list-content">
                  <h6 className="list-title my-1 text-light">
                    <Link href={listing.link}>{listing.title}</Link>
                  </h6>
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
          <div className="pagination swiper--pagination featured-deals-pagination__active" />
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

export default InvestorDealsMobile;
