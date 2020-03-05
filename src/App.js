import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
	const APP_ID = "58d196b6";
	const APP_KEY = "1eeceaf60c35452f88f31ffb7dfd424b";

	
	useEffect( () => {
		getRecipes();

	}, []);

	const getRecipes = async () => {
		const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
		const data = await response.json();
		console.log(data.hits);

	}

	return(
		<div className="App">
			<form className="search-form">
				<input className="search-bar" type="text" />
				<button className="search-button" type="submit">Search</button>
			</form>
		</div>
	)
}

export default App;
