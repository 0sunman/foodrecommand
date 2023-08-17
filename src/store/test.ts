import {createSlice} from "@reduxjs/toolkit"

const test = createSlice({
    name:"test",
    initialState:{test:true},
    reducers:{
        setTest(state,action){
            state.test = action.payload
        }
    }
})

export default test.reducer;
export const { setTest } = test.actions;