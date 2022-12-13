import React, { useState } from 'react';
import ProductList from '../containers/ProductList';
import Filters from '../components/Filters';
import { FaInfoCircle } from 'react-icons/fa';
import FilterSelect from '../components/FilterSelect';
import products from '../data.json';
import { ProductI, selectedFilter, selectedI } from '../utils/types';

const filtersList = {
  primaryTag: [
    { label: 'F&B', selected: false },
    { label: 'Female apparel & accessories', selected: false },
    { label: 'Beauty & skincare', selected: false }
  ],
  secondaryTag: [
    { label: 'Health & wellness', selected: false },
    { label: 'Plant-Based', selected: false },
    { label: 'Organic', selected: false }
  ]
};

function HomePage() {  
  const [show, setShow] = useState(true);
  // const [showModal, setShowModal] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  // const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selected, setSelected] = useState<selectedFilter>(filtersList);

  const [productS, setProductS] = useState<ProductI[]>(products.products);
  const [filterType, setFilterType] = useState('');
  const [filters, setFilters] = useState<selectedI[]>([
    {
      label: 'Primary tag',
      selected: false
    },
    { label: 'Secondary tag', selected: false }
  ]);

  const addFilterHandler = () => {
    setFilters(filters);
  };

  const onClickHandler = (filter: selectedI) => {
    setFilterType(filter.label);
    setShowFilter(!showFilter);
  };

  const onChangeHandler = (value: selectedI[]) => {
    console.log(selected, 'selected');

    if (value.length === 0) {
      setProductS(products.products);
      return;
    }

    if (filterType === 'Primary tag') {
      setSelected({
        ...selected,
        primaryTag: value
      });

      const list = productS.filter((item) => {
        let included = false;
        for (let index = 0; index < value.length; index++) {
          included = item.primaryTag.includes(value[index].label);
        }

        return included;
      });
      setProductS(list);
    }

    if (filterType === 'Secondary tag') {
      setSelected({
        ...selected,
        secondaryTag: value
      });

      const list = productS.filter((item) => {
        let included = false;
        for (let index = 0; index < value.length; index++) {
          included = item.secondaryTag.includes(value[index].label);
        }

        return included;
      });
      setProductS(list);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-left">
        <div
          className="flex justify-left items-center opacity-0 hover:opacity-100 bg-opacity-90 duration-100"
          onClick={() => setShow(!show)}
        >
          <div className="mr-2">
            <FaInfoCircle />
          </div>{' '}
          <button className="rounded-sm hover:bg-neutral-300 focus:outline-none w-fit px-3 py-2">
            {show ? 'Hide' : 'Show'} description
          </button>
        </div>
        <div className="font-bold text-4xl">Vantient’s Brands Listing</div>
        {show && (
          <div className="font-normal text-lg">Discover boutique brands and earn rewards by engaging with them.</div>
        )}
      </div>
      <Filters filters={filters} addFilterHandler={addFilterHandler} onClickHandler={onClickHandler} />
      {showFilter && (
        <FilterSelect
          selectedList={filterType === 'Primary tag' ? selected.primaryTag : selected.secondaryTag}
          onChangeHandler={onChangeHandler}
        />
      )}
      <ProductList products={productS} />
    </div>
  );
}

export default HomePage;
