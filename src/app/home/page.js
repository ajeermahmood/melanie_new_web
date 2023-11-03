import MobileMenu from "@/components/common/mobile-menu";
import Partner from "@/components/common/Partner";
import Agents from "@/components/home/home-v2/Agents";
import Explore from "@/components/home/home-v2/Explore";
import ExploreCities from "@/components/home/home-v2/ExploreCities";
import FeaturedListings from "@/components/home/home-v2/FeatuerdListings";
import Header from "@/components/home/home-v2/Header";
import Testimonial from "@/components/home/home-v2/Testimonial";
import About from "@/components/home/home-v2/about";
import Hero from "@/components/home/home-v2/hero";
import React from "react";
import Footer from "@/components/common/default-footer";
import Cta from "@/components/home/home-v2/Cta";

import Link from "next/link";
import AllBannersHome from "./all_banners";
import PropertyListing from "@/components/home/home-v7/PropertyListing";
import ProjectsListing from "@/components/home/featured-projects/ProgectsListing";
import Image from "next/image";

export const metadata = {
  title: "Premium Indus Real Estate",
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
      <section className="home-banner-style2 p0 pb150">
        <div className="home-style2">
          <AllBannersHome />
          <div className="container maxw1600">
            <div className="row">
              <div className="col-xl-10 mx-auto">
                <Hero />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt200 bg-dark pb50">
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
            the desired results, whether it's making a sound property
            investment, finding the perfect property, or obtaining the accurate
            price for your property.
          </p>
        </div>
      </section>

      <PropertyListing />

      <section className="p0 bg-dark">
        <div className="container top-border-grey pt20">
          <p className="text-light text-start fz20 mb20">In Focus</p>
        </div>
        <Image
          style={{
            width: "100%",
          }}
          src={
            "https://premium.indusre.com/Admin/pages/forms/uploads/property/32_1771128471555195_main_.webp"
          }
          className="w-100 h-70 cover"
          height={600}
          width={1000}
          alt="in focus"
        />
        <div
          className="home-banner-slider w-100 position-absolute"
          style={{
            zIndex: 1,
            top: "4.8rem",
            height: "89%",
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
              <h2 className="banner-title text-light fw400 mb0">
                SO/UPTOWN DUBAI RESIDENCES
              </h2>
              <p className="text-light fz20">Residential, Retail and Hotel</p>
              <a
                target="_blank"
                href="#"
                className="ud-btn banner-btn fw500 btn-thm mt10 mt0-xs"
              >
                VIEW PROPERTY
              </a>
            </div>

            <div className="col-sm-6 col-xl-4 offset-xl-3"></div>
          </div>
        </div>
      </section>

      <ProjectsListing />

      {/* Start Our Footer */}
      <section className="footer-style1 at-home2 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default HomePage;
