import React from "react";
import "./App.css";
import AddPostForm from "./features/posts/AddPostForm.js";
import PostsList from "./features/posts/PostsList.js";
import RandomUser from "./features/randomUser/randomUser.js";

function App() {
	return (
		<>
			<div className='App'>
				<AddPostForm />
				<PostsList />
				<RandomUser />
			</div>
		</>
	);
}

export default App;
