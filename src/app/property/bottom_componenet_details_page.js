"use client";

export default function BottomNavDetailsPage({ data }) {
  const currencyFormatter = new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    minimumFractionDigits: 0,
  });

  return (
    <>
      <div className="bg-light h70 w-100 top-border-grey-2 row m-0">
        <div className="col-8 my-auto">
          <p className="mb0 lh-base fw400 color-black-grey-2">
            For {data.status}
          </p>
          <p className="mb0 fw600">
            {data.price != "0"
              ? currencyFormatter.format(data.price)
              : "Price On Application"}
          </p>
        </div>
        <div className="col-4 d-flex align-items-center justify-content-end">
          <button className="custom-btn-3">Contact Us</button>
        </div>
      </div>
    </>
  );
}
