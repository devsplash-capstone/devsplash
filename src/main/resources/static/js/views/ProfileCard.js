import createView from "../createView.js";

/**
 * RenderProfileCardComponent method renders Profile component with members information.
 * It adds "Send Email" if a member is rendered or adds "edit profile" if logged in member
 * is rendered.
 * @param user - can be logged in user or member
 * @param loggedInUserId - user id of logged in user
 * @returns {string} - side profile component with profile image, basic information and action privileges
 */
export function RenderProfileCardComponent(user, loggedInUserId) {
    let placeholderImg = 'https://via.placeholder.com/90x90.png?text=Visit+WhoIsHostingThisC/O';
    return `
        <div class="profile-wrapper col-md-3 d-md-inline-flex mr-md-3">
            <div class="profile-wrapper-helper row p-2" style="background-color: white">
                <div class="profile-image px-0 col-3 col-md-12">
                    <img src="${(user.imgUrl) ? user.imgUrl : placeholderImg}"
                         class="rounded-circle" alt="">
                </div>
                <div class="profile-info-wrapper col-9 col-md-12 align-self-center d-md-flex justify-content-md-center">
                    <div class="profile-info pt-md-2 text-md-center">
                        <h5>${user.firstname} ${user.lastname}</h5>
                        <h6>${user.displayName}</h6>
                    </div>
                </div>
                <p class="mt-2"> ${user.aboutMe}</p>
                <div id="profileAction" class="col-12 p-0">
                    ${renderProfileCardButtons(user, loggedInUserId)}
                </div>
            </div>
        </div>
        `;
}

/**
 * renderProfileCardButtons renders sendEmail or editProfile Buttons
 * @param user - can be logged in user or member
 * @param loggedInUserId- user id of logged in user
 * @returns {string} - sendEmail or editProfile
 */
function renderProfileCardButtons(user, loggedInUserId) {
    return (user.id === loggedInUserId) ?
        `<a class="editProfileButton btn btn-light btn-block col-12 border-dark mt-2"
                        data-user-id="${user.id}" href="#">Edit profile</a>`
        :
        ` <a class="sendEmailButton btn btn-light btn-block col-12 border-dark mt-2"
                        data-user-id="${user.id}" data-member-id="${loggedInUserId}" href="#">Send Email</a>`
}

/**
 * Adds editProfileEvent and sendEmailEvent
 */
export function profileCardEvents() {
    editProfileEvent();
    sendEmailEvent();
}

/**
 * Adds editProfileEvent for .userEditProfileButton
 */
function editProfileEvent() {
    $(".editProfileButton").click(function () {
        createView("/editProfile")
    });
}

/**
 * Adds sendEmailEvent for .sendEmailEvent
 * -------WIP-------
 */
// TODO: Adds functionality to send email
function sendEmailEvent() {
    $(".sendEmailButton").click(function () {
        //alert($(this).attr("data-user-id") + " Send email to " + $(this).attr("data-member-id"))
    });
}