import createView from "../createView.js";
// what this file is supposed to be doing:
// 1 - rendering a single project in detail
// 2 - allows for other members to join the project
// 3 - renders project members
// 4 - renders created by
// 5 - renders USER mini-profile (left side)

export default function ProjectComponent(props) {
    console.log(props.user.error)
    if (props.user.error) {
        console.log("Not a member - Login / Signup")
        createView("/login");
    }
    return `
      <!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Devsplash Mockup</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="header-wrapper bg-light">
    <div class="header">
      </div>
</div>
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
                        <h5>${props.user.firstname} ${props.user.lastname}</h5>
                        <h6>${props.user.display_name}</h6>
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
                    <p>${props.projects.description}
                    </p>
                    <h6>Created by </h6>
                    <div class="list-group">
                        <a href="member.html" class="list-group-item list-group-item-action">
                            <div class="d-md-flex w-100 justify-content-between">
                                <h5 class="mb-1">${props.projects.user_id}</h5>
                                <!-- get the user_id from the current project, make a request using the user_id to grab the user's display name-->
                                <small>Looking for - HTML, CSS, JS</small>
                            </div>
                            <small>Springboot, hibernate</small>
                        </a>
                    </div>

                    <h6 class="mt-4 mb-1">Skills required for this Project</h6>
                    <div class="filter mb-3 border rounded p-2">
                        <span class="badge badge-pill badge-secondary my-1 p-2">Java</span>
                        <span class="badge badge-pill badge-secondary my-1 p-2">HTML</span>
                        <span class="badge badge-pill badge-secondary my-1 p-2">CSS</span>
                        <span class="badge badge-pill badge-secondary my-1 p-2">JS</span>
                        <span class="badge badge-pill badge-secondary my-1 p-2">Springboot</span>
                    </div>
                    <div class="members mt-4">
                        <h6>Project Members</h6>
                        <div class="">
                            <div class="list-group">
                                <a href="member.html" class="list-group-item list-group-item-action">
                                    <div class="d-md-flex w-100 justify-content-between">
                                        <h5 class="mb-1">@diamond</h5>
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
                        <button class="btn btn-light btn-block col-12 border-dark mt-3">Join Project</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<!--       deleted footer + navbar because it's being written separately!!! -->

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossorigin="anonymous"></script>
</body>
</html>
      
`;
}