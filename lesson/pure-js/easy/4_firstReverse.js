  export const  firstReverse = (str) => {
    //1.Yöntem
    const arr = str.split("")
    const reversedArr = arr.reverse()
    const newStr = reversedArr.join("")
    //return newStr
    //2.Yöntem

    return str.split("").reverse().join("")


   
  } 


  /*
    Soru: Fonk. girilen bir stringin ters çevirilerek geri verilmesi
  */

  /*
    .reverse() --> arrayleri ters düz eder
    .split() --> string'i array'e cevirir
    .join() --> array'i string'e cevirir

  */