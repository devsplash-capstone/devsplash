import {renderProfileComponent, ProfileEvent} from "./views/Profile.js";
import {RenderProfileCardComponent} from "./views/ProfileCard.js";
import {PageContentView} from "./views/partials/content.js";

/**
 * RenderProfileWithGithubInfo is async function.
 * Checks if member's profile or logged in user's profile.
 * Gets github repository information, attaches profile card, profile details view.
 * Adds profile events.
 * @param props - user, <member>, user's projects
 * @constructor
 */
export default function RenderProfileWithGithubInfo(props) {
    //To check if it's user's profile or member's profile
    //if user is not logged in set profile id to 0
    let profileId = (props.user) ? props.user.id : 0;
    let user = (props.member) ? props.member : props.user;

    // Set github information only if github information provided, Note: Github has null user
    const baseUri = `https://api.github.com/users/${user.githubUsername}/repos`;
    fetch(baseUri)
        .then(function (res) {
            return res.json();
        }).then(repos => {
        if (user.githubUsername)
            return RenderProfileCardComponent(user, profileId) + renderProfileComponent(user, props.projects, props.participatingProjects, repos, profileId)
        else
            return RenderProfileCardComponent(user, profileId) + renderProfileComponent(user, props.projects, props.participatingProjects, null, profileId)

    }).then(profilePageView => {
        let pageContentView = PageContentView(profilePageView)
        $("#loadingGif").remove()
        $(".header-wrapper").append(pageContentView)
        ProfileEvent();
    });
}

/**
 * Renders only 3 github repos. If repos not available returns message.
 * @param repos - github repos
 * @returns {string|*}
 */
export function renderGithubInfo(repos) {
    if (!repos.message){
        if (repos)
            return repos.slice(1, 4).map((repo) => {
                return `<a href="${repo.html_url}" class="list-group-item list-group-item-action border rounded">
                        <div class="d-md-flex w-100 justify-content-between">
                            <h5 class="mb-1">${repo.name}</h5>
                            <small class="text-muted">Updated@ ${getDate(repo.updated_at)}</small>
                        </div>
                        <small class="text-muted">${(repo.language) ? repo.language : ''}</small>
                    </a> `
            }).join('')
        else
            return `<div class="border rounded p-2">Github information not provided or is incorrect.</div>`
    }else
        return `<div class="border rounded p-2">Github information is incorrect.</div>`
}

function getDate(githubDate) {
    return githubDate.substring(0, 10);
}