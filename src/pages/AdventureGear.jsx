import { Outlet } from "react-router-dom";

import ItemsSideBar from "../features/adventureGear/components/ItemsSideBar";

import "../features/adventureGear/adventureGear.css"

const AdventureGear = () => {
    return (
        <div className="adventure-gear-content-wrapper">
            <ItemsSideBar/>
            <div className="adventure-gear-table-container scroll-y">
                <Outlet/>
            </div>
        </div>
    )
}

export default AdventureGear;