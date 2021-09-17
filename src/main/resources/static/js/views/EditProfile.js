//TODO: EditProfileView() - copy code from mockup and return
//TODO: Add password and confirm password
//TODO: Add asterisk sign on required fields
//TODO: EditProfileValidate()
//TODO: EditProfileSave()
//TODO: EditProfileCancel()
//TODO: EditProfileDelete()

//TODO: add two new columns img URL, about me, make fields other than display name not required

import createView from "../createView.js";

export default function EditProfile(props) {
    return `
    <body>
        <div class="content-wrapper pt-md-4">
            <div class="content container-xl px-3 px-md-4 px-lg-5 d-md-flex align-items-md-start">
                <section class="h-100 w-100 ">
                    <div class="container-xl border h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col">
                                <div class="card card-registration my-3 border-0">
                                    <div class="row g-0">
                                        <form class="card-body px-md-5 needs-validation" action="profile.html" novalidate>
                                            <h3 class="mb-5">Edit Profile</h3>

                                                <p id="error-messages"></p>
                                            <div class="row">
                                                <div class="col-md-6 mb-4">
                                                    <div class="form-outline">
                                                        <label class="form-label font-weight-bold required" for="first-name">First
                                                            name</label>
                                                        <input type="text" id="first-name"
                                                               class="form-control form-control-lg form" value="${props.user.firstname}"
                                                               required/>

                                                    </div>
                                                </div>
                                                <div class="col-md-6 mb-4">
                                                    <div class="form-outline">
                                                        <label class="form-label font-weight-bold required" for="last-name">Last
                                                            name</label>
                                                        <input type="text" id="last-name"
                                                               class="form-control form-control-lg form" value="${props.user.lastname}"
                                                               required/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6 mb-4">
                                                    <div class="form-outline">
                                                        <label class="form-label font-weight-bold required" for="display-name">Display
                                                            name</label>
                                                        <input type="text" id="display-name"
                                                               class="form-control form-control-lg form" value="${props.user.displayName}"
                                                               required/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 mb-4">
                                                    <div class="form-outline">
                                                        <label class="form-label font-weight-bold required" for="email">Email</label>
                                                        <input type="text" id="email"
                                                               class="form-control form-control-lg form" value="${props.user.email}"
                                                               required/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 mb-4">
                                                    <div class="form-outline">
                                                        <label class="form-label font-weight-bold required" for="password">Password</label>
                                                        <input type="password" id="password"
                                                               class="form-control form-control-lg form"
                                                               required/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 mb-4">
                                                    <div class="form-outline">
                                                        <label class="form-label font-weight-bold required" for="confirm-password">Confirm Password</label>
                                                        <input type="password" id="confirm-password"
                                                               class="form-control form-control-lg form"
                                                               required/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 mb-4">
                                                    <div class="form-outline">
                                                        <label class="form-label font-weight-bold" for="github-name">Github
                                                            name</label>
                                                        <input type="text" id="github-name"
                                                               class="form-control form-control-lg form"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12 mb-4">
                                                    <div class="form-outline">
                                                        <label class="form-label font-weight-bold" for="about-me">About Me</label>
                                                        <textarea id="about-me"
                                                                  class="form-control form-control-lg" placeholder="Tell us about yourself..."
                                                                  required>${props.user.aboutMe}</textarea>
                                                    </div>
                                                </div>
                                                <div class="col-12 mb-4">
                                                    <div class="form-outline">
                                                        <label class="form-label font-weight-bold" for="profile-img">Profile Img URL
                                                        </label>
                                                        <input type="text" id="profile-img"
                                                               class="form-control form-control-lg" value="${(props.user.imgUrl)?props.user.imgUrl:''}"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12 mb-4">
                                                    <label class="form-label font-weight-bold" for="github-name">Languages
                                                        I know</label>
                                                    <select id="skills" class="col-12 custom-select overflow-auto" multiple>
                                                        ${(props.skills) ? props.skills.map(skill =>
                                                      `<option value="${skill.id}">${skill.name}</option>`
                                                          ) : 'Skills required for the project will go here.'}
                                                     </select>
                                                     <p class="instruction mt-1">Hold cmd to select more than one skill (ctrl for pc)</p>
                                                </div>
                                            </div>

                                            <div class="row pt-3">
                                                <button id="save-btn" class="btn btn-light btn-block col-12 col-md-6 border-dark mt-2"
                                                        type="submit" data-id="${props.user.id}">Save
                                                </button>
                                                <button id="cancel-btn" class="btn btn-light btn-block col-12 col-md-6 border-dark mt-2"
                                                        type="submit">Cancel
                                                </button>
                                            </div>

                                            <div class="row mt-5 mb-3 border border-danger rounded mx-auto">
                                                <button id="delete-btn" class="btn btn-light btn-block col-12 col-md-10 border-dark mx-auto mt-5"
                                                        type="submit" data-id="${props.user.id}">Delete Profile
                                                </button>
                                                <small class="col-12 col-md-12 mt-1 mb-5 text-center text-danger">This
                                                    change will be permanent.</small>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    `
}

export function EditProfileEvent() {
    editProfileSave();
    editProfileCancel();
    editProfileDelete();
}

function editProfileSave() {
    console.log($("#first-name").val())
    $("#save-btn").click(function () {
        if(editProfileValidate() === true) {
            let skills = [];
            $.each($("#skills option:selected"), function () {
                skills.push({id: $(this).val()});
            });
            let user = {
                firstname: $("#first-name").val(),
                lastname: $("#last-name").val(),
                displayName: $("#display-name").val(),
                email: $("#email").val().trim(),
                id: $(this).attr("data-id"),
                aboutMe: $("#about-me").val(),
                imgUrl: $("#profile-img").val(),
                skills: skills
            }
            console.log("user is being saved");
            let request = {
                method: "PUT",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(user)
            }
            fetch(`${DOMAIN_NAME}/api/users/`, request)
                .then(res => {
                    console.log(res.status);
                    createView("/profile")
                }).catch(error => {
                console.log(error);
                createView("/profile")
            })
        }
    })
}

function editProfileCancel() {
    $("#cancel-btn").click(function () {
        createView("/profile")
    })
}

function editProfileDelete() {
    $("#delete-btn").click(function () {

        let youSure = confirm("Are you sure you would like to delete your account? This is permanent.");
        if (youSure === true) {
            let request = {
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
            }

            let id = $(this)
                .attr("data-id")

            fetch(`${DOMAIN_NAME}/api/users/${id}`, request)
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

function editProfileValidate() {
    $("#error-messages").empty();
    let errorMessages = '';
    if ($("#first-name").val() === "" || $("#first-name").val().trim() === "") {
        errorMessages = errorMessages + "Please enter your first name<br>";
    }
    if ($("#last-name").val() === "" || $("#last-name").val().trim() === "") {
        errorMessages = errorMessages + "Please enter your last name<br>";
    }
    if ($("#display-name").val() === "" || $("#display-name").val().trim() === "") {
        errorMessages = errorMessages + "Please enter your username<br>";
    }
    if ($("#email").val() === "" || $("#email").val().trim() === "") {
        errorMessages = errorMessages + "Please enter your email<br>";
    }
    if ($("#password").val() === "" || $("#password").val().trim() === "") {
        errorMessages = errorMessages + "Please enter your password<br>";
    }
    if ($("#confirm-password").val() === "" || $("#confirm-password").val().trim() === "") {
        errorMessages = errorMessages + "Please confirm your password<br>";
    }
    if ($("#confirm-password").val() !== $("#password").val()) {
        errorMessages = errorMessages + "Please check that passwords match<br>";
    }
    if (errorMessages !== ""){
        $("#error-messages").append(errorMessages)
        return false;
    }
    return true;
}
