import Image from "next/image";
import Link from "next/link";
import ContactMeta from "./ContactMeta";
import AppWidget from "./AppWidget";
import Social from "./Social";
import Subscribe from "./Subscribe";
import MenuWidget from "./MenuWidget";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row bb-white-light pb10 mb30">
          <div className="col-sm-5">
            <div className="footer-widget text-center text-sm-start">
              <Link className="footer-logo" href="/">
                <Image
                  width={200}
                  height={44}
                  className="mb10"
                  src="/images/logo/logo-1.svg"
                  alt=""
                />
              </Link>
            </div>
          </div>
          {/* End .col */}

          <div className="col-sm-7">
            <div className="social-widget text-center text-sm-end">
              <Social />
            </div>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}

        <div className="row">
          <div className="col-md-6">
            <div className="row justify-content-between">
              <MenuWidget />
            </div>
          </div>
          {/* End .col */}

          <div className="col-md-6 col-lg-4 offset-lg-2">
            <div className="footer-widget">
              <ContactMeta />
              <div className="footer-widget">
                <div className="mailchimp-widget mb30">
                  <h6 className="title text-white mb20 fw300">
                    Keep Yourself Up to Date
                  </h6>
                  <Subscribe />
                </div>
              </div>

              {/* <AppWidget /> */}
            </div>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}

      <Copyright />
      {/* End copyright */}
    </>
  );
};

export default Footer;
