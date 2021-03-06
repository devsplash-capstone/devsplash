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
        <div class="details-wrapper col-md-8 d-md-inline-flex py-4 mt-3 change-background">
            <div class="details-wrapper-helper col-12 p-md-4">
                <div class="mx-auto pt-2">
                    <h5>${pageHeader}</h5>
                    <form>
                        <p id="error-messages"></p>
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
                            <label class="form-label" for="github-name">Required skills</label>
                            <select id="skills" class="col-12 custom-select overflow-auto" multiple>
                                ${renderAndHighlightSkills(props)}
                            </select>
                            <p class="instruction mt-1">Hold cmd to select more than one skill (ctrl for pc)</p>
                        </div>
                        <div class="form-group mt-4">
                            <label for="github">Github Link</label>
                            <input class="form-control" id="github" aria-describedby="github input" 
                            value="${(props?.project?.github) ? (props.project.github) : ''}">
                            <p class="instruction mt-1">If you already have a repository for this project on GitHub, paste it here!</p>
                        </div>

                        <div class="row justify-content-around pt-3">
                            <button class="cancel btn btn-light btn-block col-10 col-md-5 border-dark mt-2">
                                    Cancel
                            </button>
                            ${renderSaveButton(props)}
                        </div>
                        
                        ${renderDeleteButton(props)}
                        
                    </form>
                </div>
            </div>
        </div>
        <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
              <img src="../../assets/devsplash_mini.png" alt="d-logo" class="w-auto h-auto modal-image" >
                <h5 class="modal-title modal-title-edit" id="deleteModalLabel">Delete your project?</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Are you sure you want to delete this project? This cannot be undone.
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal" id="deleteProject">Delete Project</button>
              </div>
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

export function renderSkills(skills) {
    if (skills) {
        return skills.map(skill => `<option value="${skill.id}">${skill.name}</option>`)
    } else {
        return "";
    }
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
                id="deleteProjectBtn" data-toggle="modal" data-target="#deleteModal">Delete Project</button>
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
            let id = $("#deleteProjectBtn").attr("data-project-id");
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

    })
}

export function saveProjectFetchEvent() {
    $(".saveProject").click(function () {
        if (editProjectValidate() === true) {
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
                skills: skills,
                github: $("#github").val()
            };

            //Set project id if editing project
            if ($(this).attr("data-isNew") === "false")
                project.id = $(this).attr("data-project-id")

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
        }
    });


    // #name
    // #description
    // #error-messages

    function editProjectValidate() {
        $("#error-messages").empty();
        $("#name").css("border", "1px solid #D3D3D3")
        $("#description").css("border", "1px solid #D3D3D3")
        let errorMessages = '';
        if ($("#name").val() === "" || $("#name").val().trim() === "") {
            errorMessages = errorMessages + "Please add a name for your project<br>";
            $("#name").css("border", "1px solid #f00")
        }
        if ($("#description").val() === "" || $("#description").val().trim() === "") {
            errorMessages = errorMessages + "Please add description<br>";
            $("#description").css("border", "1px solid #f00")
        }
        if (errorMessages !== "") {
            $("#error-messages").append(errorMessages)
            return false;
        }
        return true;
    }
}