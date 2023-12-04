import { configureStore } from "@reduxjs/toolkit"
import fightReducer from "./features/fight/fightSlice"


export default configureStore({
    reducer: {
        fight: fightReducer
    },
})