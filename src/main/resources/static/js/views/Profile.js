import createView from "../createView.js";

export default function Profile(props) {
    console.log(props.user.error)
    if (props.user.error) {
        console.log("Not a member - Login / Signup")
        createView("/login");
    }


    return `
        <div class="container mx-auto pt-2">
            <h1 class="pt-2 text-center mb-3">Welcome ${props.user.displayName}!</h1>
            <div class="row mx-auto">
                <div class="col-4">
                    <img class="rounded-circle border border-dark" src="https://randomuser.me/api/portraits/women/90.jpg"
                         alt="profilePic" width="100px">
                </div>
                <div class="col-8">
                    <div class="full-name mt-3">
                        <h6 id="display-name" class="title-edit">${props.user.displayName}</h6>
                    </div>
                    <h6 id="email" class="title-edit">${props.user.email}</h6>
                </div>
                <button type="button" class="btn btn-block border border-primary edit mt-2 mb-2" data-id="${props.user.id}">Edit Profile</button>
                <a href="/logout"  class="btn btn-block border border-primary mb-2" data-link> Logout</a>
                <button type="button" class="btn btn-block border border-primary delete-btn d-none" data-id="${props.user.id}">Delete Profile</button>
                <p class="p-3">I am backend developer. I have many good ideas. I am looking for enthusiastic
                team player to collabrate.</p>
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
                <a href="/project"  class="btn btn-block border border-primary create-btn mt-5" data-link> Create Project </a>
            </div>
        </div>
`
    //TODO: Save is not working
}

function editProfile() {
    $(".edit").click(function () {

        $(".delete-btn").toggleClass("d-none");

        $(".content-edit, .title-edit").attr("contenteditable", true);
        $(".edit").text("Edit");
        $(this).siblings(".title-edit, .content-edit").attr("contenteditable", true);
        $(this).text("Save");

        console.log("edit event fired off");
        $(this).siblings(".title-edit, .content-edit").attr("contenteditable", true);
        $(this).text("Save");

        $(this).on("click", function () {
            $(".delete-btn").toggleClass("d-none");
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