import {addSideNavProfileEvents, sideNavProfileComponent} from "./SideNavProfile.js";
import {PageContentView} from "./partials/content.js";
import {getHeaders} from "../auth.js";
import fetchData from "../fetchData.js";
import render from "../render.js";
import ProfileView, {ProfileEvent} from "./Profile.js";
import GitHubInfo from "../gitHubInfo.js";


export default function Members(props) {
    let membersPage = sideNavProfileComponent(props.user, props.user.id) + membersList(props.users, "Members");
    return PageContentView(membersPage)
}

function printOutUsers(member) {
    return `
            <a href="#" class="memberView list-group-item list-group-item-action" data-member-id=${member.id}>
                <div class="d-md-flex w-100 justify-content-between">
                    <h5 class="mb-1">${member.firstname} ${member.lastname}</h5>
                    <small>${member.displayName}</small>
                </div>
                <small>Springboot, hibernate</small>
            </a>
        `
}

export function membersList(members, label=''){
    return `
        <div class="details-wrapper col-md-8 d-md-inline-flex py-4 mt-3">
            <div class="details-wrapper-helper col-12">
                <div class="current-members mt-4 m-md-4">
                    <h3 class="mb-4">${label}</h3>
                    <div class="mt-4">
                        <div class="list-group">
                            ${(members)?members.map(member => `${printOutUsers(member)}`).join('')
                                :'List of all members will go here.'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}



export function MembersEvent(){
    addSideNavProfileEvents();

    memberClickEvent();
}

export function memberClickEvent() {
    $(".memberView").click(function () {
        const id = $(this).attr("data-member-id");

        const route =  {
            returnView: GitHubInfo,
            state: {
                user: "/api/users/me",
                member: `/api/users/findById/${id}`,
                projects:`/api/projects/findByUserId/${id}`
            },
            uri: '/profile',
            title: "Member's Profile",
            viewEvent:ProfileEvent
        }

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