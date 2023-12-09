import DefaultHeader from "@/components/common/DefaultHeader";

import Footer from "@/components/home/home-v8/footer";

import ProperteyFiltering from "@/components/listing/grid-view/grid-full-3-col/ProperteyFiltering";

import BottomNavigationMobile2 from "../home/bottom_nav_mobile_2";

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
      {/* <MobileMenu /> */}
      {/* End Mobile Nav  */}

      {/* Breadcumb Sections */}
      <section className="breadcumb-section bgc-f7 bg-white01 pt0 pb0 mobile-hide">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title fw400 text-center">Premium Rentals</h2>
                {/* <PremiumRentalsTopText /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcumb Sections */}

      {/* Property Filtering */}
      <ProperteyFiltering status={"rent"} deals={"no"} />
      {/* Property Filtering */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt25 pb-0">
        <Footer />
      </section>
      <div className="pc-hide bottom-navigation-bar-mobile w-100">
        <BottomNavigationMobile2 />
      </div>
      {/* End Our Footer */}
    </>
  );
};

export default PremiumSales;
