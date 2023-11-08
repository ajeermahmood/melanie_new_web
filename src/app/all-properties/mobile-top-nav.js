"use client";

const MobileNavTop = ({ filterFunctions }) => {
  return (
    <>
      <form className="search-bar-form w-100 pc-hide">
        <i className="fa fa-search search-icon" />
        <input
          className="search-bar-filter w-100"
          type="text"
          placeholder="Search Properties"
          onChange={(e) => filterFunctions.setSearch(e.target.value)}
          value={filterFunctions.search}
        />
      </form>
    </>
  );
};

export default MobileNavTop;
