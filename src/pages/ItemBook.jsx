import { Outlet } from "react-router-dom";

import ItemsSideBar from "../features/itemBook/components/ItemsSideBar";

import "../features/itemBook/itemBook.css"

const ItemBook = () => {
    return (
        <div className="item-book-content-wrapper">
            <ItemsSideBar/>
            <div className="item-book-table-container scroll-y">
                <Outlet/>
            </div>
        </div>
    )
}

export default ItemBook;