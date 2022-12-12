import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledH1 = styled.h1`
    margin-top: 15;
    text-align: center;
`;

const StyledHr = styled.hr`
    margin: 0;
`;

function Header() {
    return (
        <header>
            <StyledH1><Link to={"/"}>U-Friend</Link></StyledH1>
            <StyledHr/>
        </header>
    );
}

export default Header;