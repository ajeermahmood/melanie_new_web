"use client";
import Select from "react-select";

const SelectDropdown = ({ setSelectedPropType }) => {
  const catOptions = [
    { label: "All", value: "all" },
    { label: "Villa", value: 1 },
    { label: "Apartment", value: 2 },
    { label: "Duplex", value: 4 },
    { label: "Townhouse", value: 14 },
    { label: "Project", value: 18 },
    { label: "Office", value: 15 },
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

export default SelectDropdown;
