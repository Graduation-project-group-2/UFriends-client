import Start from './routes/Start';
import SignUp1 from './routes/SignUp1';
import SignUp2 from './routes/SignUp2';
import SignUp3 from './routes/SignUp3';
import SignUp4 from './routes/SignUp4';
import SignUpEnd from './routes/SignUpEnd';
import Login from './routes/Login';
import Main from './routes/Main';
import Chatbot from './routes/Chatbot';
import MyPage from './routes/MyPage';
import MiniGame from './routes/MiniGame';
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
                <Route path="/SignUp4" element={<SignUp4 />} />
                <Route path="/SignUp3" element={<SignUp3 />} />
                <Route path="/SignUp2" element={<SignUp2 />} />
                <Route path="/SignUp1" element={<SignUp1 />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Main" element={<Main />} />
                <Route path="/Chatbot" element={<Chatbot />} />
                <Route path="/MyPage" element={<MyPage />} />
                <Route path="/MiniGame" element={<MiniGame />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;