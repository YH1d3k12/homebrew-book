import { Link  } from "react-router-dom";

import dragon from "../../assets/images/menu/dragon.png";
import "./navbar.css"


const NavBar =() => {
    return (
        <header className="navigation-container">
            <Link className="navigation-logo" to="/">
                {/* <img src={dragon} alt="Dragon" /> */}
                <div>
                    <h1>D&D5e Homebrew Book</h1>
                    <p>by Djalma Hideki Yamamoto</p>
                </div>
            </Link>
        </header>
    );
};


export default NavBar;