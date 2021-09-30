import {memberClickFetchEvent, MembersEvents, renderMember, renderMembers} from "./Members.js";
import {profileCardEvents, RenderProfileCardComponent} from "./ProfileCard.js";
import {PageContentView} from "./partials/content.js";
import {renderSkillsComponents} from "./Profile.js";
import createView from "../createView.js";
import {getHeaders} from "../auth.js";
import fetchData from "../fetchData.js";
import render from "../render.js";
import {validateUser} from "../router.js";
import {editProjectClickFetchEvent} from "./Projects.js";

export default function ProjectView(props) {
    console.log(props)
    let projectPage;
    if (props.user) {
        projectPage = RenderProfileCardComponent(props.user, props.user.id) + renderProjectComponent(props.project, props.members, props.user.id);
    } else {
        projectPage = renderProjectComponent(props.project, props.members);
    }
    return PageContentView(projectPage)
}

function renderProjectMembers(members) {
    console.log(members)
    return (members.length !== 0)
        ? members.map(member => `${(member.user) ? renderMember(member.user) : '<div class="border rounded p-2">List of all members will go here.</div>'}`).join('')
        : '<div class="border rounded p-2">List of all members will go here.</div>';
}

function renderJoinProjectButton(project, userId, members) {
    if (userId === 0) {
        return `<button class="btn btn-light btn-block col-12 border-dark mt-3"
                    id="logInToJoinProject">Join Project
                </button>`;
    } else if (project.user.id === userId) {
        console.log("Project creator")

        return `<button class="projectEditLink btn btn-light btn-block col-12 border-dark mt-3"
                    data-id="${project.id}" id="editProject">Edit Project 
                </button>`;

    }else if (members.length !== 0) {
        let userJoinedProject = false;
        members.map(member => {
            if (member.user.id === userId)
                userJoinedProject = true;
        })
        if (userJoinedProject) {
            console.log("Already joined project")
            return ``;
        } else {
            return `<button class="btn btn-light btn-block col-12 border-dark mt-3" data-project-id="${project.id}"
                   data-user-id="${userId}" id="joinProject">Join Project
            </button>`;
        }
    }  else {
        return `<button class="btn btn-light btn-block col-12 border-dark mt-3" data-project-id="${project.id}"
                   data-user-id="${userId}" id="joinProject">Join Project
            </button>`;
    }
}

/**
 * Renders project details - project name, description, created by, join button
 * @param project
 * @param members
 * @param userId
 * @returns {string}
 */
export function renderProjectComponent(project, members, userId = 0) {
    console.log(members);
    return `
        <div class="details-wrapper col-md-8 d-md-inline-flex border rounded py-4 mt-3 change-background">
            <div class="details-wrapper-helper col-12">
                <div class="current-projects mt-4 p-md-3">
                    <h3><i class="bi bi-journal-code"></i> ${project.name}</h3>
                    <p>${project.description}</p>
                    <div class="list-group mt-4">
                        <p class="mb-1">Created by</p>
                        ${renderMember(project.user)}
                    </div>
                </div>
                <div class="skills pt-3 p-md-3">
                    <p class="mb-1">Skills Required for Project</p>
                    <div class="border rounded p-3">
                        ${renderSkillsComponents(project.skills)}
                    </div>
                </div>
                <div class="members pt-3 p-md-3">
                    <p class="mb-1">Project Members</p>
                    <div class="list-group">
                        ${renderProjectMembers(members)}
                    </div>
                 </div>
                 <div class="links pt-3 p-md-3">
                    <p class="mb-1">Documents for Project</p>
                    <div class="border rounded p-3">
                        ${renderProjectLinks(project.github)}
                    </div>
                </div>
                <form class="pt-3 p-md-3">
                    ${renderJoinProjectButton(project, userId, members)}
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
        const url = `${DOMAIN_NAME}/api/projectMembers/${id}`;
        const options = {
            method: 'POST',
            headers: getHeaders()
        }
        fetch(url, options)
            .then(_ => {
                const route = {
                    returnView: ProjectView,
                    state: {
                        user: "/api/users/me",
                        project: `/api/projects/findById/${id}`,
                        skills: "/api/skills",
                        members: `/api/projectMembers/byProjectId/${id}`
                    },
                    uri: '/project',
                    title: "Project",
                    viewEvent: MembersEvents
                }
                const request = {
                    headers: getHeaders()
                }

                fetchData(route.state, request)
                    .then((props) => {
                        render(props, route);
                    })
                    .catch(error => console.error(error)); /* handle errors */
            })
            .catch(error => console.error(error)); /* handle errors */
    })

    $("#logInToJoinProject").click(function () {
        createView("/login")
    })
    editProjectClickFetchEvent();
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
