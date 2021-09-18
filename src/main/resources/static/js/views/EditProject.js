import createView from "../createView.js";
import {addSideNavProfileEvents, RenderProfileCardComponent} from "./SideNavProfile.js";
import {PageContentView} from "./partials/content.js";

export default function EditProjectView(props) {
    let profilePage = RenderProfileCardComponent(props.user, props.user.id) + EditProjectComponent(props)
    return PageContentView(profilePage)
}

export function EditProjectComponent(props) {
    let pageHeader;
    let isNew;
    if (props.project) {
        //Edit project
        pageHeader = "Edit Project"
        isNew = false;
    } else {
        //New Project
        pageHeader = "Create New Project";
        isNew = true;

    }
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
                        <div class="col-12 mt-4">
                            <label class="form-label font-weight-bold" for="github-name">Required skills</label>
                            <select id="skills" class="col-12 custom-select overflow-auto" multiple>
                                <!--  Check if it's edit project, show previously saved skills selected    -->
                                ${(props.skills) ? props.skills.map(skill =>
                                        (isNew)
                                        ?`<option value="${skill.id}">${skill.name}</option>`
                                        :(props.project.skills.includes(skill.id))
                                                    ?`<option value="${skill.id}" selected>${skill.name}</option>`
                                                    :`<option value="${skill.id}">${skill.name}</option>`
                                    ) : 'Skills required for the project will go here.'}
                            </select>
                            <p class="instruction mt-1">Hold cmd to select more than one skill (ctrl for pc)</p>
                        </div>
                        
                        <div class="row justify-content-around pt-3">
                            <button id="createProject" class="btn btn-light btn-block col-10 col-md-5 border-dark mt-2"
                                    data-id="${props.user.id}">Save
                            </button>
                            <button class="btn btn-light btn-block col-10 col-md-5 border-dark mt-2"
                                    >Cancel
                            </button>
                        </div>
                        
                        ${(!isNew)?`
                            <div class="row mt-5 mb-3 border border-danger rounded mx-auto">
                                <button class="btn btn-light btn-block col-10 border-dark mx-auto mt-5"
                                        data-id="${props.user.id}" id="deleteProject">Delete Project
                                </button>
                                <small class="col-12 col-md-12 mt-1 mb-5 text-center text-danger">This
                                    change will be permanent.</small>
                            </div>` :''}
                        
                    </form>
                </div>
            </div>
        </div>
`;
}

function EditProjectCancelEvent() {
    $("")
}

function EditProjectDeleteEvent() {

}

export function EditProjectEvents(){
    EditProjectEvent();
    EditProjectCancelEvent();
    EditProjectDeleteEvent();
    addSideNavProfileEvents();
}
export function EditProjectEvent() {
    $("#createProject").click(function () {
        let skills = [];
        $.each($("#skills option:selected"), function () {
            skills.push({id: $(this).val()});
        });

        let project = {
            name: $("#name").val(),
            description: $("#description").val(),
            user: {
                id: $(this).attr("data-id")
            },
            skills: skills
        };

        const url = `${DOMAIN_NAME}/api/projects`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        };

        fetch(url, options)
            .then(data => {
                createView("/projects")
            })
            .catch(error => console.error(error)); /* handle errors */
    });
}