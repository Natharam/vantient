import React, { useState } from "react";
import { selectedI } from "../utils/types";

function FilterSelect({
  selectedList,
  onChangeHandler
}: {
  selectedList: selectedI[];
  onChangeHandler: Function;
}) {
  const onSelect = (e: { target: { value: string } }) => {
    const index = selectedList.findIndex((item) => (item.label = e.target.value));

    const newSelected = [...selectedList];
    newSelected[index].selected = !newSelected[index].selected;

    onChangeHandler(newSelected);
  };

  return (
    <div>
      {selectedList.map((item) => (
        <div className="flex items-left justify-left cursor-pointer">
          <input type="checkbox" id="filterItem" name={item.label} value={item.label} onChange={(e) => onSelect(e)} />
          <label htmlFor="filterItem" className="ml-2">
            {item.label}
          </label>
        </div>
      ))}
    </div>
  );
}

export default FilterSelect;
