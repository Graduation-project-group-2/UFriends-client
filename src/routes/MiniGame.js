import Header from "../components/Header";
import "../styles/MiniGame.css";
import { Link } from "react-router-dom";
import tetris from "../img/Tetris.png";
import g2048 from "../img/2048.png";
import g1010 from "../img/1010.png";
import mine from "../img/Mine.png";

function MiniGame() {
    return (
        <div>
            <Header />
            <div className="miniDiv">
                <div>
                    <div className="img1 gameImg">
                        <Link to={"/Tetris"}>
                            <button>
                                <img src={tetris} alt="tetris" />
                            </button>
                        </Link>
                        <p>&nbsp;&lt;테트리스&gt;</p>
                    </div>
                    <div className="img2 gameImg">
                        <Link to={"/G_2048"}>
                            <button>
                                <img src={g2048} alt="2048" />
                            </button>
                        </Link>
                        <p>&lt;2048 게임&gt;</p>
                    </div>
                </div>
                <div>
                    <div className="img3 gameImg">
                        <Link to={"/G_1010"}>
                            <button>
                                <img src={g1010} alt="1010" />
                            </button>
                        </Link>
                        <p>&lt;1010 게임&gt;</p>
                    </div>
                    <div className="img4 gameImg">
                        <Link to={"/Minesweeper"}>
                            <button>
                                <img src={mine} alt="mine" />
                            </button>
                        </Link>
                        <p>&nbsp;&lt;지뢰 찾기&gt;</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default MiniGame;