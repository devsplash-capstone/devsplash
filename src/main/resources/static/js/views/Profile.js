import createView from "../createView.js";

export default function Profile(props) {
    if (props.user.error) {
        console.log("Not a member - Login / Signup")
        createView("/login");
    }


    return `
        <body>
        <div class="header-wrapper bg-light">
            <div class="header">
            </div>
        </div>
        <div class="content-wrapper pt-md-4">
            <div class="content container-xl px-3 px-md-4 px-lg-5 d-md-flex align-items-md-start">
                <div class="profile-wrapper col-md-3 d-md-inline-flex mr-md-3">
                    <div class="profile-wrapper-helper row p-2">
                        <div class="profile-image px-0 col-3 col-md-12">
                            <img src="https://via.placeholder.com/90x90.png?text=LoggedIn+User/O"
                                 class="rounded-circle" alt="">
                        </div>
                        <div class="profile-info-wrapper col-9 col-md-12 align-self-center d-md-flex justify-content-md-center">
                            <div class="profile-info pt-md-2 text-md-center">
                                <h5>${props.user.firstname} ${props.user.lastname}</h5>
                                <h6>${props.user.displayName}</h6>
                            </div>
                        </div>
                        <p class="mt-2"> Web Development Instructor with backend
                            experience in the hospitality, energy, and engineering spaces.</p>
                        <a class="btn btn-light btn-block col-12 border-dark mt-2 edit">Edit
                            profile</a>
                    </div>
                </div>
                <div class="details-wrapper col-md-9 d-md-inline-flex border rounded py-4 mt-3">
                    <div class="details-wrapper-helper col-12">
                        <div class="skills ">
                            <p class="mb-1">Languages I know</p>
                            <div class="border rounded p-3">
                                <span class="badge badge-pill badge-secondary my-1 p-2">Java</span>
                                <span class="badge badge-pill badge-secondary my-1 p-2">HTML</span>
                                <span class="badge badge-pill badge-secondary my-1 p-2">CSS</span>
                                <span class="badge badge-pill badge-secondary my-1 p-2">JS</span>
                                <span class="badge badge-pill badge-secondary my-1 p-2">Springboot</span>
                            </div>
                        </div>
                        <div class="github mt-4">
                            <p class="mb-1">Github</p>
                            <div class="">
                                <div class="list-group">
                                    <a href="https://github.com/devsplash-capstone/devsplash"
                                       class="list-group-item list-group-item-action">
                                        <div class="d-md-flex w-100 justify-content-between">
                                            <h5 class="mb-1">Devsplash</h5>
                                            <small>1 days ago</small>
                                        </div>
                                        <small>Java</small>
                                    </a>
                                    <a href="https://github.com/PrachiPhatak/Weather-Map" class="list-group-item list-group-item-action">
                                        <div class="d-md-flex w-100 justify-content-between">
                                            <h5 class="mb-1">Weathermap</h5>
                                            <small class="text-muted">7 days ago</small>
                                        </div>
                                        <small class="text-muted">HTML</small>
                                    </a>
                                    <a href="https://github.com/Diamond-Prachi/movie_project" class="list-group-item list-group-item-action">
                                        <div class="d-md-flex w-100 justify-content-between">
                                            <h5 class="mb-1">Screens come true</h5>
                                            <small class="text-muted">14 days ago</small>
                                        </div>
                                        <small class="text-muted">Javascript</small>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="current-projects mt-4">
                            <p class="mb-1">Ongoing Projects</p>
                            <div class="row mx-0 justify-content-around">
                                <div class="card col-12 col-md-6 px-0">
                                    <div class="card-body">
                                        <a href="project.html"><h5 class="card-title">Bookmarked</h5></a>
                                        <a href="profile.html"><h6 class="card-subtitle mb-2 text-muted">@prachi007</h6>
                                        </a>
                                        <p class="card-text">Bookmark is an application where you can save your favorite
                                            books, add summary and share.</p>
                                        <a href="project-edit.html">Edit</a>
                                    </div>
                                </div>
                                <div class="card col-12 col-md-6 px-0">
                                    <div class="card-body">
                                        <a href="project.html"><h5 class="card-title">Devsplash</h5></a>
                                        <a href="member.html"><h6 class="card-subtitle mb-2 text-muted">@mitch</h6></a>
                                        <p class="card-text">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form action="project-new.html">
                            <button class="btn btn-light btn-block col-12 border-dark mt-4"
                                    type="submit">Create new project
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
`
    //TODO: Save is not working
}

export function ProfileEvent() {
    editProfile();
}

function editProfile(id) {
    $(".edit").click(function () {
        createView("/editProfile")
    })
}

