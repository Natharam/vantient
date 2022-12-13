import React, { useState } from 'react';
import { selectedI } from '../utils/types';
import Checkbox from './Checkbox';

function FilterSelect({ selectedList, onChangeHandler }: { selectedList: selectedI[]; onChangeHandler: Function }) {
  const onSelect = (e: { target: { value: string } }) => {
    const index = selectedList.findIndex((item) => (item.label === e.target.value));
    selectedList[index].selected = !selectedList[index].selected;

    onChangeHandler(selectedList);
  };

  return (
    <div className="mt-3">
      {selectedList.map((item) => (
        <div className="flex items-left justify-left cursor-pointer">
          <Checkbox item={item} onSelect={onSelect} />
        </div>
      ))}
    </div>
  );
}

export default FilterSelect;
