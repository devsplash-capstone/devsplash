import createView from './createView.js';

/**
 * When the DOM loads, build the view given the current endpoint.
 */
function loadViewOnPageRequest() {
    window.addEventListener('DOMContentLoaded', function() {
        createView(location.pathname);
    });

    // TODO: check with Tristan -> he has a good solve for this if its still an issue
    window.addEventListener('popstate', function(){
        history.back();
    });
}

/**
 * Add a listener that will change the view if a nav link is clicked.
 */
function addListenerToNavLinks() {
    document.addEventListener('click', e => {
        e.preventDefault();
        if (e.target.dataset['link'] !== undefined) {
            const URI = e.target.href.substring(location.origin.length);
            createView(URI);
        }
    });
}

// TODO: give this a description and move to the top of the file
export default function init() {
    loadViewOnPageRequest();
    addListenerToNavLinks();
}