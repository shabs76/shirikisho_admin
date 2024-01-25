import axios from "axios";
import store from "../redux/store";
import { getSessionStore } from "./storage";


export const sendToBackendPost = async (link, data) => {
    // access login state
    const loginRudState = store.getState().loginReducer;
    let ansbck;
    let logsess = getSessionStore('loginSess');
    let logkey = getSessionStore('loginKey');
    if (loginRudState.state === 'login') {
        logsess = loginRudState.logSess;
        logkey = loginRudState.logKey;
    }
    ansbck = await axios.post('https://admins.shirikisho.co.tz'+link, data, {
        headers: {
            'content-type': 'application/json',
            'logkey': logkey,
            'logsess': logsess
        },
        withCredentials: true,
    }).catch((e) => {
        console.log(e);
        ansbck = {
            state: 'error',
            data: 'Network error',
        };
        return ansbck;
    });
    console.log(ansbck);
    if (typeof (ansbck)  === 'object') {
        return ansbck.data;
    }
    return ansbck;
}

export const sendPicToBackendPost = async (link, data) => {
    let ansbck;
    ansbck = await axios.post('https://api.brentles.com'+link, data, {
        headers: {
            'content-type': 'text/json',
        },
        withCredentials: true,
    }).catch((e) => {
        console.log(e);
        ansbck = {
            state: 'error',
            data: 'Network error',
        };
        return ansbck;
    });
    console.log(ansbck);
    if (typeof (ansbck)  === 'object') {
        return ansbck.data;
    }
    return ansbck;
}


//  https://payments.bakwatahqcollection.org/