import chatbot from "../img/chatbot.png";
import { Link } from "react-router-dom";
import PBalloon from "../components/PBalloon";

function Main() {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <img src={chatbot} alt="ChatbotIMG" />
                    <div>
                        <PBalloon text={"@@아, 오늘 하루는 어땠어?"} />
                    </div>
                    <div>
                        <PBalloon text={"너의 이야기가 궁금해!"} />
                    </div>
                </div>
            </div>
            <div>
                <Link to={"/Chatbot"}><button>챗봇</button></Link>
            </div>
            <div>
                <Link to={"/MiniGame"}><button>미니게임</button></Link>
            </div>
            <div>
                <Link to={"/MyPage"}><button>마이페이지</button></Link>
            </div>
            
            </div>
        </div>
    );
}

export default Main;