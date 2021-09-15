//TODO Add after sidenav
//TODO ${ProjectsComponent(props.projects, props.user.id)}
export function PageContentView(content = '') {
    return `
        <div class="content-wrapper pt-0 pt-md-4">
            <div id="content" class="content container-xl px-0 mx-0 mx-md-auto px-md-4 px-lg-5 d-md-flex align-items-md-start justify-content-md-around">
            ${content}
            </div>
        </div>
        `;
}