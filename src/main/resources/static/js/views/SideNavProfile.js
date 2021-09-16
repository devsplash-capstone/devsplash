import createView from "../createView.js";

export function sideNavProfileComponent(user, loggedInUserId) {
    return `
        <div class="profile-wrapper col-md-3 d-md-inline-flex mr-md-3">
            <div class="profile-wrapper-helper row p-2">
                <div class="profile-image px-0 col-3 col-md-12">
                    <img src="${user.imgUrl}"
                         class="rounded-circle" alt="">
                </div>
                <div class="profile-info-wrapper col-9 col-md-12 align-self-center d-md-flex justify-content-md-center">
                    <div class="profile-info pt-md-2 text-md-center">
                        <h5>${user.firstname} ${user.lastname}</h5>
                        <h6>${user.displayName}</h6>
                    </div>
                </div>
                <p class="mt-2"> ${user.aboutMe}</p>
                ${(user.id === loggedInUserId )?
                `<a class="userEditProfileButton btn btn-light btn-block col-12 border-dark mt-2"
                        data-user-id="${user.id}" href="#">Edit profile</a>`
                :`<a class="sendEmailProfileButton btn btn-light btn-block col-12 border-dark mt-2"
                        data-user-id="${user.id}" data-member-id="${loggedInUserId}" href="#">Send Email</a>`}
                
            </div>
        </div>
        `
        ;
}

export function addSideNavProfileEvents() {
    editProfileEvent();
    sendEmailEvent();
}

function editProfileEvent() {
    $(".userEditProfileButton").click(function () {
        createView("/editProfile")
    });
}

//TODO: add send email button to member's profile, check if member is loggedIn user
function sendEmailEvent() {
    $(".sendEmailProfileButton").click(function () {
        alert($(this).attr("data-user-id")+" Send email to "+$(this).attr("data-member-id"))
    });
}