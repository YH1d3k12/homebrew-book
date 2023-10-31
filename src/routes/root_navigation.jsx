import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPageScreen from "../pages/Menu.jsx";
import SpellBookScreen  from "../pages/SpellBook";
import SpellPageScreen  from "../pages/SpellPage";
import Body from "../pages/Body.jsx";
import SpeciesScreen from "../pages/Species";


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