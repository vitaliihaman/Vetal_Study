
var photoArray = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg",
                    "8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg"];

function shadow(){
    var shadow = document.getElementById("shadow");
    shadow.style.display = "block";


}

function onclickPicture(){
    document.getElementById("photos");
    photos.src = this.src;
}


window.onload = function(){
    var photoContainer = document.getElementById("photoContainer");
        for(i=0; i < photoArray.length; i++){
        var img = document.createElement("IMG");
            img.src = "images/" + photoArray[i];
            img.onclick = onclickPicture;
            img.onclick = shadow;

            photoContainer.appendChild(img);

    }
};

function red(){
   var ul = document.getElementById("list");
   var li = ul.getElementsByTagName("LI");
    this.style.color = "red";


}

window.onload = function(){
    var ul = document.getElementById("list");
    var li = ul.getElementsByTagName("LI");
    for(i=0; i < li.length; i++) {
        li[i].onclick = red;
    }



};


