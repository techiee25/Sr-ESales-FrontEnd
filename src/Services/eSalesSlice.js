import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // value: false,
}

export const eSalesSlice = createSlice({
    name: 'eSalesSlice',
    initialState,
    reducers: {
        // aimeLogin: (state, action) => {
        //     state.value = action.payload
        // },
    },
})

export const {  } = eSalesSlice.actions

export default eSalesSlice.reducer