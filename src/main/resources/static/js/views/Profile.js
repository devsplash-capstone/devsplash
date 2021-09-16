import createView from "../createView.js";
import {addSideNavProfileEvents, sideNavProfileComponent} from "./SideNavProfile.js";
import {PageContentView} from "./partials/content.js";
import {editProjectClickEvent, printOutProject, projectClickEvent, projectUserClickEvent} from "./Projects.js";
import GitHubInfo from "../gitHubInfo.js";

export default function ProfileView(props, githubRepos) {
    console.log("In profileView")
   // githubRepos = GitHubInfo();
    let profilePage = sideNavProfileComponent(props.user, props.user.id) + ProfileComponent(props)
    return PageContentView(profilePage)
}

export function ProfileComponent(props ) {
    console.log(props)
    return `
        <div class="details-wrapper col-md-8 d-md-inline-flex py-4 mt-3">
            <div class="details-wrapper-helper col-12 p-md-4">
                <div class="skills ">
                    <p class="mb-1">Languages I know</p>
                    <div class="border rounded p-3">
                        ${skillsComponents(props.user.skills)}
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
                             ${props.projects.map(project => `${printOutProject(project, props.user.id)}`).join('')}
                    </div>
                </div>
                <form action="/project">
                    <button id="createProject" class="btn btn-light btn-block col-12 border-dark mt-4"
                            type="submit">Create new project
                    </button>
                </form>
            </div>
        </div>
    `;
}

function skillsComponents(skills) {
    console.log(skills)
    let skillComponent = '';
    if( skills != null || skills !== []){
        skills.map(
            skill => skillComponent = skillComponent
                + `<span class="badge badge-pill badge-secondary my-1 p-2 text-dark">${skill.name}</span>`)
    }else{
        skillComponent ='Your skills will go here.'
    }

    return skillComponent;
}

export function ProfileEvent(props) {
    //GitHubInfo();
    editProfile();
    creatProjectClickEvent();

    projectUserClickEvent();
    projectClickEvent();
    editProjectClickEvent();

    addSideNavProfileEvents();
}

function editProfile() {
    $(".edit").click(function () {
        createView("/editProfile")
    })
}

function creatProjectClickEvent(){
    $("#createProject").click(function (){
        createView("/project")
    })
}