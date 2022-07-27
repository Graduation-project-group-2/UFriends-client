import chatbot from "../img/chatbot.png";
import Button from "../components/Button";
import ButtonGoogle from "../components/ButtonGoogle";
import ButtonKakao from "../components/ButtonKakao";
import ButtonNaver from "../components/ButtonNaver";
import React from 'react';
import { Link } from "react-router-dom";

function Start() {
    return (
        <div>
            <h1><Link to={"/"}>U-Friend</Link></h1>
            <hr />
            <img src={chatbot} />
            <h1>U-Friend</h1>
            <h4>유프렌즈에 오신 걸 환영합니다</h4>
            <div>
                <Button text={"회원가입→"} /><Link to={"/signUp"}></Link>
                <Button text={"로그인→"} /><Link to={"/login"}></Link>
            </div>
            <div>
                <ButtonGoogle />
                <ButtonKakao />
                <ButtonNaver />
            </div>
        </div>
    );
}

export default Start;