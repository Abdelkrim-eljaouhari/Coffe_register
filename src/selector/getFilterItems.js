export default (addCoffe, filters) => {
  if (filters !== "Select all" && filters) {
    return addCoffe.filter(coffe => {
      return coffe.coffeName === filters;
    });
  } else {
    return addCoffe;
  }
};
