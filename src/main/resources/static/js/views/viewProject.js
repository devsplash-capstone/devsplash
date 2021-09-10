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
<section class="py-5 text-center container">
<div class="row py-lg-5">
<div class="col-lg-12 col-md-6 mx-auto">
<h1>PROJECT NAME HERE</h1>
<br>

<br>
<p>Project description goes here. Project description goes here.Project description goes here.Project description goes here.Project description goes here.Project description goes here.Project description goes here.Project description goes here.
</p>
<br>
<button type="submit" id="edit-btn">Edit</button>
</div>
</div>
</section>
</main>
</body>

</html>`;
}

export function ViewProjects() {
    ViewProjectEvent();
}

//   TODO: 1. display project data on webpage **
//      2. include 'catch' error that routes to error 404 page
//      3. add BASIC bootstrap UI (make sure to match the wireframe!)
//      4. PASS IN ID

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

