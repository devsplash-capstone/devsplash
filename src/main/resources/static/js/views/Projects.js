import ProjectComponent, {EditProjectEvents} from "./EditProject.js";
import render from "../render.js";
import fetchData from "../fetchData.js";
import {getHeaders} from "../auth.js";
import {profileCardEvents, RenderProfileCardComponent} from "./ProfileCard.js";
import {PageContentView} from "./partials/content.js";
import {memberClickFetchEvent} from "./Members.js";
import ProjectView, {ProjectEvents} from "./Project.js";
import {validateUser} from "../router.js";

export default function ProjectsView(props) {
    let projectsPage;
    if(props.user){
        projectsPage = RenderProfileCardComponent(props.user, props.user.id) + renderProjectsComponent(props.projects, props.user.id)
    }else{
        projectsPage = renderProjectsComponent(props.projects, 0)
    }
    return PageContentView(projectsPage)
}

function renderProjectsComponent(projects, loggedInUserId) {
    return `<div class="details-wrapper col-md-8 d-md-inline-flex py-4 pt-md-0 px-0 m-md-3">
                <div class="details-wrapper-helper col-12 px-0 p-md-4">
                    <div class="current-projects px-0 mt-4 mt-md-0 p-md-4">
                        <h3 class="mb-4">Explore Projects</h3>
                        <div class="row d-flex justify-content-around mx-0">
                           ${renderProjects(projects, loggedInUserId)}
                        </div>
                    </div>
                </div>
            </div>
        `;
}

/**
 * Renders projects, and gives edit link for project if valid user
 * @param projects
 * @param loggedInUserId
 * @returns {*|string}
 */
function renderProjects(projects, loggedInUserId) {
    return (projects)
        ? projects.map(project => `${renderProject(project, loggedInUserId)}`).join('')
        : `<div class="border rounded p-2">All the projects will go here.</div>`
}


/**
 * Renders project, and gives edit link for project if valid user
 * @param project
 * @param loggedInUserId
 * @returns {string}
 */
export function renderProject(project, loggedInUserId) {
    return `
            <div class="card col-12  px-3 px-md-0">
                <div class="card-body px-0 px-md-3">
                    <a href="#" class="projectViewLink" data-id="${project.id}"><h5 class="card-title">${project.name}</h5></a>
                    <a href="#">
                        <h6 class="memberView card-subtitle mb-2 text-muted" data-member-id="${project.user.id}">
                            ${project.user.displayName}
                        </h6>
                    </a>
                    <p class="card-text">${project.description}</p>
                    ${renderEditProjectLink(project, loggedInUserId)}
                </div>
            </div>
            `
}

/**
 * Renders project edit link for logged in user has created the project
 * @param project
 * @param loggedInUserId
 * @returns {string}
 */
function renderEditProjectLink(project, loggedInUserId) {
    return (project.user.id === loggedInUserId)
        ? `<a href="#" class="projectEditLink" data-id="${project.id}">Edit</a>`
        : ``
}

/**
 * Adds projects and profile card events.
 */
export function ProjectsViewEvents() {
    ProjectsEvents();
    profileCardEvents();
}

/**
 * Adds project, edit project and member click events.
 */
export function ProjectsEvents() {
    projectClickFetchEvent();
    editProjectClickFetchEvent();
    memberClickFetchEvent();
}

/**
 * Fetches information for selected project and forwards to Project details page
 */
export function projectClickFetchEvent() {
    $(".projectViewLink").click(function () {

        const id = $(this).attr("data-id");

        const route = {
            returnView: ProjectView,
            state: {
                project: `/api/projects/findById/${id}`,
            },
            uri: '/project',
            title: "Project",
            viewEvent: ProjectEvents
        }
        // if user is not logged in
        route.state = validateUser(route.state);

        const request = {
            headers: getHeaders()
        }

        fetchData(route.state, request)
            .then((props) => {
                render(props, route);
            })
            .catch(error => console.error(error)); /* handle errors */

    });
}

/**
 * Fetches information for selected project and forwards to edit project page
 */
export function editProjectClickFetchEvent() {

    $(".projectEditLink").click(function () {



        const id = $(this).attr("data-id");
        const route = {
            returnView: ProjectComponent,
            state: {
                user: "/api/users/me",
                project: `/api/projects/findById/${id}`,
                skills: "/api/skills"
            },
            uri: '/project',
            title: "Project",
            viewEvent: EditProjectEvents
        }
        const request = {
            headers: getHeaders()
        }

        fetchData(route.state, request)
            .then((props) => {
                render(props, route);
            })
            .catch(error => console.error(error)); /* handle errors */
    });
}

