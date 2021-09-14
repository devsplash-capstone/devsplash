function printOutProjects(project, id) {
    return `
            <div class="card col-12 col-md-6 px-3 px-md-0">
                <div class="card-body">
                    <a href="project.html"><h5 class="card-title">${project.name}</h5></a>
                    <a href="profile.html"><h6 class="card-subtitle mb-2 text-muted">${project.user.displayName}</h6>
                    </a>
                    <p class="card-text">${project.description}</p>
                    ${(project.user.id===id)?`<a href="#">Edit</a>`:``}
                </div>
            </div>
            `
}

export default function Projects(props) {
    console.log(props)
    return `
      <div class="content-wrapper pt-0 pt-md-4">
            <div class="content container-xl px-0 mx-0 mx-md-auto px-md-4 px-lg-5 d-md-flex align-items-md-start">
                <div class="profile-wrapper col-md-3 d-md-inline-flex mr-md-3 d-none">
                    <div class="profile-wrapper-helper row p-2 mr-3">
                        <div class="profile-image px-0 col-3 col-md-12">
                            <img src="https://via.placeholder.com/90x90.png?text=Visit+WhoIsHostingThisC/O"
                                 class="rounded-circle" alt="">
                        </div>
                        <div class="profile-info-wrapper col-9 col-md-12 align-self-center d-md-flex justify-content-md-center">
                            <div class="profile-info pt-md-2 text-md-center">
                                <h5>${props.user.firstname} ${props.user.lastname}</h5>
                                <h6>${props.user.displayName}</h6>
                            </div>
                        </div>
                        <p class="mt-2"> Web Development Instructor with backend
                            experience in the hospitality, energy, and engineering spaces.</p>
                        <a class="btn btn-light btn-block col-12 border-dark mt-2" href="profile-edit.html">Edit
                            profile</a>
                    </div>
                </div>
                <div class="details-wrapper col-md-9 d-md-inline-flex border rounded py-4 px-2 m-md-3">
                    <div class="details-wrapper-helper col-12 p-md-4">
                        <div class="current-projects mt-4">

                            <h3 class="mb-4">Explore Projects</h3>

                            <div class="row d-flex justify-content-around">
                                ${props.projects.map(project => `${printOutProjects(project, props.user.id)}`).join('')}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
}