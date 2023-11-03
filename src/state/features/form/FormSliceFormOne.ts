import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type InitialState = {
    userName: string,
    email: string,
    petName: string,
    favHero: string
}

const initialState: InitialState = {
    userName: '',
    email: '',
    petName: '',
    favHero: '',
}

const formSlice = createSlice({
    name: 'Form',
    initialState,
    reducers: {
        setField: (state, action: PayloadAction<{ field: keyof InitialState, value: string }>) => {
            state[action.payload.field] = action.payload.value;
        },
        resetFields: (state) => {
            state.userName = '',
                state.email = '',
                state.petName = '',
                state.favHero = ''
        }
    }
})

export default formSlice.reducer;
export const { setField, resetFields } = formSlice.actions