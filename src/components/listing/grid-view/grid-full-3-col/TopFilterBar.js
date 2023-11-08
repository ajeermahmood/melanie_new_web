"use client";

import Bathroom from "../../sidebar/Bathroom";
import Bedroom from "../../sidebar/Bedroom";
import ListingStatus from "../../sidebar/ListingStatus";
import PriceRange from "../../sidebar/PriceRange";
import PropertyType from "../../sidebar/PropertyType";

const TopFilterBar = ({
  filterFunctions,
  setCurrentSortingOption,
  colstyle,
  setColstyle,
  totalLength,
  deals,
}) => {
  return (
    <>
      <div className="col-xl-10 d-none d-lg-block">
        <div className="dropdown-lists">
          <ul className="p-0 text-center text-xl-start">
            <li className="list-inline-item position-relative">
              <p className="mr10 fw500">{totalLength} Properties</p>
            </li>
            {filterFunctions.all == true ? (
              <li className="list-inline-item position-relative">
                <button
                  type="button"
                  className="open-btn mb15 dropdown-toggle color-black-grey-2 fw300"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  {filterFunctions.propStatus == "all"
                    ? "For All"
                    : filterFunctions.propStatus == "sale"
                    ? "For Sale"
                    : "For Rent"}{" "}
                  <i className="fa fa-angle-down ms-2" />
                </button>
                <div className="dropdown-menu">
                  <div className="widget-wrapper pb5 mb0 pl20">
                    <h6 className="list-title color-black-grey-2 fw300">
                      Listing Status
                    </h6>
                    <div className="radio-element">
                      <ListingStatus filterFunctions={filterFunctions} />
                    </div>
                  </div>
                </div>
              </li>
            ) : (
              <></>
            )}
            {/* End li Listing Status */}
            {deals == "no" ? (
              <li className="list-inline-item position-relative">
                <button
                  type="button"
                  className="open-btn mb15 dropdown-toggle color-black-grey-2 fw300"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  Property Type <i className="fa fa-angle-down ms-2" />
                </button>
                <div className="dropdown-menu">
                  <div className="widget-wrapper pb5 mb0 pl20">
                    <div className="checkbox-style1">
                      <PropertyType filterFunctions={filterFunctions} />
                    </div>
                  </div>
                </div>
              </li>
            ) : (
              <></>
            )}

            {/* End li Property Type */}

            <li className="list-inline-item position-relative">
              <button
                type="button"
                className="open-btn mb15 dropdown-toggle color-black-grey-2 fw300"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                Price <i className="fa fa-angle-down ms-2" />
              </button>

              <div className="dropdown-menu dd3">
                <div className="widget-wrapper bdrb1 pb25 mb0 pl20 pr30">
                  {/* <h6 className="list-title">Price Range</h6> */}
                  {/* Range Slider Desktop Version */}
                  <div className="range-slider-style1 mt10">
                    <PriceRange filterFunctions={filterFunctions} />
                  </div>
                </div>
                <div className="text-end mt10 pr10">
                  <button
                    type="button"
                    className="done-btn ud-btn btn-thm drop_btn3"
                    onClick={() => {
                      filterFunctions.setListings([]);
                      filterFunctions.setPriceRangeSetted(
                        filterFunctions.priceRangeSetted + 1
                      );
                    }}
                  >
                    Done
                  </button>
                </div>
              </div>
            </li>
            {/* End li Price */}
            {deals == "no" ? (
              <li className="list-inline-item position-relative">
                <button
                  type="button"
                  className="open-btn mb15 dropdown-toggle color-black-grey-2 fw300"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  Beds / Baths <i className="fa fa-angle-down ms-2" />
                </button>
                <div
                  className="dropdown-menu dd4 pb20"
                  style={{
                    width: "295px !important",
                  }}
                >
                  <div className="widget-wrapper pl20 pr20">
                    <h6 className="list-title color-black-grey-2 fw400">
                      Bedrooms
                    </h6>
                    <div className="d-flex">
                      <Bedroom filterFunctions={filterFunctions} />
                    </div>
                  </div>

                  <div className="widget-wrapper pb5 mb0 pl20 pr20">
                    <h6 className="list-title color-black-grey-2 fw400">
                      Bathrooms
                    </h6>
                    <div className="d-flex">
                      <Bathroom filterFunctions={filterFunctions} />
                    </div>
                  </div>
                  {/* <div className="text-end mt10 pr10">
                  <button
                    type="button"
                    className="done-btn ud-btn btn-thm drop_btn4"
                  >
                    Done
                  </button>
                </div> */}
                </div>
              </li>
            ) : (
              <></>
            )}
            <li className="list-inline-item position-relative">
              <form className="search-bar-form">
                <i className="fa fa-search search-icon" />
                <input
                  className="search-bar-filter"
                  type="text"
                  placeholder="Search"
                  onChange={(e) => filterFunctions.setSearch(e.target.value)}
                  value={filterFunctions.search}
                />
              </form>
            </li>

            {/* End bed and bathroom check */}
          </ul>
        </div>
      </div>
      {/* End .col-9 */}

      <div className="col-12 p0 row m-0 w-100 pc-hide justify-content-between mb20-mbl">
        <div className="col-6 pl0">
          <button
            type="button"
            className="custom-btn-3 open-btn mb15 color-black-grey-2 fw300"
            data-bs-toggle="modal"
            data-bs-target="#advanceSeachModal"
          >
            <i className="flaticon-settings me-2" /> More Filter
          </button>
        </div>
        <div className="col-6 p0">
          {/* <div className="page_control_shorting d-flex align-items-center justify-content-end"> */}
            <div className="pcs_dropdown d-flex align-items-center justify-content-end">
              <span style={{ minWidth: "60px" }}>Sort by</span>
              <select
                className="form-select"
                onChange={(e) =>
                  setCurrentSortingOption &&
                  setCurrentSortingOption(e.target.value)
                }
              >
                <option>Newest</option>
                <option>Best Seller</option>
                <option>Best Match</option>
                <option>Price Low</option>
                <option>Price High</option>
              </select>
            </div>
          {/* </div> */}
        </div>
      </div>

      <div className="col-xl-2 mobile-hide">
        <div className="page_control_shorting d-flex align-items-center justify-content-center justify-content-sm-end">
          <div className="pcs_dropdown pr10 d-flex align-items-center">
            <span style={{ minWidth: "60px" }}>Sort by</span>
            <select
              className="form-select"
              onChange={(e) =>
                setCurrentSortingOption &&
                setCurrentSortingOption(e.target.value)
              }
            >
              <option>Newest</option>
              <option>Best Seller</option>
              <option>Best Match</option>
              <option>Price Low</option>
              <option>Price High</option>
            </select>
          </div>
          {/* <div className={`color-black-grey-2 fw300 pl15 pr15 bdrl1 bdrr1 d-none d-md-block  cursor ${!colstyle? 'menuActive':'#' } `}    onClick={()=>setColstyle(false)}>
            Grid
          </div>
          <div className={`color-black-grey-2 fw300 pl15 d-none d-md-block  cursor ${colstyle? 'menuActive':'#' }`}   onClick={()=>setColstyle(true)}>
            List
          </div> */}
        </div>
      </div>
      {/* End .col-3 */}
    </>
  );
};

export default TopFilterBar;
