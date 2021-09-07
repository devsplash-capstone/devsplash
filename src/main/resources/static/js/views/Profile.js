import createView from "../createView.js";

export default function Profile(props) {
    console.log(props.user)
    if(props.user === null)
        createView("/login");

    console.log("test test etet!!!!")
    return `<h1>Welcome ${props.user.displayName}!</h1>`
}

export function ProfileEvent() {
    console.log("inside profile event");
}