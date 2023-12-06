"use client";

import { getAllPropertyCategories } from "@/api/listings";
import React, { useEffect, useState } from "react";

const PropertyType = ({ filterFunctions }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getAllPropertyCategories().then((res) => {
      setOptions(
        res.map((c) => {
          return {
            value: c.cat_id,
            label: c.cat_name,
          };
        })
      );
    });
  }, []);

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
            !filterFunctions?.propertyTypes.length
              ? "bg-gold border-gold"
              : "border-grey-2"
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
