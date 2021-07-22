import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
	error: null,
	user: {},
};

export const fetchRandomUser = createAsyncThunk("fetchRandomUser", async () => {
	try {
		const res = await fetch("https://randomuser.me/api");
		const data = await res.json();
		return data.results[0];
	} catch (error) {
		throw Error(error);
	}
});

const randomuserSlice = createSlice({
	name: "randomUser",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchRandomUser.pending]: (state, action) => {
			state.loading = true;
			state.error = null;
		},
		[fetchRandomUser.fulfilled]: (state, action) => {
			state.loading = false;
			state.user = action.payload;
		},
		[fetchRandomUser.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		},
	},
});

export default randomuserSlice.reducer;
