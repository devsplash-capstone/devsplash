export default function NavbarView(props) {
    if (localStorage.getItem("access_token")){
            return `
                    <div class="header-wrapper bg-light">
                        <div class="header">
                            <nav class="navbar navbar-expand-md navbar-light container-xl">
                                <a class="navbar-brand nav-link logo-link" href="/" data-link>

                                </a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                    <ul class="navbar-nav ml-auto">
                                        <li class="nav-item px-3">
                                            <a class="nav-link" href="/profile" data-link><i class="bi bi-house-door"></i> Home</a>
                                        </li>
                                        <li class="nav-item px-3">
                                            <a class="nav-link" href="/members" data-link><i class="bi bi-people"></i> Members</a>
                                        </li>
                                        <li class="nav-item px-3">
                                            <a class="nav-link" href="/projects" data-link><i class="bi bi-kanban"></i> Projects</a>
                                        </li>
                                        <li class="nav-item px-3">
                                            <a class="nav-link" href="/logout" data-link><i class="bi bi-box-arrow-right"></i></i> Signout</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
    `;
        } else {
            return `
                    <div class="header-wrapper bg-light">
                        <div class="header">
                            <nav class="navbar navbar-expand-md navbar-light container-xl">
                                <a class="navbar-brand nav-link logo-link" href="/" data-link>

                                </a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                    <ul class="navbar-nav ml-auto">
                                        <li class="nav-item px-3">
                                            <a class="nav-link" href="/members" data-link><i class="bi bi-people"></i> Members</a>
                                        </li>
                                        <li class="nav-item px-3">
                                            <a class="nav-link" href="/projects" data-link><i class="bi bi-kanban"></i> Projects</a>
                                        </li>
                                        <li class="nav-item px-3">
                                            <a class="nav-link" href="/login" data-link><i class="bi bi-box-arrow-in-right"></i> Sign In</a>
                                        </li>
                                        <li class="nav-item px-3">
                                            <a class="nav-link" href="/register" data-link><i class="bi bi-box-arrow-in-up"></i> Sign Up</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                `;
        }
}