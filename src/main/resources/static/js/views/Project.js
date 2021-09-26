import {memberClickFetchEvent, renderMember} from "./Members.js";
import {profileCardEvents, RenderProfileCardComponent} from "./ProfileCard.js";
import {PageContentView} from "./partials/content.js";
import {renderSkillsComponents} from "./Profile.js";


// TODO: needs summary description and there is an opportunity to reduce duplicated code
export default function ProjectView(props) {
    let projectPage;
    if(props.user){
        projectPage = RenderProfileCardComponent(props.user, props.user.id) + renderProjectComponent(props.project);
    }else{
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
                 <div class="links pt-3 p-md-3">
                    <p class="mb-1">Documents for Project</p>
                    <div class="border rounded p-3">
                        ${renderProjectLinks(project.github)}
                    </div>
                </div>
                <form class="pt-3 p-md-3">
                    <button class="btn btn-light btn-block col-12 border-dark mt-3" id="joinProject">Join Project
                    </button>
                </form>
            </div>
        </div>
`;
}

// TODO: make a more meaningful description
/**
 * Adds click event for creator
 */
export function ProjectEvents() {
    memberClickFetchEvent();
    profileCardEvents();
}

/**
 * Adds github link for project if github link is present
 */
function renderProjectLinks(link) {
   return (link)
       ? ` <a class="nav-link" href="${link}"><h1><i class="bi bi-github"></i></h1></a>`
       : "Document links for this project will go here"
}