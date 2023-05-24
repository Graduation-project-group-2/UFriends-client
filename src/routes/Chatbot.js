import Header from "../components/Header";
import 'bootstrap/dist/css/bootstrap.css';

function Chatbot() {
    return (
        <div className="entireDiv">
            <div className="androidDiv">
                <Header/>
                <div className = "chattingDiv">
                    <p className="ufriendTextField" id="ufriend_text" type="text">안녕?</p>
                    <p className="userTextField" id="user_text" type="text">나 오늘 완전 기분 안 좋은 일 있었어ㅠㅠ</p>
                    <p className="ufriendTextField" id="ufriend_text" type="text">무슨 일이야?</p>
                    <p className="userTextField" id="user_text" type="text">....</p>
                </div>

                <div class = "sendFormDiv">
                    <input id="input_send_Message" type="text" />
                    <button id="submit_button" type="submit">전송</button>
                </div>





                <div>
                    <div class="input-group">
                        <ul className="list-group">
                            {/*<li className="list-group-item" v-for="message in messages">*/}

                            {/*</li>*/}
                        </ul>
                        
                        
                        {/* <input type="text" class="form-control"/>
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="button">보내기</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chatbot;