// export function GitHubInfo(githubUsername) {
//     console.log("Data Loading from GitHub")
//
//     const myGitHubRequest = new Request(`https://api.github.com/users/${githubUsername}/repos`);
//     return fetch(myGitHubRequest)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data[0].name)
//             console.log(showRepos(data[0]))
//             return showRepos(data[0]);
//         }).catch(error => {
//             console.log(error)
//         });
//
//     return 'Github information will go here'
//
// }

export function GitHubInfo(githubUsername) {
    const promises = [];
    //TODO: this needs to be moved to a prop file or env variable
    const baseUri = `https://api.github.com/users/${githubUsername}/repos`;

    promises.push(
        fetch(baseUri)
            .then(function (res) {
                return res.json();
            }));

    return Promise.all(promises).then(propsData => {
        console.log(propsData)
        const data = {};
            data['repos'] = showRepos(propsData);
        //console.log(data)
        return data;
    });
}


//TODO change the function name
export default function showRepos(repos) {

    console.log(repos[0][0].name);
    let repoComponent = '';
    (repos[0])? repos[0].slice(1,5).map((repo)=> {
        repoComponent = repoComponent + `
                     <a href="${repo.html_url}" class="list-group-item list-group-item-action" data-link>
                        <div class="d-md-flex w-100 justify-content-between">
                            <h5 class="mb-1">${repo.name}</h5>
                            <small class="text-muted">Updated at</small>
                        </div>
                        <small class="text-muted">${repo.language}</small>
                    </a> `
        }):
        repoComponent = 'Repositories from github will go here.'
    //console.log(repoComponent)
    return repoComponent;
}