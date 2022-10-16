import { configureStore } from "@reduxjs/toolkit";
import RoomReducer from "./reducer/roomReducer";


export default configureStore({
    reducer: {
        room: RoomReducer
    }
})