import React from "react";

const ProfessionalInfo = ({ data }) => {
  var professionalInfoData = [
    { label: "Nationality", content: data.nationality },
    { label: "BRN", content: data.brn },
  ];

  if (data.exp_since != "0") {
    professionalInfoData.push({
      label: "Experience Since",
      content: data.exp_since,
    });
  }

  if (JSON.parse(data.languages).length != 0) {
    professionalInfoData.push({
      label: "Languages",
      content: JSON.parse(data.languages).join(", "),
    });
  }
  if (JSON.parse(data.areas).length != 0) {
    professionalInfoData.push({
      label: "Areas",
      content: JSON.parse(data.areas).join(", "),
    });
  }
  return (
    <div className="widget-wrapper mb-0">
      <h6 className="title fz17 mb35">More Information</h6>
      {professionalInfoData.map((info, index) => (
        <div
          key={index}
          className="list-news-style d-flex align-items-center justify-content-between mb10"
        >
          <div className="flex-shrink-0">
            <h6 className="fz14 mb-0">{info.label}</h6>
          </div>
          <div className="news-content flex-shrink-1 ms-3 text-end">
            <p className="text mb-0 fz14">{info.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalInfo;
