export const filterByText = (text = "") => {
  return {
    type: "FILTER_BY_TEXT",
    text
  };
};
