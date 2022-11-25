import Header from "../components/Header";
import ChatBotWord from "../components/ChatBotWord";
import {Link, useNavigate} from "react-router-dom";
import ButtonGoogle from "../components/ButtonGoogle";
import ButtonKakao from "../components/ButtonKakao";
import ButtonNaver from "../components/ButtonNaver";
import "../styles/SignUp.css"
import { useState } from "react";
import {
    emailCheckAPI,
    nicknameCheckAPI,
    phoneNumCheckAPI,
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

    const [phoneNumber, setPhoneNumber] = useState("");
    const [isPhoneNumber, setIsPhoneNumber] = useState(false);
    const [birth, setBirth] = useState("");
    const [isBirth, setIsBirth] = useState(false);
    const [isPhoneAndBirthEnter, setPhoneAndBirthEnter] = useState(false);
    const [nickname, setNickname] = useState(false);
    const [nicknameMessage, setNicknameMessage] = useState("");
    const [isNickname, setIsNickname] = useState(false);

    let body = {
        email,
        password,
        nickname,
        phoneNumber,
        birth
    }

    const onChangeEmail = (event) => {
        const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        const emailCurrent = event.target.value;
        setEmail(emailCurrent);

        if(!emailRegex.test(emailCurrent)) {
            setEmailMessage("이메일 형식이 올바르지 않습니다.");
            setIsEmail(false);
        }
        else {
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
        const response = emailCheckAPI(email);
        return response.data;
    }

    const onChangePassword = (event) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
        const passwordCurrent = event.target.value;
        setPassword(passwordCurrent);

        if(!passwordRegex.test(passwordCurrent)) {
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

    const onPhoneAndBirthSubmitHandler = (event) => {
        event.preventDefault();

        body.phoneNumber = phoneNumber;
        body.birth = birth;
        setPhoneAndBirthEnter(true);
    }

    const onChangePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
        setIsPhoneNumber(true);
    }

    const onChangeBirth = (event) => {
        setBirth(event.target.value);
        setIsBirth(true);
    }

    async function nicknameValidApi(nickname) {
        const response = nicknameCheckAPI(nickname);
        return response.data;
    }

    const onPhoneNumSubmitHandler = (event) => {
        event.preventDefault();
        phoneNumValidApi(phoneNumber)
            .then(res => res.code == 200 ? alert("전화번호 확인이 완료되었습니다.") : alert("이미 가입된 전화번호입니다."))
            .catch(err => console.error(err));
    };

    async function phoneNumValidApi(phoneNumber){
        const response = phoneNumCheckAPI(phoneNumber);
        return response.data;
    }

    const onChangeNickname = (event) => {
        const nicknameRegex = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,10}$/;
        const nicknameCurrent = event.target.value;
        setNickname(nicknameCurrent);

        if(!nicknameRegex.test(nicknameCurrent)) {
            setNicknameMessage("한글 및 영어로 2자 이상 10자 이하로 입력해주세요!");
            setIsNickname(false);
        }
        else {
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
        const response = joinAPI(body.nickname, body.email, body.password, body.phoneNumber, body.birth);
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
            <Header />
            <div className="innerDiv">
                <ChatBotWord text={"당신의 친구가 되기 위해 기다리고 있어요 :)"} />
                {
                    (function() {
                        if(isEmailEnter!==true){
                            return (
                            <>
                                
                                <div className="emailFormDiv">
                                    <form onSubmit={onSubmitHandler}>
                                        <div>
                                            <label htmlFor="Email">먼저 사용하실 이메일을 입력해주세요</label>
                                        </div>
                                        <div className="emailDiv">
                                            <input className="emailField" id="Email" placeholder="이메일을 입력해주세요!" type="email" value={email} onChange={onChangeEmail} ></input>
                                            <div>
                                                {email.length > 0 && <span className="emailConfirmSpan">{emailMessage}</span>}
                                            </div>
                                            <div className="emailButton">
                                                <button onClick={onEmailSubmitHandler} disabled={!isEmail}>이메일 중복 확인</button>
                                                <button id="nextToPasswordButton" type="submit" disabled={!isEmail} >계속하기</button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="socialButtonDiv"> 
                                        <ButtonGoogle />
                                        <ButtonKakao />
                                        <ButtonNaver />
                                        <p>혹시 다른 계정으로 회원가입 하시겠어요?</p>
                                    </div>
                                </div>
                            </>
                            );
                        }
                        else if(isEmailEnter===true){
                            return (function() {
                                if(isPasswordEnter!==true){
                                    return (
                                        <>
                                            <div className="passwordFormDiv">
                                                <form onSubmit={onPasswordSubmitHandler}>
                                                    <div>
                                                        <label htmlFor="Pwd">다음으로 비밀번호를 입력해볼까요?</label>
                                                    </div>
                                                    <div>
                                                        <input className="passwordField" id="Pwd" placeholder="8자리 이상 입력해주세요!" type="password" onChange={onChangePassword}></input>
                                                    </div>
                                                    <div>
                                                        {password.length > 0 && (<span className="passwordCheckSpan">{passwordMessage}</span>)}
                                                    </div>
                                                    <div className="rePasswordDiv">
                                                        <div>
                                                            <label htmlFor="Pwd2">한번 더 입력해볼게요!</label>
                                                        </div>
                                                        <div>
                                                            <input className="rePasswordField" id="Pwd2" placeholder="한번 더 입력해주세요" type="password" onChange={onChangePasswordConfirm} onClick={onChangePasswordConfirm} ></input>
                                                        </div>
                                                        <div>
                                                            {passwordConfirm.length > 0 && (<span className="passwordConfirmCheckSpan">{passwordConfirmMessage}</span>)}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button id="nextToPhoneBirthButton" type="submit" disabled={!isPassword || !isPasswordConfirm}>계속하기</button>
                                                    </div>
                                                </form>
                                            </div>                
                                        </>
                                    );
                                }
                                else if(isPasswordEnter===true){
                                    return (function() {
                                        if(isPhoneAndBirthEnter!==true){
                                            return (
                                                <>
                                                    <div className="phoneBirthFormDiv">
                                                        <p id="phoneBirthP">나머지 정보도 알려주세요!</p>
                                                        <form onSubmit={onPhoneAndBirthSubmitHandler}>
                                                            <div>
                                                                <label htmlFor="PhoneNumber">전화번호</label>
                                                            </div>
                                                            <div>
                                                                <input className="phoneField" id="PhoneNumber" placeholder="010-0000-0000" onChange={onChangePhoneNumber}></input>
                                                                <div className="phoneNumBtn">
                                                                    <button onClick={onPhoneNumSubmitHandler} disabled={!isPhoneNumber}>전화번호 중복 확인</button>
                                                                </div>
                                                            </div>
                                                            <div className="birthDiv">
                                                                <div>
                                                                    <label htmlFor="Birth">생년월일</label>
                                                                </div>
                                                                <div>
                                                                    <input className="birthField" id="Birth" placeholder="YYYY.MM.DD 양/음" type="date" onChange={onChangeBirth}></input>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <button id="nextToNicknameButton" type="submit" disabled={!isPhoneNumber || !isBirth}>계속하기</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </>
                                            );
                                        }
                                        else if(isPhoneAndBirthEnter===true){
                                            return (
                                                <>
                                                    <form>
                                                        <div className="nicknameFormDiv">
                                                            <div>
                                                                <p id="nicknameP">이제 거의 다 끝났어요</p>
                                                            </div>
                                                            <div className="nicknameDiv">
                                                                <div>
                                                                    <label htmlFor="Nickname">닉네임</label>
                                                                </div>
                                                                <div>
                                                                    <input className="nicknameField" id="Nickname" placeholder="닉네임 입력" onChange={onChangeNickname}></input>
                                                                </div>
                                                                <div>
                                                                    {nickname.length > 0 && (<span className="nicknameCheckSpan">{nicknameMessage}</span>)}
                                                                </div>
                                                                <div>
                                                                    <button id="nicknameButton" onClick={onSubmitNicknameHandler} disabled={!isNickname}>닉네임 중복 확인</button>
                                                                </div>
                                                                <div>
                                                                    <Link to={"/Main"}><button id="nextToEndButton" type="submit" onClick={onSubmitJoinHandler} disabled={!isNickname}>계속하기</button></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                            
                                                </>
                                            );
                                        }
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