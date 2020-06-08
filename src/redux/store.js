import { createStore, applyMiddleware } from "redux";
import userReducer from "./reducers";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, userReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);


export {
    store,
    persistor
}