import Header from "../components/Header";
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/Chatbot.css";
import {useEffect, useState} from "react";
import axios from "axios";
import {API_CHAT_TO_BOT} from "../config/env";


function Chatbot() {
    const USER_ID = "USER_ID";

    const [prompt, setPrompt] = useState("");
    const [botChat, setBotChat] = useState("");

    const [promptList, setPromptList] = useState([]);
    const [botChatList, setBotChatList] = useState([]);

    window.addEventListener('beforeunload', (event) => {
        // 표준에 따라 기본 동작 방지
        event.preventDefault();
        // Chrome에서는 returnValue 설정이 필요함
        event.returnValue = '';
    });

    const preventClose = (e) => {
        e.preventDefault();
        e.returnValue = ""; //Chrome에서 동작하도록; deprecated
    };

    useEffect(() => {
        (() => {
            window.addEventListener("beforeunload", preventClose);
        })();

        return () => {
            window.removeEventListener("beforeunload", preventClose);
        };
    }, []);

    useEffect(() => {
        setBotChatList([...botChatList, botChat]);
        setBotChat("");
    }, [prompt, botChat])


    const onPromptSubmitHandler = (event) => {
        event.preventDefault();
        setPromptList([...promptList, prompt]);
        setPrompt("");
        chatToBotApi(prompt);

    }

    const onChangePrompt = (event) => {
        event.preventDefault();
        setPrompt(event.target.value);
    }

    async function chatToBotApi(prompt) {
        const userId = localStorage.getItem(USER_ID);
        await axios
            .get(`${API_CHAT_TO_BOT}?userId=${userId}&prompt=${prompt}`)
            .then((res) => {
                setBotChat(res.data.data.botChat);
                setBotChatList([...botChatList, botChat])
            }).catch((err) => {
                console.log(err);
            })
    }


    return (
        <div className="entireDiv">
            <div className="androidDiv">
                <Header/>

                <div className = "chattingDiv">
                    <p className="ufriendsArea" id="ufriend_text" type="text">안녕하세요? 기분이 어때요</p>

                    <div className={"userChatDiv"}>
                        {promptList.map(userSay => {
                            if (userSay === "")
                                return null
                            return (<div className="userArea" id="user_text" type="text" key={userSay.chatId}>{userSay}</div>)
                        })}
                    </div>
                    <div className={"botChatDiv"}>
                        {botChatList.map(botSay => {
                            if (botSay === "")
                                return null
                            return (<div className="ufriendsArea" id="ufriend_text" type="text" key={botSay.chatId}>{botSay}</div>)
                        })}
                    </div>
                </div>

                <form onSubmit={onPromptSubmitHandler}>

                    <div className = "sendFormDiv">
                        <input id="input_send_Message" type="text" value={prompt} onChange={onChangePrompt}/>
                        <button id="submit_button" type="submit">전송</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Chatbot;