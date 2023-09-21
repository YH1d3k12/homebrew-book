import { Outlet } from "react-router-dom";
import "../styles/body.css";
import NavBar from "../components/navbar";


export default function Body() {
    return (
        <div className="body">
            <NavBar />
            <Outlet />
        </div>
    )
}