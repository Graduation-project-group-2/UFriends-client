import Header from "../components/Header";
import ChatBotWord from "../components/ChatBotWord";
import { Link } from "react-router-dom";
import "../styles/SignUpNickname.css";

function SignUpNickname() {
    return (
        <div className="entireDiv">
            <Header />
            <div className="innerDiv">
                <ChatBotWord text={"당신의 친구가 되기 위해 기다리고 있어요 :)"} />
                <div className="nicknameFormDiv">
                    <div>
                        <p id="nicknameP">이제 거의 다 끝났어요</p>
                    </div>
                    <div className="nicknameDiv">
                        <div>
                            <label htmlFor="Nickname">닉네임</label>
                        </div>
                        <div>
                            <input className="nicknameField" id="Nickname" placeholder="닉네임 입력" ></input>
                        </div>
                    </div>
                    
                    <div>
                        <button id="nicknameButton">닉네임 중복 확인</button>
                    </div>
                    <div>
                        <Link to={"/SignUpEnd"}><button id="nextToEndButton" type="submit">계속하기</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpNickname;