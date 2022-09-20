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

    const [isEmailEnter, setIsEmailEnter ] = useState(false);

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

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
                email: email
            },
            method: "get"
        });

        setIsEmailEnter(true);

        return response.data;
    }

    return (
        <div className="entireDiv">
            <Header />
            <div className="innerDiv">
                <ChatBotWord text={"당신의 친구가 되기 위해 기다리고 있어요 :)"} />
                
                        { !isEmailEnter ? 
                        <>
                        <div className="emailFormDiv">
                        <form onSubmit={onSubmitHandler}>
                            <div>
                            <label htmlFor="Email">먼저 사용하실 이메일을 입력해주세요</label>
                        </div>
                        <div className="emailDiv">
                            <input className="emailField" id="Email" placeholder="이메일을 입력해주세요!" type="email" value={email} onChange={onEmailHandler} ></input>
                            <button onClick={onSubmitHandler}>이메일 중복 확인</button>
                            <button id="nextToPasswordButton" type="submit" >계속하기</button>
                        </div>
                        
                    </form>
                    <div className="socialButtonDiv"> 
                    <ButtonGoogle />
                    <ButtonKakao />
                    <ButtonNaver />
                    <p>혹시 다른 계정으로 회원가입 하시겠어요?</p>
                </div>
                    </div>
                        </>
                         : 
                            <>
                <div className="passwordFormDiv">
                    <form>
                        <div>
                            <label htmlFor="Pwd">다음으로 비밀번호를 입력해볼까요?</label>
                        </div>
                        <div>
                            <input className="passwordField" id="Pwd" placeholder="6자리 이상 입력해주세요!" type="password" ></input>
                        </div>
                        <div className="rePasswordDiv">
                            <div>
                                <label htmlFor="Pwd2">한번 더 입력해볼게요!</label>
                            </div>
                            <div>
                                <input className="rePasswordField" id="Pwd2" placeholder="한번 더 입력해주세요" type="password" ></input>
                            </div>
                        </div>
                        
                        <div>
                            <Link to={"/SignUpPhoneBirth"}><button id="nextToPhoneBirthButton" type="submit" >계속하기</button></Link>
                        </div>
                    </form>
                </div>                            
                            </>}
                        
                </div>
        </div>
    );
}

export default SignUpEmail;