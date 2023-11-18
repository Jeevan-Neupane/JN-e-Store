import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import { productApi } from "./apis/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import productsSlice from "./slice/productsSlice";
import filterProductSlice from "./slice/filterProductSlice";
import cartSlice from "./slice/cartSlice";
import errorSlice from "./slice/errorSlice";
import numberSlice from "./slice/numberSlice";


const store = configureStore({
    reducer: {
        user: userSlice,
        [productApi.reducerPath]: productApi.reducer,

        products: productsSlice,
        filterProducts: filterProductSlice,
        cart: cartSlice,
        errors: errorSlice,
        numbers: numberSlice
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productApi.middleware);
    },

})

setupListeners(store.dispatch);


export default store;
export * from "./slice/userSlice";
export * from "./apis/productsApi"
export * from "./slice/productsSlice"
export * from "./slice/filterProductSlice"
export * from "./slice/cartSlice"
export * from "./slice/errorSlice"
export * from "./slice/numberSlice"