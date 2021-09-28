import PrivacyPolicy from "../PrivacyPolicy.js";

export default function Footer(props) {
    return `
        <footer class="my-5 pt-3 text-muted text-center text-small">
            <p class="mb-1">&copy; 2021 Devsplash</p>
            <ul class="list-inline">
                <li class="list-inline-item"><a class="footer-link" href="/PrivacyPolicy" data-link>Privacy</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="/aboutus" data-link>About Us</a></li>
<<<<<<< HEAD
                <li class="list-inline-item"><a href="#">Faqs</a></li>
=======
                <li class="list-inline-item"><a href="#">faqs</a></li>
>>>>>>> 23c7e6efbbc6933685883152cd63b2293b86aa8b
            </ul>
        </footer>
    `;
}

PrivacyPolicy();