export const longestWord = (str) => {

   const arr = str.replace(/[^a-zA-Z ]/g, "").split(" ")
   arr.sort( (a, b) => {return b.length - a.length})

   return arr[0]
}

/*
Soru:
    Girilen değerde  en çok uzun kelime hangidir? 

    1- Noktalama işaretlerini kaldır
    2- Cümle içerindeki boşlukları bölüp kelimelerle bie array oluşturma
    3- Kelimelerle oluşturulan array'i, kelimelerin karakter sayilarına göre azalan bir şekilde sıralamak  (en çok oolan ilk array olacak şekilde sırala)
    4- En uzun karakter içeren değeri bastırmak (0. index)
 */

/*
    replace() -> gönderilen datada replace içerisindeki kurala uyan varsa, içerisindeki istenilen ile değiştir 
        replace(/[^a-zA-Z ]/g,"")  -> ^= hepsi
                                      a-zA-Z = tüm karakterler (Z nin yanındaki boşluk space dahil demek) 
                                      ""= kurala uygunsa "" içerisindeki değer ile değştir
    split() -> istenilen karakterden stringi bölüp olusan elemanlı yapıyı array haline getirir
    sort() -> array'in içerisinde string varsa, index'in baş harflerine göre alfabetik sıralar
              array'in kuralina göre değiştirir
              string yerine sayilar ile işlem yaparsak bu method bir fonk. dönüşür
 */