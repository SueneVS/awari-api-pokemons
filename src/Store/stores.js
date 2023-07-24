import { configureStore } from '@reduxjs/toolkit';
import { favoritesReducer } from './Favorites';

const store = configureStore({
    reducer: {
        favorites: favoritesReducer
    }
});

store.subscribe(() => {
    const state = store.getState();
    const data = JSON.stringify(state);
    localStorage.setItem('react-redux', data);
});

export default store;