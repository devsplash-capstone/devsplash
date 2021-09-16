import createView from "../createView.js";
import {addSideNavProfileEvents, sideNavProfileComponent} from "./SideNavProfile.js";
import {PageContentView} from "./partials/content.js";

export default function ProjectView(props) {
    console.log("In profileView")
    let profilePage = sideNavProfileComponent(props.user, props.user.id) + ProjectComponent(props)
    return PageContentView(profilePage)
}

export function ProjectComponent(props) {
    console.log(props)
    return `
        <div class="details-wrapper col-md-8 d-md-inline-flex py-4 mt-3">
            <div class="details-wrapper-helper col-12 p-md-4">
                <div class="container mx-auto pt-2">
                    <h3>Have idea in mind. <br> Create project, collabrate!</h3>
                    <form>
                        <div class="form-group mt-2">
                            <label for="name">Project Name</label>
                            <input type="email" class="form-control" id="name" aria-describedby="project name" 
                            value="${(props.project)?(props.project.name):''}">
                        </div>
                        <div class="form-group mt-2">
                            <label for="description">Description</label>
                            <textarea  class="form-control" id="description">${(props.project)?(props.project.description):''}</textarea>
                        </div>
                        <div class="col-12 mt-4">
                            <label class="form-label font-weight-bold" for="github-name">Required skills</label>
                            <select id="skills" class="col-12 custom-select overflow-auto" multiple>
                                ${(props.skills)?props.skills.map(skill => 
                                    `<option value=${skill.id}>${skill.name}</option>`
                                ):'Skills required for the project will go here.'}
                            </select>
                        </div>
                        <button id="createProject" class="btn btn-primary mt-2" data-id="${props.user.id}">Submit</button>
                    </form>
                </div>
            </div>
        </div>
`;
}

export function ProjectEvent() {
    addSideNavProfileEvents();
    $("#createProject").click(function () {
        let skills = [];
        $.each($("#skills option:selected"), function(){
            skills.push({id:$(this).val()});
        });
        console.log("You have selected the skill[0] - " + skills[0].id);

        let project = {
            name: $("#name").val(),
            description: $("#description").val(),
            user: {
                id: $(this).attr("data-id")
            },
            skills:skills
        };

        const url = `http://localhost:8080/api/projects`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        };

        fetch(url, options)
            .then(data => {
                console.log(data)
                createView("/projects")
            })
            .catch(error => console.error(error)); /* handle errors */
    });
}