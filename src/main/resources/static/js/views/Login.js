export default function Login() {
    return `
                 <div class="row row-cols-1 mx-auto mt-3 w-100">
                     <div class ="col-12 col-md-8 shadow-lg border text-center mx-auto">
                         <img src="../../assets/devsplash_0.png" alt="devsplash_logo" class="text-center mt-3 login-logo">
                        <h6 class="text-center mt-3">Sign In</h6>
                        <div class="col-10 col-md-8 col-lg-6 m-3 mt-1  p-4 mx-auto">
                            <p id="message" class="text-danger text-center"></p>
                            <form id="login-form">
                                <input id="email" class="form-control m-3" name="username" type="text" placeholder="Enter Username"/>
                                <input id="password" class="form-control m-3" name="password" type="password" placeholder="Enter Password"/>
                                <input id="login-btn" class="btn-lg btn-block btn-primary m-3" type="submit" value="Log In"/>
                            </form>
                        </div>
                     </div>
                 </div>
    `;
}