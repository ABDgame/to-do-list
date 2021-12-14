const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

input.addEventListener("keydown", function(event){
  if(event.key === "Enter")
     addItem();
})

function addItem(){
  var divParent = document.createElement("div");
  var divChild = document.createElement("div");
  var checkIcon = document.createElement("i");
  var trashIcon = document.createElement("i");
  
  divParent.className = "item";
  divParent.innerHTML = '<div>'+input.value+'</div>';
  
  ckeckIcon.className = "fas fa-check-square";
  ckeckIcon.style.color = "lightgray";
  ckeckIcon.addEventListener("click", function(){
    ckeckIcon.style.color = "limegreen";
  })
  
  divChild.appendChild(ckeckIcon);
  
  trashIcon.className = "fas fa-trash";
  trashIcon.style.color = "darkgray";
  trashIcon.addEventListener("click", function(){
    divParent.remove();
  })
  
  divChild.appendChild(trashIcon);
  
  divParent.appendChild(divChild);
  
  toDoItems.appendChild(divParent);
  
  input.value = '';
}
