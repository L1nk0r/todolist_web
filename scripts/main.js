function add_task(){
   var task = document.getElementById("task_input").value;

   if (task != ""){
      var newTask = document.createElement("div");
      newTask.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)"  value="&#x2713;" /> ' + '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + task;

      document.getElementById("container").appendChild(newTask);
   }

   document.getElementById("task_input").placeholder = "Input task here...";
   document.getElementById("task_input").value = "";
}

function markDone (item) {
   item.className = 'finished';
}

function remove (item) {
   item.remove();
}

function about(){
   var count = document.getElementById("text_field").childElementCount;
   var text_field = document.getElementById("text_field");
   var info = document.createElement("p");
   info.innerHTML = '<p>Hi! It\'s Boris))';
   text_field.appendChild(info);
   document.getElementById("clear_button").disabled = false; 
}

function clear_about(){
   var div = document.getElementById("text_field");
   while (div.childElementCount != 0){
      div.removeChild(div.lastChild);
   }
   document.getElementById("clear_button").disabled = true;
}