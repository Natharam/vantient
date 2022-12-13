import React, { useState } from "react";
import { FaSearch, FaListUl, FaAngleDown, FaPlus } from "react-icons/fa";
import { selectedI } from "../utils/types";

function Filters({
  filters,
  addFilterHandler,
  onClickHandler
}: {
  filters: selectedI[];
  addFilterHandler: Function;
  onClickHandler: Function;
}) {
  const [selectedFilterType, setSelectedFilterType] = useState<string[]>([]);

  const onSelectHandler = (filter: selectedI) => {
    if (selectedFilterType.length === 0) {
      setSelectedFilterType([filter.label]);
      onClickHandler(filter, [filter.label]);
    } else {
      if (selectedFilterType.includes(filter.label)) {
        setSelectedFilterType([]);
        onClickHandler(filter, []);
      } else {
        setSelectedFilterType([filter.label]);
        onClickHandler(filter, [filter.label]);
      }
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mt-4">
        <div className="flex justify-start items-center">
          <div className="py-1 mr-3 cursor-pointer">Gallery</div>
          <div className="mr-3 py-1 px-2 cursor-pointer">Internal listing</div>
          <div className="py-2 px-2 cursor-pointer">Table</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="mr-3 py-3 px-2 cursor-pointer">Filter</div>
          <div className="mr-3 py-3 px-2 cursor-pointer">Sort</div>
          <div className="py-3 px-2 cursor-pointer">
            <FaSearch />
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center">
        {filters.map((filter) => (
          <div
            className="flex justify-start items-center py-1 px-3 border-2 mr-2 rounded-full"
            id="menu-button"
            // aria-expanded="true"
            aria-haspopup="true"
            onClick={() => onSelectHandler(filter)}
          >
            <FaListUl /> <div className="px-2 cursor-pointer">{filter.label}</div> <FaAngleDown />
          </div>
        ))}
        <div
          onClick={() => addFilterHandler()}
          className="flex justify-start items-center hover:bg-gray-200 py-1 px-3 rounded-full cursor-pointer"
        >
          <FaPlus /> <div className="ml-2">Add filters</div>
        </div>
      </div>
    </>
  );
}

export default Filters;
