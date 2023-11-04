"use client";

import Link from "next/link";
import ProjectsListings from "./projects_listings";

export default function ProjectsListing() {
  // const [pageData, setPageData] = useState([]);

  // useEffect(() => {
  //   getFeaturedProperties().then((res) => {
  //     setPageData(res);
  //     console.log(res);
  //   });
  // }, []);
  return (
    <section className="bg-dark pt30 pb50">
      <div className="container pt30 top-border-grey">
        <div className="nav justify-content-between">
          <p className="text-light text-start fz20 mb10">Investor Deals</p>
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
          Prime Dubai Investments{" · "}Explore Lucrative Real Estate Deals
        </p>

        <div className="row">
          <ProjectsListings />
        </div>
      </div>
    </section>
  );
}
