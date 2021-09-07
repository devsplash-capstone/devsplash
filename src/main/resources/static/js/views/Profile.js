import createView from "../createView.js";

export default function Profile(props) {
    console.log(props.user.error)
    if(props.user.error)
    {
        console.log("Not a member - Login / Signup")
        createView("/login");
    }


    return `<h1>Welcome ${props.user.displayName}!</h1>`
}

export function ProfileEvent() {
    console.log("inside profile event");
}