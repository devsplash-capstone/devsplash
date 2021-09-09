import createView from "../createView.js";

export default function ProjectComponent(props) {
    console.log(props);
    if (props)
        if (props.user.error) {
            console.log("Not a member - Login / Signup")
            createView("/login");
        }

    return `
            <form action="">
                <h1>Create Project</h1>
                <input id="name"/>
                <textarea id="description"></textarea>
                <input id="createProject" data-id = "${props.user.id}" type="submit">
            </form>
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