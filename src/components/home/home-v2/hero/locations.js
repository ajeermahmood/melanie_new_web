"use client";
import Select from "react-select";

const LocationsDropdown = ({ setSelectedPropType }) => {
  const catOptions = [
    { label: "All Locations", value: "all" },
    { label: "Dubai Marina", value: "marina" },
    { label: "Downtown Dubai", value: "downtown" },
    { label: "Palm Jumeirah", value: "palm jumeirah" },
    { label: "Uptown Dubai", value: "uptown Dubai" },
  ];

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#c49f5a"
          : isHovered
          ? "#c49f5a12"
          : isFocused
          ? "#c49f5a12"
          : undefined,
      };
    },
  };

  return (
    <>
      <Select
        defaultValue={[catOptions[0]]}
        name="colors"
        options={catOptions}
        styles={customStyles}
        className="text-start select-borderless"
        classNamePrefix="select"
        required
        isSearchable={false}
        onChange={(e) => setSelectedPropType(e.value)}
      />
    </>
  );
};

export default LocationsDropdown;
