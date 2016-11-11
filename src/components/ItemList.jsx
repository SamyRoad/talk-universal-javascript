import React, { PropTypes } from 'react';
import Item from './Item';

const propTypes = {
  items: PropTypes.array.isRequired,
  handleItemLikeClick: PropTypes.func.isRequired,
};

const ItemList = ({
  items,
  handleItemLikeClick,
}) => (
  <div>
    { items.map(item =>
      <Item
        key={item.id}
        {...item}
        handleLikeClick={() => handleItemLikeClick(item)}
      />
    ) }
  </div>
);

ItemList.propTypes = propTypes;

export default ItemList;
