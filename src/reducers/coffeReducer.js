const coffeReducer = [];

export default (state = coffeReducer, action) => {
  switch (action.type) {
    case "ADD_COFFE":
      const newState = [...state];
      const { coffeName, date, price, id, bool } = action.coffe;
      return newState.concat({
        coffeName,
        date,
        price,
        id,
        bool
      });
    case "DELETE_COFFE":
      return state.filter(coffe => coffe.id !== action.id);
    default:
      return state;
  }
};
