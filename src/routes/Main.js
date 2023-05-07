import Header from "../components/Header";
import chatbot from "../img/chatbot.png";
import { Link } from "react-router-dom";
import PBalloon from "../components/PBalloon";
import "../styles/Main.css";
import {logout} from "../api/userAPI";

function Main() {
    return (
        <div className="entireDiv">
            <div className="androidDiv">
                <Header />
                <img id="TitleImg" src={chatbot} alt="IMG" />
                {/* <div className="balloonsDiv">
                    <div>
                        <PBalloon className="PBalloon" text={"하정아, 오늘 하루는 어땠어?"} />
                    </div>
                    <div>
                        <PBalloon className="PBalloon" text={"너의 이야기가 궁금해!"} />
                    </div>
                </div> */}
                <div className="buttonsDiv">
                    <div className="buttonDiv">
                        <Link to={"/Chatbot"}><button className="button">챗봇</button></Link>
                    </div>
                    <div className="buttonDiv">
                        <Link to={"/MiniGame"}><button className="button">미니게임</button></Link>
                    </div>
                    <div className="buttonDiv">
                        <Link to={"/MyPage"}><button className="button">마이페이지</button></Link>
                    </div>
                    <div className="buttonDiv">
                        <button onClick={logout}>로그아웃</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Main;