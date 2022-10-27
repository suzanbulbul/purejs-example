const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title"); //getElementsById kullanılabilir
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clearFilm = document.querySelector("#clear-films");




// UI Objesini Üretme
const ui = new UI(); 
// Storage Objesini Üretme
const storage = new Storage(); 

//Tüm eventleri yükleme
eventListeners();

function eventListeners() { 
    //submit oldugu zaman addFilm calistir
    form.addEventListener("submit", addFilm)
    //sayfa yüklendigi zaman
    document.addEventListener("DOMContentLoaded",function(){
        let films= storage.getFilmsFromStorage();
        ui.loadAllFilms(films)
    });

    cardbody.addEventListener("click", deleteFilm)
    clearFilm.addEventListener("click", clearAllFilm)

}

function addFilm(e){
    const title = titleElement.value
    const director = directorElement.value
    const url = urlElement.value

    if( title === "" || director === "" || url === ""){
        ui.displayMessages("Tüm alanlari doldurun", "danger") //hata alert
    }
    else{
         // Yeni Film objesi
         const newFilm = new Film(title,director,url);

         ui.addFilmToUI(newFilm); // Arayüze film ekleme
         storage.addFilmToStorage(newFilm); // Stroage film ekleme
         ui.displayMessages("Film Eklendi", "success") //basarı alert
    }

    // input temizleme
    ui.clearInputs(titleElement,directorElement,urlElement);

    //sayfaya tekrar yönlenmemesini önlemek
    e.preventDefault();
}

function deleteFilm(e){
  //sil butonuna basılmıssa
   if(e.target.id=== "delete-film"){
    ui.deleteFilmFromUI(e.target);
     // previousElementSibling= element kardesini bulma
    storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    ui.displayMessages("Silme İşlemi Başarılı","success")
   }
}
function clearAllFilm(e){
    if(confirm("Emidin misiniz?")){
        ui.clearAllFilmFromUI(e.target);
        storage.clearAllFilmFromStorage(e.target);
    }
}