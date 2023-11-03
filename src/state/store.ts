import { configureStore } from "@reduxjs/toolkit";
import formReducers from './features/form/FormSliceFormOne'

export const store = configureStore({
    reducer: {
        form: formReducers,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;