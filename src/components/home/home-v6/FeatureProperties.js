"use client";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const FeatureProperties = ({ data }) => {
  const currencyFormatter = new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    minimumFractionDigits: 0,
  });
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".featurePro_next__active",
          prevEl: ".featurePro_prev__active",
        }}
        pagination={{
          el: ".featurePro_pagination__active",
          clickable: true,
        }}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        {data.map((property, index) => (
          <SwiperSlide key={index}>
            <div className="item">
              <div className="listing-style11">
                <div className="col-lg-12">
                  <div className="row align-items-center">
                    <div className="list-content mb30-md col-md-8 col-lg-6 col-xl-5 p-xl-0">
                      <h4 className="list-title">
                        <Link
                          className="color-gold fz24 fw400"
                          href={`/property-details?id=${property.prop_id}`}
                        >
                          {property.address}
                        </Link>
                      </h4>
                      <p className="list-text fz13 text-light fw300">
                        {property.cat_name}
                        {/* {" · "}
                        {property.completion_status} */}
                      </p>
                      <div className="list-meta d-block d-sm-flex align-items-center mt10 mb0">
                        <a
                          className="d-flex mb-2 mb-sm-0 align-items-center text-light"
                          href="#"
                        >
                          <span className="flaticon-bed" />
                          {property.beds}
                        </a>
                        <a
                          className="d-flex mb-2 mb-sm-0 align-items-center text-light"
                          href="#"
                        >
                          <span className="flaticon-shower" />
                          {property.baths}
                        </a>
                        <a
                          className="d-flex align-items-center text-light"
                          href="#"
                        >
                          <span className="flaticon-expand" />
                          {new Intl.NumberFormat("en-AE", {
                            maximumSignificantDigits: 3,
                          }).format(property.area)}
                        </a>
                      </div>
                      {/* End list-meta */}

                      <div className="row mb20">
                        <div className="col-auto">
                          <div className="contact-info">
                            <p className="info-title ff-heading mb-0 text-light lh-sm fz13">
                              Customer Care
                            </p>
                            <h6 className="info-phone lh-sm">
                              <a
                                className="text-light fz11 fw300 lh-sm color-white-grey"
                                href="tel:+012305094502"
                              >
                                +(0) 123 050 945 02
                              </a>
                            </h6>
                          </div>
                        </div>
                        {/* End .col-auto */}

                        <div className="col-auto">
                          <div className="contact-info">
                            <p className="info-title ff-heading mb-0 text-light lh-sm fz13">
                              Need Support?
                            </p>
                            <h6 className="info-mail">
                              <a
                                className="text-light fw300 fz11 lh-sm color-white-grey"
                                href="mailto:tristan.blanza@indusre.ae"
                              >
                                tristan.blanza@indusre.ae
                              </a>
                            </h6>
                          </div>
                        </div>
                        {/* End .col-auto */}
                      </div>
                      {/* End .row */}

                      <div className="row align-items-center justify-content-between">
                        <div className="col-auto">
                          <div className="list-meta2">
                            <h4 className="list-price mb-0 text-light fw400">
                              {currencyFormatter.format(property.price)}
                            </h4>
                          </div>
                        </div>
                        {/* End .row */}

                        {/* <div className="col-auto">
                          <div className="list-meta2">
                            <div className="icons d-flex align-items-center">
                              <a href="#">
                                <span className="flaticon-fullscreen" />
                              </a>
                              <a href="#">
                                <span className="flaticon-new-tab" />
                              </a>
                              <a href="#">
                                <span className="flaticon-like" />
                              </a>
                            </div>
                          </div>
                        </div> */}
                        {/* End .col-auto */}
                      </div>
                      {/* End .row */}

                      <div className="list-meta2 d-flex justify-content-between align-items-center"></div>
                    </div>
                    {/* End list-content */}

                    <div className="list-thumb col-lg-6 col-xl-6 offset-xl-1 p-xl-0">
                      <Image
                        width={560}
                        height={610}
                        className="img-1 cover w-100 h-00"
                        src={`https://premium.indusre.com/Admin/pages/forms/uploads/property/${property.image1}`}
                        alt="property image"
                      />
                    </div>
                    {/* End list-thumb */}
                  </div>
                  {/* End .row */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="row align-items-center justify-content-start">
        <div className="col-auto">
          <button className="featurePro_prev__active swiper_button text-light">
            <i className="far fa-arrow-left-long" />
          </button>
        </div>
        {/* End prev */}

        <div className="col-auto">
          <div className="pagination swiper--pagination featurePro_pagination__active" />
        </div>
        {/* End pagination */}

        <div className="col-auto">
          <button className="featurePro_next__active swiper_button text-light">
            <i className="far fa-arrow-right-long" />
          </button>
        </div>
        {/* End Next */}
      </div>

      {/* End .col for navigation and pagination */}
    </>
  );
};

export default FeatureProperties;
