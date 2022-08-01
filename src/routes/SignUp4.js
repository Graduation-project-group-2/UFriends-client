import Header from "../components/Header";
import ChatBotWord from "../components/ChatBotWord";
import { Link } from "react-router-dom";

function SignUp4() {
    return (
        <div>
            <Header />
            <ChatBotWord />
            <div>
                <p>이제 거의 다 끝났어요</p>
            </div>
            <div>
                <label htmlFor="Nickname">닉네임</label>
            </div>
            <div>
                <input id="Nickname" placeholder="닉네임 입력" ></input>
            </div>
            <div>
                <button>닉네임 중복 확인</button>
            </div>
            <div>
                <Link to={"/SignUpEnd"}><button type="submit">계속하기</button></Link>
            </div>
        </div>
    );
}

export default SignUp4;