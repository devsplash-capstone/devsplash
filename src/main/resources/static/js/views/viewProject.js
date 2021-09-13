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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">

    
    
    <title>My Projects Page</title>
</head>
<br>
   <body>
   <main>
   <div class="card text-center">
   <div class="card-body">
   <h1 contenteditable="false" class="card-title">${props.projects[0].name}</h1>
   <br>
   <p contenteditable="false" class="p-3 card-text content">${props.projects[0].description}</p>
   <br>
  <a href="https://ibb.co/4K0f533"><img src="https://i.ibb.co/VJkNP55/image-placeholder.jpg" alt="image-placeholder" border="0"></a>
   <br>
   <br>
   <br>
   <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
   </div>
</div>
</main>
</body>
    </html>
 `;
}

export function ViewProjects(){
    ViewProjectEvent();
    ViewProject();
}

function ViewProjectEvent() {
    $("#edit-btn").click(function () {
        let request = {
            method: "GET",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(user)
        }
        console.log(request);
        fetch("http://localhost.8080/api/users", request).then(
            (response) => {
                console.log(response.status);

            });
    })
}

