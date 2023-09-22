import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPageScreen from "../screens/main_page";
import SpellBookScreen  from "../screens/spell_book";
import SpellPageScreen  from "../screens/spell_page";
import Body from "../screens/body";
import SpeciesScreen from "../screens/species";


export default function RootNavigation()
{
    return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path="/" element={<Body  />}>
					<Route path="/" element={<MainPageScreen  />} />
					<Route path="/species" element={<SpeciesScreen  />} />
					<Route path="/spellbook" element={<SpellBookScreen  />} />
					<Route path="/spellpage" element={<SpellPageScreen  />} />
				</Route>
			</Routes>
	  </BrowserRouter>
	);
}