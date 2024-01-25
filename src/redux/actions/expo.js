import { ActiveSearchConsts } from '../constants/expo';

export const addnewActiveSearch = (mode, data) => (
    {
        type: ActiveSearchConsts.STORE_CURRENT_SEARCH,
        payload: {
            mode,
            data,
        },
    }
);

export const reloadAllAdminData = (uniqueCode) => (
    {
        type: ActiveSearchConsts.MAKE_RELOAD_ALL_DATA,
        payload: uniqueCode,
    }
)
