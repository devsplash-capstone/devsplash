import Home from "./views/Home.js";
import Loading from "./views/Loading.js";
import Error404 from "./views/errors.js";
import Login from "./views/Login.js";
import LoginEvent, {LogoutEvent} from "./auth.js";
import Register, {RegisterEvent} from "./views/Register.js";
import ProfileView from "./views/Profile.js";
import EditProjectComponent, {EditProjectEvents} from "./views/EditProject.js";
import ProjectsView, {ProjectsViewEvents} from "./views/Projects.js";
import Members, {MembersEvents} from "./views/Members.js";
import EditProfile, {EditProfileEvent} from "./views/EditProfile.js";
import ProjectView, {ProjectEvents} from "./views/Project.js";
import PrivacyPolicy from "./views/PrivacyPolicy.js";
import AboutUsView from "./views/AboutUs.js";
import FaqView from "./views/Faq.js";

export function validateUser(obj) {
    if (localStorage.getItem("access_token")) {
        obj.user = "/api/users/me"
    }
    return obj;
}

/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
export default function router(URI) {
    const routes = {
        '/': {
            returnView: Home,
            state: {},
            uri: '/',
            title: 'Home'
        },
        '/loading': {
            returnView: Loading,
            state: {},
            uri: location.pathname,
            title: 'Loading...'
        },
        '/error': {
            returnView: Error404,
            state: {},
            uri: location.pathname,
            title: ' ERROR'
        },
        '/register': {
            returnView: Register,
            state: {
                skills: "/api/skills"
            },
            uri: '/register',
            title: 'Register',
            viewEvent: RegisterEvent
        },
        '/login': {
            returnView: Login,
            state: {},
            uri: '/login',
            title: 'Login',
            viewEvent: LoginEvent
        },
        '/logout': {
            returnView: Home,
            state: {},
            uri: '/',
            title: 'Home',
            viewEvent: LogoutEvent
        },
        '/profile': {
            returnView: ProfileView,
            state: validateUser({
                projects: "/api/projects/byMe",
                participatingProjects: "/api/projectMembers/byMe"
            }),
            uri: '/profile',
            title: "Profile",
        },
        '/projects': {
            returnView: ProjectsView,
            state: validateUser({
                projects: "/api/projects"
            }),
            uri: '/projects',
            title: "Projects",
            viewEvent: ProjectsViewEvents
        },
        '/members': {
            returnView: Members,
            state: validateUser({
                users: "/api/users"
            }),
            uri: '/members',
            title: "Members",
            viewEvent: MembersEvents
        },
        '/editProject': {
            returnView: EditProjectComponent,
            state: {
                user: "/api/users/me",
                skills: "/api/skills"
            },
            uri: '/editProject',
            title: "Project",
            viewEvent: EditProjectEvents
        },
        '/editProfile': {
            returnView: EditProfile,
            state: {
                user: "/api/users/me",
                skills: "/api/skills"
            },
            uri: '/editProfile',
            title: 'Edit Profile',
            viewEvent: EditProfileEvent
        },
        '/projectMembers': {
            returnView: ProjectView,
            state: {
                user: '/api/users/join',
                projects: '/api/projects/findByMe'
            },
            uri: '/project',
            viewEvent: ProjectEvents
        },
        '/PrivacyPolicy': {
            returnView: PrivacyPolicy,
            state: {
                user: '/PrivacyPolicy'
            },
            uri: '/PrivacyPolicy',
            title: 'PrivacyPolicy',
        },
        '/aboutus': {
            returnView: AboutUsView,
            state: {},
                uri: '/aboutus',
                title: 'About Us',
            },
        '/faq':{
            returnView: FaqView,
            state:{},
            uri: '/faq',
            title: 'Faq',

        }
    }
    return routes[URI];
}


