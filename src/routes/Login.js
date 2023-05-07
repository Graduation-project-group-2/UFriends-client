import chatbot from "../img/chatbot.png";
import Header from "../components/Header";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import "../styles/Login.css";
import { loginAPI, emailValidAPI, changePasswordAPI } from "../api/userAPI";
import { useNavigate } from "react-router-dom";

function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const navigate = useNavigate();
    
    const onSubmitHandler = (event) => {
        event.preventDefault(); // 페이지 리프레시를 막아줌

        let body = {
            email: email,
            password: password
        }

        
        loginApi(body)
            .then(navigate("/Main"))
            .catch(err => {
                console.error(err);
                alert("로그인에 실패하였습니다. 다시 시도해 주세요.");
            });

    };

    
    async function loginApi(body){
        const response = await loginAPI(body);
        return response.data;
    }

    return (
        <div className="entireDiv">
            {/* <Header /> */}
            <div className="androidDiv">
            <h1 id="startTopTitle">Welcome to</h1>
                <h2 id="startbottomTitle">U-Friend</h2>
                <img id="TitleImg" src={chatbot} alt="IMG" />

                <h3 id="ment">오늘도 나를 찾아줘서 고마워:)</h3>
                <div className="loginFormDiv">
                    <form onSubmit={onSubmitHandler}>
                        <div>
                            <label htmlFor="ID"> ID </label>
                            <input className="idField" id="ID" placeholder="아이디" type="email" value={email} onChange={onEmailHandler} />
                        </div>
                        <div>
                            <label htmlFor="PWD"> PW </label>
                            <input className="pwdField" id="PWD" placeholder="비밀번호" type="password" value={password} onChange={onPasswordHandler} />
                        </div>
                        <button className="submitButton" type="submit" onClick={onSubmitHandler} >로그인하기</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;