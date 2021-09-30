import {memberClickFetchEvent, renderMember, renderMembers} from "./Members.js";
import {profileCardEvents, RenderProfileCardComponent} from "./ProfileCard.js";
import {PageContentView} from "./partials/content.js";
import {renderSkillsComponents} from "./Profile.js";
import createView from "../createView.js";
import {getHeaders} from "../auth.js";
import fetchData from "../fetchData.js";
import render from "../render.js";
import {validateUser} from "../router.js";

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
    return (members)
        ? members.map(member => `${(member.user)?renderMember(member.user):'<div class="border rounded p-2">List of all members will go here.</div>'}`).join('')
        : '<div class="border rounded p-2">List of all members will go here.</div>';
}

/**
 * Renders project details - project name, description, created by, join button
 * @param project
 * @param members
 * @param userId
 * @returns {string}
 */
export function renderProjectComponent(project, members, userId= 0) {
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
                <div class="members mt-4">
                        <h6>Project Members</h6>
                        <div class="mt-4">
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
                </div>
                <form class="pt-3 p-md-3">
                    <button class="btn btn-light btn-block col-12 border-dark mt-3" data-project-id=${project.id}
                    data-user-id=${userId} id="joinProject">Request to Join Project
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
}

/**
 * this prevents the same USER from joining the SAME project & prevents VISITORS from joining ANY projects”
 */

function requestToJoinProjectEvent(){
    let member = validateUser();
    $('#joinProject').click(function(){
        if(member === true){
            return joinProjectEvent();
        }else if(member === true && member === joinProjectEvent){
            document.getElementById("joinProject").hidden;
        } else if(!member === true) {
            return createView("/register");
        }

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
    requestToJoinProjectEvent();
}
