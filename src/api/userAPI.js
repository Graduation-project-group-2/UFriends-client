import axios from 'axios';
import {
    API_HOST,
    API_EMAIL_CHECK,
    API_NICKNAME_CHECK,
    API_PHONE_NUM_CHECK,
    API_JOIN,
    API_LOGIN,
    API_EMAIL_VALID,
    API_CHANGE_PASSWORD,
    API_DELETE_USER
} from "../config/env";

const ACCESS_TOKEN = "ACCESS_TOKEN"

async function emailCheckAPI(email) {
    await axios
        .get(API_EMAIL_CHECK + "/" + email)
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
}

async function nicknameCheckAPI(nickname) {
    await axios
        .get(API_NICKNAME_CHECK + "/" + nickname)
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
}

async function phoneNumCheckAPI(phoneNum) {
    await axios
        .get(API_PHONE_NUM_CHECK + "/" + phoneNum)
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
}

async function joinAPI(nickname, email, password, phoneNum, birthday) {
    await axios
        .post(API_JOIN, {
            nickname,
            email,
            password,
            phoneNum,
            birthday
        })
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.error(error);
        });
}

async function loginAPI(data) {
    let headers = new Headers({
        "Content-Type": "application/json",
    });
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    if (accessToken && accessToken !== null) {
        headers.append("Authorization", "Bearer " + accessToken);
    }
    await axios
        .post(API_LOGIN, {
            email: data.email,
            password: data.password,
        }, headers)
        .then((res) => {
            localStorage.setItem(ACCESS_TOKEN, res.data.data.token);
        })
        .catch((error) => {
            console.error(error);
        });
}

// async function emailValidAPI(email) {
//     await axios
//         .get(API_EMAIL_VALID, {
//             params: {email},
//         })
//         .then((data) => {
//             console.log(data);
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// }

async function changePasswordAPI(email, password) {
    await axios
        .put(API_CHANGE_PASSWORD, {
            email,
            password,
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
}

async function deleteUserAPI(userId) {
    await axios
        .post(API_DELETE_USER + "/" + userId)
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
}

export function logout(){
    localStorage.setItem(ACCESS_TOKEN, null);
    window.location.href = "/login";
}

export {
    emailCheckAPI,
    nicknameCheckAPI,
    phoneNumCheckAPI,
    joinAPI, loginAPI, changePasswordAPI, deleteUserAPI
};
