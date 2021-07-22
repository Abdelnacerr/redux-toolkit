import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice.js";
import randomUserReducer from "../features/randomUser/randomUserSlice.js";

export const store = configureStore({
	reducer: {
		posts: postsReducer,
		randomUser: randomUserReducer,
	},
});
