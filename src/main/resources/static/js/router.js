import Home from "./views/Home.js";
import Loading from "./views/Loading.js";
import Error404 from "./views/errors.js";
import Register, {RegisterEvent} from "./Register.js";
import Login from "./views/Login.js";
import LoginEvent from "./auth.js";

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
        '/register' : {
            returnView: Register,
            state: {},
            uri: '/register',
            title: 'Register',
            viewEvent: RegisterEvent
        },
        '/login' : {
            returnView: Login,
            state: {},
            uri: '/login',
            title: 'Login',
            viewEvent: LoginEvent
        }
    };

    return routes[URI];
}

