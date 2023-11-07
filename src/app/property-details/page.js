"use client";
import { getPropertyDetails } from "@/api/listings";
import DefaultHeader from "@/components/common/DefaultHeader";
import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/home/home-v8/footer";
import NearbySimilarProperty from "@/components/property/property-single-style/common/NearbySimilarProperty";
import PropertyHeader from "@/components/property/property-single-style/common/PropertyHeader";
import ProperytyDescriptions from "@/components/property/property-single-style/common/ProperytyDescriptions";
import ScheduleForm from "@/components/property/property-single-style/single-v2/ScheduleForm";
import { Box, CircularProgress, Skeleton } from "@mui/material";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import FeaturesPropDetails from "./features";

const PropertyDetailsPage = () => {
  const targetRef = useRef();
  const currencyFormatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "AED",
    minimumFractionDigits: 0,
  });
  const param = useSearchParams();
  const id = param.get("id");

  const [data, setData] = useState("");

  const [mainImageLoading, setMainImageLoading] = useState(true);
  const [firstImageLoading, setFirstImageLoading] = useState(true);
  const [secondImageLoading, setSecondImageLoading] = useState(true);
  const [thirdImageLoading, setThirdImageLoading] = useState(true);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      });
    }
  }, []);

  useEffect(() => {
    getPropertyDetails(id).then((res) => {
      setData(res);
      console.log(res);
    });
  }, []);

  return data == "" ? (
    <Box
      sx={{
        display: "flex",
        height: "60rem",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={60} />
    </Box>
  ) : (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Property All Single V1 */}
      <section className="pt30 pb0 bgc-f7">
        <div className="container">
          <div className="row">
            <PropertyHeader details={data} />
          </div>
        </div>
        {/* End .row */}

        <div className="row mb30 mt5">
          <div
            style={{
              maxHeight: "40rem",
            }}
          >
            {mainImageLoading ? (
              <Skeleton
                variant="rectangular"
                className="w-100 cover"
                width={1652}
                height={640}
              />
            ) : (
              <></>
            )}

            <Image
              width={1652}
              height={640}
              className={`${
                mainImageLoading
                  ? "opacity-0 position-absolute w-100 h-100 cover"
                  : "opacity-100 w-100 h-100 cover position-relative"
              }}`}
              role="button"
              src={`https://premium.indusre.com/Admin/pages/forms/uploads/property/${data.image1}`}
              alt={"img"}
              onLoadingComplete={() => setMainImageLoading(false)}
            />
          </div>
        </div>
        <div className="container">
          {/* End .row */}

          <div className="row wrap">
            <div className="col-lg-8">
              <div className="ps-widget bdrs12 mb30 overflow-hidden position-relative">
                <h4 className="title fz20 fw400 mb5">{data.address}</h4>
                <div className="pd-meta mb0 d-md-flex align-items-center">
                  <p className="fz13 mb-0 fw300 underline-text color-black-grey-2">
                    {data.cat_name}
                  </p>
                  <li className="dot-after"></li>
                  <p className="text fz13 mb-0 bdrrn-sm fw300 underline-text color-black-grey-2">
                    {data.beds} Beds
                  </p>
                  <li className="dot-after"></li>
                  <p className="text fz13 mb-0 bdrrn-sm fw300 color-black-grey-2">
                    {data.baths} Baths
                  </p>
                  <li className="dot-after"></li>
                  <p className="text fz13 mb-0 bdrrn-sm fw300 color-black-grey-2">
                    {new Intl.NumberFormat("en-IN", {
                      maximumSignificantDigits: 3,
                    }).format(data.area)}{" "}
                    sq. ft.
                  </p>
                </div>
                <ProperytyDescriptions desc={data.description} />
              </div>
              <div className="col-lg-12 w-100 row">
                <div className="col-sm-8">
                  <div className="sp-img-content mb15-md">
                    <div className="">
                      {firstImageLoading ? (
                        <Skeleton
                          variant="rectangular"
                          className="w-100 cover"
                          width={500}
                          height={400}
                        />
                      ) : (
                        <></>
                      )}
                      <Image
                        src={`https://premium.indusre.com/Admin/pages/forms/uploads/galary/${data.gallary.g_image1}`}
                        width={500}
                        height={400}
                        alt="image"
                        className={`${
                          firstImageLoading
                            ? "opacity-0 position-absolute w-100 cover"
                            : "opacity-100 w-100 cover position-relative"
                        }}`}
                        onLoadingComplete={() => setFirstImageLoading(false)}
                      />
                    </div>
                  </div>
                </div>
                {/* End .col-6 */}

                <div className="col-sm-4">
                  <div className="row">
                    <div className="col-sm-12 ps-lg-0">
                      <div className="sp-img-content">
                        <div className="mb10 h195">
                          {secondImageLoading ? (
                            <Skeleton
                              variant="rectangular"
                              className="w-100 cover"
                              width={270}
                              height={195}
                            />
                          ) : (
                            <></>
                          )}
                          <Image
                            width={270}
                            height={195}
                            className={`${
                              secondImageLoading
                                ? "opacity-0 position-absolute w-100 cover"
                                : "opacity-100 w-100 cover position-relative"
                            }}`}
                            src={`https://premium.indusre.com/Admin/pages/forms/uploads/galary/${data.gallary.g_image2}`}
                            alt={"img"}
                            onLoadingComplete={() =>
                              setSecondImageLoading(false)
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 ps-lg-0">
                      <div className="sp-img-content">
                        <div className="mb10 h195">
                          {thirdImageLoading ? (
                            <Skeleton
                              variant="rectangular"
                              className="w-100 cover"
                              width={270}
                              height={195}
                            />
                          ) : (
                            <></>
                          )}
                          <Image
                            width={270}
                            height={195}
                            className={`${
                              thirdImageLoading
                                ? "opacity-0 position-absolute w-100 cover"
                                : "opacity-100 w-100 cover position-relative"
                            }}`}
                            role="button"
                            src={`https://premium.indusre.com/Admin/pages/forms/uploads/galary/${data.gallary.g_image3}`}
                            alt={"img"}
                            onLoadingComplete={() =>
                              setThirdImageLoading(false)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="custom-btn-3 w-25 mt20 ml10">
                  Show All Photos
                </button>
              </div>
              <div className="w-100 mt20 top-border-grey-2">
                <p className="title fz20 fw400 mb5 pt10">Features</p>
                <FeaturesPropDetails features={data.features} />
              </div>
              <div className="w-100 mt20 top-border-grey-2">
                <p className="title fz20 fw400 mb15 pt10">Floor Plan</p>
                <button className="custom-btn-3">Request For Floorplan</button>
              </div>
              <div className="w-100 mt20 top-border-grey-2">
                <p className="title fz20 fw400 mb15 pt10">Video Tour</p>
                <button className="custom-btn-3">Request For Video Tour</button>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="column">
                <div className="agen-personal-info position-relative bgc-white default-box-shadow1 bdrs8 p20 mt30">
                  <div className="widget-wrapper mb-0">
                    <h6 className="title fz15 mb10 fw300 color-black-grey">
                      For {data.status} {" · "}
                      {data.completion_status}
                    </h6>
                    <h2 className="title fz22 mb10 fw500 color-black-grey">
                      {currencyFormatter.format(data.price)}
                    </h2>
                    <h6 className="title fz15 mb10 fw300 color-black-grey lh-1 underline-text color-black-grey-2">
                      {data.cat_name}
                    </h6>
                    <h6 className="title fz15 mb10 fw300 color-black-grey lh-1 underline-text color-black-grey-2">
                      {data.unit_type}
                    </h6>
                    <h6 className="title fz15 mb10 fw300 color-black-grey lh-1 underline-text color-black-grey-2">
                      {data.developer}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="column mt25">
                <div className="agen-personal-info position-relative bgc-white default-box-shadow1 bdrs8 p20 mt30">
                  <h6 className="title fz17 mb10 fw300 color-black-grey">
                    Book A Viewing
                  </h6>
                  <ScheduleForm address={data.address} />
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}

          {/* End .row */}
        </div>
        <div className="bg-light-grey">
          <div className="container">
            <div className="row mt50 align-items-center justify-content-between pt20 ">
              <div className="col-auto">
                <div className="main-title mb15">
                  <h2 className="title fz20 fw400 mb15">Similar Properties</h2>
                </div>
              </div>
              {/* End header */}

              <div className="col-auto mb30">
                <div className="row align-items-center justify-content-center">
                  <div className="col-auto">
                    <button className="featured-prev__active swiper_button">
                      <i className="far fa-arrow-left-long" />
                    </button>
                  </div>
                  {/* End prev */}

                  <div className="col-auto">
                    <div className="pagination swiper--pagination-2 featured-pagination__active" />
                  </div>
                  {/* End pagination */}

                  <div className="col-auto">
                    <button className="featured-next__active swiper_button">
                      <i className="far fa-arrow-right-long" />
                    </button>
                  </div>
                  {/* End Next */}
                </div>
                {/* End .col for navigation and pagination */}
              </div>
              {/* End .col for navigation and pagination */}
            </div>
            {/* End .row */}

            <div className="row pb30">
              <div className="col-lg-12">
                <div className="property-city-slider">
                  <NearbySimilarProperty data={data.similar} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* End .container */}
      </section>
      {/* End Property All Single V1  */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default PropertyDetailsPage;
