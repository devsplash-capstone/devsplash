import ProfileView from "./views/Profile.js";

export default function GitHubInfo(props) {
    console.log("Data Loading from GitHub")

    let githubUsername;
    if (props.member === undefined) {
        githubUsername = props.user.githubUsername;
    } else {
        githubUsername = props.member.githubUsername;
    }

    console.log(githubUsername)
    if (githubUsername !== null) {
        const myGitHubRequest = new Request(`https://api.github.com/users/${githubUsername}/repos`);
        return fetch(myGitHubRequest)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                ProfileView(props, data);
            }).catch(error => {
                console.log(error)
                ProfileView(props, null)
            });
    } else {
        ProfileView(props, null);
    }

}

//TODO change the function name
export function test(repos) {
    $("#content").append(
        (repos) ?
            repos.map(repo => {
                `<a href="${repo.git_url}" class="list-group-item list-group-item-action">
                        <div class="d-md-flex w-100 justify-content-between">
                            <h5 class="mb-1">${repo.name}</h5>
                            <small class="text-muted">${repo.update_at}</small>
                        </div>
                        <small class="text-muted">${repo.language}</small>
                    </a>`
            }) :
            'Repositories from github will go here.'
    )
}