import React, { useEffect, useState } from 'react';

const useDropdownHook = (data, { uniqueKey = 'id', loading = false } = {}) => {
  // const { dropzone, uniqueKey } = config;
  const [items, setItems] = useState([]);
  const [dropzoneItems, setDropzoneItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState();
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (data) {
      reOrganizedItems();
    }
  }, [data]);

  const reOrganizedItems = () => {
    setItems([...data]);
    setDropzoneItems([]);
    setSelectedItem(undefined);
    setSearch('');
  };

  const addItem = item => {
    console.log(item);
    setDropzoneItems(state => [...state, item]);
    setItems(state =>
      state.filter(prev => prev?.[uniqueKey] !== item?.[uniqueKey]),
    );
  };
  const removeItem = item => {
    console.log(item);
    setDropzoneItems(state =>
      state.filter(prev => prev?.[uniqueKey] !== item?.[uniqueKey]),
    );
    setItems(state => [...state, item]);
  };

  const reset = () => {
    setDropzoneItems([]);
    setItems([]);
    setSearch('');
    setSelectedItem(null);
  };
  return {
    items,
    dropzoneItems,
    addItem,
    removeItem,
    setItems,
    setDropzoneItems,
    selectedItem,
    setSelectedItem,
    search,
    loading,
    setSearch,
    reset,
  };
};

export default useDropdownHook;
