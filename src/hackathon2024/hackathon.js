function callPage(id){
    window.id = id;
    console.log(window.id);
    window.open("Roommate.html?id=" + id, "_self"); 
}