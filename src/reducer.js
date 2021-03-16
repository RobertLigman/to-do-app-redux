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
      state.listOfItems.concat(stateValue);
      return {
        ...state,
        listOfItems: state.listOfItems.filter(
          (el, index) => el.name !== el.name[index + 1]
        ),
      };
    }
  }
  return state;
};
export default reducer;
