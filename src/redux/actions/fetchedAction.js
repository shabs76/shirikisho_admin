import { FetchConst } from "../constants/fetchedConstant";


export const saveInitialData = (data) => (
    {
        type: FetchConst.SAVE_INITIAL_DATA,
        payload: data
    }
);

export const saveSearchedParks = (data) => (
    {
        type: FetchConst.SAVE_SEARCHED_PARKS,
        payload: data
    }
);

export const saveSearchedDrivers = (data) => (
    {
        type: FetchConst.SAVE_SEARCHED_DRIVERS,
        payload: data
    }
);

export const saveParkMembers = (data) => (
    {
        type: FetchConst.SAVE_PARK_MEMBERS,
        payload: data
    }
)

export const clearfetchedData = () => (
    {
        type: FetchConst.CLEAR_ALL_DATA,
        payload: {}
    }
)