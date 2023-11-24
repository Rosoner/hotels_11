import { useState } from 'react';

// const [auth, setAuth] = usePersistedState('auth', {});

export default function usePersistedState(key, defaultValue) {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key);

        if (persistedState) {
            return JSON.parse(persistedState);
        }

        return defaultValue;
    });

    // All body is logic for initial value
    // 1. if exist persistantState in local storage set it for initial value!
    // 2. else not exist persistantState will get defaultValue

    const setPersistedState = (value) => {
        setState(value);

        let serializedValue;
        if (typeof value === 'function') {
            serializedValue = JSON.stringify(value(state));
        } else {
            serializedValue = JSON.stringify(value);
        }

        localStorage.setItem(key, serializedValue);
    };

    // If value is not pure value, but is function
    // serialised -  transform value in text format
    // Ако подадената стойност е фунция то stringify function and give it current state
    // тя ще върне новия стейт който ще стрингифайнем и запазим  in localStorage

    return [
        state,
        setPersistedState,
    ];
}
