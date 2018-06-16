const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_OPTION':
             return [
                 ...state,
                 action.option
             ];
        case "REMOVE_OPTION":
             return state.filter((text)=> text !== action.text);
        case "SET_OPTIONS":
            return action.options;
        case "REMOVE_ALL":
             return []
        default:
            return state;
    }
}