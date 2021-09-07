import createView from "../createView.js";

export default function Profile() {
    console.log("test test etet!!!!")
    return `<h1>Profile page!!!</h1>`
}

export function ProfileEvent() {
    // $("#profile").click(function () {
    //     let user = {
    //         email: $("#email").val(),
    //         firstname: $("#firstname").val(),
    //         lastname: $("#lastname").val(),
    //         displayName: $("#displayName").val(),
    //         password: $("#password").val()
    //     }
    //
    //     let request = {
    //         method: "GET",
    //         headers: {"Content-type": "application/json"},
    //         body: JSON.stringify(user)
    //     }
    //     fetch("http://localhost:8080/api/users", request).then(
    //         (response) => {
    //         console.log(response.status);
    //         createView("/");
    //     }
    //     )
    // })
    console.log("inside profile event");
    createView("/profile");
}