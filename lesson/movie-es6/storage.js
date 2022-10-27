class  Storage{
    // static tanımlamak zorunda degiliz fakat kullanım kolaylıgı saglıyor
    
    static addFilmToStorage(newFilm){

        let films = this.getFilmsFromStorage();
    
        films.push(newFilm);
    
        //stringe cevirip ekleme
        localStorage.setItem("films", JSON.stringify(films));
    
    }
    
    static getFilmsFromStorage(){
        let films;
    
        //Localstorage'de tanımlı bir key(array) yoksa olustur. 
        if(localStorage.getItem("films") === null){
            films= [];
        }
        // Varsa olan degeri almak gerekir.
        // Localstorage sadece string degerler kabul eder. Var olan degerleri array haline cevirmek gerek
        else{
            films = JSON.parse(localStorage.getItem("films"));
        }
        return films
    }
    
    static deleteFilmFromStorage(filmTitle){
        let films = this.getFilmsFromStorage();
    
        films.forEach(function(film,index){
            if(film.title === filmTitle){
                //splice= array'in index degerinden itibaren 1 degeri sil
                films.splice(index,1)
            }
        });
    
        localStorage.setItem("films", JSON.stringify(films))
    }
    
    static clearAllFilmFromStorage(){
    
        localStorage.removeItem("films")
    }
    
}



