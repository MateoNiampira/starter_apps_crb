import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    rol: "admin",
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.rol = action.payload.rol;
        },
    },
});

export const {setUser} = userSlice.actions;

export default userSlice.reducer;