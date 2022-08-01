import chatbot from "../img/chatbot.png";
import Header from "../components/Header";
import Button from "../components/Button";
import ButtonGoogle from "../components/ButtonGoogle";
import ButtonKakao from "../components/ButtonKakao";
import ButtonNaver from "../components/ButtonNaver";
import { Link } from "react-router-dom";

function Start() {
    return (
        <div>
            <Header />
            <img src={chatbot} alt="IMG" />
            <h1>U-Friend</h1>
            <h3>유프렌즈에 오신 걸 환영합니다</h3>
            <div>
                <Link to={"/SignUp1"}><Button text={"회원가입→"} /></Link>
                <Link to={"/Login"}><Button text={"로그인→"} /></Link>
            </div>
            <div>
                <ButtonGoogle />
                <ButtonKakao />
                <ButtonNaver />
            </div>
            <div>
                <p>간편 소셜 로그인</p>
            </div>
        </div>
    );
}

export default Start;