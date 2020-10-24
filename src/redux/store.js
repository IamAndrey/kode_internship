import {applyMiddleware, combineReducers, compose, createStore} from "redux";

import thunk from 'redux-thunk'

import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from "./reducers/authReducer";
import uiReducer from "./reducers/uiReducer";
import errorReducer from "./reducers/errorReducer";
import successReducer from "./reducers/successReducer";
import typeReducer from "./reducers/typeReducer";
import subtypeReducer from "./reducers/subtypeReducer";
import cardsReducer from "./reducers/cardsReducer";
import paginationReducer from "./reducers/paginationReducer";

const middleware = [thunk];

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['ui', 'cards']
};

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    error: errorReducer,
    success: successReducer,
    type: typeReducer,
    subtype: subtypeReducer,
    cards: cardsReducer,
    pagination: paginationReducer
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