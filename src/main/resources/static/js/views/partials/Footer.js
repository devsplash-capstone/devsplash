export default function Footer(props) {
    return `
        <footer class="my-5 pt-3 text-muted text-center text-small">
            <p class="mb-1">&copy; 2021 Devsplash</p>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Privacy</a></li>
                <li class="list-inline-item"><a href="/aboutus" data-link>About Us</a></li>
                <li class="list-inline-item"><a href="/faq" data-link>Faqs</a></li>
            </ul>
        </footer>
    `;
}