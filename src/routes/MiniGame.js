import Header from "../components/Header";
import "../styles/MiniGame.css";
import gameIcon from "../img/gameIcon.png";

function MiniGame() {
    return (
        <div>
            <Header />
            <div className="miniDiv">
                <div>
                    <div className="img1 gameImg">
                        <button>
                            <img src={gameIcon} alt="이미지1" />
                        </button>
                        <p>제목1</p>
                    </div>
                    <div className="img2 gameImg">
                        <button>
                            <img src={gameIcon} alt="이미지2" />
                        </button>
                        <p>제목2</p>
                    </div>
                </div>
                <div>
                    <div className="img3 gameImg">
                        <button>
                            <img src={gameIcon} alt="이미지3" />
                        </button>
                        <p>제목3</p>
                    </div>
                    <div className="img4 gameImg">
                        <button>
                            <img src={gameIcon} alt="이미지4" />
                        </button>
                        <p>제목4</p>
                    </div>
                </div>
                <div>
                    <div className="img5 gameImg">
                        <button>
                            <img src={gameIcon} alt="이미지5" />
                        </button>
                        <p>제목5</p>
                    </div>
                    <div className="img6 gameImg">
                        <button>
                            <img src={gameIcon} alt="이미지6" />
                        </button>
                        <p>제목6</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default MiniGame;