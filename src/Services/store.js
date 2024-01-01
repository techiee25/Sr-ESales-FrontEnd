import { configureStore } from '@reduxjs/toolkit'
import eSalesReducer from './eSalesSlice'

export const store = configureStore({
    reducer: {
        eSales: eSalesReducer,
    },
})