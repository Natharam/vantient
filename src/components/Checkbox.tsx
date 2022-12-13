import React from 'react';

function Checkbox({ item, onSelect }: any) {
  const onChangeHandler = (e: any) => {
    onSelect(e);
  };

  return (
    <div>
      <input
        type="checkbox"
        id="filterItem"
        name={item.label}
        value={item.label}
        checked={item.selected}
        onChange={(e) => onChangeHandler(e)}
      />
      <label htmlFor="filterItem" className="ml-2">
        {item.label}
      </label>
    </div>
  );
}

export default Checkbox;
