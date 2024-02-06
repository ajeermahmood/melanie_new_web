"use client";
import DefaultHeader from "@/components/common/DefaultHeader";
import CommonFormDialog from "@/components/common/common-form-dialog";
import Footer from "@/components/home/home-v8/footer";
import NearbySimilarProperty from "@/components/property/property-single-style/common/NearbySimilarProperty";
import PropertyHeader from "@/components/property/property-single-style/common/PropertyHeader";
import ProperytyDescriptions from "@/components/property/property-single-style/common/ProperytyDescriptions";
import ScheduleForm from "@/components/property/property-single-style/single-v2/ScheduleForm";
import {
  AppBar,
  Dialog,
  IconButton,
  Skeleton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import BottomNavDetailsPage from "./bottom_componenet_details_page";
import FeaturesPropDetails from "./features";
import MobileHeaderDetailsPage from "./mobile_header_details_page";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 1024,
    height: 900,
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

const PropertyDetailsPage = ({ data }) => {
  const currencyFormatter = new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    minimumFractionDigits: 0,
  });

  const [allPhotos, setAllPhotos] = useState([]);
  const [allPhotosLoaded, setAllPhotosLoaded] = useState(false);

  const [mainImageLoading, setMainImageLoading] = useState(true);
  const [firstImageLoading, setFirstImageLoading] = useState(true);
  const [secondImageLoading, setSecondImageLoading] = useState(true);
  const [thirdImageLoading, setThirdImageLoading] = useState(true);

  const size = useWindowSize();

  const [openShowAllPhotosDialog, setOpenShowAllPhotosDialog] = useState(false);

  const handleClickOpenShowAllPhotosDialog = () => {
    setOpenShowAllPhotosDialog(true);
  };

  const handleCloseShowAllPhotosDialog = () => {
    setOpenShowAllPhotosDialog(false);
  };

  useEffect(() => {
    setAllPhotos(JSON.parse(data.gallary.imgs).imgs);
  }, []);

  const ref = useRef(null);

  const commonDialog = useRef();

  const openCommonDialog = (text) => {
    commonDialog.current?.handleOpen(text);
  };

  return (
    <>
      <CommonFormDialog ref={commonDialog} />
      {/* <Head>
        {allPhotos.map((ph, index) => (
          <link
            key={index}
            rel="preload"
            href={`https://premium.indusre.com/Admin/pages/forms/uploads/galary/${ph}`}
            as="image"
          />
        ))}
      </Head> */}
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <div className="pc-hide w-100">
        <MobileHeaderDetailsPage data={data} />
      </div>
      {/* End Mobile Nav  */}

      {/* Property All Single V1 */}
      <section className="pt0 pb0 bgc-f7 p0-mbl">
        <div className="container mobile-hide">
          <div className="row">
            <PropertyHeader details={data} />
          </div>
        </div>
        {/* End .row */}

        <div className="row m0-mbl mb30 mt5 mt0-mbl">
          <div
            className="p0-mbl"
            style={{
              maxHeight: "40rem",
            }}
          >
            {mainImageLoading ? (
              <Skeleton
                variant="rectangular"
                className="w-100 cover"
                width={
                  size != undefined && size.width > 500 ? 1652 : size.width
                }
                height={size.width != undefined && size.width > 500 ? 640 : 300}
              />
            ) : (
              <></>
            )}

            <button
              className="details-page-show-all-img-btn pc-hide"
              onClick={handleClickOpenShowAllPhotosDialog}
            >
              Show All Photos
            </button>

            <Image
              width={
                size.width != undefined && size.width > 500 ? 425 : size.width
              }
              height={350}
              className={`pc-hide ${
                mainImageLoading
                  ? "opacity-0 position-absolute w-100 cover"
                  : "opacity-100 w-100 cover position-relative"
              }}`}
              role="button"
              src={`https://premium.indusre.com/Admin/pages/forms/uploads/property/${
                data.image1
              }?${new Date().getTime()}`}
              alt={"img"}
              onLoadingComplete={() => setMainImageLoading(false)}
              onClick={handleClickOpenShowAllPhotosDialog}
            />
            <Image
              width={1652}
              height={640}
              className={`mobile-hide ${
                mainImageLoading
                  ? "opacity-0 position-absolute w-100 cover"
                  : "opacity-100 w-100 cover position-relative"
              }}`}
              role="button"
              src={`https://premium.indusre.com/Admin/pages/forms/uploads/property/${
                data.image1
              }?${new Date().getTime()}`}
              alt={"img"}
              onLoadingComplete={() => setMainImageLoading(false)}
              onClick={handleClickOpenShowAllPhotosDialog}
            />
          </div>
        </div>

        {/* -------------------------------------------------------Show All Photos Dialog---------------------------------- */}
        {/* -------------------------------------------------------Show All Photos Dialog---------------------------------- */}
        {/* -------------------------------------------------------Show All Photos Dialog---------------------------------- */}
        <Dialog
          fullScreen
          open={openShowAllPhotosDialog}
          onClose={handleCloseShowAllPhotosDialog}
          TransitionComponent={Transition}
        >
          <AppBar
            className="bg-white appbar-all-photos position-fixed"
            sx={{ position: "relative" }}
          >
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleCloseShowAllPhotosDialog}
                aria-label="close"
                className="w43"
              >
                <i className="far fa-close color-gold" />
              </IconButton>
              <Typography
                className="color-gold"
                sx={{ ml: 2, flex: 1 }}
                variant="h6"
                component="div"
              >
                Gallery
              </Typography>
            </Toolbar>
          </AppBar>

          <div className="col-lg-12 row m0-mbl mt100 mobile-hide">
            <div className="col-lg-5" ref={ref}>
              <h2
                className="sp-lg-title text-center mb20 fz35 fw400 position-fixed all-photos-address"
                style={{
                  overflowWrap: "break-word",
                  inlineSize: `${
                    ref.current ? ref.current.offsetWidth - 100 : 400
                  }px`,
                }}
              >
                {data.address}
              </h2>
            </div>
            <div className="col-lg-7">
              {allPhotos.map((ph, index) => (
                <div key={index}>
                  {!allPhotosLoaded && (
                    <Skeleton
                      variant="rectangular"
                      className="w-100 cover mb25"
                      width={1000}
                      height={540}
                    />
                  )}
                  <img
                    src={`https://premium.indusre.com/Admin/pages/forms/uploads/galary/${ph}`}
                    alt="image"
                    // width={900}
                    // height={600}
                    className={`${
                      !allPhotosLoaded
                        ? "opacity-0 position-absolute w-100 cover mb25"
                        : "opacity-100 w-100 cover mb25 position-relative"
                    }}`}
                    onLoad={() => setAllPhotosLoaded(true)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-12 row m-0 mt80 pc-hide">
            <h2 className="sp-lg-title text-center px25 mb20 fz20 fw400 all-photos-address">
              {data.address}
            </h2>
            <div className="px15">
              {allPhotos.map((ph, index) => (
                <div key={index}>
                  {!allPhotosLoaded && (
                    <Skeleton
                      variant="rectangular"
                      className="w-100 cover mb25"
                      width={400}
                      height={250}
                    />
                  )}
                  <img
                    src={`https://premium.indusre.com/Admin/pages/forms/uploads/galary/${ph}`}
                    alt="image"
                    // width={900}
                    // height={600}
                    className={`${
                      !allPhotosLoaded
                        ? "opacity-0 position-absolute w-100 cover mb25"
                        : "opacity-100 w-100 cover mb25 position-relative"
                    }}`}
                    onLoad={() => setAllPhotosLoaded(true)}
                  />
                </div>
              ))}
            </div>
          </div>
        </Dialog>
        {/* -------------------------------------------------------Show All Photos Dialog Ends---------------------------------- */}
        {/* -------------------------------------------------------Show All Photos Dialog Ends---------------------------------- */}
        {/* -------------------------------------------------------Show All Photos Dialog Ends---------------------------------- */}
        <div className="container">
          {/* End .row */}

          <div className="row m-0 wrap">
            <div className="col-lg-8 p0-mbl">
              <div className="ps-widget bdrs12 mb30 overflow-hidden position-relative">
                <h4 className="title fz20 fw400 mb5 mt15-mbl">
                  {data.address}
                </h4>

                {/* -------------------------------Mobile screen data-------------------------------------- */}
                {/* -------------------------------Mobile screen data-------------------------------------- */}
                {/* -------------------------------Mobile screen data-------------------------------------- */}
                <p className="pc-hide">
                  Featured {" · "} {data.completion_status}
                </p>
                <div className="mb15 d-block pc-hide">
                  <span className="fz15 mb-0 fw300 underline-text color-black-grey pc-hide">
                    <Link
                      href={`${
                        data.status == "Sale"
                          ? "/premium-sales"
                          : "/premium-rentals"
                      }`}
                    >
                      {data.status}
                    </Link>
                  </span>
                  <span className="arrow-after pc-hide"></span>
                  <span className="text fz15 mb-0 bdrrn-sm fw300 underline-text color-black-grey pc-hide">
                    <Link href={`/all-properties?s=dubai`}>Dubai</Link>
                  </span>
                  <span className="arrow-after pc-hide"></span>
                  <span className="text fz15 mb-0 bdrrn-sm fw300 underline-text color-black-grey pc-hide">
                    <Link href={`/all-properties?t=${data.cat_id}`}>
                      {data.cat_name}
                    </Link>
                  </span>
                </div>
                <div className="mt20 top-border-grey-2 pc-hide"></div>
                <div className="mb0 mt15 d-block pc-hide">
                  <span className="fz13 mb-0 fw300 pc-hide">
                    <Link
                      className="color-black-grey-2 underline-text"
                      href={`/all-properties?t=${data.cat_id}`}
                    >
                      {data.cat_name}
                    </Link>
                  </span>
                  <span className="dot-after pc-hide"></span>
                  {data.infocus == null ? (
                    <>
                      <span className="text fz13 mb-0 bdrrn-sm fw300 pc-hide">
                        {data.beds != "0" ? (
                          <>
                            <Link
                              className="color-black-grey-2 underline-text"
                              href={`/all-properties?bd=${data.beds}`}
                            >
                              {data.beds} Beds
                            </Link>
                            <span className="dot-after pc-hide"></span>
                          </>
                        ) : (
                          <></>
                        )}
                      </span>

                      <span className="text fz13 mb-0 bdrrn-sm fw300 color-black-grey-2 pc-hide">
                        {data.beds != "0" ? (
                          <>
                            <span>{data.baths} Baths</span>
                            <span className="dot-after pc-hide"></span>
                          </>
                        ) : (
                          <></>
                        )}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text fz13 mb-0 bdrrn-sm fw300 color-black-grey-2 pc-hide">
                        1-3 Beds
                      </span>
                    </>
                  )}

                  <span className="text fz13 mb-0 bdrrn-sm fw300 color-black-grey-2 pc-hide">
                    {data.infocus == null
                      ? new Intl.NumberFormat("en-AE", {
                          maximumSignificantDigits: 3,
                        }).format(data.area) +
                        " " +
                        "sq. ft."
                      : data.infocus.area_range}
                  </span>
                </div>
                {/* -------------------------------PC screen data-------------------------------------- */}
                {/* -------------------------------PC screen data-------------------------------------- */}
                {/* -------------------------------PC screen data-------------------------------------- */}
                <div className="pd-meta mb0 d-md-flex align-items-center mobile-hide">
                  <p className="fz13 mb-0 fw300">
                    <Link
                      className="color-black-grey-2 underline-text"
                      href={`/all-properties?t=${data.cat_id}`}
                    >
                      {data.cat_name}
                    </Link>
                  </p>
                  <li className="dot-after"></li>
                  {data.infocus == null ? (
                    <>
                      {data.beds != "0" ? (
                        <>
                          <p className="text fz13 mb-0 bdrrn-sm fw300">
                            <Link
                              className="color-black-grey-2 underline-text"
                              href={`/all-properties?bd=${data.beds}`}
                            >
                              {data.beds} Beds
                            </Link>
                          </p>
                          <li className="dot-after"></li>
                        </>
                      ) : (
                        <></>
                      )}
                      {data.baths != "0" ? (
                        <>
                          <p className="text fz13 mb-0 bdrrn-sm fw300 color-black-grey-2">
                            {data.baths} Baths
                          </p>
                          <li className="dot-after"></li>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ) : (
                    <>
                      <p className="text fz13 mb-0 bdrrn-sm fw300 color-black-grey-2">
                        1-3 Beds
                      </p>
                    </>
                  )}

                  <p className="text fz13 mb-0 bdrrn-sm fw300 color-black-grey-2">
                    {data.infocus == null
                      ? new Intl.NumberFormat("en-AE", {
                          maximumSignificantDigits: 3,
                        }).format(data.area) +
                        " " +
                        "sq. ft."
                      : data.infocus.area_range}
                  </p>
                </div>
                <ProperytyDescriptions
                  desc={data.description}
                  infocus={data.infocus != null ? data.infocus : "no"}
                />
              </div>
              {/* -------------------------------PC screen Gallery-------------------------------------- */}
              {/* -------------------------------PC screen Gallery-------------------------------------- */}
              {/* -------------------------------PC screen Gallery-------------------------------------- */}
              <div className="col-lg-12 w-100 row mobile-hide">
                <div className="col-sm-8 cursor-pointer">
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
                        onClick={handleClickOpenShowAllPhotosDialog}
                      />
                    </div>
                  </div>
                </div>
                {/* End .col-6 */}

                <div className="col-sm-4 ">
                  <div className="row ">
                    <div className="col-sm-12 ps-lg-0 cursor-pointer">
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
                            onClick={handleClickOpenShowAllPhotosDialog}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 ps-lg-0 cursor-pointer">
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
                            onClick={handleClickOpenShowAllPhotosDialog}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="custom-btn-3 w-25 mt20 ml10"
                  onClick={handleClickOpenShowAllPhotosDialog}
                >
                  Show All Photos
                </button>
              </div>
              {/* -------------------------------Mobile screen data-------------------------------------- */}
              {/* -------------------------------Mobile screen data-------------------------------------- */}
              {/* -------------------------------Mobile screen data-------------------------------------- */}
              <div className="col-12 p0 cursor-pointer pc-hide">
                <div className="sp-img-content mb6">
                  <div className="">
                    {firstImageLoading ? (
                      <Skeleton
                        variant="rectangular"
                        className="w-100 cover"
                        width={
                          size.width != undefined && size.width > 500
                            ? 500
                            : size.width
                        }
                        height={
                          size.width != undefined && size.width > 500
                            ? 400
                            : 300
                        }
                      />
                    ) : (
                      <></>
                    )}
                    <Image
                      src={`https://premium.indusre.com/Admin/pages/forms/uploads/galary/${data.gallary.g_image1}`}
                      width={
                        size.width != undefined && size.width > 500
                          ? 500
                          : size.width
                      }
                      height={
                        size.width != undefined && size.width > 500 ? 400 : 300
                      }
                      alt="image"
                      className={`${
                        firstImageLoading
                          ? "opacity-0 position-absolute w-100 cover"
                          : "opacity-100 w-100 cover position-relative"
                      }}`}
                      onLoadingComplete={() => setFirstImageLoading(false)}
                      onClick={handleClickOpenShowAllPhotosDialog}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 p0 w-100 row m-0 pc-hide">
                <div className="col-6 p0 pr3">
                  <div className="col-sm-12 ps-lg-0 cursor-pointer">
                    <div className="sp-img-content">
                      <div className="mb10">
                        {secondImageLoading ? (
                          <Skeleton
                            variant="rectangular"
                            className="w-100 cover"
                            width={
                              size.width != undefined && size.width > 500
                                ? 270
                                : size.width / 2 - 20
                            }
                            height={
                              size.width != undefined && size.width > 500
                                ? 195
                                : 160
                            }
                          />
                        ) : (
                          <></>
                        )}
                        <Image
                          width={
                            size.width != undefined && size.width > 500
                              ? 270
                              : size.width / 2 - 20
                          }
                          height={
                            size.width != undefined && size.width > 500
                              ? 195
                              : 160
                          }
                          className={`${
                            secondImageLoading
                              ? "opacity-0 position-absolute w-100 cover"
                              : "opacity-100 w-100 cover position-relative"
                          }}`}
                          src={`https://premium.indusre.com/Admin/pages/forms/uploads/galary/${data.gallary.g_image2}`}
                          alt={"img"}
                          onLoadingComplete={() => setSecondImageLoading(false)}
                          onClick={handleClickOpenShowAllPhotosDialog}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 p0 pl3">
                  <div className="col-sm-12 ps-lg-0 cursor-pointer">
                    <div className="sp-img-content">
                      <div className="mb10">
                        {thirdImageLoading ? (
                          <Skeleton
                            variant="rectangular"
                            className="w-100 cover"
                            width={
                              size.width != undefined && size.width > 500
                                ? 270
                                : size.width / 2 - 20
                            }
                            height={
                              size.width != undefined && size.width > 500
                                ? 195
                                : 160
                            }
                          />
                        ) : (
                          <></>
                        )}
                        <Image
                          width={
                            size.width != undefined && size.width > 500
                              ? 270
                              : size.width / 2 - 20
                          }
                          height={
                            size.width != undefined && size.width > 500
                              ? 195
                              : 160
                          }
                          className={`${
                            thirdImageLoading
                              ? "opacity-0 position-absolute w-100 cover"
                              : "opacity-100 w-100 cover position-relative"
                          }}`}
                          role="button"
                          src={`https://premium.indusre.com/Admin/pages/forms/uploads/galary/${data.gallary.g_image3}`}
                          alt={"img"}
                          onLoadingComplete={() => setThirdImageLoading(false)}
                          onClick={handleClickOpenShowAllPhotosDialog}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="custom-btn-3 mt10 pc-hide"
                onClick={handleClickOpenShowAllPhotosDialog}
              >
                Show All Photos
              </button>
              <div className="w-100 mt20 top-border-grey-2">
                <p className="title fz20 fw400 mb5 pt10">Features</p>
                <FeaturesPropDetails features={data.features} />
              </div>
              <div className="w-100 mt20 top-border-grey-2">
                <p className="title fz20 fw400 mb15 pt10">Floor Plan</p>
                <button
                  className="custom-btn-3"
                  onClick={() => openCommonDialog("Request For Floorplan")}
                >
                  Request For Floorplan
                </button>
              </div>
              <div className="w-100 mt20 top-border-grey-2">
                <p className="title fz20 fw400 mb15 pt10">Video Tour</p>
                <button
                  className="custom-btn-3"
                  onClick={() => openCommonDialog("Request For Video Tour")}
                >
                  Request For Video Tour
                </button>
              </div>

              <div className="w-100 mt20 top-border-grey-2">
                <p className="title fz20 fw400 mb15 pt10">3D walkthrough</p>
                <button
                  className="custom-btn-3"
                  onClick={() => openCommonDialog("Request For 3D walkthrough")}
                >
                  Request For 3D walkthrough
                </button>
              </div>
              <div className="w-100 mt20 top-border-grey-2">
                <p className="title fz20 fw400 mb15 pt10">Brochure</p>
                <button
                  className="custom-btn-3"
                  onClick={() => openCommonDialog("Request For Brochure")}
                >
                  Request For Brochure
                </button>
              </div>
            </div>

            <div className="col-lg-4 p0-mbl">
              <div className="position-sticky top-15">
                <div className="column mobile-hide">
                  <div className="agen-personal-info position-relative bgc-white default-box-shadow1 bdrs8 p20 mt30">
                    <div className="widget-wrapper mb-0">
                      <h6 className="title fz15 mb10 fw300 color-black-grey">
                        For {data.status} {" · "}
                        {data.completion_status}
                      </h6>
                      <h2 className="title fz22 mb10 fw500 color-black-grey">
                        {data.price != "0"
                          ? currencyFormatter.format(data.price)
                          : "Price On Application"}
                      </h2>
                      <h6 className="title fz15 mb10 fw300 color-black-grey lh-1">
                        <Link
                          className="underline-text color-black-grey-2"
                          href={`/all-properties?t=${data.cat_id}`}
                        >
                          Completion : {data.completion_date}
                        </Link>
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
                <div className="mt20 top-border-grey-2 pc-hide"></div>
                <div className="column mt20">
                  <div className="agen-personal-info position-relative bgc-white default-box-shadow1 bdrs8 p20 mt0">
                    <h6 className="title fz17 mb10 fw300 color-black-grey">
                      Book A Viewing
                    </h6>
                    <ScheduleForm address={data.address} />
                  </div>
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
              <div className="col-lg-12 p0-mbl">
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
      <div className="pc-hide bottom-navigation-bar-mobile w-100">
        <BottomNavDetailsPage data={data} />
      </div>
      {/* End Our Footer */}
    </>
  );
};

export default PropertyDetailsPage;
