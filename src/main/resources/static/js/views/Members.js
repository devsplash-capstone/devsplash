import {sideNavProfileComponent} from "./SideNavProfile.js";
import {PageContentView} from "./partials/content.js";


export default function Members(props) {
    let membersPage = sideNavProfileComponent(props.user, props.user.id) + membersList(props.users, "Members");
    return PageContentView(membersPage)
}

function printOutUsers(member) {
    return `
            <a href="member.html" class="list-group-item list-group-item-action">
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
                            ${members.map(member => `${printOutUsers(member)}`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}