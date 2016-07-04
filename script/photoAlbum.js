var photoArray = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg",
                    "8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg"];

var index = 0;

function prevPhoto() {
    document.getElementById("photos");
    photos.src = "images/" + photoArray[index];
    index --;
    if (index < 0) {
        index = photoArray.length - 1;
    }
}

function nextPhoto(){
    document.getElementById("photos");
    photos.src = "images/" + photoArray[index];
    index ++;
    if(index >= photoArray.length){
        index = 0;
    }

}
window.onload = function(){
    document.getElementById("photos");
    photos.src = "images/" + photoArray[index];
    next.onclick = nextPhoto;
    prev.onclick = prevPhoto;
};