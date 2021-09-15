import ProjectComponent, {ProjectEvent} from "./Project.js";
import render from "../render.js";
import fetchData from "../fetchData.js";
import {getHeaders} from "../auth.js";
import {addSideNavProfileEvents, sideNavProfileComponent} from "./SideNavProfile.js";
import {PageContentView} from "./partials/content.js";

export default function ProjectsView(props) {
    console.log("Inside ProjectView")
    console.log(props.projects);
    console.log(props.user);
    let projectPage = sideNavProfileComponent(props.user, props.user.id) + ProjectsComponent(props.projects, props.user.id)
    return PageContentView(projectPage)
}


export function ProjectsEvents() {
    projectUserClickEvent();
    projectClickEvent();
    editProjectClickEvent();

    addSideNavProfileEvents();
}

function ProjectsComponent(projects, loggedInUserId) {
    return `
            <div class="details-wrapper col-md-9 d-md-inline-flex border rounded py-4 px-2 m-md-3">
                <div class="details-wrapper-helper col-12 p-md-4">
                    <div class="current-projects mt-4">

                        <h3 class="mb-4">Explore Projects</h3>

                        <div class="row d-flex justify-content-around">
                            ${projects.map(project => `${printOutProject(project, loggedInUserId)}`).join('')}
                        </div>

                    </div>
                </div>
            </div>
        `
    ;
}

function printOutProject(project, loggedInUserId) {
    return `
            <div class="card col-12 col-md-6 px-3 px-md-0">
                <div class="card-body">
                    <a href="#" class="projectViewLink" data-id="${project.id}"><h5 class="card-title">${project.name}</h5></a>
                    <a href="#" class="userProfileLink" data-id="${project.user.id}">
                        <h6 class="card-subtitle mb-2 text-muted">${project.user.displayName}</h6>
                    </a>
                    <p class="card-text">${project.description}</p>
                    ${(project.user.id === loggedInUserId)  ? `<a href="#" class="projectEditLink" data-id="${project.id}">Edit</a>` : ``}
                </div>
            </div>
            `
}

function projectUserClickEvent() {
    $(".userProfileLink").click(function (){
        alert($(this).attr("data-id"))
    })
}

function projectClickEvent() {
    $(".projectViewLink").click(function (){
        alert($(this).attr("data-id"))
    })
}

//TODO: fix the fetch function
function editProjectClickEvent() {

    $(".projectEditLink").click(function () {

        const id = $(this).attr("data-id");

        const route =  {
            returnView: ProjectComponent,
            state: {
                user: "/api/users/me",
                project:`/api/projects/findById/${id}`
            },
            uri: '/project',
            title: "Project",
            viewEvent:ProjectEvent
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

