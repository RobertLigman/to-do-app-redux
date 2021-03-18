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
          switch (action.filterOption) {
            case "all":
              return el;
            case "accomplished":
              return el.accomplished === true;
            case "unaccomplished":
              return el.accomplished === false;
          }
          return 0;
        }),
        filtering: true,
      };
  }
  return state;
};
export default reducer;
