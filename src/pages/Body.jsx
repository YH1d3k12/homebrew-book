import { Outlet } from "react-router-dom";

import NavBar from "../components/ui/Navbar";

import "../features/body/body.css";


const Body = () => {
    return (
        <div className="body">
            <NavBar />
            <Outlet />
        </div>
    );
};


export default Body;