
class UI {
    constructor(){
            this.profileDiv = document.getElementById("profile");
            this.repoDiv = document.getElementById("repos");
            this.lastUsers = document.getElementById("last-users");
            this.inputfield = document.getElementById("githubname");
            this.cardBody = document.querySelector(".card-body");
    }
    clearInput(){
        this.inputfield.value = ''
    }
    showUserInfo = function(user){
        /*
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-4">
                    <a href="" target = "_blank">
                    <img class="img-fluid mb-2" src="https://upload.wikimedia.org/wikipedia/tr/a/a0/Cem_Karaca.jpg"> </a>
                    <hr>
                    <div id="fullName"><strong> Mustafa Murat Coşkun</strong></div>
                    <hr>
                    <div id="bio">asdasdasdsad</div>
                </div>
                <div class="col-md-8">
                    <button class="btn btn-secondary">
                        Takipçi  <span class="badge badge-light"></span>
                    </button>
                    <button class="btn btn-info">
                        Takip Edilen  <span class="badge badge-light"></span>
                    </button>
                    <button class="btn btn-danger">
                        Repolar  <span class="badge badge-light"></span>
                    </button>
                    <hr>
                    <li class="list-group">
                        <li class="list-group-item borderzero">
                            <img src="images/company.png" width="30px"> <span id="company">Naber</span>
                        </li>
                        <li class="list-group-item borderzero">
                            <img src="images/location.png" width="30px"> <span id = "location">sadasdsad</a>
                        </li>
                        <li class="list-group-item borderzero">
                            <img src="images/mail.png" width="30px"> <span id="company">Naber</span>
                        </li> 
                    </li> 
                </div>
            </div>
        </div> 
        */
    this.profileDiv.innerHTML =  
    `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-4">
                    <a href="${user.html_url}" target = "_blank">
                    <img class="img-fluid mb-2" src="${user.avatar_url}" </a>
                    <hr>
                    <div id="fullName"><strong> ${user.name} </strong></div>
                    <hr>
                    <div id="bio">${user.bio}</div>
                </div>
                <div class="col-md-8">
                    <button class="btn btn-secondary">
                        Takipçi  <span class="badge badge-light">${user.followers}</span>
                    </button>
                    <button class="btn btn-info">
                        Takip Edilen  <span class="badge badge-light">${user.following}</span>
                    </button>
                    <button class="btn btn-danger">
                        Repolar  <span class="badge badge-light">${user.public_repos}</span>
                    </button>
                    <hr>
                    <li class="list-group">
                        <li class="list-group-item borderzero">
                            <img src="images/company.png" width="30px"> <span id="company">${user.login}</span>
                        </li>
                        <li class="list-group-item borderzero">
                            <img src="images/location.png" width="30px"> <span id = "location">${user.location}</a>
                        </li>
                        <li class="list-group-item borderzero">
                            <img src="images/mail.png" width="30px"> <span id="company">${user.email}</span>
                        </li> 
                    </li> 
                </div>
            </div>
        </div>
        `
    }
    displayMessages= function(message, type){
        //div elementi olusturuyoruz
        const div = document.createElement("div")
        // elementin class'ını yazıyoruz
        div.className= `alert alert-${type}` 
        div.textContent= message

        this.cardBody.appendChild(div)

        //1sn sonra alert'u siler
        setTimeout(function(){
            div.remove();
        },1000)
    }
    showRepoInfo = function(repos){
        //eger varsa repo bilgilerini temizliyor
        this.repoDiv.innerHTML = ""

        repos.forEach(repo => {
            this.repoDiv.innerHTML += 
            `
            <div class="mb-2 card-body">
                <div class="row">
                        <div class="col-md-2">
                        <span></span> 
                        <a href="${repo.html_url}" target = "_blank" id = "repoName">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-secondary">
                                Starlar  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                            </button>

                            <button class="btn btn-info">
                                Forklar  <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                            </button>
                    
                        </div>
                </div>
            </div> 
            `
        });

    }
    addSearchedUsersToUI(username){
        let users = Storage.getSearchedUsersFromStorage();
        
        if(users.indexOf(username) === -1){
            /* <li class="list-group-item">asdaskdjkasjkşdjşasjd</li> */

            const li = document.createElement("li")

            li.className= "list-group-item"
            li.textContent= username
    
            this.lastUsers.appendChild(li)


        }

    }
    clearAllSearchedFromUI(){
        while(this.lastUsers.firstElementChild !== null){
            this.lastUsers.removeChild(this.lastUsers.firstElementChild);

        }
    }
}
