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
  }

  componentDidMount() {
    fetch('http://localhost:4000/items')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  render() {
    const { items } = this.state;

    return (
      <App>
        <ItemList
          items={items}
        />
      </App>
    );
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
