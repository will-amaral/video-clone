import React from 'react';
import { Switch } from 'antd';

export default ({ setTheme }) => {
  const _onChange = checked => setTheme(checked);

  return (
    <Switch
      style={{ float: 'right' }}
      checkedChildren='Dark'
      unCheckedChildren='Light'
      onChange={_onChange}
    />
  );
};
