export default function Home(props) {
    return `
        <body style="padding: 3.5rem">
        <div id="app" class="container p-2">
           <main role="main">

            <!-- START THE FEATURETTES -->
            <div class="row featurette mt-5 pt-5 align-self-center">
                <h3>Already a member?</h3>
                <div class="ml-2">
                    <form>
                        <a class="btn btn-secondary" href="/login" data-link>Log in</a>
                    </form>
                </div>
            </div>
            <hr class="featurette-divider">

            <div class="row featurette">
                <div class="col-md-7">
                    <h2 class="featurette-heading">Devsplash brings fresh ideas to life
                        <span class="text-muted">by matching skills with project
                        needs.</span>
                    </h2>
                    <p class="lead">Members can use their background and skill sets to match with available
                        projects.</p>
                    <div class="m-2">
                        <form>
                            <a class="btn btn-secondary" href="/register" data-link>Sign up!</a>
                        </form>
                    </div>

                </div>
                <div class="col-md-5">
                    <img class="featurette-image img-fluid mx-auto" src="https://media.istockphoto.com/photos/programmer-working-with-program-code-picture-id1075599562?k=20&m=1075599562&s=612x612&w=0&h=cDFY2kKyhFzSNNlDQsaxoekIW0v7iyaMBkxp11Fz33U="
                         alt="Generic placeholder image">
                </div>
            </div>

            <hr class="featurette-divider">

            <div class="row featurette">
                <div class="col-md-7 order-md-2">
                    <h2 class="featurette-heading">Meet the like-minded. <span
                            class="text-muted">See for yourself.</span></h2>
                    <p class="lead">Members can find and introduce themselves to potential connections,
                        with the goal of collaborating on projects or learning new skills.</p>
                </div>
                <div class="col-md-5 order-md-1">
                    <img class="featurette-image img-fluid mx-auto" src="https://envato-shoebox-0.imgix.net/5817/5f40-ebdb-48d5-b950-e889f3c4d37e/IMG_3992.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=173fc01bad4a57ea116f57088c39d29a"
                         alt="Generic placeholder image">
                </div>
            </div>

            <hr class="featurette-divider">

            <div class="row featurette">
                <div class="col-md-7">
                    <h2 class="featurette-heading">Collaborate and create. <span class="text-muted">Checkmate.</span>
                    </h2>
                    <p class="lead">Devsplash does match-making based on shared interests, location & technology
                        stack.</p>
                </div>
                <div class="col-md-5">
                    <img class="featurette-image img-fluid mx-auto" src="https://www.mheducation.com/content/dam/mhe/ideas/new/ditch-critical-thinking.jpg"
                         alt="Generic placeholder image">
                </div>
            </div>

            <hr class="featurette-divider">
    `;
}