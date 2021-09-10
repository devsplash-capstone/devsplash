function getRandomInt() {
    return Math.floor(Math.random() * 100);
}


function printOutUsers(user) {
    return `
            <div class="card border m-1" style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-4 px-0">
                  <img src="https://picsum.photos/id/${getRandomInt()}/100" class="card-img" alt="...">
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <p class="card-title font-weight-bold">${user.firstname} ${user.lastname}</p>
                    <p class="card-title">${user.displayName}</p>
                    <a class="card-text" href="#">Email</a>
                  </div>
                </div>
              </div>
            </div>
        `
}

export default function Members(props){
    return `
       <main>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto">
                <div class="col-12 my-3 text-center">
                    <h3>Members</h3>
                </div>
                 ${props.users.map(user => `${printOutUsers(user)}`).join('')}
            </div>
            </div>
        </main>`;
}