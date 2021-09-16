import createView from "../createView.js";

// where are we calling ProjectComponent other than router.js?
export default function ProjectComponent(props) {
    console.log("inside project component")
    // console.log(props)
    // // console.log(props.user.error)
    // // if (props.user.error) {
    // //     console.log("Not a member - Login / Signup")
    // //     createView("/login");
    // }
    return `
<div class="content-wrapper pt-md-4">
    <div class="content container-xl px-3 px-md-4 px-lg-5 d-md-flex align-items-md-start">
        <div class="profile-wrapper col-md-3 d-md-inline-flex mr-md-3 d-none">
            <div class="profile-wrapper-helper row p-2">
                <div class="profile-image px-0 col-3 col-md-12">
                    <img src="https://via.placeholder.com/90x90.png?text=Visit+WhoIsHostingThisC/O"
                         class="rounded-circle" alt="">
                </div>
                <div class="profile-info-wrapper col-9 col-md-12 align-self-center d-md-flex justify-content-md-center">
                    <div class="profile-info pt-md-2 text-md-center">
                        <h5>Member First Name & Last Name</h5>
                        <h6>Member Display Name</h6>
                    </div>
                </div>
                <p class="mt-2"> Web Development Instructor with backend
                    experience in the hospitality, energy, and engineering spaces.</p>
                <a class="btn btn-light btn-block col-12 border-dark mt-2" href="profile-edit.html">Edit
                    profile</a>
            </div>
        </div>
        <div class="details-wrapper col-md-9 d-md-inline-flex border rounded py-4 mt-3">
            <div class="details-wrapper-helper col-12">
                <div class="current-projects mt-4">
                    <h3>${props.projects.name}</h3>
                    <p>${props.projects.description}</p>
                    <h6>Created by </h6>
                    <div class="list-group">
                        <a href="member.html" class="list-group-item list-group-item-action">
                            <div class="d-md-flex w-100 justify-content-between">
                                <h5 class="mb-1">Member Display Name</h5>
                                <small>Looking for - HTML, CSS, JS</small>
                            </div>
                            <small>Springboot, hibernate</small>
                        </a>
                    </div>
                </div>
                <div class="members mt-4">
                    <h6>Project Members</h6>
                    <div class="">
                        <div class="list-group">
                            <a href="member.html" class="list-group-item list-group-item-action">
                                <div class="d-md-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Member Display Name Here</h5>
                                    <small>Looking for - HTML, CSS, JS</small>
                                </div>
                                <small>Springboot, hibernate</small>
                            </a>
                            <a href="member.html" class="list-group-item list-group-item-action">
                                <div class="d-md-flex w-100 justify-content-between">
                                    <h5 class="mb-1">@mitch</h5>
                                    <small>Looking for - HTML, CSS, JS</small>
                                </div>
                                <small>Springboot, hibernate</small>
                            </a>
                            <a href="profile.html" class="list-group-item list-group-item-action">
                                <div class="d-md-flex w-100 justify-content-between">
                                    <h5 class="mb-1">@prachi007</h5>
                                    <small>Looking for - HTML, CSS, JS</small>
                                </div>
                                <small>Springboot, hibernate</small>
                            </a>
                            <a href="member.html" class="list-group-item list-group-item-action">
                                <div class="d-md-flex w-100 justify-content-between">
                                    <h5 class="mb-1">@ricardo</h5>
                                    <small>Looking for - HTML, CSS, JS</small>
                                </div>
                                <small>Springboot, hibernate</small>
                            </a>
                        </div>
                    </div>
                </div>
                <form action="projects.html">
                    <button class="btn btn-light btn-block col-12 border-dark mt-3" id="joinProject">Join Project
                    </button>
                </form>
            </div>
        </div>
    </div>
    </div>
</div>

<!--       deleted footer + navbar because it's being written separately!!! -->
`;
}

// calls ALL functions within project.js
export function ViewProjects() {
    // handles POST request for a user to JOIN a project
    ProjectJoinRequestEvent();
    // handles GET request to VIEW a project
    ViewProjectEvent();

}

function ProjectJoinRequestEvent() {
    $("#joinProject").click(function () {
        console.log("join project still in progress!")
    })

}

// function ViewProjectEvent() {
//     //this console.log is to help with trouble-shooting...
//     console.log("inside view project event")
//     let request = {
//         method: "GET",
//         headers: {"Content-type": "application/json"},
//     }
//     console.log(request);
//     fetch(`http://localhost.8080/api/projects/findById/${id}`, request).then(
//         (response) => {
//             console.log(response);

function ViewProjectEvent() {
    // $("#edit-btn").click(function () {
        let request = {
            method: "GET",
            headers: {"Content-type": "application/json"},
        }
        console.log(request);
        fetch("http://localhost.8080/api/users", request).then(
            (response) => {
                console.log(response.status);

        });
}