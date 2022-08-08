import Header from "../components/Header";
import ChatBotWord from "../components/ChatBotWord";
import { Link } from "react-router-dom";

function SignUpPassword() {
    return (
        <div>
            <Header />
            <ChatBotWord />
            <div>
                <label htmlFor="Pwd">다음으로 비밀번호를 입력해볼까요?</label>
            </div>
            <div>
                <input id="Pwd" placeholder="6자리 이상 입력해주세요!" type="password" ></input>
            </div>
            <div>
                <label htmlFor="Pwd2">한번 더 입력해볼게요!</label>
            </div>
            <div>
                <input id="Pwd" placeholder="한번 더 입력해주세요" type="password" ></input>
            </div>
            <div>
                <Link to={"/SignUpPhoneBirth"}><button type="submit" >계속하기</button></Link>
            </div>
        </div>
    );
}

export default SignUpPassword;