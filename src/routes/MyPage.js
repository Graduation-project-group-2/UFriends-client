import Header from "../components/Header";
import "../styles/MyPage.css"

function MyPage() {
    return (
        <div className="EntireDiv">
            <Header />
            <div className="myPageInnerDiv">
                <div className="firstDiv">
                    <div className="box">
                        <img id="profilImg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="ProfilImg" />
                    </div>
                    <div className="content">
                        <div className="contentBox">
                            <div className="contentLine">
                                <h4 className="myPageH4">닉네임</h4>
                                <p className="myPageP">nickname</p>
                            </div>
                            <div className="contentLine">
                                <button className="myPageBtn">닉네임 변경</button>
                            </div>
                        </div>
                        <div className="contentBox">
                            <div className="contentLine">
                                <h4 className="myPageH4">레벨</h4>
                                <p className="myPageP">lv.n</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    다이어리(깃허브처럼 잔디 까는 방식으로 할 수 있도록 둘것)
                </div>
                <hr />
                <div className="content">
                    <div className="contentBox">
                        <div className="contentLine">
                            <h4 className="myPageH4">현재 색상</h4>
                            <p className="myPageP">~~</p>
                        </div>
                        <div className="contentLine">
                            <button className="myPageBtn">색상 변경</button>
                        </div>
                    </div>
                    <div className="contentBox">
                        <div className="contentLine">
                            <h4 className="myPageH4">현재 글꼴</h4>
                            <p className="myPageP">~~</p>
                        </div>
                        <div className="contentLine">
                            <button className="myPageBtn">글꼴 변경</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPage;