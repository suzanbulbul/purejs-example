export const findIntersection = (arr) => {
    //    1. Yeni bri array tipinde değişken tanımla (kesisen değerler için)
    let intersection= []

    //    2. forEach sadece array'de kullanılır. .split() .replace()
    const kume1 = arr[0].replace(/\s/g,"").split(',')
    const kume2 = arr[1].replace(/\s/g,"").split(',')

 
    kume2.forEach((item) => {
        //   3. forEach() -> bütün array içerisindeki karakteri, diğer array içnde olup olmadığını konttol edeceğiz.
        // Varsa tanımladığımız yeni array içerisine bu array'i koy
        if(kume1.includes(item)){
            intersection.push(item)
        }  
    });

    // 4. Tanımlamı olduğumuz array boşsa false, değilse array içerisindeki değerleri string halinde return ettir.  
    if(intersection.length != 0){
        return intersection.toString()
    }
    else{
        return false
    }   

}

/*
    Soru: Arry içindeki 2 string türünde çakışan değer varsa yazdır yoksa false dönder
 */

/*   
    1- .replace()
    2- .split() 
    3-  forEach() -> sadece array'de kullanılır
    4-  insludes() -> true false döner. İstenilen özeliği kontrol eder
    5- toString() -> string değere dönüştürür
*/