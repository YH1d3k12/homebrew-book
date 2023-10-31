import { Outlet } from "react-router-dom";
import "../features/body/body.css";
import NavBar from "../components/ui/Navbar";


export default function Body() {
    return (
        <div className="body">
            <NavBar />
            <Outlet />
        </div>
    )
}