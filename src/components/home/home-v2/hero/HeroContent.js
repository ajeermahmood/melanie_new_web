"use client";
import React, { useState } from "react";
import SelectDropdown from "./SelectDropdown";
import { useRouter } from "next/navigation";
import LocationsDropdown from "./locations";

const HeroContent = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("buy");
  const [selectedPropType, setSelectedPropType] = useState("all");
  const [selectedLocations, setSelectedLocations] = useState("all");
  const [search, setSearch] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    { id: "buy", label: "Buy" },
    { id: "rent", label: "Rent" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <div className="advance-style2 mt20 mt0-md mb60 mx-auto">
      <h2 className="text-light fw400">
        The Address for Luxury property. <br />
        Exceptional Homes, Unrivalled expertise.
      </h2>
      <ul className="nav mt20 nav-tabs p-0">
        {tabs.map((tab) => (
          <li className="nav-item lh-1" key={tab.id}>
            <button
              className={`nav-link fz20 ${
                activeTab === tab.id ? "active color-white02" : "color-white01"
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              <span className="fw400 fz18">{tab.label}</span>
            </button>
          </li>
        ))}
      </ul>
      <div className="mobile-tab-content pc-hide">
        <div className="col-12 row m-0">
          <div className="col-10 pl0 pr5">
            <div className="advance-search-field position-relative text-start bdrr1 bdrrn-sm">
              <form className="form-search position-relative">
                <div className="box-search">
                  <span className="icon flaticon-home-1" />
                  <input
                    className="form-control "
                    type="text"
                    name="search"
                    placeholder={`Search Properties`}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col-2 p0">
            <button
              className="advance-search-icon ud-btn btn-thm"
              type="button"
              onClick={() => {}}
            >
              <span className="flaticon-search" />
            </button>
          </div>
        </div>
      </div>
      <div className="tab-content mobile-hide">
        {tabs.map((tab) => (
          <div
            className={`${activeTab === tab.id ? "active" : ""} tab-pane`}
            key={tab.id}
          >
            <div className="advance-content-style2">
              <div className="row align-items-center justify-content-start justify-content-md-center">
                <div className="col-md-5 col-lg-5">
                  <div className="advance-search-field position-relative text-start bdrr1 bdrrn-sm bb1-sm">
                    <form className="form-search position-relative">
                      <div className="box-search">
                        <span className="icon flaticon-home-1" />
                        <input
                          className="form-control "
                          type="text"
                          name="search"
                          placeholder={tab.id == 'projects' ? 'Search for Projects' : `Search Properties for ${tab.label == 'Buy' ? 'Sale' : tab.label}`}
                          onChange={(e) => setSearch(e.target.value)}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                {/* End .col-md-6 */}

                <div className="col-md-3 col-lg-3 ps-md-0">
                  <div className="bdrr1 bdrrn-sm pe-0 pe-lg-3 bb1-sm">
                    <div className="bootselect-multiselect">
                      <SelectDropdown
                        setSelectedPropType={setSelectedPropType}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-lg-3 ps-md-0">
                  <div className="bdrr1 bdrrn-sm pe-0 pe-lg-3 bb1-sm">
                    <div className="bootselect-multiselect">
                      <LocationsDropdown
                        setSelectedPropType={setSelectedLocations}
                      />
                    </div>
                  </div>
                </div>
                {/* End .col-md-3 */}

                <div className="col-md-4 col-lg-1 d-flex justify-content-end">
                  <div className="d-flex align-items-center justify-content-start justify-content-md-center mt-3 mt-md-0">
                    <button
                      className="advance-search-icon ud-btn btn-thm"
                      type="button"
                      onClick={() => {
                        if (activeTab == "buy") {
                          router.push(
                            `/premium-sales?s=${search}&t=${selectedPropType}&l=${selectedLocations}`
                          );
                        } else if (activeTab == "rent") {
                          router.push(
                            `/premium-rentals?s=${search}&t=${selectedPropType}&l=${selectedLocations}`
                          );
                        } else {
                          router.push(
                            `/projects?s=${search}`
                          );
                        }
                      }}
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
