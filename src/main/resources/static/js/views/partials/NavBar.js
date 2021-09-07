export default function Navbar(props) {
    console.log(props)
    let username;
    if(props)
        if(props.user){
            username = props.user.displayName;
            return `
                    <nav id="nav">
                        <a class="a-tags" href="/" data-link>Home</a>
                        <a class="a-tags" href="/" data-link>${username}</a>
                        <a class="a-tags" href="/" data-link>Sign out</a>
                    </nav>
    `;
        }else{
            return `
                    <nav id="nav">
                         <a href="/register" data-link>Sign Up</a> |
                         <a href="/login" data-link>Sign In</a>
                    </nav>
    `;
        }

}