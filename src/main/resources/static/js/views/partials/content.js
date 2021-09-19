/**
 * Renders main page content
 * @param content - views to be displayed inside the main content area
 * @returns {string}
 */
export function PageContentView(content = '') {
    return `
        <div class="content-wrapper bg-white pt-0 pt-md-4">
            <div id="content" class="content container-xl px-3 px-md-4 px-lg-5 d-md-flex align-items-md-start justify-content-md-around">
            ${content}
            </div>
        </div>
        `;
}