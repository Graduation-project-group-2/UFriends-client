import Header from "../components/Header";
import ChatBotWord from "../components/ChatBotWord";
import {Link, useNavigate} from "react-router-dom";
import ButtonGoogle from "../components/ButtonGoogle";
import ButtonKakao from "../components/ButtonKakao";
import ButtonNaver from "../components/ButtonNaver";
import "../styles/SignUp.css"
import "../styles/SignUpPassword.css"
import "../styles/SignUpNickname.css"
import "../styles/SignUpPhoneBirth.css"
import {useState} from "react";
import {
    emailCheckAPI,
    nicknameCheckAPI,
    joinAPI
} from "../api/userAPI"

function Join() {

    const [email, setEmail] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [isEmailEnter, setEmailEnter] = useState(false);
    const [isEmail, setIsEmail] = useState(false);

    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [isPassword, setIsPassword] = useState(false);
    const [passwordMessage, setPasswordMessage] = useState("");
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
    const [isPasswordEnter, setPasswordEnter] = useState(false);

    const [nickname, setNickname] = useState(false);
    const [nicknameMessage, setNicknameMessage] = useState("");
    const [isNickname, setIsNickname] = useState(false);

    let body = {
        email,
        password,
        nickname
    }

    const onChangeEmail = (event) => {
        const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        const emailCurrent = event.target.value;
        setEmail(emailCurrent);

        if (!emailRegex.test(emailCurrent)) {
            setEmailMessage("이메일 형식이 올바르지 않습니다.");
            setIsEmail(false);
        } else {
            setEmailMessage("올바른 이메일 형식입니다.");
            setIsEmail(true);
        }
    }

    const onEmailSubmitHandler = (event) => {
        event.preventDefault();
        emailValidApi(email)
            .then(res => res.code == 200 ? alert("이메일 중복확인이 완료되었습니다.") : alert("중복된 이메일입니다."))
            .catch(err => console.error(err));
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        body.email = email;

        setEmailEnter(true);

    }

    async function emailValidApi(email) {
        const response = await emailCheckAPI(email);
        return response.data;
    }

    const onChangePassword = (event) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
        const passwordCurrent = event.target.value;
        setPassword(passwordCurrent);

        if (!passwordRegex.test(passwordCurrent)) {
            setPasswordMessage("숫자+영문자 조합으로 8자리 이상 입력해주세요!");
            setIsPassword(false);
        } else {
            setPasswordMessage("안전한 비밀번호에요 :)");
            setIsPassword(true);
        }
    }

    const onChangePasswordConfirm = (event) => {
        const passwordConfirmCurrent = event.target.value;
        setPasswordConfirm(passwordConfirmCurrent)

        if (password === passwordConfirmCurrent) {
            setPasswordConfirmMessage("비밀번호를 똑같이 입력했어요 :)")
            setIsPasswordConfirm(true)
        } else {
            setPasswordConfirmMessage("비밀번호가 틀려요. 다시 확인해주세요 ㅜㅜ")
            setIsPasswordConfirm(false)
        }
    }

    const onPasswordSubmitHandler = (event) => {
        event.preventDefault();

        body.password = password;

        setPasswordEnter(true);
    }

    async function nicknameValidApi(nickname) {
        const response = await nicknameCheckAPI(nickname);
        return response.data;
    }


    const onChangeNickname = (event) => {
        const nicknameRegex = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,10}$/;
        const nicknameCurrent = event.target.value;
        setNickname(nicknameCurrent);

        if (!nicknameRegex.test(nicknameCurrent)) {
            setNicknameMessage("한글 및 영어로 2자 이상 10자 이하로 입력해주세요!");
            setIsNickname(false);
        } else {
            setNicknameMessage("제대로 된 닉네임을 입력했어요 :)");
            setIsNickname(true);
        }
    }

    const onSubmitNicknameHandler = (event) => {
        event.preventDefault();

        nicknameValidApi(nickname)
            .then(res => res.code == 200 ? alert("사용 가능한 닉네임 입니다.") : alert("중복된 닉네임입니다."))
            .catch(err => console.error(err));
    }

    async function joinApi(body) {
        const response = await joinAPI(body.nickname, body.email, body.password);
        return response.data;
    }

    const navigate = useNavigate();

    const onSubmitJoinHandler = (event) => {
        event.preventDefault();

        joinApi(body)
            .then(navigate("/Login"))
            .catch(err => {
                console.error(err);
                alert("가입에 실패하였습니다. 다시 시도해 주세요.");
            });

    }

    return (
        <div className="entireDiv">
            <Header/>
            <div className="SignUpInnerDiv">
                <ChatBotWord text={"나랑 친구할래?"}/>
                {
                    (function () {
                        if (isEmailEnter !== true) {
                            return (
                                <>
                                    <div className="emailFormDiv">
                                        <form onSubmit={onSubmitHandler}>
                                            <div className="emailDiv">
                                                <label htmlFor="ID"> ID </label>
                                                <input className="emailField" id="Email" placeholder="Email"
                                                       type="email" value={email} onChange={onChangeEmail}></input>
                                                <div>
                                                    {email.length > 0 &&
                                                        <span className="emailConfirmSpan">{emailMessage}</span>}
                                                </div>
                                                <div className="emailButton">
                                                    <button onClick={onEmailSubmitHandler} disabled={!isEmail}>이메일 중복
                                                        확인
                                                    </button>
                                                    <button id="nextToPasswordButton" type="submit"
                                                            disabled={!isEmail}>계속하기
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="socialButtonDiv">
                                        <ButtonGoogle/>
                                        <ButtonKakao/>
                                        <ButtonNaver/>
                                        <p>소셜 계정으로 회원가입 하시겠어요?</p>
                                    </div>
                                </>
                            );
                        } else if (isEmailEnter === true) {
                            return (function () {
                                if (isPasswordEnter !== true) {
                                    return (
                                        <>
                                            <div className="passwordFormDiv">
                                                <form onSubmit={onPasswordSubmitHandler}>
                                                    <div>
                                                        <label htmlFor="Pwd"> Password </label>
                                                        <input className="passwordField" id="Pwd" placeholder="password"
                                                               type="password" onChange={onChangePassword}></input>
                                                    </div>

                                                    <div>
                                                        {password.length > 0 && (<span
                                                            className="passwordCheckSpan">{passwordMessage}</span>)}
                                                    </div>
                                                    <div className="rePasswordDiv">
                                                        <div>
                                                            <label htmlFor="Pwd2">Check PW </label>
                                                            <input className="rePasswordField" id="Pwd2"
                                                                   placeholder="same password" type="password"
                                                                   onChange={onChangePasswordConfirm}
                                                                   onClick={onChangePasswordConfirm}></input>
                                                        </div>

                                                        <div>
                                                            {passwordConfirm.length > 0 && (<span
                                                                className="passwordConfirmCheckSpan">{passwordConfirmMessage}</span>)}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button id="nextToPhoneBirthButton" type="submit"
                                                                disabled={!isPassword || !isPasswordConfirm}>계속하기
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </>
                                    );
                                } else if (isPasswordEnter === true) {
                                    return (function () {
                                        return (
                                            <>
                                                <form>
                                                    <div className="nicknameFormDiv">
                                                        <div>
                                                            <p id="nicknameP">Almost Done!</p>
                                                        </div>
                                                        <div className="nicknameDiv">
                                                            <div>
                                                                <label htmlFor="Nickname">Nickname </label>
                                                                <input className="nicknameField" id="Nickname"
                                                                       placeholder="Nickname"
                                                                       onChange={onChangeNickname}></input>
                                                            </div>
                                                            <div>
                                                                {nickname.length > 0 && (<span
                                                                    className="nicknameCheckSpan">{nicknameMessage}</span>)}
                                                            </div>
                                                            <div>
                                                                <button id="nicknameButton"
                                                                        onClick={onSubmitNicknameHandler}
                                                                        disabled={!isNickname}>닉네임 중복 확인
                                                                </button>
                                                            </div>
                                                            <div>
                                                                <Link to={"/Main"}>
                                                                    <button id="nextToEndButton" type="submit"
                                                                            onClick={onSubmitJoinHandler}
                                                                            disabled={!isNickname}>계속하기
                                                                    </button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>

                                            </>
                                        );
                                    })()
                                }
                            })()
                        }
                    })()
                }
            </div>
        </div>
    );
}

export default Join;