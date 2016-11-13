import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { toggleLike, fetchItems } from '../actions/items';
import ItemFullDetail from '../components/ItemDetail';

const propTypes = {
  item: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

class ItemDetail extends Component {
  constructor(props) {
    super(props);

    this.handleItemLikeClick = this.handleItemLikeClick.bind(this);
  }

  handleItemLikeClick(id) {
    const { dispatch } = this.props;

    dispatch(toggleLike(id));
  }

  static fetchData(dispatch) {
    return Promise.all([
      dispatch(fetchItems()),
    ]);
  }

  render() {
    const { item } = this.props;

    return (
      <ItemFullDetail
        {...item}
        handleLikeClick={ this.handleItemLikeClick }
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const selectedItemId = parseInt(ownProps.params.id, 10);

  const item = state.items.find(i => i.id === selectedItemId);

  return { item };
}

ItemDetail.propTypes = propTypes;

export default connect(
  mapStateToProps
)(ItemDetail);
