import {memberClickEvent} from "./Members.js";
import {sideNavProfileComponent} from "./SideNavProfile.js";
import {PageContentView} from "./partials/content.js";

export default function ProjectView(props) {
    let membersPage = sideNavProfileComponent(props.user, props.user.id) + ProjectComponent(props.project);
    return PageContentView(membersPage)
}

// where are we calling ProjectComponent other than router.js?
export function ProjectComponent(project) {
    console.log("inside project component")
    console.log(project)

    return `
        <div class="details-wrapper col-md-9 d-md-inline-flex border rounded py-4 mt-3">
            <div class="details-wrapper-helper col-12">
                <div class="current-projects mt-4">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <h6>Created by </h6>
                    <div class="list-group">
                        <a href="#" class="memberView list-group-item list-group-item-action" data-member-id="${project.user.id}">
                            <div class="d-md-flex w-100 justify-content-between">
                                <h5 class="mb-1">${project.user.displayName}</h5>
                                <small>Looking for - HTML, CSS, JS</small>
                            </div>
                            <small>Springboot, hibernate</small>
                        </a>
                    </div>
                </div>
                
                <form action="projects.html">
                    <button class="btn btn-light btn-block col-12 border-dark mt-3" id="joinProject">Join Project
                    </button>
                </form>
            </div>
        </div>
`;
}

// calls ALL functions within project.js
export function ProjectEvents() {

    memberClickEvent();
}

//TODO: complete project join function
function ProjectJoinRequestEvent() {
    $("#joinProject").click(function () {
        console.log("join project still in progress!")
    })

}
