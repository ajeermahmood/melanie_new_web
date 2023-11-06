"use client";

import { getAllPremiumSales } from "@/api/listings";
import AdvanceFilterModal from "@/components/common/advance-filter-two";
import { Pagination, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import ListingSidebar from "../../sidebar";
import FeaturedListings from "./FeatuerdListings";
import TopFilterBar from "./TopFilterBar";
import { useSearchParams } from "next/navigation";

export default function ProperteyFiltering() {
  // params
  const searchParams = useSearchParams();
  const property_status_param = searchParams.get("st");
  const property_purpose_param = searchParams.get("ps");
  const location_param = searchParams.get("lc");
  const property_type_param = searchParams.get("t");
  // params end

  const getPropertyTypesAccordingToPurpose = (purpose) => {
    switch (purpose) {
      case "residential":
        return [1, 2, 3, 4];
      case "commercial":
        return [26];
      default:
        break;
    }
  };

  const [listings, setListings] = useState([]);
  const [listingsCount, setListingsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [listingStatus, setListingStatus] = useState(
    property_status_param != "" && property_status_param != null
      ? property_status_param
      : "All"
  );
  const [propertyTypes, setPropertyTypes] = useState(
    property_purpose_param != "" && property_purpose_param != null
      ? getPropertyTypesAccordingToPurpose(property_purpose_param)
      : property_type_param != "" &&
        property_type_param != "All" &&
        property_type_param != null
      ? [Number(property_type_param)]
      : []
  );
  const [priceRange, setPriceRange] = useState([0, 40000000]);
  const [priceRangeSetted, setPriceRangeSetted] = useState(1);
  const [bedrooms, setBedrooms] = useState(-1);
  const [bathroms, setBathroms] = useState(0);

  const [currentSortingOption, setCurrentSortingOption] = useState("Newest");

  const [colstyle, setColstyle] = useState(false);

  const [location, setLocation] = useState(
    location_param != "" && location_param != null ? location_param : "0"
  );
  const [squirefeet, setSquirefeet] = useState([]);
  const [yearBuild, setyearBuild] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getAllPremiumSales(9, currentPage, {
      status: listingStatus,
      prop_types: propertyTypes,
      price_range: priceRange,
      beds: bedrooms,
      baths: bathroms,
      location: location,
      sqft_range: squirefeet,
      features: categories,
      sort: currentSortingOption,
    })
      .then((res) => {
        setListings(res.listings);
        setListingsCount(res.count);
        console.log(res)
      })
      .finally(() => setLoading(false));
  }, [
    currentPage,
    listingStatus,
    propertyTypes,
    priceRangeSetted,
    bedrooms,
    bathroms,
    location,
    squirefeet,
    categories,
    currentSortingOption,
  ]);

  const resetFilter = () => {
    setListingStatus("All");
    setPropertyTypes([]);
    setPriceRange([0, 40000000]);
    setBedrooms(0);
    setBathroms(0);
    setLocation("0");
    setSquirefeet([]);
    setyearBuild([0, 2050]);
    setCategories([]);
    setCurrentSortingOption("Newest");
    document.querySelectorAll(".filterInput").forEach(function (element) {
      element.value = null;
    });

    document.querySelectorAll(".filterSelect").forEach(function (element) {
      element.value = "All Cities";
    });
  };

  const handlelistingStatus = (elm) => {
    setListingStatus((pre) => (pre == elm ? "All" : elm));
  };

  const handlepropertyTypes = (elm) => {
    if (elm == "All") {
      setPropertyTypes([]);
    } else {
      setPropertyTypes((pre) =>
        pre.includes(elm) ? [...pre.filter((el) => el != elm)] : [...pre, elm]
      );
    }
  };
  const handlepriceRange = (elm) => {
    setPriceRange(elm);
  };
  const handlebedrooms = (elm) => {
    setBedrooms(elm);
  };
  const handlebathroms = (elm) => {
    setBathroms(elm);
  };
  const handlelocation = (elm) => {
    console.log(elm);
    setLocation(elm);
  };
  const handlesquirefeet = (elm) => {
    setSquirefeet(elm);
  };
  const handleyearBuild = (elm) => {
    setyearBuild(elm);
  };
  const handlecategories = (elm) => {
    if (elm == "All") {
      setCategories([]);
    } else {
      setCategories((pre) =>
        pre.includes(elm) ? [...pre.filter((el) => el != elm)] : [...pre, elm]
      );
    }
  };
  const filterFunctions = {
    handlelistingStatus,
    handlepropertyTypes,
    handlepriceRange,
    handlebedrooms,
    handlebathroms,
    handlelocation,
    handlesquirefeet,
    handleyearBuild,
    handlecategories,
    priceRange,
    listingStatus,
    propertyTypes,
    resetFilter,

    bedrooms,
    bathroms,
    location,
    squirefeet,
    yearBuild,
    categories,
    setPropertyTypes,
    setListings,
    setPriceRangeSetted,
    setCurrentSortingOption,
    priceRangeSetted,
  };


  return (
    <section className="pt0 pb90 bgc-f7">
      <div className="container">
        {/* start mobile filter sidebar */}
        <div
          className="offcanvas offcanvas-start p-0"
          tabIndex="-1"
          id="listingSidebarFilter"
          aria-labelledby="listingSidebarFilterLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="listingSidebarFilterLabel">
              Listing Filter
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body p-0">
            <ListingSidebar filterFunctions={filterFunctions} />
          </div>
        </div>
        {/* End mobile filter sidebar */}

        {/* <!-- Advance Feature Modal Start --> */}
        <div className="advance-feature-modal">
          <div
            className="modal fade"
            id="advanceSeachModal"
            tabIndex={-1}
            aria-labelledby="advanceSeachModalLabel"
            aria-hidden="true"
          >
            <AdvanceFilterModal filterFunctions={filterFunctions} />
          </div>
        </div>
        {/* <!-- Advance Feature Modal End --> */}

        <div className="row m-0">
          <TopFilterBar
            colstyle={colstyle}
            setColstyle={setColstyle}
            filterFunctions={filterFunctions}
            setCurrentSortingOption={setCurrentSortingOption}
            totalLength={listingsCount}
          />
        </div>
        {/* End TopFilterBar */}

        <div className="row">
          <FeaturedListings
            colstyle={colstyle}
            data={listings}
            loading={loading}
          />
        </div>
        {/* End .row */}

        <div className="row">
          <Stack alignItems="center">
            <Pagination
              count={Math.ceil(listingsCount / 9)}
              // variant="outlined"
              shape="rounded"
              onChange={(event, value) => {
                setListings([]);
                setCurrentPage(value);
              }}
            />
            <span className="mt10">
              {(9 * currentPage) - 9 + 1} - {(9 * currentPage) - 9 + listings.length} of {listingsCount} results
            </span>
          </Stack>
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </section>
  );
}
