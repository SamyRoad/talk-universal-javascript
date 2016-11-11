import React, { Component, PropTypes } from 'react';

import App from '../components/App';
import ItemList from '../components/ItemList';

const propTypes = {
  items: PropTypes.array,
};

const defaultProps = {
  items: [],
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.items,
    };

    this.handleItemLikeClick = this.handleItemLikeClick.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:4000/items')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  handleItemLikeClick(item) {
    const { items } = this.state;

    this.setState({
      items: items.map(i => {
        if (i.id === item.id) {
          i.isLiked = !i.isLiked;
          i.likesCount = i.likesCount + (i.isLiked ? 1 : -1);
        }

        return i;
      }),
    });
  }

  render() {
    const { items } = this.state;

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

export default Home;
