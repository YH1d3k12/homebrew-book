import { Outlet } from "react-router-dom";

import ItemsSideBar from "../features/adventureGear/components/ItemsSideBar";

import "../features/adventureGear/adventureGear.css"

const AdventureGear = () => {
    return (
        <div className="adventure-gear-content-wrapper">
            <ItemsSideBar/>
            <Outlet/>
        </div>
    )
}

export default AdventureGear;