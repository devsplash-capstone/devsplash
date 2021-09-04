import createView from "../createView.js";

export default function Profile() {
    return `<!DOCTYPE html>
    <html lang="eng">
        <head>
            <meta charset="UTF-8"/>
            <title>Profile</title>
        </head>
        <body>
            <h1>Profile Page !!!!!!!!!!</h1>

            <form id="User-Profile"></form>
            <input id="profile-view" type="file" placeholder="You can view your profile here">
            </body>
            </html>`;// <--there are tickmarks here!!
}

export function ProfileEvent() {
    $("#profile").click(function () {
        let user = {
            email: $("#email").val(),
            firstname: $("#firstname").val(),
            lastname: $("#lastname").val(),
            displayName: $("#displayName").val(),
            password: $("#password").val()
        }

        let request = {
            method: "GET",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(user)
        }
        fetch("http://localhost:8080/api/users", request).then(
            (response) => {
            console.log(response.status);
            createView("/");
        }
        )
    })
}