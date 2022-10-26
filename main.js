
addStrikeThrough();

setImageSource("image-1","https://cdn.hiconsumption.com/wp-content/uploads/2016/09/Jeep-Rock-Rat-by-Hauk-Designs-4-1074x711.jpg");
setImageSource("image-2","https://images.iconfigurators.app/images/gallery/us-wheel-1968-Ford-F-100_Series-69-17x10-Rat-Rod_4636.jpg");
setImageSource("image-3","https://www.f150online.com/wp-content/uploads/2018/07/F-100-Drift-Machine-e1530734666519.jpg");

removeFirst();
removeFirst();

setFontSize("heading", 25);

let newImage = document.createElement("img");
newImage.src = "https://www.thedrive.com/uploads/2022/10/06/310625797_10101976658493039_2423517435568911785_n.jpeg?auto=webp&auto=webp&optimize=high&quality=70&width=3840";
newImage.style.height = "200px"
appendElement(newImage);

resizeImage("image-3", 30);

setInvisible("h1");

newListItem("This is new");

appendElement(newHeader(2,"New Header"));

// FUNCTION LIBRARY

function addStrikeThrough(){
    let target = document.querySelector("li");
    target.style.textDecoration="line-through";
}


function setImageSource(id, url){
    let target = document.querySelector("#"+id);
    target.src = url;
    target.style.height = "300px"
}


function removeFirst(){
    let target = document.querySelector("li");
    target.remove()
}


function setFontSize(id, newSize){
    let target = document.querySelector("#"+id);
    target.style.fontSize = (newSize + "px");
}


function appendElement(newElement){
    let parent = document.querySelector("#arguments");
    parent.appendChild (newElement);
}


function resizeImage(imageId, newSize){
    let target = document.querySelector("#"+imageId);
    target.style.height = (newSize + "px");
}

function setInvisible(element){
    let target = document.querySelector(element);
    target.className = "invisible"
}

function newListItem(text){
    let parent = document.querySelector("ul");
    let newItem = document.createElement("li")
    parent.appendChild (newItem);
    newItem.innerText = text;
    return newItem
}


function newHeader(size,text){
    let newHeader = document.createElement("h" + size);
     newHeader.innerText = text;
     return newHeader
}




