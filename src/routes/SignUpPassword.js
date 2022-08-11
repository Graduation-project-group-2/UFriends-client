import Header from "../components/Header";
import ChatBotWord from "../components/ChatBotWord";
import { Link } from "react-router-dom";
import "../styles/SignUpPassword.css"

function SignUpPassword() {
    return (
        <div className="entireDiv">
            <Header />
            <div className="innerDiv">
                <ChatBotWord text={"당신의 친구가 되기 위해 기다리고 있어요 :)"} />
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
            </div>
        </div>
    );
}

export default SignUpPassword;