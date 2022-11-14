const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const listGroup = document.getElementById("list-group");
const github = new Github;

eventListener();
const ui = new UI(); 


function eventListener(){
    githubForm.addEventListener("submit", getData);
    clearLastUsers.addEventListener("click", clearAllSearched);
    // Sayfa yuklendigi zaman calısacak
    document.addEventListener("DOMContentLoaded", getAllSearch);
}

function getData(e){
    // trim = sagdan, soldan bosluk sil
    let username = nameInput.value.trim();

    if(username === ""){
        ui.displayMessages("Deger girin","warning")
    }
    else{
        //asycn olarak yazıldıgı icin response tarzında yazmak gerek
        github.getGithubData(username)
        .then(response =>{
            if(response.user.message === "Not Found"){
                ui.displayMessages("Boyle bir kullanıcı yok","danger")
            }
            else{
                ui.addSearchedUsersToUI(username)
                Storage.addSearchedUsersToStorage(username);
                ui.showUserInfo(response.user)
                ui.showRepoInfo(response.repo)

                ui.displayMessages("Başarıyla Eklendi","success")
            }
        })
        .catch( err => ui.displayMessages(err,"secondary"))
    }

    //input temizleme
    ui.clearInput()
    //sayfanın yenilenmesini onlemek 
    e.preventDefault();
}

function clearAllSearched(){
    if(confirm("Emin Misiniz?")){
        Storage.clearAllSearchedUsersFromStorage();
        ui.clearAllSearchedFromUI();
    }
}

function getAllSearch(){
    //localstoragede kayıtlı kullanıcıları cekme
    let users = Storage.getSearchedUsersFromStorage();
    let result= ''

    users.forEach(user => {

          /* <li class="list-group-item">asdaskdjkasjkşdjşasjd</li> */
          result += `<li class="list-group-item">${user}</li>`         
    });

    lastLastUsers.innerHTML = result


}



