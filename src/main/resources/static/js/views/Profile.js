import createView from "../createView.js";
import {profileCardEvents} from "./ProfileCard.js";
import RenderProfileWithGithubInfo, {renderGithubInfo} from "../gitHubInfo.js";
import {renderProject, ProjectsEvents} from "./Projects.js";

export default function ProfileView(props) {

    RenderProfileWithGithubInfo(props)
    return `<img id="loadingGif" src="https://flevix.com/wp-content/uploads/2019/07/Color-Loading-2.gif" alt=""/>`
}

export function renderProfileComponent(user, projects, githubRepos, profileId) {
    return `
        <div class="details-wrapper col-md-8 d-md-inline-flex py-4 mt-3">
            <div class="details-wrapper-helper col-12 p-md-4">
                <div class="skills ">
                    <p class="mb-1">Languages I know</p>
                    <div class="border rounded p-3">
                        ${renderSkillsComponents(user.skills)}
                    </div>
                </div>
                <div class="github mt-4">
                    <p class="mb-1">Github</p>
                    <div id="repos" class="list-group p-2">
                        ${renderGithubInfo(githubRepos)}
                    </div>
                </div>
                <div class="current-projects mt-4">
                    <p class="mb-1">Ongoing Projects</p>
                    <div class="row d-flex justify-content-around p-2 mx-0">
                         ${renderProjects(projects, profileId)}
                    </div>
                </div>
                <div class="mt-2">
                    ${renderCreateProjectButton(user, profileId)}
                </div>
            </div>
        </div>
    `;
}

function renderProjects(projects, profileId) {
    return (!(projects.error))
        ? projects.map(project => `${renderProject(project, profileId)} `).join('')
        : `<div class="border rounded p-2">Your projects will go here.</div>`;
}

function renderCreateProjectButton(user, profileId) {
    return (user.id === profileId)
        ? `<a id="createProject" class=" btn btn-light btn-block col-12 border-dark mt-4" data-user-id="${user.id}" 
             href="#">Create New Project</a>`
        : ``
}

export function renderSkillsComponents(skills) {
    let skillComponent = '';
    if (skills) {
        skills.map(skill => skillComponent = skillComponent
            + `<span class="badge badge-pill badge-secondary my-1 mt-0 mb-0 p-2 m-2">${skill.name}</span>`)
    } else {
        skillComponent = 'Your skills will go here.'
    }
    return skillComponent;
}

export function ProfileEvent() {
    profileCardEvents();
    creatProjectClickEvent();
    ProjectsEvents();
}

function creatProjectClickEvent() {
    $("#createProject").click(function () {
        createView("/project")
    })
}