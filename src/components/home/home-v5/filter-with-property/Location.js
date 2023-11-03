"use client";
import Select from "react-select";

const Location = () => {
  const inqueryType = [
    { value: "New York", label: "New York" },
    { value: "Los Angeles", label: "Los Angeles" },
    { value: "London", label: "London" },
    { value: "Paris", label: "Paris" },
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
        defaultValue={[inqueryType[0]]}
        name="colors"
        options={inqueryType}
        styles={customStyles}
        className="text-start select-borderless"
        classNamePrefix="select"
        required
        isClearable={false}
      />
    </>
  );
};

export default Location;
