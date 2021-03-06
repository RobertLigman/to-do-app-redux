const initialState = {
  listOfItems: [],
  filteredList: [],
  filtering: false,
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
        filtering: false,
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
    case "FILTER_TASKS":
      return {
        ...state,
        filteredList: state.listOfItems.filter((el) => {
          if (action.filterOption === "all") return el;
          else if (action.filterOption === "accomplished")
            return el.accomplished === true;
          else return el.accomplished === false;
        }),
        filtering: true,
      };
    default:
      return state;
  }
  // return state;
};
export default reducer;
