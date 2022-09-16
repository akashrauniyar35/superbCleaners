const initialState = {
    service: String,
    property: String,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "SERVICE_SELECTED":
            return { ...state, };
        case "PROPERTY_SELECTED":
            return { ...state, };
        default:
            return state;
    }
};

export default reducer;