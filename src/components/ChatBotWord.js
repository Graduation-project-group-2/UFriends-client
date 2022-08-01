import chatbot from "../img/chatbot.png";
import PBalloon from "../components/PBalloon";

function ChatBotWord() {
    return (
        <div>
            <img src={chatbot} alt="ChatbotIMG" />
            <PBalloon text={"당신의 친구가 되기 위해 기다리고 있어요 :)"} />
        </div>
    );
}
export default ChatBotWord;