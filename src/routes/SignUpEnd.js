import Header from "../components/Header";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import ChatBotWord from "../components/ChatBotWord";
import "../styles/SignUpEnd.css"

function SignUpEnd() {
    return (
        <div className="entireDiv">
            <Header />
            <div className="innerDiv">
                <ChatBotWord text={"친구가 되어줘서 고마워요! 이제 시작해볼까요?"} />
                <div className="buttonDiv">
                    <Link to={"/Login"}><Button text={"로그인 →"} /></Link>
                </div>
            </div>
        </div>
    );
}

export default SignUpEnd;