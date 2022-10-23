export const questionMark = (str) => {
    // x???x şartı iin string değerinin uzunluğu min 5 olmalı
    if (str.lengt < 5){
        return false
    }

    // String içerisinde rakam ve soru işaretlerini olmayan tüm değerleri silicez (işleri bunlar üzerinden gerçekleştiriyoruz)
    // ? ve 0-9 arasında yer alan değer değilse " " değiştir
    const newStr = str.replace(/[^0-9]/g, "")

    // Array'i string değere çevir ve dönder. 
    const arr = newStr.split("")

    // forEach döngüsünde kullanılacak değişkenler tanımla
    let sums = []
    let sum = 0
    let iterator = 0 // karakterlerin index değerini tutma 

    //  forEach ile her bir rakam ve kendisinden sonraki 4.karakteri toplanarak sum değişkenine eşitlenmesi ve 
    // sonrada her sdeğerin sums array'ine eklenmesi
    arr.forEach(item => {
        if( item != "?"){
            sum = parseInt(item + arr(iterator + 4))
            sums.push(sum)
            iterator += 1
        }
    });




}

/*
    SORU: 
        Bir string değer verilecek. Bu string'in içerisinde sadece harf, rakam ve soru isareti bulunucak
        Eğer rakam çiftinin arasında 3 adet ??? varsa bu rakamların toplamını ve bu toplamların 10 a eşit olma şartı.  

*/

/*
        1- x???x şartı iin string değerinin uzunluğu min 5 olmalı
        2- x???x x<=5 olmalı,
        3- String içerisinde rakam ve soru işaretlerini olmayan tüm değerleri silicez (işleri bunlar üzerinden gerçekleştiriyoruz)
        4- Array'i string değere çevir ve dönder. 
        5- forEach döngüsünde kullanılacak değişkenler tanımla
            sums[] = boş
            sum[]= 0
            iterator

        string.split(): 
        string.replace():
        array.forEach():  
        array.includes(): 
        parseInt(str):
        .push():     
*/