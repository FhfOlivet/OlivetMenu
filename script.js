
function addPicture(pic) {
    if (document.getElementById(pic).childNodes.length === 0 ){
        document.getElementById(pic).innerHTML = "<img src='imgs/"+pic+".jpg' />";
        return;
    }
    document.getElementById(pic).innerHTML = "";
}