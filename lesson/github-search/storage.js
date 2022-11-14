class Storage{
    //Tüm kullanıcı al
    static getSearchedUsersFromStorage(){
        let users;

        //local terminal > Application > LocalStorage > Key'de searched yoksa users array'ini olustur
        if(localStorage.getItem("searched") === null){
            users = [];
        }
        //local terminal > Application > LocalStorage > Key'de searched varsa users value degerlerini users arry'ine yaz
        else{
            users = JSON.parse(localStorage.getItem("searched"))
        }

        return users;

    }
     //Kullanıcı Ekle
     static addSearchedUsersToStorage(username){
        let users = this.getSearchedUsersFromStorage();

        //username localstorage'deki value'de var mı yok mu diye kontrol ediyoruz.
        
        // users array'inde username yoksa( indexof -1 donuyosa iştenilen deger yok demektir) array'e ekle
        if(users.indexOf(username) === -1){
            users.push(username) 
        }
        //array'e yeni eklenen degerleri, localstoragede key'i searched olanın value'suna ekliyoruz.
        localStorage.setItem("searched",JSON.stringify(users))

    }
     //Tüm kullanıcıları sil
     static clearAllSearchedUsersFromStorage(){
        localStorage.removeItem("searched")
    }
}