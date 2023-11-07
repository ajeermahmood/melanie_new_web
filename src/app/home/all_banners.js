"use client";

import { getAllBannersHome } from "@/api/listings";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const AllBannersHome = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllBannersHome().then((res) => {
      setData(res);
      // console.log(res);
    });
  }, []);
  return (
    <>
      <div className="home2-hero-banner">
        <Swiper
          direction="vertical" // Set the direction to vertical
          spaceBetween={0}
          slidesPerView={1}
          speed={1400} // Set the slide transition speed in milliseconds
          autoplay={{ delay: 3000 }}
          modules={[Navigation]}
          navigation={{
            nextEl: ".hero9-next__active",
            prevEl: ".hero9-prev__active",
          }}
          className="hero_9"
          style={{ height: "70vh" }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="item"
                style={{
                  height: "100%",
                }}
              >
                <Image
                  src={`https://premium.indusre.com/Admin/pages/forms/uploads/property/${item.image1}`}
                  alt="img"
                  className="w-100 h-100 cover"
                  width={1652}
                  height={640}
                />
                <div
                  className="home-banner-slider w-100 h-100 position-absolute"
                  style={{
                    zIndex: 1,
                    top: "0",
                  }}
                ></div>
                <div className="container position-absolute home-banner-inner-content">
                  <div className="row">
                    <div className="col-xl-7">
                      <p className="banner-title text-light fw400 mb10">
                        Featured Property
                      </p>
                      <h2 className="banner-title text-light fz40 fw400 mb0">
                        {item.address}
                      </h2>
                      <p className="text-light">
                        {item.cat_name} <span className="color-gold">|</span>{" "}
                        {item.completion_status}
                      </p>
                      <Link
                        href={`/property-details?id=${item.prop_id}`}
                        className="ud-btn banner-btn fw500 btn-thm mt10 mt0-xs"
                      >
                        VIEW PROPERTY
                      </Link>
                    </div>

                    <div className="col-sm-6 col-xl-4 offset-xl-3"></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default AllBannersHome;
