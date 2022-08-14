import Header from "../components/Header";
import ChatBotWord from "../components/ChatBotWord";
import { Link } from "react-router-dom";
import ButtonGoogle from "../components/ButtonGoogle";
import ButtonKakao from "../components/ButtonKakao";
import ButtonNaver from "../components/ButtonNaver";
import "../styles/SignUpEmail.css"
import { useState } from "react";
import axios from "axios";
import { API_EMAILVALID } from "../config/env";

function SignUpEmail() {

    const [email, setEmail] = useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let email = {
            email: email
        }

        emailValidApi(email)
            .then()
            .catch(err => console.error(err));
    };

    async function emailValidApi(email) {
        const response = await axios(API_EMAILVALID, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            data: {
                email: email.email
            },
            method: "post"
        });

        return response.data;
    }

    return (
        <div className="entireDiv">
            <Header />
            <div className="innerDiv">
                <ChatBotWord text={"당신의 친구가 되기 위해 기다리고 있어요 :)"} />
                <div className="emailFormDiv">
                    <form onSubmit={onSubmitHandler}>
                        <div>
                            <label htmlFor="Email">먼저 사용하실 이메일을 입력해주세요</label>
                        </div>
                        <div className="emailDiv">
                            <input className="emailField" id="Email" placeholder="이메일을 입력해주세요!" type="email" value={email} onChange={onEmailHandler} ></input>
                            <button type="submit">이메일 중복 확인</button>
                            <Link to={"/SignUpPassword"}><button id="nextToPasswordButton" type="submit" >계속하기</button></Link>
                        </div>
                    </form>
                </div>
                <div className="socialButtonDiv"> 
                    <ButtonGoogle />
                    <ButtonKakao />
                    <ButtonNaver />
                    <p>혹시 다른 계정으로 회원가입 하시겠어요?</p>
                </div>
            </div>
        </div>
    );
}

export default SignUpEmail;