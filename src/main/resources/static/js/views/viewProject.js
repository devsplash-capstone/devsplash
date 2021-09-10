export default function ViewProject(props) {
    return ` 
 <!DOCTYPE html>
 <html lang="eng">
<head> 
<meta charset="utf-8"/>
<meta name="viewport" content=""
<title>My Projects Page</title>
</head>
<br>
<br>
   <body>
   <h1>PROJECT NAME HERE</h1>
   <br>
  
   <br>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dui metus, euismod vel semper a, consectetur eget neque. Suspendisse in cursus velit. Morbi fringilla imperdiet tortor, eget maximus dui tristique sit amet. Etiam a pellentesque risus. Mauris elementum semper sem vel maximus. Maecenas imperdiet sem cursus leo tincidunt tempus. Aliquam ut quam nisi. Nunc cursus ac lorem eget imperdiet. Suspendisse velit risus, aliquam ac rutrum et, blandit in leo. Etiam dictum egestas enim, in posuere lorem accumsan a. Aenean luctus leo ut ullamcorper pulvinar. Sed ut mi venenatis, vestibulum nisl non, interdum magna. Pellentesque eu mi mauris. Aliquam nunc ante, eleifend sit amet libero in, convallis porta leo. Sed dolor dui, laoreet nec aliquet at, consequat eget quam.  
</p>
<br>
<h3>LIST MEMBERS ASSOCIATED WITH PROJECT (possibly with their icons or just their usernames? to be determined later...)</h3>
<br>
<br>
<button type="submit" id="edit-btn">Edit</button>
</body>
   
    </html>`;
}

export function ViewProjects() {
    ViewProjectEvent();
}

//TODO: 1. display project data on webpage **
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

