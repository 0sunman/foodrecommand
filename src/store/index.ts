import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import test from "./test";


const reducer = (state:any,action:any) => {
    return combineReducers({
        [test.name]: test
    })(state,action);
}

const makeStore = () => configureStore({reducer});

export const wrapper = createWrapper(makeStore);