"use client";

import React from "react";

const PropertyType = ({ filterFunctions }) => {
  const options = [
    { label: "Villa", value: 1 },
    { label: "Apartment", value: 2 },
    { label: "Duplex", value: 4 },
    { label: "Townhouse", value: 14 },
    { label: "Project", value: 18 },
    { label: "Office", value: 15 },
  ];

  return (
    <>
      <label className="custom_checkbox color-black-grey-2">
        All
        <input
          type="checkbox"
          checked={!filterFunctions?.propertyTypes.length}
          onChange={(e) => {
            filterFunctions?.setPropertyTypes([]);
          }}
        />
        <span
          className={`checkmark  ${
            !filterFunctions?.propertyTypes.length ? "bg-gold border-gold" : "border-grey-2"
          }`}
        />
      </label>
      {options.map((option, index) => (
        <label className="custom_checkbox color-black-grey-2" key={index}>
          {option.label}
          <input
            type="checkbox"
            checked={filterFunctions?.propertyTypes.includes(option.value)}
            onChange={(e) => {
              filterFunctions.handlepropertyTypes(option.value);
            }}
          />
          <span
            className={`checkmark  ${
              filterFunctions?.propertyTypes.includes(option.value)
                ? "bg-gold border-gold"
                : "border-grey-2"
            }`}
          />
        </label>
      ))}
    </>
  );
};

export default PropertyType;
