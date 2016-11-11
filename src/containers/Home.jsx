import React, { Component, PropTypes } from 'react';

import App from '../components/App';
import ItemList from '../components/ItemList';

const propTypes = {
  items: PropTypes.array,
};

class Home extends Component {
  render() {
    return (
      <App>
        <ItemList
          items={[
            {
              id: 1,
              title: 'Title 1',
              imageUrl: `/images/fake/items/1.jpg`,
              author: {
                avatarUrl: `/images/fake/avatars/1.jpg`,
                name: 'Author 1',
              },
              isLiked: false,
              likesCount: 3,
              description: 'Lorem ipsum ...',
            },
            {
              id: 2,
              title: 'Title 2',
              imageUrl: `/images/fake/items/2.jpg`,
              author: {
                avatarUrl: `/images/fake/avatars/2.jpg`,
                name: 'Author 2',
              },
              isLiked: true,
              likesCount: 13,
              description: 'Lorem ipsum ...',
            },
          ]}
        />
      </App>
    );
  }
}

Home.propTypes = propTypes;

export default Home;
