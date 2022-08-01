import Header from "../components/Header";
import ChatBotWord from "../components/ChatBotWord";
import { Link } from "react-router-dom";

function SignUp3() {
    return (
        <div>
            <Header />
            <ChatBotWord />
            <div>
                <p>나머지 정보도 알려주세요!</p>
            </div>
            <div>
                <label htmlFor="PhoneNumber">전화번호</label>
            </div>
            <div>
                <input id="PhoneNumber" placeholder="010-0000-0000" ></input>
            </div>
            <div>
                <label htmlFor="Birth">생년월일</label>
            </div>
            <div>
                <input id="Birth" placeholder="YYYY.MM.DD 양/음" type="date"></input>
            </div>
            <div>
                <Link to={"/SignUp4"}><button type="submit">계속하기</button></Link>
            </div>
        </div>
    );
}

export default SignUp3;