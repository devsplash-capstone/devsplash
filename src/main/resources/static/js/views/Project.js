import {memberClickEvent, renderUsers} from "./Members.js";
import {RenderProfileCardComponent} from "./ProfileCard.js";
import {PageContentView} from "./partials/content.js";
import {renderSkillsComponents} from "./Profile.js";

export default function ProjectView(props) {
    let membersPage = RenderProfileCardComponent(props.user, props.user.id) + renderProjectComponent(props.project);
    return PageContentView(membersPage)
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
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <div class="list-group mt-4">
                        <p class="mb-1">Created by </p>
                        ${renderUsers(project.user)}
                    </div>
                </div>
                <div class="skills pt-3 p-md-3">
                    <p class="mb-1">Skills Required</p>
                    <div class="border rounded p-3">
                        ${renderSkillsComponents(project.skills)}
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

/**
 * Adds click event for creator
 */
export function ProjectEvents() {
    memberClickEvent();
}

//TODO: complete project join function
function ProjectJoinRequestEvent() {
    $("#joinProject").click(function () {
        console.log("join project still in progress!")
    })

}
