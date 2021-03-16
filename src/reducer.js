const initialState = {
  listOfItems: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        listOfItems: state.listOfItems.concat({ name: action.taskName }),
      };
    case "REMOVE_TASK":
      return {
        ...state,
        listOfItems: state.listOfItems.filter((el) => {
          return el.name != action.deleteElement;
        }),
      };
  }
  return state;
};
export default reducer;
