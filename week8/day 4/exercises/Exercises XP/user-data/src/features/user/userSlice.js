import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk('user/fetchUser' , async() => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    return res.data;
});


const userSlice = createSlice({
    name : 'user',
    initialState : {
        data : {},
        loading : false,
        error : null,
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })

        .addCase(fetchUser.fulfilled, (state , action) => {
            state.loading = false;
            state.data = action.payload;
        })

        .addCase(fetchUser.rejected, (state , action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default userSlice.reducer
