import createView from "../createView.js";
import {profileCardEvents, RenderProfileCardComponent} from "./ProfileCard.js";
import {PageContentView} from "./partials/content.js";

export default function EditProjectView(props) {
    let profilePage = RenderProfileCardComponent(props.user, props.user.id) + EditProjectComponent(props)
    return PageContentView(profilePage)
}

/**
 * Renders edit project form if props have project or renders create new project form
 * @param props
 * @returns {string}
 */
export function EditProjectComponent(props) {
    let pageHeader = isNew(props) ? "Create New Project" : "Edit Project"

    return `
        <div class="details-wrapper col-md-8 d-md-inline-flex py-4 mt-3">
            <div class="details-wrapper-helper col-12 p-md-4">
                <div class="mx-auto pt-2">
                    <h5>${pageHeader}</h5>
                    <form>
                        <div class="form-group mt-4">
                            <label for="name" class="required">Project Name</label>
                            <input class="form-control" id="name" aria-describedby="project name" 
                            value="${(props.project) ? (props.project.name) : ''}">
                        </div>
                        <div class="form-group mt-4">
                            <label for="description" class="required">Description</label>
                            <textarea  class="form-control" id="description">${(props.project) ? (props.project.description) : ''}</textarea>
                        </div>
                        <div class="form-group mt-4">
                            <label class="form-label font-weight-bold" for="github-name">Required skills</label>
                            <select id="skills" class="col-12 custom-select overflow-auto" multiple>
                                ${renderAndHighlightSkills(props)}
                            </select>
                            <p class="instruction mt-1">Hold cmd to select more than one skill (ctrl for pc)</p>
                        </div>
                        
                        <div class="row justify-content-around pt-3">
                            ${renderSaveButton(props)}
                            <button class="cancel btn btn-light btn-block col-10 col-md-5 border-dark mt-2"
                                    >Cancel
                            </button>
                        </div>
                        
                        ${renderDeleteButton(props)}
                        
                    </form>
                </div>
            </div>
        </div>
`;
}

/**
 * Renders all skills for new project and renders skills with selected previously
 * @param props
 * @returns {*|string}
 */
function renderAndHighlightSkills(props) {
    return (isNew(props)) ? renderSkills(props.skills) : renderAndSelectSkills(props.skills, props.project.skills)
}

function renderSkills(skills) {
    return skills.map(skill => `<option value="${skill.id}">${skill.name}</option>`)
}

export function renderAndSelectSkills(skillsList, selectedSkills) {
    let skills = '';
    const selected = new Map();
    selectedSkills.map(skill => selected.set(skill.id, `<option value="${skill.id}" selected>${skill.name}</option>`))
    skillsList.map(skill => {
        if (!selected.has(skill.id))
            selected.set(skill.id, `<option value="${skill.id}">${skill.name}</option>`)
    })
    for (let [key, value] of selected) {
        skills = skills + value;
    }
    return skills;
}

/**
 * Checks if projects is new or editing a project
 * @param props
 * @returns {boolean}
 */
function isNew(props) {
    return (!props.project)
}

/**
 * Renders save project button with project-id if editing project or render Save button
 * @param props
 * @returns {string}
 */
function renderSaveButton(props) {
    return (isNew(props))
        ? `<button class="saveProject btn btn-light btn-block col-10 col-md-5 border-dark mt-2"
                   data-user-id="${props.user.id}" data-isNew ="true">Save </button>`
        : `<button class="saveProject btn btn-light btn-block col-10 col-md-5 border-dark mt-2"
                   data-user-id="${props.user.id}" data-project-id="${props.project.id}" data-isNew ="false">
                Save
            </button>`;
}

/**
 * Renders delete button if editing a project
 * @param props
 * @returns {string|string}
 */
function renderDeleteButton(props) {
    return (!isNew(props))
        ? `<div class="row mt-5 mb-3 border border-danger rounded mx-auto">
            <button class="btn btn-light btn-block col-10 border-dark mx-auto mt-5" data-project-id="${props.project.id}"
                id="deleteProject">Delete Project</button>
            <small class="col-12 col-md-12 mt-1 mb-5 text-center text-danger">This change will be permanent.</small>
           </div>`
        : ''
}

/**
 * Adds events for profile card, edit, delete and save
 */
export function EditProjectEvents() {
    saveProjectFetchEvent();
    EditProjectCancelEvent();
    deleteProjectFetchEvent();
    profileCardEvents();
}

function EditProjectCancelEvent() {
    $(".cancel").click(function () {
        createView("/profile")
    })
}

function deleteProjectFetchEvent() {
    $("#deleteProject").click(function () {
        if (confirm("Do you want to delete project?")) {
            let id = $(this).attr("data-project-id");
            const url = `${DOMAIN_NAME}/api/projects/${id}`;
            const options = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            };

            fetch(url, options)
                .then(_ => {
                    createView("/profile")
                })
                .catch(error => console.error(error)); /* handle errors */
        }
    })
}

export function saveProjectFetchEvent() {
    $(".saveProject").click(function () {
        console.log("inside click")
        let skills = [];
        $.each($("#skills option:selected"), function () {
            skills.push({id: $(this).val()});
        });

        let project = {
            name: $("#name").val(),
            description: $("#description").val(),
            user: {
                id: $(this).attr("data-user-id")
            },
            skills: skills
        };

        //Set project id if editing project
        if ($(this).attr("data-isNew") === "false")
            project.id = $(this).attr("data-project-id")

        console.log(project)
        const url = `${DOMAIN_NAME}/api/projects`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        };

        fetch(url, options)
            .then(_ => {
                createView("/profile")
            })
            .catch(error => console.error(error)); /* handle errors */
    });
}