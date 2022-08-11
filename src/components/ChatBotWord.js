import chatbot from "../img/chatbot.png";
import PBox from "../components/PBox";
import "../styles/ChatBotWord.css"

function ChatBotWord({text}) {
    return (
        <div>
            <img id="TitleImg" src={chatbot} alt="ChatbotIMG" />
            <div>
                <PBox text={text} />
            </div>
        </div>
    );
}
export default ChatBotWord;