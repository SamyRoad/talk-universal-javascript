import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import App from '../components/App';
import ItemList from '../components/ItemList';
import { toggleLike, fetchItems } from '../actions/items';

const propTypes = {
  items: PropTypes.array,
};

const defaultProps = {
  items: [],
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.handleItemLikeClick = this.handleItemLikeClick.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchItems());
  }

  handleItemLikeClick(item) {
    const { dispatch } = this.props;

    dispatch(toggleLike(item.id));
  }

  render() {
    const { items } = this.props;

    return (
      <App>
        <ItemList
          items={items}
          handleItemLikeClick={ this.handleItemLikeClick }
        />
      </App>
    );
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(
  mapStateToProps
)(Home);
