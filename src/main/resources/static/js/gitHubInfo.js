export default function GitHubInfo() {
    console.log("Data Loading from GitHub")

    const myGitHubRequest = new Request(`https://api.github.com/users/prachiphatak/repos`);
    return fetch(myGitHubRequest)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            test(data);
        })
}

export function test(repos) {
        $("#content").append(
            repos.map(repo => {
                `<a href=${repo.git_url} class="list-group-item list-group-item-action">
                        <div class="d-md-flex w-100 justify-content-between">
                            <h5 class="mb-1">${repo.name}</h5>
                            <small class="text-muted">${repo.update_at}</small>
                        </div>
                        <small class="text-muted">${repo.language}</small>
                    </a>`
            })
        )


}