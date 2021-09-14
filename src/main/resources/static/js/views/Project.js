import createView from "../createView.js";

// where are we calling ProjectComponent other than router.js?
export default function ProjectComponent(props) {
    console.log(props.user.error)
    if (props.user.error) {
        console.log("Not a member - Login / Signup")
        createView("/login");
    }
    // get with team & ask, is it okay to replace lines 11-24 with the mockup HTML/updates?
    return `

`;
}

function ProjectJoinRequestEvent(){
$("#joinProject").click(function () {

    let

})


}

function ProjectEvent() {
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

// calls ALL functions within project.js
export function ViewProjects(){
    // handles GET request to VIEW a project
    ViewProjectEvent();
    // handles POST request to create a project <-- this will be apart of US-6
    ProjectEvent();
    // handles POST request to JOIN a project
    ProjectJoinRequestEvent();
}

function ViewProjectEvent() {
    $("#edit-btn").click(function () {
        let request = {
            method: "GET",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(project)
        }
        console.log(request);
        fetch("http://localhost.8080/api/projects/byMe", request).then(
            (response) => {
                console.log(response);

            });
    })
}