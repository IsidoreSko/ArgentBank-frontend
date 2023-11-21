import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./userReducer";

// Importer le stockage par défaut:
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// Configuration de redux-persist:
const persistConfig = {
  // La clé pour le stockage persistant:
  key: "root",
  // Le stockage à utiliser (localStorage par défaut):
  storage,
};

// Création du reducer persistant
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // Pour éviter un message d'erreur dans la console:
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
        ],
      },
    }),
  devTools: true,
});

// Création du persistor
export const persistor = persistStore(store);

export default store;
