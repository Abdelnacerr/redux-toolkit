import React from "react";
import { useDispatch } from "react-redux";
import { fetchRandomUser } from "../randomUser/randomUserSlice.js";

const RandomUser = () => {
	const dispatch = useDispatch();

	return (
		<button onClick={() => dispatch(fetchRandomUser())}>
			fetch Random user
		</button>
	);
};

export default RandomUser;
