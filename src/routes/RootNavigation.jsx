import { BrowserRouter, Route, Routes } from "react-router-dom";

import Body from "../pages/Body.jsx";
import Menu from "../pages/Menu.jsx";
import Species from "../pages/Species.jsx";
import SpellBook  from "../pages/SpellBook.jsx";
import SpellPage  from "../pages/SpellPage.jsx";
import TechniqueBook from "../pages/TechniqueBook.jsx";
import TechniquePage from "../pages/TechniquePage.jsx";
import AdventureGear from "../pages/AdventureGear.jsx";

import MeleeWeaponsTable from "../features/adventureGear/tables/meleeWeaponsTable/MeleeWeaponsTable.jsx";
import RangedWeaponsTable from "../features/adventureGear/tables/rangedWeaponsTable/RangedWeaponsTable.jsx";
import FirearmsTable from "../features/adventureGear/tables/firearmsTable/FirearmsTable.jsx";
import ArmorsTable from "../features/adventureGear/tables/armorsTable/ArmorsTable.jsx";
import AmmunitionsTable from "../features/adventureGear/tables/ammunitionsTable/AmmunitionsTable.jsx";
import BombsTable from "../features/adventureGear/tables/bombsTable/BombsTable.jsx";
import PotionsTable from "../features/adventureGear/tables/potionsTable/PotionsTable.jsx";
import PoisonsTable from "../features/adventureGear/tables/poisonsTable/PoisonsTable.jsx";
import ToolsTable from "../features/adventureGear/tables/toolsTable/ToolsTable.jsx";
import InstrumentsTable from "../features/adventureGear/tables/instrumentsTable/InstrumentsTable.jsx";
import FoodsTable from "../features/adventureGear/tables/foodsTable/FoodsTable.jsx";
import UsefulGearTable from "../features/adventureGear/tables/usefulGearTable/UsefulGearTable.jsx";
import MountsTable from "../features/adventureGear/tables/mountsTable/MountsTable.jsx";
import SiegeEquipmentTable from "../features/adventureGear/tables/siegeEquipmentTable/SiegeEquipmentTable.jsx";
import VehiclesTable from "../features/adventureGear/tables/vehiclesTable/VehiclesTable.jsx";

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
						<Route path="melee" element={<MeleeWeaponsTable  />} />
						<Route path="ranged" element={<RangedWeaponsTable  />} />
						<Route path="firearms" element={<FirearmsTable  />} />
						<Route path="armors" element={<ArmorsTable  />} />
						<Route path="ammunitions" element={<AmmunitionsTable  />} />
						<Route path="bombs" element={<BombsTable  />} />
						<Route path="potions" element={<PotionsTable  />} />
						<Route path="poisons" element={<PoisonsTable  />} />
						<Route path="tools" element={<ToolsTable  />} />
						<Route path="instruments" element={<InstrumentsTable  />} />
						<Route path="foods" element={<FoodsTable  />} />
						<Route path="useful" element={<UsefulGearTable  />} />
						<Route path="mounts" element={<MountsTable  />} />
						<Route path="siege" element={<SiegeEquipmentTable  />} />
						<Route path="vehicles" element={<VehiclesTable  />} />
					</Route>
				</Route>
			</Routes>
	  </BrowserRouter>
	);
}