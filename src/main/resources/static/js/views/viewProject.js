export default function ViewProject(props) {
    return ` 
 <!DOCTYPE html>
 <html lang="eng">
<head> 
<meta charset="UTF-8"/>
<title>My Projects Page</title>
</head>
<br>
<br>
   <body>
   <h1>Project Description</h1>
   <br>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dui metus, euismod vel semper a, consectetur eget neque. Suspendisse in cursus velit. Morbi fringilla imperdiet tortor, eget maximus dui tristique sit amet. Etiam a pellentesque risus. Mauris elementum semper sem vel maximus. Maecenas imperdiet sem cursus leo tincidunt tempus. Aliquam ut quam nisi. Nunc cursus ac lorem eget imperdiet. Suspendisse velit risus, aliquam ac rutrum et, blandit in leo. Etiam dictum egestas enim, in posuere lorem accumsan a. Aenean luctus leo ut ullamcorper pulvinar. Sed ut mi venenatis, vestibulum nisl non, interdum magna. Pellentesque eu mi mauris. Aliquam nunc ante, eleifend sit amet libero in, convallis porta leo. Sed dolor dui, laoreet nec aliquet at, consequat eget quam.  
</p>
<br>
<br>
<h3>PLACEHOLDER FOR GITHUB/GITLAB PREVIEW + INFO ABOUT PROJECT</h3>
<br>
<br>
<h3>LIST MEMBERS ASSOCIATED WITH PROJECT</h3>
<br>
<br>
<button type="submit" id="edit-btn">Edit</button>
</body>
   
    </html>`;
}

export function ViewProject() {
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

