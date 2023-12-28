import { BrowserRouter, Route, Routes } from "react-router-dom";

import Body from "../pages/Body.jsx";
import Menu from "../pages/Menu.jsx";
import Species from "../pages/Species.jsx";
import SpellBook  from "../pages/SpellBook.jsx";
import SpellPage  from "../pages/SpellPage.jsx";
import TechniqueBook from "../pages/TechniqueBook.jsx";
import TechniquePage from "../pages/TechniquePage.jsx";
import AdventureGear from "../pages/AdventureGear.jsx";

import WeaponsSection from "../features/adventureGear/components/weaponsSection/WeaponsSection.jsx";

export default function RootNavigation()
{
    return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path="/" element={<Body  />}>
					<Route path="/" element={<Menu  />} />
					<Route path="/species" element={<Species  />} />
					<Route path="/spellbook" element={<SpellBook  />} />
					<Route path="/spellpage" element={<SpellPage  />} />
					<Route path="/techniquebook" element={<TechniqueBook  />} />
					<Route path="/techniquepage" element={<TechniquePage  />} />
					<Route path="/adventuregear" element={<AdventureGear  />}>
						<Route path="melee" element={<WeaponsSection  />} />
					</Route>
				</Route>
			</Routes>
	  </BrowserRouter>
	);
}