import {profileCardEvents, RenderProfileCardComponent} from "./ProfileCard.js";
import {PageContentView} from "./partials/content.js";
import {getHeaders} from "../auth.js";
import fetchData from "../fetchData.js";
import render from "../render.js";
import ProfileView from "./Profile.js";
import {validateUser} from "../router.js";

export default function Members(props) {
    let membersPage;
    if(props.user) {
        membersPage = RenderProfileCardComponent(props.user, props.user.id) + renderMembersComponent(props.users, "Members");
    }else{
        membersPage = renderMembersComponent(props.users, "Members");
    }
    return PageContentView(membersPage)
}

/**
 * Renders members list, adds label for the list
 * @param members
 * @param label - List name
 * @returns {string}
 */
export function renderMembersComponent(members, label = '') {
    return `
        <div class="details-wrapper col-md-8 d-md-inline-flex px-0 px-md-4 py-4 mt-3" style="background-color: white">
            <div class="details-wrapper-helper px-0 col-12" >
                <div class="current-members px-0 mt-4 m-md-4">
                    <h3 class="mb-4">${label}</h3>
                    <div class="mt-4">
                        <div class="list-group">
                            ${renderMembers(members)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * Renders members
 * @param member
 * @returns {string}
 */
export function renderMember(member) {
    return `<a href="#" class="memberView list-group-item list-group-item-action" data-member-id="${member.id}">
                <div class="d-md-flex w-100 justify-content-between">
                    <h5 class="mb-1">${member.firstname} ${member.lastname}</h5>
                    <small>${member.displayName}</small>
                </div>
                <small>${member.skills.map(skill => " " + skill.name)}</small>
            </a>
        `;
}

/**
 * Render member
 * @param members
 * @returns {*|string}
 */
export function renderMembers(members) {
    return (members)
        ? members.map(member => `${renderMember(member)}`).join('')
        : '<div class="border rounded p-2">List of all members will go here.</div>';
}

/**
 * Adds profile card events and member click event
 */
export function MembersEvents() {
    profileCardEvents();
    memberClickFetchEvent();
}

export function memberClickFetchEvent() {
    $(".memberView").click(function () {
        const id = $(this).attr("data-member-id");

        const route = {
            returnView: ProfileView,
            state: {
                member: `/api/users/findById/${id}`,
                projects: `/api/projects/findByUserId/${id}`,
                participatingProjects: `/api/projectMembers/byUserId/${id}`
            },
            uri: '/profile',
            title: "Member's Profile",
        }

        route.state = validateUser(route.state);

        const request = {
            headers: getHeaders()
        }

        fetchData(route.state, request)
            .then((props) => {
                render(props, route);
            })
            .catch(error => console.error(error)); /* handle errors */

    });
}