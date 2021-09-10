import createView from "../createView.js";

export default function Register(registration) {
    return `
           <div class="container border shadow-lg p-5 mt-2">
    <div class="signup-form">
        <form class=" border-box">
            <h2>Sign Up</h2>
            <p>Please fill in this form to create an account!</p>
            <hr>
            <div class="form-group m-2">
                <div class="input-group">
                    <input type="text" class="form-control" id="displayName" name="username" placeholder="Display Name" required="required">
                </div>
            </div>
            <div class="form-group m-2">
                <div class="input-group">
                    <input type="text" class="form-control" id="firstname" name="firstname" placeholder="First Name" required="required">
                </div>
            </div>
            <div class="form-group m-2">
                <div class="input-group">
                    <input type="text" class="form-control" id="lastname" name="lastname" placeholder="Last Name" required="required">
                </div>
            </div>
            <div class="form-group m-2">
                <div class="input-group">
                    <input type="email" class="form-control" id="email" name="email" placeholder="Email Address" required="required">
                </div>
            </div>
            <div class="form-group m-2">
                <div class="input-group">
                    <input type="password" class="form-control" id="password" name="password" placeholder="Password" required="required">
                </div>
            </div>
            <div class="form-group m-2">
                <div class="input-group">
                    <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required">
                </div>
            </div>
            
                <button id="register-btn" class="m-2 btn btn-secondary btn-block" type="button">Sign Up</button>

        </form>
        <div class="text-center m-2">Already have an account? <a href="#">Login here</a></div>
    </div>
</div>
            </form>
`;

}

export function RegisterEvent() {
    $("#register-btn").click(function () {
        let user = {
            email: $("#email").val(),
            firstname: $("#firstname").val(),
            lastname: $("#lastname").val(),
            displayName: $("#displayName").val(),
            password: $("#password").val()
        }
        let request = {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(user)
        }
        console.log(request);
        console.log(user.displayName);
        fetch("http://localhost:8080/api/users", request).then(
            (response) => {
                console.log(response.status);
                createView("/profile");
            });
    })


}