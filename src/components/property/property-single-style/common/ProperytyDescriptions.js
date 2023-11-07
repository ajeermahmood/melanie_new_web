"use client";
import React, { useEffect, useState } from "react";

const ProperytyDescriptions = ({ desc, infocus }) => {
  const [bodyText, setBodyText] = useState("");
  var body_text_div =
    typeof document !== "undefined" && document.createElement("div");

  useEffect(() => {
    body_text_div.innerHTML = infocus.description;
    setBodyText(body_text_div.innerText);
  }, []);
  return (
    <>
      {infocus != "no" ? (
        <p className="text mt15 mb10 font-style-2 fz17"><i>{bodyText}</i></p>
      ) : (
        <></>
      )}

      <p
        className="text mt15 mb10 font-style-2"
        dangerouslySetInnerHTML={{ __html: desc }}
      ></p>
      {/* <div className="agent-single-accordion">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
              style={{}}
            >
              <div className="accordion-body p-0">
                <p className="text">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the class. This is the first item&apos;s accordion
                  body you get groundbreaking performance and amazing battery
                  life. Add to that a stunning Liquid Retina XDR display, the
                  best camera and audio ever in a Mac notebook, and all the
                  ports you need.
                </p>
              </div>
            </div>
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button p-0 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Show more
              </button>
            </h2>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ProperytyDescriptions;
