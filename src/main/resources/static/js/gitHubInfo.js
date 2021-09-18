import {ProfileComponent} from "./views/Profile.js";
import {RenderProfileCardComponent} from "./views/SideNavProfile.js";
import {PageContentView} from "./views/partials/content.js";

export function RenderProfileWithGithubInfo(props) {
    //To check if it's user's profile or member's profile
    let profileId;
    let user;
    if (props.member) {
        profileId = props.user.id
        user = props.member;
    } else {
        profileId = props.user.id;
        user = props.user;
    }

    const baseUri = `https://api.github.com/users/${props.user.githubUsername}/repos`;

    fetch(baseUri)
        .then(function (res) {
            return res.json();
        }).then(propsData => {
        return RenderProfileCardComponent(user, profileId) +
            ProfileComponent(user, props.projects, renderGithubInfo(propsData), profileId)

    }).then(profilePage => {
        let temp = PageContentView(profilePage)
        $("#loadingGif").remove()
        $(".header-wrapper").append(temp)
    });
}

function renderGithubInfo(repos) {
    return repos.slice(1, 4).map((repo) => {
        return `<a href="${repo.html_url}" class="list-group-item list-group-item-action" data-link>
                        <div class="d-md-flex w-100 justify-content-between">
                            <h5 class="mb-1">${repo.name}</h5>
                            <small class="text-muted">Updated at</small>
                        </div>
                        <small class="text-muted">${repo.language}</small>
                    </a> `
    }).join('')
}