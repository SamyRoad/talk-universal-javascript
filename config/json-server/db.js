var faker = require("faker");
var _ = require("lodash");

const getImageUrl = (n, subfolder) => {
  return `/images/fake/${subfolder}/${n % 23}.jpg`;
};

var createFakeItem = function(n) {
  return {
    id: n,
    title: faker.commerce.productName(),
    imageUrl: getImageUrl(n, 'items'),
    author: {
      avatarUrl: getImageUrl(n, 'avatars'),
      name: faker.name.firstName(),
    },
    isLiked: (faker.random.number(10) > 8) ? true : false,
    likesCount: faker.random.number(200) + 99,
    description: faker.lorem.paragraphs(),
  };
};

module.exports = function() {
  return {
    'items': _.times(48, createFakeItem),
  }
}
