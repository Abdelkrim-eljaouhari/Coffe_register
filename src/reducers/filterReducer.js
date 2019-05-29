export default (state = "", action) => {
  switch (action.type) {
    case "FILTER_BY_TEXT":
      return action.text;
    default:
      return state;
  }
};
