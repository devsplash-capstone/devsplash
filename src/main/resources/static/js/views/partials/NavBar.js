export default function Navbar(props) {
    console.log(props)
    let username;
    if (props)
        if (props.user) {
            username = props.user.displayName;
            return `
                    <nav class="navbar fixed-bottom navbar-light bg-light d-block d-sm-block d-md-none">
                        <ul class="nav justify-content-around">
                            <li class="nav-item">
                                <a class="nav-link" href="/" data-link>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                         class="bi bi-house-door" viewBox="0 0 16 16">
                                        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                                    </svg>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" data-link>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                         class="bi bi-people" viewBox="0 0 16 16">
                                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                                    </svg>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/project" data-link>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                         class="bi bi-card-list" viewBox="0 0 16 16">
                                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                                            <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                                    </svg>
                                </a>                           
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/profile" data-link>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                         class="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <nav class="navbar navbar-light bg-light d-none d-sm-none d-md-block">
                        <ul class="nav justify-content-around">
                            <li class="nav-item">
                                <a class="navbar-brand" href="#">
                                    <img src="http://via.placeholder.com/60x40" alt="">
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/" data-link>Home</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link disabled" href="#" data-link >Members</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/project" data-link>Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/profile" data-link>Profile</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/logout" data-link>Signout</a>
                            </li>
                        </ul>
                    </nav>
                    
                   
    `;
        } else {
            return `
                    <nav class="navbar navbar-expand-md navbar-light bg-light d-md-block">
                        <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
                            <a class="navbar-brand px-2" href="/" data-link>Devsplash</a>
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="/login" data-link>Login</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/register" data-link>Sign Up</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <nav class="navbar fixed-bottom navbar-light bg-light d-block d-sm-block d-md-none">
                        <ul class="nav justify-content-around">
                            <li class="nav-item">
                                <a class="nav-link" href="/login" data-link>
                                    Log In
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/register" data-link>
                                   Sign Up
                                </a>
                            </li>
                        </ul>
                    </nav>
                `;
        }

}