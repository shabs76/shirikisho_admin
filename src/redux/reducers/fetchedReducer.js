import { FetchConst } from "../constants/fetchedConstant";


const initState = {
    state: 'no-data',
    loadingAll: true,
    initialData: {},
    sParks: {},
    sDrivers: {},
    pMembers: {}
}

const fetchedReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case FetchConst.CLEAR_ALL_DATA:
            return {
                ...initState
            }
        case FetchConst.SAVE_INITIAL_DATA:
            return {
                ...state,
                initialData: payload,
                loadingAll: false,
                state: 'has-data'
            }
        case FetchConst.SAVE_SEARCHED_DRIVERS:
            return {
                ...state,
                sDrivers: payload
            }
        case FetchConst.SAVE_SEARCHED_PARKS:
            return {
                ...state,
                sParks: payload
            }
        case FetchConst.SAVE_PARK_MEMBERS:
            return {
                ...state,
                pMembers: payload
            }
    
        default:
            return state;
    }
}

export default fetchedReducer;