import createView from "../createView.js";

export default function Profile(props) {
    console.log(props.user.error)
    if (props.user.error) {
        console.log("Not a member - Login / Signup")
        createView("/login");
    }


    return `<a href="/project" data-link>Create Project</a>
            <h1 class="title-edit">Welcome ${props.user.displayName}!</h1>
            <h3 id="first-name" class="title-edit">${props.user.firstname}</h3>
            <h3 id="last-name" class="title-edit">${props.user.lastname}</h3> 
            <h3 id="email" class="title-edit">${props.user.email}</h3>
            <button type="button" class="edit" data-id="${props.user.id}">Edit Profile</button>
`
}

function editProfile() {
    $(".edit").click(function () {

        $(".content-edit, .title-edit").attr("contenteditable", true);
        $(".edit").text("Edit");
        $(this).siblings(".title-edit, .content-edit").attr("contenteditable", true);
        $(this).text("Save");

        console.log("edit event fired off");
        $(this).siblings(".title-edit, .content-edit").attr("contenteditable", true);
        $(this).text("Save");

        $(this).on("click", function () {
            let user = {
                firstname: $("#first-name").text(),
                lastname: $("#last-name").text(),
                email: $("#email").text(),
                id: $(this).attr("data-id")
            }
            console.log("user is being saved");
            let request = {
                method: "PUT",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(user)
            }
            fetch(`http://localhost:8080/api/users/`, request)
                .then(res => {
                    console.log(res.status);
                    createView("/profile")
                }).catch(error => {
                console.log(error);
                createView("/profile")

                fetch(`http://localhost:8080/api/users/`, request)
                    .then(res => {
                        console.log(res.status);
                        createView("/users")
                    }).catch(error => {
                    console.log(error);
                    createView("/users")
                })
            })
        })
    })
}

export function ProfileEvent() {
    console.log("inside profile event");
    editProfile();
}