import React, { useEffect, useRef, useState } from 'react';
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
  const isFirstRender = useRef(true);
  const [show, setShow] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [selected, setSelected] = useState<selectedFilter>(filtersList);

  const [productS, setProductS] = useState<ProductI[]>(products.products);
  const [filterProducts, setFilterProducts] = useState<ProductI[]>(products.products);

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

  const onChangeHandler = (newSelectedList: selectedI[]) => {
    if (filterType === 'Primary tag') {
      setSelected({
        ...selected,
        primaryTag: newSelectedList
      });
    }

    if (filterType === 'Secondary tag') {
      setSelected({
        ...selected,
        secondaryTag: newSelectedList
      });
    }
  };

  const filterData = (selected: selectedFilter) => {
    let productsList = [...productS];

    for (let index = 0; index < selected.primaryTag.length; index++) {
      if (selected.primaryTag[index].selected) {
        const list = productsList.filter((item) => {
          return item.primaryTag.includes(selected.primaryTag[index].label);
        });
        productsList = [...list];
      }
    }

    for (let index = 0; index < selected.secondaryTag.length; index++) {
      if (selected.secondaryTag[index].selected) {
        const list = productsList.filter((item) => {
          return item.secondaryTag.includes(selected.secondaryTag[index].label);
        });
        productsList = [...list];
      }
    }

    setFilterProducts(productsList);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false; // toggle flag after first render/mounting
      return;
    }
    filterData(selected);
  }, [selected]);

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
      <ProductList products={filterProducts} />
    </div>
  );
}

export default HomePage;
