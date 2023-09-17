import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './screens/main_page';
import SpellBook from './screens/spell_book';
import SpellPage from './screens/spell_page';


function App() {
	return (
		<BrowserRouter>
			<Routes>
		  		<Route path="/" element={<MainPage />} />
		  		<Route path="/spellbook" element={<SpellBook />} />
		  		<Route path="/spellpage" element={<SpellPage />} />
			</Routes>
	  </BrowserRouter>
	);
};


export default App;
