import chatbot from "../img/chatbot.png";
import Header from "../components/Header";
import Button from "../components/Button";
import ButtonGoogle from "../components/ButtonGoogle";
import ButtonKakao from "../components/ButtonKakao";
import ButtonNaver from "../components/ButtonNaver";
import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Start.css";

function Start() {
    return (
        <div className="entireDiv">
            <div className="androidDiv">
                <h1 id="startTopTitle">Welcome to</h1>
                <h2 id="startbottomTitle">U-Friend</h2>
                <img id="TitleImg" src={chatbot} alt="IMG" />
                <p id="startMent"> "심심할 때, 외로울 때, 지칠 때, <br></br> 언제나 너의 이야기를 들어줄게"</p>
                <div className="buttonDiv">
                    <Link to={"/Join"}><Button text={"Sign up →"} /></Link>
                    <Link to={"/Login"}><Button text={"Log in →"} /></Link>
                </div>
                <div className="guestDiv">
                    <Link to={"/GuestMain"}><button id="guestButton">비회원으로 둘러보기</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Start;