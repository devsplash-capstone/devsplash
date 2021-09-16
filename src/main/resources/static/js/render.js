import Footer from "./views/partials/Footer.js";
import NavbarView from "./views/partials/Navbar.js";
import {PageContentView} from "./views/partials/content.js";

/**
 * Pushes the current URI to the URL bar and sets the HTML of the app div.
 * @param props - the data required for view rendering
 * @param route - the object containing information for the given endpoint
 */
export default function render(props, route) {
    const app = document.querySelector('#app');
    const title = `Devsplash - ${route.title}`;
    history.pushState(props, title, route.uri);
    document.title = title;

    // add view and navbar to DOM
    app.innerHTML = `${NavbarView(props)} ${route.returnView(props)} ${Footer(null)}`;


    // add events AFTER view is added to DOM
    if (route.viewEvent){
        route.viewEvent();
    }
}
