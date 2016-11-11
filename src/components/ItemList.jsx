import React, { PropTypes } from 'react';
import Item from './Item';

const propTypes = {
  items: PropTypes.array.isRequired,
};

const ItemList = ({
  items,
}) => (
  <div>
    { items.map(item =>
      <Item
        key={item.id}
        {...item}
      />
    ) }
  </div>
);

ItemList.propTypes = propTypes;

export default ItemList;
