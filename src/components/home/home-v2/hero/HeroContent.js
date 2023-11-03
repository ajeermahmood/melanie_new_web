"use client";
import React, { useState } from "react";
import SelectDropdown from "./SelectDropdown";
import { useRouter } from "next/navigation";

const HeroContent = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("buy");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    { id: "buy", label: "Buy" },
    { id: "rent", label: "Rent" },
    { id: "off_plan", label: "Off-plan" },
  ];

  return (
    <div className="advance-style2 mt20 mt0-md mb60 mx-auto">
      <h2 className="text-light fw400">
        The address for luxury property. <br />
        Exceptional homes, unrivalled expertise.
      </h2>
      <ul className="nav mt40 nav-tabs p-0">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button
              className={`nav-link fz20 ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(tab.id)}
            >
             <span className="fw400">{tab.label}</span> 
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            className={`${activeTab === tab.id ? "active" : ""} tab-pane`}
            key={tab.id}
          >
            <div className="advance-content-style2">
              <div className="row align-items-center justify-content-start justify-content-md-center">
                <div className="col-md-5 col-lg-6">
                  <div className="advance-search-field position-relative text-start bdrr1 bdrrn-sm bb1-sm">
                    <form className="form-search position-relative">
                      <div className="box-search">
                        <span className="icon flaticon-home-1" />
                        <input
                          className="form-control "
                          type="text"
                          name="search"
                          placeholder={`Enter Keyword for ${tab.label}`}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                {/* End .col-md-6 */}

                <div className="col-md-3 col-lg-3 ps-md-0">
                  <div className="bdrr1 bdrrn-sm pe-0 pe-lg-3 bb1-sm">
                    <div className="bootselect-multiselect">
                      <SelectDropdown />
                    </div>
                  </div>
                </div>
                {/* End .col-md-3 */}

                <div className="col-md-4 col-lg-3">
                  <div className="d-flex align-items-center justify-content-start justify-content-md-center mt-3 mt-md-0">
                    <button
                      className="advance-search-btn"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#advanceSeachModal"
                    >
                      <span className="flaticon-settings" /> Advanced
                    </button>
                    <button
                      className="advance-search-icon ud-btn btn-thm ms-4"
                      type="button"
                      onClick={() => router.push("/grid-default")}
                    >
                      <span className="flaticon-search" />
                    </button>
                  </div>
                </div>
                {/* End .col-md-64 */}
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
      {/* End tab-content */}
    </div>
  );
};

export default HeroContent;
