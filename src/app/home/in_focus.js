"use client";

import { getInFocusData } from "@/api/listings";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const InFocus = () => {
  const [data, setData] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [headerText, setHeaderText] = useState("");
  const [subHeaderText, setSubHeaderText] = useState("");
  var body_text_div =
    typeof document !== "undefined" && document.createElement("div");
  var header_text_div =
    typeof document !== "undefined" && document.createElement("div");
  var sub_header_text_div =
    typeof document !== "undefined" && document.createElement("div");
  useEffect(() => {
    getInFocusData().then((res) => {
      setData(res);
      body_text_div.innerHTML = res.info.body_text;
      header_text_div.innerHTML = res.info.header;
      sub_header_text_div.innerHTML = res.info.sub_header;
      setBodyText(body_text_div.innerText);
      setHeaderText(header_text_div.innerText);
      setSubHeaderText(sub_header_text_div.innerText);
    });
  }, []);
  return data != "" ? (
    <>
      <section className="p0 bg-dark" id="in-focus">
        <div className="container top-border-grey pt30">
          <div className="nav justify-content-between">
            <p className="text-light text-start fz20 mb10">In Focus</p>
            <li
              className="nav-item d-flex align-items-center "
              role="presentation"
            >
              <Link className="custom-link" href={`/property-details?id=${data.prop.prop_id}&prj=1`}>
                Learn More
              </Link>
            </li>
          </div>
          <p className="text-light text-start mb20 mt10">{bodyText}</p>
        </div>
        <Image
          style={{
            width: "100%",
          }}
          src={`https://premium.indusre.com/Admin/pages/forms/uploads/property/${data.prop.image1}`}
          className="w-100 h-70 cover"
          height={600}
          width={1652}
          alt="in focus"
        />
        <div
          className="home-banner-slider w-100 position-absolute"
          style={{
            zIndex: 1,
            top: "9.9rem",
            height: "79.2%",
          }}
        ></div>
        <div
          className="container position-absolute"
          style={{
            zIndex: 2,
            top: "15rem",
            left: "13rem",
          }}
        >
          <div className="row">
            <div className="col-xl-7">
              <h2 className="banner-title text-light fz40 fw400 mb0">
                {headerText}
              </h2>
              <p className="text-light">{subHeaderText}</p>
              <Link
                href={`/property-details?id=${data.prop.prop_id}&prj=1`}
                className="ud-btn banner-btn fw500 btn-thm mt10 mt0-xs"
              >
                VIEW PROPERTY
              </Link>
            </div>

            <div className="col-sm-6 col-xl-4 offset-xl-3"></div>
          </div>
        </div>
      </section>
    </>
  ) : (
    <></>
  );
};

export default InFocus;
