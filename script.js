
function addLikes(id){
    var count = parseInt(document.querySelector(id).innerHTML);
    document.querySelector(id).innerHTML = count+1;
}