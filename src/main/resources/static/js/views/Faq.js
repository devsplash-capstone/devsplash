export default function FaqView(props) {
    return `
<h3 style="text-align: center" class="mt-3">Frequently Asked Questions</h3>
<hr>
<!-- displays faqs -->
<div class="container">
<div class="accordion" id="accordionExample">
    <div class="card">
        <div class="card-header" id="headingOne">
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                        data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    What is Devsplash and how does it work?
                </button>
            </h2>
        </div>

        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
                Devsplash is a place where developers can come together and collaborate on new project ideas. After
                registering and becoming a member, you can create a project and join other member's projects as
                well!
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                        data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    How do I join a project?
                </button>
            </h2>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
                You can join a project by navigating to any project page you like. Once you find a project
                you want to collaborate on, you can click the "Join Project" button towards the
                bottom of the page.
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="headingThree">
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                        data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Do I have to pay to use Devsplash?
                </button>
            </h2>
        </div>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
                Devsplash is free to use!
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="headingOne">
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                        data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                    How do I contact the administrators?
                </button>
            </h2>
        </div>

        <div id="collapseFour" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
                We want to talk to you too! You can connect with any one of the admins by navigating to the
                About Us page and using any one of the links we have provided on that page. We look forward to
                hearing from you!
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="headingOne">
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                        data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                    How do I message other members within Devsplash?
                </button>
            </h2>
        </div>

        <div id="collapseFive" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
                Communication is important! We aim to integrate that feature in our next update! We
                apologize for any inconvenience!
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="headingOne">
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                        data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                    How do I delete my profile?
                </button>
            </h2>
        </div>

        <div id="collapseSix" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
                We're sorry to see you go! You can delete your profile by navigating to your profile page,
                click Edit Profile and the delete feature will be accessible there. Please note, that once you
                delete your profile, ALL of your information will be gone for good!
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="headingOne">
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                        data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                    How can I report someone?
                </button>
            </h2>
        </div>

        <div id="collapseSeven" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
                We're sorry that you may be experiencing a negative situation with another member! It is our
                priority that we maintain a positive and safe community here at Devsplash. We do not tolerate
                behaviors that make others feel unwelcome in any capacity. Please notify us if you experience
                any issues with other members and we will
                handle the situation at our earliest convenience! Thank you!
            </div>
        </div>
    </div>
</div>
</div>
    `;
}