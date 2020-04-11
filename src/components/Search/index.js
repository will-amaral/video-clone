import React, { useEffect } from 'react';
import { Input } from 'antd';

import styles from 'styles';

export default ({ setSearch, setSelected, theme }) => {
  const { Search } = Input;

  const _onSearch = (value) => {
    setSelected(false);
    setSearch(value);
  };

  useEffect(() => {
    const input = document.querySelector('input.ant-input');
    if (theme) {
      input.style.background = '#0e0d0d';
    } else {
      input.style.background = 'white';
    }
  }, [theme]);

  return (
    <Search
      style={styles.search}
      placeholder='Pesquisar'
      onSearch={_onSearch}
      enterButton
      size='large'
    />
  );
};
