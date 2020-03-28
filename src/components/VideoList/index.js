import React from 'react';
import { List } from 'antd';

import Item from './Item';

export default ({ videos }) => {
  return (
    <List
      itemLayout='vertical'
      size='small'
      dataSource={videos}
      renderItem={item => <Item data={item} />}
    />
  );
};
