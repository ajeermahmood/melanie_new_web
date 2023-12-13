import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

const FeaturedListings = ({ data, loading }) => {
  const skeleton = [1, 2, 3];
  const currencyFormatter = new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    minimumFractionDigits: 0,
  });

  const router = useRouter();
  return (
    <>
      <Swiper
        spaceBetween={10}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".single-pro-slide-premium-sales-next__active",
          prevEl: ".single-pro-slide-premium-sales-prev__active",
        }}
        speed={2000}
        autoplay={{ delay: 10000 }}
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
                <div
                  className="listing-style8"
                  onClick={() =>
                    router.push(
                      `/property/${listing.prop_id}&prj=${
                        listing.completion_status == "Off Plan" ? "1" : "0"
                      }`
                    )
                  }
                >
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
                          {listing.status == "Sale" ? "SALE" : "RENT"}
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
                    <div className="list-content">
                      <h6 className="list-title lh-lg">
                        <a
                          className="text-light hover-gold fw500"
                          href={`/property/${listing.prop_id}`}
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
                      {/* <p className="list-text lh-base text-light">
                        For {listing.status}
                      </p> */}
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

      <div className="rounded-arrow arrowY-center-position top-minus-15">
        <button className="single-pro-slide-premium-sales-prev__active swiper_button _prev">
          <i className="far fa-chevron-left" />
        </button>
        {/* End prev */}

        <button className="single-pro-slide-premium-sales-next__active swiper_button _next">
          <i className="far fa-chevron-right" />
        </button>
        {/* End Next */}
      </div>
    </>
  );
};

export default FeaturedListings;
