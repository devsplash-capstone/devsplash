import createView from "../createView.js";

export default function Profile() {
    console.log("test test etet!!!!")
    return `<h1>Profile page!!!</h1>`
}

export function ProfileEvent() {
    console.log("inside profile event");
    createView("/profile");
}