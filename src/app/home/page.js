import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v2/Header";
import Hero from "@/components/home/home-v2/hero";
import React from "react";
import Footer from "@/components/home/home-v8/footer";
import AllBannersHome from "./all_banners";
import PropertyListing from "@/components/home/home-v7/PropertyListing";
import ProjectsListing from "@/components/home/featured-projects/ProgectsListing";

import Image from "next/image";
import InFocus from "./in_focus";
import PremiumRentals from "./premium_rentals";
import AllDialogs from "./all-dialogs";
import BottomNavigationMobile from "./bottom_nav_mobile";

export const metadata = {
  title: "Indus Premium | Luxury Properties",
};

const HomePage = () => {
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Home Banner Style V2 */}
      <section className="home-banner-style2 p0">
        <div className="home-style2">
          <div className="container maxw1600">
            <div className="row">
              <div className="col-xl-10 mx-auto">
                <Hero />
              </div>
            </div>
          </div>
          <AllBannersHome />
        </div>
      </section>

      <section className="bg-dark pb60 pb30-md pt0 pt25-mbl">
        <div className="container">
          <p className="text-light text-center fz20 mb0">WELCOME</p>
          <p className="text-light text-center fz30 color-gold">
            INDUS PREMIUM
          </p>
          <p className="text-light text-center">
            Indus Premium specializes in luxury properties in Dubai. We provide
            top-notch services to high net worth clients looking to buy, sell,
            or rent luxury homes. Our team of Luxury Sales Specialists are
            dedicated to providing you with exceptional services and expertise,
            focusing on a specific areas of Dubai, with in-depth knowledge at a
            hyperlocal level. Leveraging their extensive networking and
            negotiating skills, they will work diligently to help you achieve
            the desired results, whether it&apos;s making a sound property
            investment, finding the perfect property, or obtaining the accurate
            price for your property.
          </p>
          <AllDialogs />
        </div>
      </section>

      <PropertyListing />

      <InFocus />

      <ProjectsListing />

      <PremiumRentals />

      <section className="w-100 p0" id="why-dubai">
        <div className="row">
          <div className="col-lg-6">
            <div className="row h-100 pt30 pb30">
              <div className="col-3 mobile-hide"></div>
              <div className="col-9 my-auto pr50 mobile-hide">
                <p className="text-dark text-start fz20 fw500 mb10">
                  Why Dubai
                </p>
                <p className="text-dark text-start fw300 fz20 mb0 color-gold">
                  Best Opportunity to invest in Dubai
                </p>
                <p className="text-start mb30 mt0 font-style-2 fw400 fz20 lh-sm">
                  Throughout the years, land financial specialists have earned
                  unrivaled capital returns in the worldwide property showcase.
                  Today, Dubai&apos;s land market is comparable to that of New
                  York or London. It is controlled and maintainable.
                </p>
                <ul className="p0">
                  <div className="row">
                    <div className="col-6">
                      <li className="list-style-custom">
                        High return on investment (ROI)
                      </li>
                      <li className="list-style-custom">
                        World class Infrastructure
                      </li>
                      <li className="list-style-custom">
                        Political and social stability
                      </li>
                    </div>
                    <div className="col-6">
                      <li className="list-style-custom">
                        High demand for real estate
                      </li>
                      <li className="list-style-custom">
                        Favorable business regulations
                      </li>
                      <li className="list-style-custom">Relaxed Visa Rules</li>
                    </div>
                  </div>
                </ul>
                <button className="custom-btn-2 h-75 mt20">Contact Us</button>
              </div>
              <div className="col-12 my-auto px30 pc-hide">
                <p className="text-dark text-start fz20 fw500 mb10">
                  Why Dubai
                </p>
                <p className="text-dark text-start fw300 fz20 mb0 color-gold">
                  Best Opportunity to invest in Dubai
                </p>
                <p className="text-start mb30 mt0 font-style-2 fw400 fz20 lh-sm">
                  Throughout the years, land financial specialists have earned
                  unrivaled capital returns in the worldwide property showcase.
                  Today, Dubai&apos;s land market is comparable to that of New
                  York or London. It is controlled and maintainable.
                </p>
                <ul className="p0">
                  <div className="row">
                    <div className="col-6">
                      <li className="list-style-custom">
                        High return on investment (ROI)
                      </li>
                      <li className="list-style-custom">
                        World class Infrastructure
                      </li>
                      <li className="list-style-custom">
                        Political and social stability
                      </li>
                    </div>
                    <div className="col-6">
                      <li className="list-style-custom">
                        High demand for real estate
                      </li>
                      <li className="list-style-custom">
                        Favorable business regulations
                      </li>
                      <li className="list-style-custom">Relaxed Visa Rules</li>
                    </div>
                  </div>
                </ul>
                <button className="custom-btn-2 h-75 mt20 mobile-hide">
                  Contact Us
                </button>
                <div className="w-100 d-flex justify-content-center">
                  <button className="custom-btn-2 h-75 mt20">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p0">
            <Image
              src={"/images/why-dubai/dubai.avif"}
              className="w-100 h-100 cover"
              height={600}
              width={1000}
              alt="in focus"
            />
          </div>
        </div>
      </section>

      {/* Start Our Footer */}
      <section className="footer-style1 at-home2 pb-0 pt40">
        <Footer />
      </section>
      <div className="pc-hide bottom-navigation-bar-mobile w-100">
        <BottomNavigationMobile />
      </div>
      {/* End Our Footer */}
    </>
  );
};

export default HomePage;
