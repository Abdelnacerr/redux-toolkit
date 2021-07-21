import React from "react";
import "./App.css";
import AddPostForm from "./features/posts/AddPostForm.js";
import PostsList from "./features/posts/PostsList.js";

function App() {
	return (
		<>
			<div className='App'>
				<AddPostForm />
				<PostsList />
			</div>
		</>
	);
}

export default App;
