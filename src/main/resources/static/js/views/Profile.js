import createView from "../createView.js";

export default function Profile(props) {
    console.log(props.user.error)
    if (props.user.error) {
        console.log("Not a member - Login / Signup")
        createView("/login");
    }


    //TODO: Remove delete button and implement into Edit
    //TODO: Add sign out button
    return `<div class="container mx-auto">
            <h1 class="title-edit pt-2">Welcome ${props.user.displayName}!</h1>
            <div class="row mx-auto">
                <div class="col-3">
                    <img src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
                         alt="profilePic" width="75px">
                </div>
                <div class="col-6">
                    <div class="full-name">
                        <h3 id="display-name" class="title-edit">${props.user.displayName}</h3>
                    </div>
                    <h3 id="email" class="title-edit">${props.user.email}</h3>
                </div>
                <button type="button" class="edit mt-2 mb-2" data-id="${props.user.id}">Edit Profile</button>
                <button type="button" class="delete-btn " data-id="${props.user.id}">Delete Profile</button>
                <p class="p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque blanditiis cupiditate
                    et eveniet explicabo, ipsam iure laudantium minima minus molestias nulla odit optio ratione saepe
                    sed, sequi, unde veritatis?</p>
                <br>
                <div class="m-2 ml-0">Languages I Know </div>
                    <div class="border border-box rounded">
                        <ul class="d-flex list-unstyled justify-content-around">
                            <li class="border border-dark rounded-circle p-2 m-2 mb-0">JS</li>
                            <li class="border border-dark rounded-circle p-2 m-2 mb-0">HTML</li>
                            <li class="border border-dark rounded-circle p-2 m-2 mb-0">CSS</li>
                            <li class="border border-dark rounded-circle p-2 m-2 mb-0">Java</li>
                        </ul>
                    </div>

                <div class="m-2 mb-1">Looking For </div>
                    <div class="border border-box rounded">
                        <ul class="d-flex list-unstyled justify-content-around">
                            <li class="border border-dark rounded-circle p-2 m-2 mb-0">PHP</li>
                            <li class="border border-dark rounded-circle p-2 m-2 mb-0">C++</li>
                            <li class="border border-dark rounded-circle p-2 m-2 mb-0">React</li>
                        </ul>
                    </div>

                <button type="button" class="create-btn mt-5">Create Project</button>
            </div>
        </div>
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
    deleteEvent();
}

function deleteEvent() {
    $(".delete-btn").click(function () {

        let youSure = confirm("Are you sure you would like to delete your account? This is permanent");
        if (youSure === true){
            let request = {
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
            }

            let id = $(this)
                .attr("data-id")

            fetch(`http://localhost:8080/api/users/${id}`, request)
                .then(res => {
                    console.log(res.status);
                    createView("/");
                })
                .catch(error => {
                    console.log(error)
                    createView("/profile")
                })
        }

    })
}