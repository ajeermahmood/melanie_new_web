"use client";

const PropertyHeader = ({ details }) => {
  return (
    <>
      <h2 className="sp-lg-title text-center mb20 fz35 fw400">
        {details.address}
      </h2>
      <div className="col-lg-8">
        <div className="single-property-content mb30-md">
          <div className="pd-meta mb15 d-md-flex align-items-center">
            <p className="fz15 mb-0 fw300 underline-text color-black-grey">
              {details.status}
            </p>
            <li className="arrow-after"></li>
            <p className="text fz15 mb-0 bdrrn-sm fw300 underline-text color-black-grey">
              Dubai
            </p>
            <li className="arrow-after"></li>
            <p className="text fz15 mb-0 bdrrn-sm fw300 underline-text color-black-grey">
              {details.cat_name}
            </p>
          </div>
          {/* <div className="property-meta d-flex align-items-center">
            <a className="text fz15" href="#">
              <i className="flaticon-bed pe-2 align-text-top" />
              {data.bed} bed
            </a>
            <a className="text ml20 fz15" href="#">
              <i className="flaticon-shower pe-2 align-text-top" />
              {data.bath} bath
            </a>
            <a className="text ml20 fz15" href="#">
              <i className="flaticon-expand pe-2 align-text-top" />
              {data.sqft} sqft
            </a>
          </div> */}
        </div>
      </div>
      {/* End .col-lg--8 */}

      <div className="col-lg-4">
        <div className="single-property-content">
          <div className="property-action text-lg-end">
            <div className="d-flex align-items-center justify-content-lg-end">
              <a className=" mr20" href="#">
                <span className="flaticon-like" />
              </a>
              <a className=" mr20" href="#">
                <span className="flaticon-new-tab" />
              </a>
              <a className=" mr20" href="#">
                <span className="flaticon-share-1" />
              </a>
              <a className="" href="#">
                <span className="flaticon-printer" />
              </a>
            </div>
            {/* <h3 className="price mb-0">{data.price}</h3> */}
            {/* <p className="text space fz15">
              $
              {(
                Number(data.price.split("$")[1].split(",").join("")) / data.sqft
              ).toFixed(2)}
              /sq ft
            </p> */}
          </div>
        </div>
      </div>
      {/* End .col-lg--4 */}
    </>
  );
};

export default PropertyHeader;
