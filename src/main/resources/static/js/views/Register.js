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
                                        <form class="card-body px-md-5 needs-validation" action="profile-new.html">
                                            <h3 class="mb-5">Sign up</h3>

                                            <div class="row">
                                                <div class="col-md-6 mb-4">
                                                    <div class="form-outline">
                                                        <label class="form-label font-weight-bold" for="firstname">First
                                                            name</label>
                                                        <input type="text" id="firstname"
                                                               class="form-control form-control-lg" required/>

                                                    </div>
                                                </div>
                                                <div class="col-md-6 mb-4">
                                                    <div class="form-outline">
                                                        <label class="form-label font-weight-bold" for="lastname">Last
                                                            name</label>
                                                        <input type="text" id="lastname"
                                                               class="form-control form-control-lg" required/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6 mb-4">
                                                    <div class="form-outline">
                                                        <label class="form-label font-weight-bold" for="display-name">Display
                                                            name</label>
                                                        <input type="text" id="display-name"
                                                               class="form-control form-control-lg" required/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 mb-4">
                                                    <div class="form-outline">
                                                        <label class="form-label font-weight-bold" for="github-name">Github
                                                            name</label>
                                                        <input type="text" id="github-name"
                                                               class="form-control form-control-lg"/>
                                                    </div>
                                                </div>
                                                
                                                <div class="col-md-6 mb-4">
                                                    <div class="form-outline">
                                                        <label class="form-label font-weight-bold" for="email">Email
                                                            </label>
                                                        <input type="text" id="email"
                                                               class="form-control form-control-lg"/>
                                                    </div>
                                                </div>
                                                
                                                <div class="col-md-6 mb-4">
                                                    <div class="form-outline">
                                                        <label class="form-label font-weight-bold" for="password">Password</label>
                                                        <input type="password" id="password"
                                                               class="form-control form-control-lg"/>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 mb-4">
                                                    <div class="form-outline">
                                                        <label class="form-label font-weight-bold" for="confirm-password">Confirm Password</label>
                                                        <input type="password" id="confirm-password"
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
                                                    <p class="instruction mt-1">Hold cmd to select more than one skill (ctrl for pc)</p>
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
    })
}