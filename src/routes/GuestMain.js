import Header from "../components/Header";
import chatbot from "../img/chatbot.png";
import { Link } from "react-router-dom";
import PBalloon from "../components/PBalloon";
import "../styles/Main.css";

function Main() {
    return (
        <div className="entireDiv">
            <div className="androidDiv">
                <Header />
                <img id="TitleImg" src={chatbot} alt="IMG" />
                <p id="startMent"> "나와 친구가 되지 않을래?"</p>
                {/* <div className="balloonsDiv">
                    <div>
                        <PBalloon className="PBalloon" text={"게스트로 입장하여 정보가 저장되지 않습니다."} />
                    </div>
                    <div>
                        <PBalloon className="PBalloon" text={"맞춤형 챗봇을 이용하기 위해서는 로그인을 해주세요."} />
                    </div>
                </div> */}
                <div className="buttonsDiv">
                    <div className="buttonDiv">
                        <Link to={"/Chatbot"}><button className="button">U-Friends 체험</button></Link>
                    </div>
                    <div className="buttonDiv">
                        <Link to={"/MiniGame"}><button className="button">미니게임</button></Link>
                    </div>
                    <div className="buttonDiv">
                        <Link to={"/"}><button className="button">로그인하기</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;