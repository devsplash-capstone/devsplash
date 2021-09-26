import Footer from "./views/partials/Footer.js";
import NavbarView from "./views/partials/Navbar.js";

/**
 * Pushes the current URI to the URL bar and sets the HTML of the app div.
 * @param props - the data required for view rendering
 * @param route - the object containing information for the given endpoint
 */
export default function render(props, route) {

    // TODO: This function contains 3 distinct and independent pieces of functionality.
    //  -> They need to be abstracted to respective functions with appropriate names

    // TODO: extract this to another function
    const app = document.querySelector('#app');
    const title = `Devsplash - ${route.title}`;
    history.pushState(props, title, route.uri);
    document.title = title;

    // TODO: extract this to another function
    // add view and navbar to DOM
    app.innerHTML = `${NavbarView(props)} ${route.returnView(props)} ${Footer(null)}`;


    // TODO: extract this to another function
    // add events AFTER view is added to DOM
    if (route.viewEvent){
        route.viewEvent();
    }
}
