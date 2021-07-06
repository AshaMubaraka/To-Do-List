var enter = document.getElementById("button");
var input = document.getElementById("userInput");
var ul= document.querySelector("ul");
var list = document.getElementsByTagName("li");
var dlt = document.createElement("button");

function  dltListItem(event){
   event.target.parentNode.remove();
};

function inputLength(){
    return input.value.length;
};

function createListItem(){
    
    var li= document.createElement("li");
    var dlt = document.createElement("button");
    
    li.appendChild(document.createTextNode(input.value));
    dlt.appendChild(document.createTextNode( "Delete"));
    dlt.addEventListener("click",dltListItem);
    li.appendChild(dlt);
    
    ul.appendChild(li);
    input.value = "";
}

function addByClick(){
    if(inputLength() > 0){
        console.log("Pressed");
        createListItem();
    }
}

function addByKeypress (event){
    if(inputLength() > 0 && event.keyCode === 13){
        createListItem();
    }
}

// DELETE BUTTON FOR ALL LIST ITEMS


function  listLength(){
    return list.length;
};

function createDltBtn(){
    var dlt = document.createElement("button");
    dlt.appendChild(document.createTextNode( "Delete"));
    list[i].appendChild(dlt);
    dlt.addEventListener("click",dltListItem);

}

for (var i = 0; i < listLength(); i++) {
        createDltBtn();
 };


input.addEventListener("keypress",addByKeypress);
enter.addEventListener("click" , addByClick);
        

// DONE TOGGLER

function toggler(event){
    event.target.classList.toggle("done");
};

ul.addEventListener("click", toggler);