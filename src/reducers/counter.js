const counter = (state = 0, action) => {
  switch (action.type) {
    case "ONE":
      return state + 1;
    default:
      return state;
  }
};
export default counter;
