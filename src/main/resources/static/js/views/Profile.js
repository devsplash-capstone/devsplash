import createView from "../createView.js";
import {profileCardEvents} from "./ProfileCard.js";
import {RenderProfileWithGithubInfo} from "../gitHubInfo.js";
import {printOutProject, ProjectsEvents} from "./Projects.js";
import {PageContentView} from "./partials/content.js";

export default function ProfileView(props) {

    RenderProfileWithGithubInfo(props)
    return PageContentView(`<img id="loadingGif" src="https://flevix.com/wp-content/uploads/2019/07/Color-Loading-2.gif" alt=""/>`)
}

export function ProfileComponent(user, projects, githubRepos, profileId) {
    return `
        <div class="details-wrapper col-md-8 d-md-inline-flex py-4 mt-3">
            <div class="details-wrapper-helper col-12 p-md-4">
                <div class="skills ">
                    <p class="mb-1">Languages I know</p>
                    <div class="border rounded p-3">
                        ${skillsComponents(user.skills)}
                    </div>
                </div>
                <div class="github mt-4">
                    <p class="mb-1">Github</p>
                    <div class="">
                        <div id="repos" class="list-group border rounded p-3">
                            ${githubRepos}
                        </div>
                    </div>
                </div>
                <div class="current-projects mt-4">
                    <p class="mb-1">Ongoing Projects</p>
                    <div class="row d-flex justify-content-around p-2">
                             ${(!(projects.error)) ?
        projects.map(project => `${printOutProject(project, profileId)}`).join('')
        : 'Your projects will go here.'}
                    </div>
                </div>
                ${(user.id === profileId) ?
        `<a id="createProject" class=" btn btn-light btn-block col-12 border-dark mt-4"
                                data-user-id="${user.id}" href="#">Create New Project</a>`
        : ``}
            </div>
        </div>
    `;
}

export function skillsComponents(skills) {
    let skillComponent = '';
    if (skills) {
        skills.map(
            skill => skillComponent = skillComponent
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