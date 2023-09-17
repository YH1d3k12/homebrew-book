import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import MainPage from './screens/main_page';
import SpellBook from './screens/spell_book';
import SpellPage from './screens/spell_page';


function App() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
		  		<Route path="/" element={<MainPage />} />
		  		<Route path="/spellbook" element={<SpellBook />} />
		  		<Route path="/spellpage" element={<SpellPage />} />
			</Routes>
	  </BrowserRouter>
	);
};


export default App;
