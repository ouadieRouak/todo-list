var button = document.getElementById("enter");
var input=document.getElementById("userinput");
var ul= document.querySelector("ul");
var li = document.querySelectorAll("li");



function inputLength(){
	return input.value.length;
}

 function createListElement(){
 	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		var delButton = document.createElement("button");
		delButton.appendChild(document.createTextNode("Delete"));
		li.appendChild(delButton);
		ul.appendChild(li);
		input.value="";
		delButton.onclick=removeParent;
		
 }

 function addListAfterClick(){
	if(inputLength()>0){
		createListElement();
	}	
}

function addListAFterKeypress(event){
	if(inputLength()>0 && event.keyCode===13){
		createListElement();
	}	
}

button.addEventListener("click",addListAfterClick)

input.addEventListener("keypress",addListAFterKeypress)

ul.onclick=function(event){
	var target = event.target;
	target.classList.toggle("done");
}
function deleteButton(){
	var deleteButton =document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	li[i].appendChild(deleteButton);
	deleteButton.onclick=removeParent;

}
for(var i=0;i<li.length;i++){
	deleteButton();
}
function removeParent(event){
	event.target.parentNode.remove();
}
