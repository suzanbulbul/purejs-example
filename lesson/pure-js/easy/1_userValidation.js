export const userValidation = (str) => {
    if(
         str.length >= 4 && str.length <= 25 && 
         (/[a-zA-Z]/).test(str.slice(0,1)) && //str.charAt(0)
         (/^\w+$/).test(str)  &&
         (/[a-zA-Z0-9]/).test(str.slice(-1)) //str.charAt(str.length-1)
         ){
        return true
    }
    else
        return false
}

/*
Kurallar:
1. Girilen değer 4 ile 25 arasında olması
2. Girilen değerin alfabe içerisinde olması
3. Girilen değer sadece harfsayı ve __ ile oluşmalı
4. Girilen değerin son karakterinin _ olmaması 
*/

/*
 and operator
 .lenght property

 reg exp.
 .charAt()  ->  girilen index değerindeki karakteri döner
 .slice() -> verdiğimiz aralıktaki, istediğimiz sayıdaki karakteri döner  (10 harften olusan bri kelimedeki 4. ile 8. arasındaki karakteri dönme)
 .test() -> regte yazacağımmız kuralı T F değerini döndermek için
 slice(-1) -> son karakteri verir
*/
