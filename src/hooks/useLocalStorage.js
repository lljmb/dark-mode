import {useState} from 'react';

const useLocalStorage = (key, initialValue) => {
// when we load our state, look inside local storage to see if it already exists
// if it exists, put that saved valued into state. if not, put in initialValue
const [storedValue, setStoredValue] = useState(() => {
    // original way
    // if(localStorage.getItem(key)){
    //     return JSON.parse(localStorage.getItem(key))
    // }

    // localStorage.setItem(key, JSON.stringify(initialValue))
    // return initialValue;
    
    // more compact way - same info, diff presentation
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue
});

// when state is modified, save that change to local storage
const setValue = (value) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value))
}

    return [storedValue, setValue]
}

export default useLocalStorage