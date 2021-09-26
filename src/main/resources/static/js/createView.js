import render from './render.js';
import router from './router.js';
import fetchData from "./fetchData.js";
import {getHeaders} from "./auth.js";

// TODO: this variable is unused -> remove if not needed
let count = 0;

/**
 * Finds the correct route for a given view, builds a loading view, fetches data and builds the final rendered view.
 * @param URI
 */
export default function createView(URI) {

    let route = router(URI);

    // TODO: a better thing to do would be just redirect to splash page if the route doesn't exist
    // if route is invalid, return a 404 page
    if (!route) {
        render(null, router('/error'));
        return;
    }

    // TODO: if not still using '/loading', then remove this
    // change view to loading screen
    render(null, router('/loading'));

    // TODO: perhaps move this code inside fetchData, doesn't appear to be needed anywhere else in this function
    let request = {
        headers: getHeaders()
    }

    fetchData(route.state, request).then((props) => {
        render(props, route);
    });
}



