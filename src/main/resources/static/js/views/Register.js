import createView from "../createView.js";

export default function Register(registration) {
    return `
           
        <div class="content-wrapper pt-md-4">
            <div class="content container-xl px-3 px-md-4 px-lg-5 d-md-flex align-items-md-start">
                <section class="h-100 w-100 ">
                    <div class="container-xl border h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col">
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
                                                        <label class="form-label required font-weight-bold" for="display-name">Display
                                                            name</label>
                                                        <input type="text" id="display-name" pattern="(?=.*\d).*(?=[a-z])(?=.*[A-Z]).{0,}" title="Must have at least one capital letter and one number"
                                                               class="form-control form-control-lg" required/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 mb-4">
                                                    <div class="form-outline">
                                                        <label class="form-label required font-weight-bold" for="github-name">Github
                                                            name</label>
                                                        <input type="text" id="github-name" pattern="(?=.*\d).*(?=[a-z])(?=.*[A-Z]).{0,}" title="Must match Github username"
                                                               class="form-control form-control-lg"/>
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
                                                        <label class="form-label required font-weight-bold" for="password">Password (8 characters minimum)</label>
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
                                            </div>
                                            <div class="row">
                                                <div class="col-12 mb-4">
                                                    <div class="form-outline">
                                                        <label class="form-label font-weight-bold" for="about-me">About Me</label>
                                                        <textarea id="about-me"
                                                                  class="form-control form-control-lg"
                                                                  required>
                                                        </textarea>
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
                                                    <label class="form-label font-weight-bold" for="skills">Languages
                                                        I know</label>
                                                    <select id="skills" class="col-12 custom-select overflow-auto" multiple>
                                                        <option value="1">Java</option>
                                                        <option value="2">HTML</option>
                                                        <option value="3">JS</option>
                                                        <option value="3">JS</option>
                                                        <option value="1">Java</option>
                                                        <option value="2">HTML</option>
                                                        <option value="3">JS</option>
                                                        <option value="3">JS</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="row pt-3">
                                                <button id="save" class="btn btn-light btn-block col-12 col-md-6 border-dark mt-2"
                                                        type="submit">Save
                                                </button>
                                                <button id="cancel" class="btn btn-light btn-block col-12 col-md-6 border-dark mt-2"
                                                        type="submit">Cancel
                                                </button>
                                            </div>

                                            <div class="row mt-5 mb-3 border border-danger rounded mx-auto">
                                                <button class="btn btn-light btn-block col-12 col-md-10 border-dark mx-auto mt-5"
                                                        type="submit">Delete Profile
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
`;

}

export function RegisterEvent() {
    $("#save").click(function () {
        if (RegisterValidation()) {
            let user = {
                email: $("#email").val(),
                firstname: $("#firstname").val(),
                lastname: $("#lastname").val(),
                displayName: $("#display-name").val(),
                password: $("#password").val()
            }
            let request = {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(user)
            }
            console.log(request);
            console.log(user.displayName);

            fetch(`${DOMAIN_NAME}/api/users/create`, request).then(
                (response) => {
                    console.log(response.status);
                    createView("/login");
                });
        }

    })
    cancelRegistration();
}

function cancelRegistration() {
    $("#cancel").click(function () {
        createView(("/register"))
    })
}


function RegisterValidation() {
    $("#error-messages").empty();
    let errorMessages = '';
    if ($("#firstname").val() === "" || $("#firstname").val().trim() === "") {
        errorMessages = errorMessages + "Please enter your first name<br>"
    }

    if ($("#firstname").val().length > 100) {
        errorMessages = errorMessages + "Too many characters";
    }

    if ($("#lastname").val() === "" || $("#lastname").val().trim() === "") {
        errorMessages = errorMessages + "Please enter your last name<br>"
    }

    if ($("#lastname").val().length > 100) {
        errorMessages = errorMessages + "Too many characters";
    }

    if ($("#display-name").val() === "" || $("#display-name").val().trim() === "") {
        errorMessages = errorMessages + "Please enter your username<br>"
    }

    if ($("#display-name").val().length > 100) {
        errorMessages = errorMessages + "Too many characters";
    }

    if ($("#github-name").val() === "" || $("#github-name").val().trim() === "") {
        errorMessages = errorMessages + "Please enter your github name<br>"
    }

    if ($("#github-name").val().length > 100) {
        errorMessages = errorMessages + "Too many characters";
    }

    if ($("#email").val() === "" || $("#email").val().trim() === "") {
        errorMessages = errorMessages + "Please enter your email<br>"
    }

    if ($("#email").val().length > 100) {
        errorMessages = errorMessages + "Too many characters";
    }

    if ($("#password").val() === "" || $("#password").val().trim() === "") {
        errorMessages = errorMessages + "confirm password<br>"
    }

    if ($("#confirm-password").val().length > 100) {
        errorMessages = errorMessages + "Too many characters";
    }
    console.log(errorMessages);
    if (errorMessages) {
        $("#error-messages").append(errorMessages)
        return false;
    }
    return true;
}


