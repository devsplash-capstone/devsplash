function printOutProjects(project) {
    return `
        <div class="p-3">
            <div class="card shadow-sm p-0">
                  <h5 contenteditable="false" class="card-header title"> ${project.name}</h5>
                  <p contenteditable="false"  class="p-3 card-text content">
                        ${project.description} 
                  </p>
                  <p class="px-3 author">By ${project.user.displayName}</p>
            </div>
        </div>`
}

export default function Projects(props){
    return `
       <main>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto">
                <div class="col-12 my-3 text-center">
                    <p>Explore Projects</p>
                </div>
                 ${props.projects.map(project => `${printOutProjects(project)}`).join('')}
            </div>
            </div>
        </main>`;
}

//TODO: copy UI from Mockup
//TODO: remove skills badges from Mockup
//TODO: Add edit link to the projects done by the logged user