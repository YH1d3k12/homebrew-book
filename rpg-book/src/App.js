import { createBrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom';
import './App.css';
import MainPage from './screens/main_page';

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
			<Route path="/" exact element={<MainPage />} />
		</Routes>
	);
};


export default App;
