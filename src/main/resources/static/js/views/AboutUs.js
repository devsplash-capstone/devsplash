

export default function AboutUsView(props) {
    return `
<h1 style="text-align: center">Meet Our Team!</h1>
<hr>
<div class="card-container container d-flex justify-content-around row mx-auto">
    <div class="card col-12 col-md-5 mb-md-2 col-lg-2" style="width: 18rem;">
        <img class="rounded-circle about-img" src="https://avatars.githubusercontent.com/u/71880210?v=4" alt="diamond_img">
        <div class="card-body">
            <h5 class="card-title">Diamond Meredith-Anderson</h5>
            <p class="card-text">“Success is liking yourself, liking what you do, and liking how you do it.” - Maya Angelou</p>
            <hr>
            <a href="https://github.com/dlmeredi" ><i class="bi bi-github"></i></a>
            <a href="#" ><i class="bi bi-linkedin"></i></a>
        </div>
    </div>
    <div class="card col-12 col-md-5 mb-md-2 col-lg-2" style="width: 18rem;">
        <img class="rounded-circle about-img" src="https://avatars.githubusercontent.com/u/82416712?v=4" alt="mitchell_img">
        <div class="card-body">
            <h5 class="card-title">Mitchell Hogue</h5>
            <p class="card-text">"Life begins at the end of your comfort zone" -Neale Donald Walsh</p>
            <hr>
            <a href="https://github.com/Mitchellhogue0" ><i class="bi bi-github"></i></a>
            <a href="#" ><i class="bi bi-linkedin"></i></a>
        </div>
    </div>
    <div class="card col-12 col-md-5 mb-md-2 col-lg-2" style="width: 18rem;">
        <img class="rounded-circle about-img" src="https://avatars.githubusercontent.com/u/32047550?v=4" alt="prachi_img">
        <div class="card-body">
            <h5 class="card-title">Prachi Phatak</h5>
            <p class="card-text">“Every action you take is a vote for the type of person you wish to become.” ― James Clear</p>
            <hr>
            <a href="https://github.com/PrachiPhatak" ><i class="bi bi-github"></i></a>
            <a href="#" ><i class="bi bi-linkedin"></i></a>
        </div>
    </div>
    <div class="card col-12 col-md-5 mb-md-2 col-lg-2" style="width: 18rem;">
        <img class="rounded-circle about-img" src="https://avatars.githubusercontent.com/u/80980226?v=4" alt="ricardo_img">
        <div class="card-body">
            <h5 class="card-title">Ricardo J. Figueroa</h5>
            <p class="card-text">"Hard work doesn't guarantee success, but without it you don't have a chance." -Alex Rodriguez</p>
            <hr>
            <a href="https://github.com/Rfigueroa2317" ><i class="bi bi-github"></i></a>
            <a href="#" ><i class="bi bi-linkedin"></i></a>
        </div>
    </div>
</div>
    
    `
}