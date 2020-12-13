const initialState = {
    images: [],
    loading:false
};

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_IMAGES":
            return {
                ...state,
                images: action.payload || []
            };
        case "ADD_IMAGE":
            return {
                ...state,
                images: action.payload,
            };
        case "START_ADD_IMAGE":
            return {
                ...state,
                loading: true,
            };
        case "DONE_ADD_IMAGE":
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default imageReducer;