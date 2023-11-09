"use client";

import { getAllDeals, getAllListings } from "@/api/listings";
import AdvanceFilterModal from "@/components/common/advance-filter-two";
import { Pagination, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import ListingSidebar from "../../sidebar";
import FeaturedListings from "./FeatuerdListings";
import TopFilterBar from "./TopFilterBar";
import { usePathname, useSearchParams } from "next/navigation";
import MobileNavTop from "@/app/all-properties/mobile-top-nav";

export default function ProperteyFiltering({ status, deals, all }) {
  // params
  const searchParams = useSearchParams();
  const property_type_param = searchParams.get("t");
  const search_txt_param = searchParams.get("s");
  const beds_param = searchParams.get("bd");
  // params end

  const path = usePathname();

  const getPathNames = (path) => {
    switch (path) {
      case "/all-properties":
        return "All Properties";
      case "/premium-sales":
        return "Premium Sales";
      case "/premium-rentals":
        return "Premium Rentals";
      case "/studios":
        return "Studios";
      case "/1-beds":
        return "1 Beds";
      case "/2plus-beds":
        return "2 Plus Beds";
      case "/see-all":
        return "See All Deals";
      case "/projects":
        return "Projects";
      default:
        break;
    }
  };

  const [search, setSearch] = useState(
    search_txt_param != "" && search_txt_param != null ? search_txt_param : ""
  );

  const [listings, setListings] = useState([]);
  const [listingsCount, setListingsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [propertyTypes, setPropertyTypes] = useState(
    property_type_param != "" &&
      property_type_param != "all" &&
      property_type_param != null
      ? [Number(property_type_param)]
      : []
  );
  const [priceRange, setPriceRange] = useState([20, 100000000]);
  const [priceRangeSetted, setPriceRangeSetted] = useState(1);
  const [bedrooms, setBedrooms] = useState(
    beds_param != null ? Number(beds_param) : 0
  );
  const [bathroms, setBathroms] = useState(0);

  const [propStatus, setPropStatus] = useState(status != null ? status : "all");

  const [currentSortingOption, setCurrentSortingOption] = useState("Newest");

  const [colstyle, setColstyle] = useState(false);

  const [location, setLocation] = useState("0");
  const [squirefeet, setSquirefeet] = useState([]);
  const [yearBuild, setyearBuild] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    if (deals == "no") {
      getAllListings(9, currentPage, {
        search: search,
        status: propStatus,
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
          console.log(res);
        })
        .finally(() => setLoading(false));
    } else {
      getAllDeals(9, currentPage, {
        search: search,
        deals: deals,
        price_range: priceRange,
        sort: currentSortingOption,
      })
        .then((res) => {
          setListings(res.listings);
          setListingsCount(res.count);
          console.log(res);
        })
        .finally(() => setLoading(false));
    }
  }, [
    search,
    currentPage,
    propertyTypes,
    priceRangeSetted,
    bedrooms,
    bathroms,
    location,
    squirefeet,
    categories,
    currentSortingOption,
    propStatus,
  ]);

  const resetFilter = () => {
    setPropertyTypes([]);
    setPriceRange([0, 100000000]);
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
    handlepropertyTypes,
    handlepriceRange,
    handlebedrooms,
    handlebathroms,
    handlelocation,
    handlesquirefeet,
    handleyearBuild,
    handlecategories,
    priceRange,
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
    setSearch,
    search,
    setPropStatus,
    propStatus,
    all,
  };

  return (
    <section className="pt0 pb90 bgc-f7">
      <div className="pc-hide d-flex justify-content-center p15">
        <MobileNavTop filterFunctions={filterFunctions} />
      </div>
      <p className="text-center fz20 pc-hide mb20 mt10">{getPathNames(path)}</p>
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

        <div className="row m-0 w-100">
          <TopFilterBar
            colstyle={colstyle}
            setColstyle={setColstyle}
            filterFunctions={filterFunctions}
            setCurrentSortingOption={setCurrentSortingOption}
            totalLength={listingsCount}
            deals={deals}
          />
        </div>
        {/* End TopFilterBar */}
        {listings.length == 0 && !loading ? (
          <div className="mb100">
            <p className="text-center fz20 mb0 mt100">
              Sorry, we don&apos;t have any matches for your search
            </p>
            <p className="text-center fz20 maxw800 mx-auto color-black-grey-2 font-style-2">
              While we currently don&apos;t have the property you require in our
              portfolio. Please reach out our team for your specific
              requirements.
            </p>
            <div className="d-flex w-100 justify-content-center">
              <button className="custom-btn-3">Contact Now</button>
            </div>
          </div>
        ) : (
          <></>
        )}

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
              {9 * currentPage - 9 + 1} -{" "}
              {9 * currentPage - 9 + listings.length} of {listingsCount} results
            </span>
          </Stack>
        </div>

        {/* End .row */}
      </div>
      {/* End .container */}
    </section>
  );
}
