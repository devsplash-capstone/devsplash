import Home from "./views/Home.js";
import Loading from "./views/Loading.js";
import Error404 from "./views/errors.js";
import Login from "./views/Login.js";
import LoginEvent, {LogoutEvent} from "./auth.js";
import Register, {RegisterEvent} from "./views/Register.js";
<<<<<<< HEAD
import Profile, {ProfileEvent} from "./views/Profile.js";
import ProjectComponent, {ViewProjects} from "./views/Project.js";
import Projects from "./views/Projects.js";
import Members from "./views/Members.js";
=======
import ProfileView, {ProfileEvent} from "./views/Profile.js";
import ViewProject, {ViewProjectEvents} from "./views/viewProject.js";
import ProjectComponent, {EditProjectEvent} from "./views/EditProject.js";
import ProjectsView, {ProjectsViewEvents} from "./views/Projects.js";
import Members, {MembersEvent} from "./views/Members.js";
import EditProfile, {EditProfileEvent} from "./views/EditProfile.js";
import EditProjectView from "./views/EditProject.js";
>>>>>>> 5805c9b7c45b7c9a645e73223e4ff686ed89423f

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
            state: {},
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
            state: {
                user: "/api/users/me",
                projects: "/api/projects/byMe"
            },
            uri: '/profile',
            title: "Profile",
            viewEvent: ProfileEvent
        },
        '/viewproject' : {
            returnView: ProjectComponent,
            state: {
                user: "/api/users/me"
            },
            uri: '/viewproject',
            title: "View Project",
            viewEvent: ViewProjectEvents
        },
        '/project': {
            returnView: EditProjectView,
            state: {
                user: "/api/users/me",
                skills:"/api/skills"
            },
            uri: '/project',
            title: "Project",
<<<<<<< HEAD
            viewEvent: ViewProjects
=======
            viewEvent: EditProjectEvent
>>>>>>> 5805c9b7c45b7c9a645e73223e4ff686ed89423f
        },
        '/projects': {
            returnView: ProjectsView,
            state: {
                user: "/api/users/me",
                projects:"/api/projects"
            },
            uri: '/projects',
            title: "Projects",
            viewEvent:ProjectsViewEvents
        },
        '/members': {
            returnView: Members,
            state: {
                user: "/api/users/me",
                users:"/api/users"
            },
            uri: '/members',
            title: "Members",
            viewEvent:MembersEvent
        },
        '/editProject': {
            returnView: ProjectComponent,
            state: {},
            uri: '/editProject',
            title: "Project"
        },
        '/editProfile': {
            returnView: EditProfile,
            state: {
                user: "/api/users/me"
            },
            uri: '/editProfile',
            title: 'Edit Profile',
            viewEvent: EditProfileEvent
        }
    };

    return routes[URI];
}