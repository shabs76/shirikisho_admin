import { ActiveSearchConsts } from '../constants/expo';

const activeSearch = {
    mode: 'searchText',
    data: {},
    uniqueCode: ''
};

const ActiveSearchRed = (state = activeSearch, { type, payload }) => {
    switch (type) {
    case ActiveSearchConsts.STORE_CURRENT_SEARCH:
        return {
            mode: payload.mode,
            data: payload.data,
        };
    case ActiveSearchConsts.MAKE_RELOAD_ALL_DATA:
        return {
            ...state,
            uniqueCode: payload,
        }
    default:
        return state;
    }
};

export default ActiveSearchRed;
