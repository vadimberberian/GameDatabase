const initState = {
    game: {},
    screen: {results: []},
    isLoading: true
}

const detailsReducer = (state = initState, action) => {
    switch(action.type) {
        case 'GET_DETAILS':
            return {
                ...state,
                game: action.payload.game,
                screen: action.payload.screen,
                isLoading: false
            };
        case "LOADING_DETAILS": 
            return {
                ...state,
                isLoading: true
            };
        default:
            return {...state}
    }
}

export default detailsReducer;