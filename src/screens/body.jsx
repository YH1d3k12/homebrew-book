import { Outlet } from "react-router-dom";
import "../styles/body.css";


export default function Body() {
    return (
        <div className="body">
            <Outlet />
        </div>
    )
}