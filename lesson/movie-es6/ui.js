//Methodlari static yazarsak obje olusturmaya gerek kalmaz.

class UI{
    static addFilmToUI(newFilm){
        /*
        <tr>
            <td><img src="" class="img-fluid img-thumbnail"></td>
            <td></td>
            <td></td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
        */
        const filmList = document.getElementById("films");
        // += demek onceki verinin üstüne yaz demek
        filmList.innerHTML+=   
        `   <tr>
                <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
                <td>${newFilm.title}</td>
                <td>${newFilm.director}</td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>
        `
        console.log(filmList)
    }
    
    static clearInputs(element1,element2,element3){
        element1.value= ""
        element2.value= ""
        element3.value= ""
    }
    
    static displayMessages(message, type){
        //ilk car-body oldugu icin querySelector kullanılyoruz
        const cardBody = document.querySelector(".card-body");
        
        // ALERT
        //div elementi olusturuyoruz
        const div = document.createElement("div")
        // elementin class'ını yazıyoruz
        div.className= `alert alert-${type}` 
        div.textContent= message
    
        // card-body'in sonunda ekliyor olusturdugumzu div elementini
        cardBody.appendChild(div)
    
        //1sn sonra alert'u siler
        setTimeout(function(){
            div.remove();
        },1000)
    }
    
    static loadAllFilms(films){
    
        const filmList = document.getElementById("films");
    
        films.forEach(function(film){
            filmList.innerHTML += `<tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>`;
        });
    } 
    
    static deleteFilmFromUI(element){
          /*
        <tr>
            <td><img src="" class="img-fluid img-thumbnail"></td>
            <td></td>
            <td></td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr> 
        */
       //butonun bulundugu yerden 2 ust parentta cıkıp o elementi silecegiz
       element.parentElement.parentElement.remove();
    }
    
    static clearAllFilmFromUI(element){
        const allFilm = document.querySelector("#films");
    
        //1.yöntem
        while(allFilm.firstElementChild !== null){
            allFilm.firstElementChild.remove();
        }
    
        // 2.yöntem
        // allFilm.remove();
    }
}
