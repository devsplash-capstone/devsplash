import createView from "../createView.js";

export default function Register(registration) {
    return `<!DOCTYPE html>
        <html lang="eng">
            <head>
                <meta charset="UTF-8"/>
                <title>Register</title>
            </head>
            <body>
                <h1>Register</h1>
           <input id="username" name="username" type="text" placeholder="Enter Username"/>
            <input id="firstname" name="firstname" type="text" placeholder="Enter Firstname"/>
            <input id="lastname" name="lastname" type="text" placeholder="Enter LastName"/>
            <input id="displayName" type="text" placeholder="Enter DisplayName"/>
                <input id="email" name="email" type="email" placeholder="Enter Email"/>
                <input id="password" name="password" type="password" placeholder="Enter Password"/>
                <input id="register-btn" type="button" value="Register"/>
            </form>
        </body>
    </html>`;

}

export function RegisterEvent() {
    $("#register-btn").click(function () {
        let user = {
            email: $("#email").val(),
            firstname: $("#firstname").val(),
            lastname: $("#lastname").val(),
            displayName: $("#displayName").val(),
            password: $("#password").val()
        }
        let request = {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(user)
        }
        console.log(request);
        console.log(user.displayName);
        fetch("http://localhost:8080/api/users", request).then(
            (response) => {
                console.log(response.status);
                createView("/profile");
            });
    })
}