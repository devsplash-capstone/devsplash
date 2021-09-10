import createView from "../createView.js";

export default function ProjectComponent(props) {
    console.log(props.user.error)
    if (props.user.error) {
        console.log("Not a member - Login / Signup")
        createView("/login");
    }
    return `
        <div class="container mx-auto pt-2">
            <h3>Have idea in mind. <br> Create project, collabrate!</h3>
            <form>
                <div class="form-group mt-2">
                    <label for="name">Project Name</label>
                    <input type="email" class="form-control" id="name" aria-describedby="project name">
                </div>
                <div class="form-group mt-2">
                    <label for="description">Description</label>
                    <textarea  class="form-control" id="description"></textarea>
                </div>

                <button id="createProject" class="btn btn-primary mt-2" data-id="${props.user.id}">Submit</button>
            </form>
        </div>
`;
}

export function ProjectEvent() {
    $("#createProject").click(function () {

        let project = {
            name: $("#name").val(),
            description: $("#description").val(),
            user: {
                id: $(this).attr("data-id")
            }
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
                createView("/project")
            })
            .catch(error => console.error(error)); /* handle errors */
    });
}