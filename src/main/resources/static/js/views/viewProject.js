export default function ViewProject(props) {
        return ` 
 <!DOCTYPE html>
<html lang="eng">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.83.1">
    <title>Album example · Bootstrap v5.0</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossorigin="anonymous">
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>My Projects Page</title>
</head>
<br>
<body>
<main>
<div class="p-3">
<h1 contenteditable="false" class="card-header title">${props.projects[0].name}</h1>
<br>
<h4 contenteditable="false" class="p-3 card-text content">${props.projects[0].description}</h4>
<h1 contenteditable="false" class="card-header title">${props.projects[1].name}</h1>
<br>
<h4 contenteditable="false" class="p-3 card-text content">${props.projects[1].description}</h4>
<p contenteditable="false" class="p-3 card-text content">
${props.description};
</p>
<br>
<button type="submit" id="edit-btn">Edit</button>
</div>
</div>
</main>
</body>
</html>`;

}

export function ViewProjects() {
    ViewProjectEvent();
    ViewProject();
}

function ViewProjectEvent() {
    let id = 1;
    let url = `http://localhost:8080/api/projects/findById/${id}`;
    let request = {
        method: 'GET',
        headers: {"Content-type": "application/json"}
    };
    fetch(url, request)
        .then(response => console.log(response)) // project was posted successfully!

        .catch(error => console.log(error)) //catches errors


}

