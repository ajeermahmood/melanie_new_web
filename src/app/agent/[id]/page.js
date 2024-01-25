import BottomNavigationMobile2 from "@/app/home/bottom_nav_mobile_2";
import DefaultHeader from "@/components/common/DefaultHeader";
import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/home/home-v8/footer";

import ProfessionalInfo from "@/components/property/ProfessionalInfo";
import SingleAgencyCta from "@/components/property/agency-single/SingleAgencyCta";

export async function getAgent(id) {
  const res = await fetch(
    `https://indusspeciality.com/api/melanie/home/get_agent_details.php`,
    {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify({
        id: id,
      }),
    }
  );
  const data = await res.json();

  return data;
}

export async function generateMetadata({ params }) {
  const staticData = await fetch(
    `https://indusspeciality.com/api/melanie/home/get_agent_details.php`,
    {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify({
        id: params.id,
      }),
    }
  );

  const data = await staticData.json();
  return {
    title: `${data.name} | Indus Real Estate LLC Dubai`,
  };
}

async function AboutAgentPage({ params }) {
  const data = await getAgent(params.id);

  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Agent Single Section Area */}
      <section className="agent-single pt50 bg-white01">
        <div className="cta-agent bgc-dark mx-auto maxw1600 pt60 pb60 bdrs12 position-relative mx20-lg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7">
                <SingleAgencyCta agent={data} />
              </div>
            </div>
          </div>
        </div>
        {/* End cta-agent */}

        <div className="container">
          <div className="row wow fadeInUp" data-aos-delay="300">
            <div className="col-lg-8 pr40 pr20-lg">
              {data.description != "" ? (
                <div className="row">
                  <div className="col-lg-12">
                    <div className="agent-single-details mt30 pb30 bdrb1">
                      <h6 className="fz17 mb30">About {data.name}</h6>
                      <p className="text">{data.description}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
            {/* End .col-lg-8 */}

            <div className="col-lg-4">
              {/* <div className="agent-single-form home8-contact-form default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white position-relative">
                <h4 className="form-title mb25">Contact Form</h4>
                <FormContact />
              </div> */}
              <div className="agen-personal-info position-relative bgc-white default-box-shadow1 bdrs12 p30 mt30">
                <ProfessionalInfo data={data} />
              </div>
            </div>
            {/* End .col-lg-4 */}
          </div>
        </div>
      </section>
      {/* End Agent Single Section Area */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      <div className="pc-hide bottom-navigation-bar-mobile w-100">
        <BottomNavigationMobile2 />
      </div>
    </>
  );
}

export default AboutAgentPage;
