import Start from './routes/Start';
import SignUpEmail from './routes/SignUpEmail';
import SignUpPassword from './routes/SignUpPassword';
import SignUpPhoneBirth from './routes/SignUpPhoneBirth';
import SignUpNickname from './routes/SignUpNickname';
import SignUpEnd from './routes/SignUpEnd';
import SignUp from './routes/SignUp';
import Login from './routes/Login';
import Main from './routes/Main';
import GuestMain from './routes/GuestMain';
import Chatbot from './routes/Chatbot';
import MyPage from './routes/MyPage';
import MiniGame from './routes/MiniGame';
import Tetris from './routes/Tetris/Tetris';
import G_2048 from './routes/2048/G_2048';
import G_1010 from './routes/1010/G_1010';
import MineSweeper from './routes/MineSweeper/MineSweeper';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/SignUpEnd" element={<SignUpEnd />} />
                <Route path="/SignUpNickname" element={<SignUpNickname />} />
                <Route path="/SignUpPhoneBirth" element={<SignUpPhoneBirth />} />
                <Route path="/SignUpPassword" element={<SignUpPassword />} />
                <Route path="/SignUpEmail" element={<SignUpEmail />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Main" element={<Main />} />
                <Route path="/GuestMain" element={<GuestMain />} />
                <Route path="/Chatbot" element={<Chatbot />} />
                <Route path="/MyPage" element={<MyPage />} />
                <Route path="/MiniGame" element={<MiniGame />} />
                <Route path="/Tetris" element={<Tetris />} />
                <Route path="/G_2048" element={<G_2048/>} />
                <Route path="/G_1010" element={<G_1010/>} />
                <Route path="/MineSweeper" element={<MineSweeper/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;