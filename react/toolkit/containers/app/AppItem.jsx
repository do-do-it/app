import React from 'react';
import './AppItem.less'

const AppItem = props => {
  const { name } = props
  return (
    <div className='appItem'>
      <div className='appItem__name'>{name}</div>
    </div>
  );
}
 
export default AppItem;