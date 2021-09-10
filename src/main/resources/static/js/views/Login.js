export default function Login() {
    return `
            <head>
                <meta charset="UTF-8"/>
                <title>Log In</title>
            </head>
            <main>
                 <div class=" container row row-cols-1 mx-auto mt-3">
                     <div class ="col-12 col-md-8 shadow-lg border mx-auto">
                        <h1 class="text-center mt-3">Devspalsh</h1>
                        <h6 class="text-center mt-3">Sign In</h6>
                        <div class="col-10 col-md-8 col-lg-6 m-3 mt-1  p-4 mx-auto">
                            <p id="message"></p>
                            <form id="login-form">
                                <input id="email" class="form-control m-3" name="username" type="text" placeholder="Enter Username"/>
                                <input id="password" class="form-control m-3" name="password" type="password" placeholder="Enter Password"/>
                                <input id="login-btn" class="btn-lg btn-block btn-primary m-3" type="submit" value="Log In"/>
                            </form>
                        </div>
                     </div>
                 </div>
            </main>
    `;
}