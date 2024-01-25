function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22
            // Firefox
            || e.code === 1014
            // test name field too, because code might not be present
            // everything except Firefox
            || e.name === 'QuotaExceededError'
            // Firefox
            || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
            // acknowledge QuotaExceededError only if there's something already stored
            && (storage && storage.length !== 0);
    }
}

export const saveSessionStore = (data, key) => {
    if (storageAvailable('sessionStorage')) {
        // we are able to save in session storage
        sessionStorage.setItem(key, data);
        return true;
    }
    return false;
};

export const saveLocalStore = (data, key) => {
    if (storageAvailable('localStorage')) {
        // we are able to save in session storage
        localStorage.setItem(key, data);
        return true;
    }
    return false;
};

export const getSessionStore = (key) => {
    if (!storageAvailable('sessionStorage') || !sessionStorage.getItem(key)) {
        const ggb = 'not-set';
        return ggb;
    }
    // we are able to save in session storage
    const datax = sessionStorage.getItem(key);
    return datax;
};

export const getLocalStore = (key) => {
    if (!storageAvailable('localStorage') || !localStorage.getItem(key)) {
        const ggb = 'not-set';
        return ggb;
    }
    // we are able to save in session storage
    const datax = localStorage.getItem(key);
    return datax;
};