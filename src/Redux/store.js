import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./Slicer/tokenSlicer"

const store = configureStore({
    reducer:{
        token:tokenReducer,
    }
})

export default store;