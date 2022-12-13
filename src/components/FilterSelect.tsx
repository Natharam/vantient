import React, { useState } from 'react';
import { selectedI } from '../utils/types';
import Checkbox from './Checkbox';

function FilterSelect({ selectedList, onChangeHandler }: { selectedList: selectedI[]; onChangeHandler: Function }) {
  const onSelect = (e: { target: { value: string } }) => {
    const index = selectedList.findIndex((item) => (item.label === e.target.value));
    console.log(selectedList, 'FilterSelect', e.target.value, index);

    selectedList[index].selected = !selectedList[index].selected;
    console.log(selectedList, 'FilterSelect');

    onChangeHandler(selectedList);
  };

  return (
    <div>
      {selectedList.map((item) => (
        <div className="flex items-left justify-left cursor-pointer">
          <Checkbox item={item} onSelect={onSelect} />
        </div>
      ))}
    </div>
  );
}

export default FilterSelect;
