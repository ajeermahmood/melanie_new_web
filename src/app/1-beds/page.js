import DefaultHeader from "@/components/common/DefaultHeader";

import Footer from "@/components/home/home-v8/footer";
import MobileMenu from "@/components/common/mobile-menu";

import ProperteyFiltering from "@/components/listing/grid-view/grid-full-3-col/ProperteyFiltering";

import React from "react";

export const metadata = {
  title: "Indus Premium | Premium Rentals",
};

const PremiumSales = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcumb Sections */}
      <section className="breadcumb-section bgc-f7 bg-white01 pt20 pb50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title fw400 text-center">1 Beds</h2>
                <p className="text-center fz20 maxw1000 mx-auto color-black-grey-2 font-style-2">
                  Prime Dubai Investments{" · "}Explore Lucrative Real Estate
                  Deals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcumb Sections */}

      {/* Property Filtering */}
      <ProperteyFiltering deals={'onebed'}/>
      {/* Property Filtering */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default PremiumSales;