import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import {contactsReducer} from './contacts/contactsSlice';
import {filtersReducer} from './filters/filtersSlice';
import storage from "redux-persist/lib/storage";
import {authReducer} from "./auth/authSlise";

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
  

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
        auth: persistedAuthReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
})

export const persistor = persistStore(store);