// Tüm elementleri seçme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){ // Tüm event listenerlar
    form.addEventListener("submit",addTodo);

    // DOMContentLoaded= Sayfa yuklendigi zaman bu event direkt olusuyo. Bu event olusunca loadAllTodosToUI calısacak.
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);

    // click= secondCardBody claass'ına basılma şlemi olunca deleteTodos fonk calısacak
    secondCardBody.addEventListener("click", deleteTodos);

    //keyup= input alalına her yazma işleminde filterTodos calisacak
    filter.addEventListener("keyup", filterTodos);

    clearButton.addEventListener("click", clearAllTodos);
}

function addTodo(e) {
    // Girilen input degerinin value'sunu döner trim() sayesinden bastaki ve sondaki bosluklar silinir.
    const newTodo = todoInput.value.trim();
    addToDo(newTodo);

    // Form sayfaya tekrar yönlenmemesini önlemek
    e.preventDefault();
    
}

function addToDo(newToDo){ //String degerini list item ui' ekleyecek
    if(newToDo){
        addTodoUI(newToDo);
        addTodoStorage(newToDo);
        showAlert("success","To-do Eklendi")
    }
    else{
        showAlert("danger","Eklenecek To-do list boş")
    }
    //input icini temizleme
}

function addTodoUI(newToDo){
    /*
    <li class="list-group-item d-flex justify-content-between">
        Todo 1
        <a href = "#" class ="delete-item">
            <i class = "fa fa-remove"></i>
        </a>
    </li>
    */
    //link item olusturma
    const listItem = document.createElement("li")  //li elementini olusturur
    //link olusturma
    const link = document.createElement("a")  //a elementini olusturur
    link.href= '#' //url
    link.className= "delete-item" //class
    link.innerHTML= "<i class = 'fa fa-remove'></i>" // icinde yazan yazı
    listItem.className="list-group-item d-flex justify-content-between"
    //appendChild = bir öğenin son çocuğu olarak bir düğüm 
    //createTextNode()= bir metin düğümü oluşturur.
    listItem.appendChild(document.createTextNode(newToDo));
    listItem.appendChild(link);
    //todo list' list item'ı ekleme
    todoList.appendChild(listItem);
    //input temizleme
    todoInput.value = '';

}

function getTodosFromStorage(){ //storageden butun todoları almıs olacak
    let todos;

    //localde localstoragede todos isminde key var mı kontrol ediyoruz
    if(localStorage.getItem("todos")=== null){
        todos= [];
    }
    else{
        // eger deger varsa bu degeri almamız gerek. Fakat deger string olacagı icin JSON.parse yazarak arraye ceviriyoruz 
        todos= JSON.parse(localStorage.getItem("todos"));
    }
    return todos;

}

function addTodoStorage(newToDo){
    // yazılacak tum todolar icin getTodosFromStorage() kontrolunu yapacak
    let todos =  getTodosFromStorage();

    //getTodosFromStorage() ile komtrol sagladıgımız localstoragedeki yerleri newToDo degerlerini push ile gönderecegiz
    todos.push(newToDo)

    //todos bir array, todos icine yollanan degerler string
    // degerleri string haline JSON.stringify ile ceviriyoruz
    localStorage.setItem("todos", JSON.stringify(todos))

}

function showAlert(type, message){
    /*
    <div class="alert alert-danger" role="alert">
        A simple danger alert—check it out!
    </div>
    */
    //alert olusturma
    const alert = document.createElement("div") 
    alert.className= `alert alert-${type}`
    alert.textContent=message
    firstCardBody.appendChild(alert);

    //Sureli silme islemi
    setTimeout( function(){
        alert.remove()
    },1000)

    //cok kısa zamanda ekleniyo ve siliniyo. Göremiyoruz
    // alert.remove()
}

function loadAllTodosToUI(){
    //localstoragedeki degeri alıyoruz
    let todos= getTodosFromStorage();

    todos.forEach( function(todo){
        addTodoUI(todo);
    })
    
}

function deleteTodos(e){
    //e.target= nereye basıldıgını gösterecek
    if(e.target.className === "fa fa-remove"){
        //parentElenet()= mevcut konumun üstündeki element 
        e.target.parentElement.parentElement.remove();
        //localstorageden silme
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent)
        showAlert("warning","To-do basarıyla silindi")
    }
}

function deleteTodoFromStorage(deletetodo){
   //localstoragedeki degeri alıyoruz
   let todos= getTodosFromStorage();

   //her todo üzerinde gezinecegiz
   todos.forEach(function(todo, index){
    if(todo === deletetodo){
        //splice()= o indexten itibaren 1 tane obje siler
        todos.splice(index,1);
    }
   })
   //yeni todos'u localstorage günvcelliyoruz
   localStorage.setItem("todos",JSON.stringify(todos))
}

function filterTodos(e){
    //input alanına yazılan degeri anlık alıyor ve harf duyarlılıgı icin kücük harfe ceviriyor
    const filterValue = e.target.value.toLowerCase();

    //todo listi donmek icin .list-group classına sahip tum degişkenleri al 
    const listItmes = document.querySelectorAll(".list-group-item")

    listItmes.forEach( function(listItem){
        const text = listItem.textContent.toLowerCase();

        if(text.indexOf(filterValue) === -1){
            //dinamik css ekleme
            listItem.setAttribute("style","display: none!important")
        }
        else{
            listItem.setAttribute("style","display: block")
        }
   
    })

}

function clearAllTodos(e){
    if(confirm("Tümünü silmek istediginizden emin misisn?")){
        // arayüzden silme
        //todoList.innerHTML= ""; //yavaş
        while(todoList.firstChild != null){
            todoList.removeChild(todoList.firstChild);
        }

        // localstorageden silme
        localStorage.removeItem("todos")
    }
}

