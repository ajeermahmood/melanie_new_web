"use client";

import { getAllBannersHome } from "@/api/listings";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const AllBannersHome = () => {
  const currencyFormatter = new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    minimumFractionDigits: 0,
  });
  const [data, setData] = useState([]);
  const size = useWindowSize();

  useEffect(() => {
    getAllBannersHome().then((res) => {
      setData(res);
      console.log(res);
    });
  }, []);

  return (
    <>
      <div className="home2-hero-banner">
        <Swiper
          direction="vertical" // Set the direction to vertical
          spaceBetween={0}
          slidesPerView={1}
          speed={2500}
          autoplay={{ delay: 6000 }}
          modules={[Navigation]}
          navigation={{
            nextEl: ".hero9-next__active",
            prevEl: ".hero9-prev__active",
          }}
          className="hero_9"
          style={{ height: `${size.width > 500 ? "40rem" : "25rem"}` }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="item overflow-hidden"
                style={{
                  height: "100%",
                }}
              >
                <Image
                  src={`https://premium.indusre.com/Admin/pages/forms/uploads/property/${item.image1}`}
                  alt="img"
                  className="w-100 h-100 cover zoom-efct"
                  width={size.width > 500 ? 1652 : 390}
                  height={size.width > 500 ? 640 : 432}
                />
                <div
                  className="home-banner-slider w-100 h-100 position-absolute"
                  style={{
                    zIndex: 1,
                    top: "0",
                  }}
                ></div>
                <div className="position-absolute home-banner-inner-content mobile-hide">
                  <div className="home-inner-banner-box">
                    <p className="banner-title text-light fw400 mb0">
                      {item.cat_name} <span className="color-gold">|</span>{" "}
                      {item.status}
                    </p>
                    <p className="banner-title text-light fw400 mb0 lh-1">
                      {currencyFormatter.format(item.price)}
                    </p>
                    <p className="banner-title text-light fz20 fw500 mb0 lh-base">
                      {item.address}
                    </p>
                    <p className="banner-title text-light fw400 mb0">
                      {item.beds} Beds <span className="color-gold">|</span>{" "}
                      {new Intl.NumberFormat("en-AE", {
                        maximumSignificantDigits: 3,
                      }).format(item.area)}{" "}
                      sq. ft.
                    </p>
                    <Link
                      href={`/property/${item.prop_id}`}
                      className="ud-btn banner-btn fw500 btn-thm mt10 mt0-xs inner-banner-btn"
                    >
                      View Property
                    </Link>
                  </div>
                </div>
                <div className="position-absolute home-banner-inner-content pc-hide">
                  <div className="home-inner-banner-box">
                    <p className="banner-title text-light fw400 mb0 fz13">
                      {item.cat_name} <span className="color-gold">|</span>{" "}
                      {item.status}
                    </p>
                    <p className="banner-title text-light fw400 mb0 lh-base fz13">
                      {currencyFormatter.format(item.price)}
                    </p>
                    <p className="banner-title text-light fz15 fw500 mb0 lh-base">
                      {item.address}
                    </p>
                    <p className="banner-title text-light fw400 mb5 fz13">
                      {item.beds} Beds <span className="color-gold">|</span>{" "}
                      {new Intl.NumberFormat("en-AE", {
                        maximumSignificantDigits: 3,
                      }).format(item.area)}{" "}
                      sq. ft.
                    </p>
                    <Link
                      href={`/property/${item.prop_id}`}
                      className="ud-btn banner-btn fw500 btn-thm mt10 mt0-xs inner-banner-btn"
                    >
                      View Property
                    </Link>
                  </div>
                </div>
                {/* <div className="container position-absolute home-banner-inner-content">
                  <div className="row">
                    <div className="col-xl-7">
                      <p className="banner-title text-light fw400 mb10">
                        Featured Property
                      </p>
                      <h2 className="banner-title text-light fz40 fw400 mb0 fz35-mbl">
                        {item.address}
                      </h2>
                      <p className="text-light">
                        {item.prop_id == "2"
                          ? "Waterfront Villa"
                          : item.prop_id == "39"
                          ? "Premium Penthouse"
                          : item.cat_name}{" "}
                        <span className="color-gold">|</span>{" "}
                        {item.prop_id == "2"
                          ? "Impeccably Upgraded"
                          : item.prop_id == "39"
                          ? "Indoor Pool"
                          : item.completion_status}
                      </p>
                      <Link
                        href={`/property/${item.prop_id}`}
                        className="ud-btn banner-btn fw400 btn-thm mt10 mt0-xs btn-text-mbl"
                      >
                        View Property
                      </Link>
                    </div>

                    <div className="col-sm-6 col-xl-4 offset-xl-3"></div>
                  </div>
                </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default AllBannersHome;
