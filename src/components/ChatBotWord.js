import chatbot from "../img/chatbot.png";
// import PBox from "../components/PBox";
import "../styles/ChatBotWord.css"

function ChatBotWord({text}) {
    return (
        <div>
            <img id="TitleImg" src={chatbot} alt="ChatbotIMG" />
            <div>
                <p id="startMent">나랑 친구할래?</p>
            </div>
        </div>
    );
}
export default ChatBotWord;