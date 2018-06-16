
//Filter Reducer

const filterReducerDefoultState = {
    text:""
}

export default (state = filterReducerDefoultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return{
                ...state,
                text: action.text
            }; 
        default:
            return state;
    }
};