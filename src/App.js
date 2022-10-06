import Start from './routes/Start';
import SignUp from './routes/SignUp';
import Login from './routes/Login';
import Main from './routes/Main';
import GuestMain from './routes/GuestMain';
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
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Main" element={<Main />} />
                <Route path="/GuestMain" element={<GuestMain />} />
                <Route path="/Chatbot" element={<Chatbot />} />
                <Route path="/MyPage" element={<MyPage />} />
                <Route path="/MiniGame" element={<MiniGame />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;