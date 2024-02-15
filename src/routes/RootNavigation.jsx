import { BrowserRouter, Route, Routes } from "react-router-dom";

import Body from "../pages/Body.jsx";
import Menu from "../pages/Menu.jsx";
import FeatList from "../pages/FeatList.jsx";
import FeatPage from "../pages/FeatPage.jsx";
import SpecieBook from "../pages/SpecieBook.jsx";
import SpellBook  from "../pages/SpellBook.jsx";
import SpellPage  from "../pages/SpellPage.jsx";
import TechniqueBook from "../pages/TechniqueBook.jsx";
import TechniquePage from "../pages/TechniquePage.jsx";
import ItemBook from "../pages/ItemBook.jsx";
import ItemPage from "../pages/ItemPage.jsx";
import RulesPage from "../pages/RulesPage.jsx";

import WeaponsSection from "../features/itemBook/components/weaponsSection/WeaponsSection.jsx";

export default function RootNavigation()
{
    return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path="/" element={<Body  />}>
					<Route path="/" element={<Menu  />} />
					<Route path="/feats" element={<FeatList  />} />
					<Route path="/featpage" element={<FeatPage  />} />
					<Route path="/species" element={<SpecieBook  />} />
					<Route path="/spellbook" element={<SpellBook  />} />
					<Route path="/spellpage" element={<SpellPage  />} />
					<Route path="/techniquebook" element={<TechniqueBook  />} />
					<Route path="/techniquepage" element={<TechniquePage  />} />
					<Route path="/rules" element={<RulesPage  />} />
					<Route path="/adventuregear" element={<ItemBook  />}>
						<Route path="melee" element={<WeaponsSection  />} />
					</Route>
					<Route path="/item" element={<ItemPage  />} />
				</Route>
			</Routes>
	  </BrowserRouter>
	);
}