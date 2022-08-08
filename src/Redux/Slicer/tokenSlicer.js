import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    tokens:[]
}
const tolenSlicer =createSlice({
    name:"token",
    initialState,
    reducers:{
        addToken : (state,action) =>{
            state = {
                ...state,
                tokens:[...state.tokens,action.payload]
            }
            return state
        },
        deleteToken : (state,action) =>{

            let filterArr = state.tokens.filter( item => (
                item != state.tokens[action.payload]
            ))

            state = {
                tokens:[...filterArr]
            }
            return state
        }
    }
})


export const {addToken,deleteToken} = tolenSlicer.actions
export default tolenSlicer.reducer