import createView from "../createView.js";
import {addSideNavProfileEvents, sideNavProfileComponent} from "./SideNavProfile.js";
import {PageContentView} from "./partials/content.js";
import {printOutProject, ProjectEvents} from "./Projects.js";
import {GitHubInfo} from "../gitHubInfo.js";

export default function ProfileView(props) {
    console.log(props)

    //To check if it's user's profile or member's profile
    let profileId;
    let user;
    if (props.member === undefined) {
        profileId = props.user.id
        user = props.user;
    } else {
        profileId = props.user.id;
        user = props.member;
    }

    let profilePage = sideNavProfileComponent(user, profileId) + ProfileComponent(user, props.projects, profileId)
    return PageContentView(profilePage);

}

export function ProfileComponent(user, projects, profileId) {
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
                            ${GitHubInfo(user.githubUsername)}
                        </div>
                    </div>
                </div>
                <div class="current-projects mt-4">
                    <p class="mb-1">Ongoing Projects</p>
                    <div class="row d-flex justify-content-around p-2">
                             ${(!(projects.error)) ?
                                projects.map(project => `${printOutProject(project, user.id)}`).join('')
                                : 'Your projects will go here.'}
                    </div>
                </div>
                ${(user.id === profileId )?
                `<a id="createProject" class=" btn btn-light btn-block col-12 border-dark mt-4"
                                data-user-id="${user.id}" href="#">Create New Project</a>`
                :``}
            </div>
        </div>
    `;
}

function skillsComponents(skills) {
    console.log(skills)
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
    editProfile();
    creatProjectClickEvent();

    ProjectEvents();

    addSideNavProfileEvents();
}

function editProfile() {
    $(".edit").click(function () {
        createView("/editProfile")
    })
}

function creatProjectClickEvent() {
    $("#createProject").click(function () {
        createView("/project")
    })
}

//TODO change the function name
// export function showRepos(repos) {
//     let repoComponent = '';
//         (repos)?
//             repos.slice(1,5).map((repo)=> {
//                 repoComponent = repoComponent + `
//                      <a href="${repo.html_url}" class="list-group-item list-group-item-action" data-link>
//                         <div class="d-md-flex w-100 justify-content-between">
//                             <h5 class="mb-1">${repo.name}</h5>
//                             <small class="text-muted">Updated at</small>
//                         </div>
//                         <small class="text-muted">${repo.language}</small>
//                     </a> `
//             }):
//             repoComponent ='Repositories from github will go here.'
//     console.log(repoComponent)
//     return repoComponent;
// }