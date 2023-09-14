import { createBrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom';
import './App.css';
import MainPage from './screens/main_page';
import SpellBook from './screens/spell_book';
import SpellPage from './screens/spell_page';

const router = createBrowserRouter([
	{ path: '*', Component: RootNavigation }
]);


function App() {
	return (
		<RouterProvider router={router} />
	);
};


function RootNavigation() {
	return (
		<Routes>
			<Route path="/" exact element={<MainPage/>}/>
			<Route path="/spellbook" exact element={<SpellBook/>}/>
			<Route path="/spellpage" exact element={<SpellPage/>}/>
		</Routes>
	);
};


export default App;
