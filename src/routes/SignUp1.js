import Header from "../components/Header";
import ChatBotWord from "../components/ChatBotWord";
import { Link } from "react-router-dom";
import ButtonGoogle from "../components/ButtonGoogle";
import ButtonKakao from "../components/ButtonKakao";
import ButtonNaver from "../components/ButtonNaver";

function SignUp1() {
    return (
        <div>
            <Header />
            <ChatBotWord />
            <div>
                <p>혹시 다른 계정으로 회원가입 하시겠어요?</p>
                <ButtonGoogle />
                <ButtonKakao />
                <ButtonNaver />
            </div>
            <form>
                <div>
                    <label htmlFor="Email">먼저 사용하실 이메일을 입력해주세요</label>
                </div>
                <div>
                    <input id="Email" placeholder="이메일을 입력해주세요!" type="email" ></input>
                    <button>이메일 중복 확인</button>
                </div>
                <div>
                    <Link to={"/SignUp2"}><button type="submit" >계속하기</button></Link>
                </div>
            </form>
            
        </div>
    );
}

export default SignUp1;