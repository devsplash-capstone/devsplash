import createView from "../createView.js";
import {addSideNavProfileEvents, sideNavProfileComponent} from "./SideNavProfile.js";
import {PageContentView} from "./partials/content.js";
import {printOutProject, ProjectEvents} from "./Projects.js";

export default function ProfileView(props, githubRepos) {
    console.log("In profileView")
    // githubRepos = GitHubInfo();

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
    return PageContentView(profilePage)
}

export function ProfileComponent(user, projects, profileId) {
    console.log(user);
    console.log(projects)
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
                            <p>Your github information will go here!</p>
                        </div>
                    </div>
                </div>
                <div class="current-projects mt-4">
                    <p class="mb-1">Ongoing Projects</p>
                    <div class="row d-flex justify-content-around">
                             ${(projects) ?
                                projects.map(project => `${printOutProject(project, user.id)}`).join('')
                                : 'Your projects will go here.'}
                    </div>
                </div>
                ${(user.id === profileId )?
                `<a id="createProject" class=" btn btn-light btn-block col-12 border-dark mt-2"
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
                + `<span class="badge badge-pill badge-secondary my-1 p-2 text-dark">${skill.name}</span>`)
    } else {
        skillComponent = 'Your skills will go here.'
    }

    return skillComponent;
}

export function ProfileEvent(props) {
    //GitHubInfo();
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