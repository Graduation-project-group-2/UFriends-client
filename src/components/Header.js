import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1><Link to={"/"}>U-Friend</Link></h1>
            <hr />
        </header>
    );
}

export default Header;