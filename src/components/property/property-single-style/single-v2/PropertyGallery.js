"use client";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";
import listings from "@/data/listings";
import { useLayoutEffect, useRef, useState } from "react";

const PropertyGallery = ({ images }) => {
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const imgsCount = [images.g_image2, images.g_image3];

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
      <Gallery>
        <div className="col-sm-8">
          <div className="sp-img-content mb15-md">
            <div className="popup-img preview-img-1 sp-img" ref={targetRef}>
              <Item
                original={`https://premium.indusre.com/Admin/pages/forms/uploads/galary/${images.g_image1}`}
                thumbnail={`https://premium.indusre.com/Admin/pages/forms/uploads/galary/${images.g_image1}`}
                width={1000}
                height={700}
              >
                {({ ref, open }) => (
                  <Image
                    src={`https://premium.indusre.com/Admin/pages/forms/uploads/galary/${images.g_image1}`}
                    width={890}
                    height={400}
                    ref={ref}
                    onClick={open}
                    alt="image"
                    role="button"
                    className="w-100 h-100 cover"
                  />
                )}
              </Item>
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
                    <Item
                      original={`https://premium.indusre.com/Admin/pages/forms/uploads/galary/${image}`}
                      thumbnail={`https://premium.indusre.com/Admin/pages/forms/uploads/galary/${image}`}
                      width={1000}
                      height={700}
                    >
                      {({ ref, open }) => (
                        <Image
                          width={270}
                          height={250}
                          className="w-100 h-100 cover"
                          ref={ref}
                          onClick={open}
                          role="button"
                          src={`https://premium.indusre.com/Admin/pages/forms/uploads/galary/${image}`}
                          alt={index}
                        />
                      )}
                    </Item>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Gallery>
    </>
  );
};

export default PropertyGallery;
