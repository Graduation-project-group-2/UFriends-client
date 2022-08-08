import chatbot from "../img/chatbot.png";
import Header from "../components/Header";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }
    
    const onSubmitHandler = (event) => {
        event.preventDefault(); // 페이지 리프레시를 막아줌

        let body = {
            email: email,
            password: password
        }

        callApi(body)
            .then(console.log("success"))
            .catch(err => console.error(err));

    };

    async function callApi(body){
        const response = await axios({
            url: "/api/user/login",
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: body,
            method: 'post'
        });

        return response.data;
    }


    return (
        <div>
            <Header />
            <div>
                <img src={chatbot} alt="ChatbotIMG" />
            </div>
            <div>
                <h4>멘트 정하기</h4>
            </div>
            <div>
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor="ID">아이디</label>
                    <input id="ID" placeholder="아이디" type="email" value={email} onChange={onEmailHandler} />
                    <label htmlFor="PWD">비밀번호</label>
                    <input id="PWD" placeholder="비밀번호" type="password" value={password} onChange={onPasswordHandler} />
                    <button type="submit">로그인하기</button>
                </form>
            </div>
            
        </div>
    );
}

export default Login;