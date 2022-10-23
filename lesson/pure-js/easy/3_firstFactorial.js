export const firstFactorial = (str) => {
    let fact = 1;
    for(let i = 1 ; i <= str ; i++ ){
       fact*= i;
       console.log(fact)
    }
    return 'Sonuc= '+ fact
}  

/*
Soru: Bir sayinin fakt. bulma
 
    iç içe for döngğsğ kuracağız
*/

/*
    For Döngüsü
        let -> Atanan değer değişim gösterebilir
        const -> Değişken bir kere tabımlanır ve değişmez
*/