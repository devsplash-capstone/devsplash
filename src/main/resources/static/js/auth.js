/**
 * Adds a login event to allow the user to initially obtain a new OAuth2.0 token
 * On a successful response, sets the tokens into storage and redirects to the root
 */
import fetchData from "./fetchData.js";
import createView from "./createView.js";

export default function LoginEvent() {
    $("#login-btn").click(function () {
        let user = {
            email: $("#email").val(),
            password: $("#password").val(),
            grant_type: 'password'
        }
        let request = {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa('dev-splash-client:secret')
            },
            body: `grant_type=${user.grant_type}&username=${user.email}&password=${user.password}&client_id=dev-splash-client`
        };

        fetchData(
            {
                route: `/oauth/token`
            },
            request).then((data) => {
            if (data.route.error) {
                $("#message").text(data.route.error_description);
            } else {
                setTokens(data);
                createView("/profile");
            }

        });
    });

}

export function LogoutEvent() {
    deleteTokens();
    createView("/")
}


/**
 * Gets the Authorization header needed for making requests to protected endpoints
 * This function should be used only after the user is logged in
 * @returns {{Authorization: string, "Content-Type": string}|{"Content-Type": string}}
 */
export function getHeaders() {
    const token = localStorage.getItem("access_token");
    return token
        ? {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + `${token}`
        }
        : {'Content-Type': 'application/json'};
}

/**
 * Attempts to set the access and refresh tokens needs to authenticate and authorize the client and user
 * @param responseData
 */
function setTokens(responseData) {
    if (responseData.route['access_token']) {
        localStorage.setItem("access_token", responseData.route['access_token']);
        console.log("Access token set");
    }
    if (responseData.route['refresh_token']) {
        localStorage.setItem("refresh_token", responseData.route['refresh_token']);
        console.log("Refresh token set")
    }
}

/**
 * Attempts to delete the token on sign out
 */

export function deleteTokens() {
    localStorage.removeItem("access_token");
    console.log("Access token deleted");
    localStorage.removeItem("refresh_token");
    console.log("Refresh token deleted")
}