const initialState = {
  listOfItems: [{ name: "Barburka" }],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        listOfItems: state.listOfItems.concat({ name: action.taskName }),
      };
  }
  return state;
};
export default reducer;
