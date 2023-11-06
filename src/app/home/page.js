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
import Footer from "@/components/home/home-v8/footer";
import Cta from "@/components/home/home-v2/Cta";

import Link from "next/link";
import AllBannersHome from "./all_banners";
import PropertyListing from "@/components/home/home-v7/PropertyListing";
import ProjectsListing from "@/components/home/featured-projects/ProgectsListing";
import FeatureProperties from "@/components/home/home-v6/FeatureProperties";
import Image from "next/image";

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

      <section className="bg-dark pb60 pb30-md pt0">
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

          <div className="nav-item d-flex justify-content-center mt30">
            <button className="custom-btn">Buying Guide</button>
            <button className="custom-btn">Talk To Us</button>
            <button className="custom-btn">List Your Property</button>
          </div>
        </div>
      </section>

      <PropertyListing />

      <section className="p0 bg-dark">
        <div className="container top-border-grey pt30">
          <div className="nav justify-content-between">
            <p className="text-light text-start fz20 mb10">In Focus</p>
            <li
              className="nav-item d-flex align-items-center "
              role="presentation"
            >
              <Link className="custom-link" href={"#"}>
                Learn More
              </Link>
            </li>
          </div>
          <p className="text-light text-start mb20 mt10">
            This architectural masterpiece is characterized by its slim and
            elegant form, and its design emulates the brilliance and sharpness
            of diamonds by incorporating an angled glass façade. This serves to
            reinforce the significant trade mission of DMCC and highlights
            Dubai&apos;s status as a premier global business hub.
          </p>
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
                SO/UPTOWN DUBAI RESIDENCES
              </h2>
              <p className="text-light">Residential, Retail and Hotel</p>
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

      <section className="bg-dark pt30 pb50">
        <div className="container pt30 top-border-grey">
          <div className="nav justify-content-between">
            <p className="text-light text-start fz20 mb10">Premium Rentals</p>
            <li
              className="nav-item d-flex align-items-center "
              role="presentation"
            >
              <Link className="custom-link" href={"#"}>
                See All
              </Link>
            </li>
          </div>
          <p className="text-light text-start mb30 mt0">
            Discover Dubai&apos;s finest: Explore our collection of premium
            rental properties, where luxury meets lifestyle.
          </p>

          <div className="row">
            <FeatureProperties />
          </div>
        </div>
      </section>
      <section className="w-100 p0">
        <div className="row">
          <div className="col-lg-6">
            <div className="row h-100 pt30 pb30">
              <div className="col-3"></div>
              <div className="col-9 my-auto pr50">
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
      {/* End Our Footer */}
    </>
  );
};

export default HomePage;
