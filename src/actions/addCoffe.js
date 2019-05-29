import uuid from "uuid";
export const addCoffe = ({
  coffeName = "",
  date = "",
  price = "",
  id = "",
  bool = false
} = {}) => {
  return {
    type: "ADD_COFFE",
    coffe: {
      coffeName,
      date,
      price,
      id: uuid(),
      bool
    }
  };
};

export const deletCoffe = (id = "") => {
  return {
    type: "DELETE_COFFE",
    id
  };
};
