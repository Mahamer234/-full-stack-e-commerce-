import { configureStore } from "@reduxjs/toolkit";
import products from "./products/productSlice";
import categories from "./catogeries/categorySlice";
import cart from "./cart/cartSlice";
import wishlist from "./wishlist/wishlistSlice";
import auth from "./auth/authSlice";
import Orders from "../pages/Orders";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux";

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "auth"],
};

const authPersistConfig = {
  key: "auth",
  storage,
};

// cart persist configration
const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  categories,
  products,
  cart: persistReducer(cartPersistConfig, cart),
  wishlist,
  Orders,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

//  store
export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // عشان redux-persist بيخزن بيانات فيها تواريخ وغيره
    }),
});

// 4. إعداد persistor
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
