const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title"); //getElementsById kullanılabilir
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clearFilm = document.querySelector("#clear-films");



//Tüm eventleri yükleme
eventListeners();

function eventListeners() { 
    //submit oldugu zaman addFilm calistir
    form.addEventListener("submit", addFilm)
    //sayfa yüklendigi zaman
    document.addEventListener("DOMContentLoaded",function(){
        let films= Storage.getFilmsFromStorage();
        UI.loadAllFilms(films)
    });

    cardbody.addEventListener("click", deleteFilm)
    clearFilm.addEventListener("click", clearAllFilm)

}

function addFilm(e){
    const title = titleElement.value
    const director = directorElement.value
    const url = urlElement.value

    if( title === "" || director === "" || url === ""){
        UI.displayMessages("Tüm alanlari doldurun", "danger") //hata alert
    }
    else{
         // Yeni Film objesi
         const newFilm = new Film(title,director,url);

         UI.addFilmToUI(newFilm); // Arayüze film ekleme
         Storage.addFilmToStorage(newFilm); // Stroage film ekleme
         UI.displayMessages("Film Eklendi", "success") //basarı alert
    }

    // input temizleme
    UI.clearInputs(titleElement,directorElement,urlElement);

    //sayfaya tekrar yönlenmemesini önlemek
    e.preventDefault();
}

function deleteFilm(e){
  //sil butonuna basılmıssa
   if(e.target.id=== "delete-film"){
    UI.deleteFilmFromUI(e.target);
     // previousElementSibling= element kardesini bulma
    Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    UI.displayMessages("Silme İşlemi Başarılı","success")
   }
}
function clearAllFilm(e){
    if(confirm("Emidin misiniz?")){
        UI.clearAllFilmFromUI(e.target);
        Storage.clearAllFilmFromStorage(e.target);
    }
}