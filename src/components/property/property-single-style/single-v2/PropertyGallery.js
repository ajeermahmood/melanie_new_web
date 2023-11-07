"use client";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

const PropertyGallery = ({ images }) => {
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const imgsCount = [images.g_image2, images.g_image3];

  const [mainImageLoading, setMainImageLoading] = useState(true);
  const [secondImageLoading, setSecondImageLoading] = useState(true);
  const [thirdImageLoading, setThirdImageLoading] = useState(true);

  const getImgLoadVar = (index) => {
    switch (index) {
      case 0:
        return secondImageLoading;
      case 1:
        return thirdImageLoading;
    }
  };
  const getImgLoadFunc = (index) => {
    switch (index) {
      case 0:
        setSecondImageLoading(false);
        break;
      case 1:
        setThirdImageLoading(false);
        break;
    }
  };

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      });
    }
  }, []);

  return (
    <>
      <div className="col-sm-8">
        <div className="sp-img-content mb15-md">
          <div className="popup-img preview-img-1 sp-img" ref={targetRef}>
            {mainImageLoading ? (
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
              src={`https://premium.indusre.com/Admin/pages/forms/uploads/galary/${images.g_image1}`}
              width={500}
              height={400}
              alt="image"
              role="button"
              className={`${
                mainImageLoading
                  ? "opacity-0 position-absolute w-100 h-100 cover"
                  : "opacity-100 w-100 h-100 cover position-relative"
              }}`}
              onLoadingComplete={() => setMainImageLoading(false)}
            />
          </div>
        </div>
      </div>
      {/* End .col-6 */}

      <div className="col-sm-4">
        <div className="row">
          {imgsCount.map((image, index) => (
            <div className="col-sm-12 ps-lg-0" key={index}>
              <div className="sp-img-content">
                <div
                  className={`popup-img preview-img-${index + 2} sp-img mb10`}
                  style={{
                    height: `${dimensions.height / 2 - 5}px`,
                  }}
                >
                  {getImgLoadVar(index) ? (
                    <Skeleton
                      variant="rectangular"
                      className="w-100 cover"
                      width={270}
                      height={250}
                    />
                  ) : (
                    <></>
                  )}
                  <Image
                    width={270}
                    height={250}
                    className={`${
                      getImgLoadVar(index)
                        ? "opacity-0 position-absolute w-100 h-100 cover"
                        : "opacity-100 w-100 h-100 cover position-relative"
                    }}`}
                    role="button"
                    src={`https://premium.indusre.com/Admin/pages/forms/uploads/galary/${image}`}
                    alt={index}
                    onLoadingComplete={() => getImgLoadFunc(index)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PropertyGallery;
