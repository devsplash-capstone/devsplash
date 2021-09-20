export default function NavbarView(props) {
    if (props)
        if (props.user) {
            return `
                    <div class="header-wrapper bg-light">
                        <div class="header">
                            <nav class="navbar navbar-expand-md navbar-light container-xl">
                                <a class="navbar-brand nav-link" href="/" data-link><img src="../../../assets/devsplash_0.png" alt="" class="logo" /></a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                    <ul class="navbar-nav ml-auto">
                                        <li class="nav-item px-3">
                                            <a class="nav-link" href="/profile" data-link>Home</a>
                                        </li>
                                        <li class="nav-item px-3">
                                            <a class="nav-link" href="/members" data-link>Members</a>
                                        </li>
                                        <li class="nav-item px-3">
                                            <a class="nav-link" href="/projects" data-link>Projects</a>
                                        </li>
                                        <li class="nav-item px-3">
                                            <a class="nav-link" href="/logout" data-link>Signout</a>
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
                                 <a class="navbar-brand nav-link" href="/" data-link><img src="../../../assets/devsplash_0.png" alt="" class="logo"></a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                    <ul class="navbar-nav ml-auto">
                                        <li class="nav-item px-3">
                                            <a class="nav-link" href="/login" data-link>Sign In</a>
                                        </li>
                                        <li class="nav-item px-3">
                                            <a class="nav-link" href="/register" data-link>Sign Up</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                `;
        }
    else {
        //if props are null
        return ""
    }

}

// export default function NavbarView(){
//     return `
//         <div class="header-wrapper bg-light">
//             <div class="header">
//                 <nav class="navbar navbar-expand-md navbar-light container-xl">
//                     <a class="navbar-brand" href="#">Devsplash</a>
//                     <button class="navbar-toggler" type="button" data-toggle="collapse"
//                             data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
//                             aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
//                         <ul class="navbar-nav ml-auto">
//                             <li class="nav-item px-3">
//                                 <a class="nav-link" href="/profile" data-link>Home</a>
//                             </li>
//                             <li class="nav-item px-3">
//                                 <a class="nav-link" href="/members" data-link>Members</a>
//                             </li>
//                             <li class="nav-item px-3">
//                                 <a class="nav-link" href="/projects" data-link>Projects</a>
//                             </li>
//                             <li class="nav-item pl-3">
//                                 <a class="nav-link" href="/" data-link>Signout</a>
//                             </li>
//                         </ul>
//                     </div>
//                 </nav>
//             </div>
//         </div>`;
// }