import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPageScreen from "../screens/main_page";
import SpellBookScreen  from "../screens/spell_book";
import SpellPageScreen  from "../screens/spell_page";


export default function RootNavigation()
{
    return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
		  		<Route path="/" element={<MainPageScreen  />} />
		  		<Route path="/spellbook" element={<SpellBookScreen  />} />
		  		<Route path="/spellpage" element={<SpellPageScreen  />} />
			</Routes>
	  </BrowserRouter>
	);
}