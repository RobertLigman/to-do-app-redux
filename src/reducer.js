const initialState = {
  listOfItems: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        listOfItems: state.listOfItems.concat({
          name: action.taskName,
          accomplished: false,
        }),
      };
    case "REMOVE_TASK":
      return {
        ...state,
        listOfItems: state.listOfItems.filter((el) => {
          return el.name !== action.deleteElement;
        }),
      };
    case "ACCOMPLISHED_TASK": {
      const stateValue = state.listOfItems.find(
        (el) => el.name === action.taskName
      );
      stateValue["accomplished"] = true;
      return {
        ...state,
        stateValue,
      };
    }
  }
  return state;
};
export default reducer;
