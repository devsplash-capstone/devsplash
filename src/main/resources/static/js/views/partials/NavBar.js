export default function Navbar(props) {
    console.log(props)
    let username;
    if(props)
        if(props.user){
            username = props.user.displayName;
        }
    return `
        <nav id="nav">
            <a class="a-tags" href="/" data-link>Home - ${username}</a>
        </nav>
    `;
}