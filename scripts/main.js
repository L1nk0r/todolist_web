function add_task(){
   var task = document.getElementById("task_input").value;

   if (task != ""){
      var newTask = document.createElement("div");
      newTask.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)"  value="&#x2713;" /> ' + '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + task;

      document.getElementById("container").appendChild(newTask);
   }
}

function markDone (item) {
   item.className = 'finished';
}

function remove (item) {
   item.remove();
}