import Header from "../components/Header";
import 'bootstrap/dist/css/bootstrap.css';

function Chatbot() {
    return (
        <div>
            <div>
                <Header/>
                <div>
                    {/* 대화 부분 */}
                </div>
                <div>
                    <div class="input-group">
                        <ul className="list-group">
                            {/*<li className="list-group-item" v-for="message in messages">*/}

                            {/*</li>*/}
                        </ul>
                        <input type="text" class="form-control"/>
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="button">보내기</button>
                        </div>
                        {/*/!* 입력창 부분 *!/*/}
                        {/*<input type="text"/>*/}
                        {/*<button type="submit">전송</button>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chatbot;