import createView from "../createView.js";
import {renderSkills} from "./EditProject.js";

export default function Register(props) {
    return `
           
        <div class="content-wrapper pt-md-4">
            <div class="content container-xl px-3 px-md-4 px-lg-5 d-md-flex align-items-md-start">
                <section class="h-100 w-100 ">
                    <div class="container-xl border h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col" style="background-color: white;">
                                <div class="card card-registration my-3 border-0">
                                    <div class="row g-0">

                                        <form class="card-body px-md-5">
                                            <h3 class="mb-5">Sign up</h3>

                                            <p id="error-messages"></p>
                                            
                                            <div class="row">
                                                <div class="col-md-6 mb-4">
                                                    <div class="form-outline">
                                                        <label class="form-label required font-weight-bold" for="firstname">First
                                                            name</label>
                                                       <input type="text" id="firstname" name="firstname" class="form-control form-control-lg"/>
                                                    </div>
                                                    
                                                </div>
                                                <div class="col-md-6 mb-4">
                                                    <div class="form-outline">
                                                        <label class="form-label required font-weight-bold" for="lastname">Last
                                                            name</label>
                                                        <input type="text" id="lastname" pattern=".*(?=[a-z])(?=.*[A-Z]).{0,}" title="Must have at least one capital letter"
                                                               class="form-control form-control-lg" required/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6 mb-4">
                                                    <div class="form-outline">
                                                        <label class="form-label required font-weight-bold" for="display-name">Username</label>
                                                        <input type="text" id="display-name" pattern="(?=.*\d).*(?=[a-z])(?=.*[A-Z]).{0,}" title="Must have at least one capital letter and one number"
                                                               class="form-control form-control-lg" required/>
                                                    </div>
                                                </div>
                                                
                                                <div class="col-md-6 mb-4">
                                                    <div class="form-outline">
                                                        <label class="form-label required font-weight-bold" for="email">Email
                                                            </label>
                                                        <input type="text" id="email" pattern="(?=.*\d).*(?=[a-z])(?=.*[A-Z]).{0,}" title="Must be a valid email account"
                                                               class="form-control form-control-lg"/>
                                                    </div>
                                                </div>
                                                
                                                <div class="col-md-6 mb-4">
                                                    <div class="form-outline">
                                                        <label class="form-label required font-weight-bold" for="password">Password</label>
                                                        <input type="password" id="password"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Password must have at least one uppercase letter, one number and one special character"
                                                               class="form-control form-control-lg"/>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 mb-4">
                                                    <div class="form-outline">
                                                        <label class="form-label required font-weight-bold" for="confirm-password">Confirm Password</label>
                                                        <input type="password" id="confirm-password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" minlength="8" title="Password must match"
                                                               class="form-control form-control-lg"/>
                                                    </div>
                                                </div>
                                                
                                                  <div class="col-md-6 mb-4">
                                                    <div class="form-outline">
                                                        <label class="form-label font-weight-bold" for="github-name">Github
                                                            name</label>
                                                        <input type="text" id="github-name" class="form-control form-control-lg"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12 mb-4">
                                                    <div class="form-outline">
                                                        <label class="form-label font-weight-bold" for="about-me">About Me</label>
                                                        <textarea id="about-me"
                                                                  class="form-control form-control-lg"
                                                                  required></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-12 mb-4">
                                                    <div class="form-outline">
                                                        <label class="form-label font-weight-bold" for="profile-img">Profile Img URL
                                                            </label>
                                                        <input type="text" id="profile-img"
                                                               class="form-control form-control-lg"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12 mb-4">
                                                    <label class="form-label font-weight-bold" for="skills">Skills I Have</label>
                                                    <select id="skills" class="col-12 custom-select overflow-auto" multiple>
                                                        ${renderSkills(props.skills)}
                                                    </select>
                                                    <p class="instruction mt-1">Hold cmd to select more than one skill (ctrl for pc)</p>
                                                </div>
                                            </div>

                                            <div class="row pt-3">
                                                <button id="cancel" class="btn btn-light btn-block col-12 col-md-6 border-dark mt-2"
                                                        type="submit">Cancel
                                                </button>
                                                <button id="save" class="btn btn-light btn-block col-12 col-md-6 border-dark mt-2"
                                                        type="submit">Save
                                                </button>
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
`;

}

export function RegisterEvent() {
    $("#save").click(function () {
        if (RegisterValidation()) {

            let skills = [];
            $.each($("#skills option:selected"), function () {
                skills.push({id: $(this).val()});
            });

            let user = {
                email: $("#email").val(),
                firstname: $("#firstname").val(),
                lastname: $("#lastname").val(),
                displayName: $("#display-name").val(),
                password: $("#password").val(),
                skills: skills,
                githubUsername: $("#github-name").val(),
                aboutMe: $("#about-me").val(),
                profileImg : $("#profile-img").val()
            }
            let request = {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(user)
            }

            fetch(`${DOMAIN_NAME}/api/users/create`, request).then(
                (response) => {
                    createView("/login");
                })
                .catch(error => console.error(error));
        }
    })

    cancelRegistration();
}

function cancelRegistration() {
    $("#cancel").click(function () {
        createView(("/"))
    })
}


function RegisterValidation() {
    $("#error-messages").empty();
    $("#firstname").css("border", "1px solid #D3D3D3")
    $("#lastname").css("border", "1px solid #D3D3D3")
    $("#display-name").css("border", "1px solid #D3D3D3")
    $("#email").css("border", "1px solid #D3D3D3")
    $("#password").css("border", "1px solid #D3D3D3")
    $("#confirm-password").css("border", "1px solid #D3D3D3")
    $("#github-name").css("border", "1px solid #D3D3D3")
    let errorMessages = '';
    if ($("#firstname").val() === "" || $("#firstname").val().trim() === "") {
        errorMessages = errorMessages + "Please enter your first name<br>"
        $("#firstname").css("border", "1px solid #ff0000")
    }

    if ($("#firstname").val().length > 100) {
        errorMessages = errorMessages + "Too many characters";
        $("#firstname").css("border", "1px solid #ff0000")
    }

    if ($("#lastname").val() === "" || $("#lastname").val().trim() === "") {
        errorMessages = errorMessages + "Please enter your last name<br>"
        $("#lastname").css("border", "1px solid #ff0000")
    }

    if ($("#lastname").val().length > 100) {
        errorMessages = errorMessages + "Too many characters";
        $("#lastname").css("border", "1px solid #ff0000")
    }

    if ($("#display-name").val() === "" || $("#display-name").val().trim() === "") {
        errorMessages = errorMessages + "Please enter your username<br>"
        $("#display-name").css("border", "1px solid #ff0000")
    }

    if ($("#display-name").val().length > 100) {
        errorMessages = errorMessages + "Too many characters";
        $("#display-name").css("border", "1px solid #ff0000")
    }

    if ($("#email").val() === "" || $("#email").val().trim() === "") {
        errorMessages = errorMessages + "Please enter your email<br>"
        $("#email").css("border", "1px solid #ff0000")
    }

    if ($("#email").val().length > 100) {
        errorMessages = errorMessages + "Too many characters";
        $("#email").css("border", "1px solid #ff0000")
    }

    if ($("#password").val() === "" || $("#password").val().trim() === "") {
        errorMessages = errorMessages + "confirm password<br>"
        $("#password").css("border", "1px solid #ff0000")
    }

    if ($("#confirm-password").val().length > 100) {
        errorMessages = errorMessages + "Too many characters";
        $("#confirm-password").css("border", "1px solid #ff0000")
    }

    if ($("#github-name").val()){
        if ($("#github-name").val().length > 100) {
            errorMessages = errorMessages + "Too many characters";
            $("#github-name").css("border", "1px solid #ff0000")
        }
    }

    if (errorMessages) {
        $("#error-messages").append(errorMessages)
        return false;
    }

    return true;
}


