const item = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_LIKE':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        isLiked: !state.isLiked,
        likesCount: state.likesCount + (state.isLiked ? -1 : 1),
      };
    default:
      return state;
  }
};

const items = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_LIKE':
      return state.map(i => item(i, action));
    case 'RECEIVE_ITEMS':
      return [
        ...action.items,
      ];
    default:
      return state;
  }
};

export default items;
