import {applyMiddleware, combineReducers, compose, createStore} from "redux";

import thunk from 'redux-thunk'

import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from "./reducers/authReducer";

const middleware = [thunk];

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    blacklist: []
};

const reducers = combineReducers({
    auth: authReducer
});
const persistedReducer = persistReducer(rootPersistConfig, reducers);

const store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(...middleware),
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
const persistor = persistStore(store);

export {store, persistor}