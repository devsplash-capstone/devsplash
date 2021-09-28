import {memberClickFetchEvent, renderMember} from "./Members.js";
import {profileCardEvents, RenderProfileCardComponent} from "./ProfileCard.js";
import {PageContentView} from "./partials/content.js";
import {renderSkillsComponents} from "./Profile.js";
import fetchData from "../fetchData.js";
import render from "../render.js";
import {getHeaders} from "../auth.js";
import {validateUser} from "../router.js";
import createView from "../createView.js";

export default function ProjectView(props) {
    console.log(props)
    let projectPage;
    if (props.user) {
        projectPage = RenderProfileCardComponent(props.user, props.user.id) + renderProjectComponent(props.project);
    } else {
        projectPage = renderProjectComponent(props.project);
    }
    return PageContentView(projectPage)
}

/**
 * Renders project details - project name, description, created by, join button
 * @param project
 * @returns {string}
 */
export function renderProjectComponent(project) {
    // fetchData()
    console.log(project);
    console.log(project.description);
    return `
        <div class="details-wrapper col-md-8 d-md-inline-flex border rounded py-4 mt-3">
            <div class="details-wrapper-helper col-12">
                <div class="current-projects mt-4 p-md-3">
                    <h3><i class="bi bi-journal-code"></i> ${project.name}</h3>
                    <p>${project.description}</p>
                    <div class="list-group mt-4">
                        <p class="mb-1">Created by </p>
                        ${renderMember(project.user)}
                    </div>
                </div>
                <div class="skills pt-3 p-md-3">
                    <p class="mb-1">Skills Required for Project</p>
                    <div class="border rounded p-3">
                        ${renderSkillsComponents(project.skills)}
                    </div>
                </div>
                <div class="members mt-4">
                        <h6>Project Members</h6>
                        <div class="">
                            <div class="list-group">
                                <a href="member.html" class="list-group-item list-group-item-action">
                                    <div class="d-md-flex w-100 justify-content-between">
                                        <h5 class="mb-1">${project.user.displayName}</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                 <div class="links pt-3 p-md-3">
                    <p class="mb-1">Documents for Project</p>
                    <div class="border rounded p-3">
                        ${renderProjectLinks(project.github)}
                    </div>
                 </div>
                </div>
                <form class="pt-3 p-md-3">
                    <button class="btn btn-light btn-block col-12 border-dark mt-3" data-project-id="${project.id}" id="joinProject">Join Project
                    </button>
                </form>
            </div>
        </div>
`;
}

/**
 * Adds github link for project if github link is present
 */
function renderProjectLinks(link) {
    return (link)
        ? ` <a class="nav-link" href="${link}"><h1><i class="bi bi-github"></i></h1></a>`
        : "Document links for this project will go here"
}

function joinProjectEvent() {
    $("#joinProject").click(function () {
        const id = $(this).attr("data-project-id");
        const url = `${DOMAIN_NAME}/api/projectMembers`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(id)
        };

        fetch(url, options)
            .then(_ => {
                createView("/profile")
            })
            .catch(error => console.error(error)); /* handle errors */
    })
}


function newProjectMemberList() {
    memberClickFetchEvent();
}

/**
 * Adds click event for creator
 */
export function ProjectEvents() {
    profileCardEvents();
    joinProjectEvent();
    newProjectMemberList();
}
