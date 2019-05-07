// https://ourcodeworld.com/articles/read/664/top-5-best-sortable-and-draggable-list-javascript-and-jquery-plugins

// https://github.com/SortableJS/Sortable

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_createtextnode2

// clean up code using shorter

 // Simple list
 Sortable.create(simpleList, {  });

 var doneTask = document.getElementById("simpleList");
 var task = document.createElement("li");
 
 
 
 function addTask() {
   
     var getTask = document.getElementById("inputTask").value;
   
   var taskWithoutSpace = getTask.replace(/\s+/g, '');
   
   if (getTask !== ''){
      var task = document.createElement("li");
   task.classList.add('list-group-item', taskWithoutSpace);
   task.innerHTML = getTask;
   document.getElementById("simpleList").appendChild(task);
   document.getElementById('inputTask').value = "";
   document.getElementById("addError").innerHTML = "";
   }
   else{
   document.getElementById("addError").innerHTML = "Please type something";
   }
 }
 
 function doTasks(){
   // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_firstchild
   // it should be, if there is only one child left and you click "done", it should finish
   
if (document.getElementById("simpleList").firstElementChild != undefined){
    var focusTask = document.getElementById("simpleList").firstElementChild.innerHTML;
    document.getElementById("focusTask").innerHTML = focusTask;
}
else{
    document.getElementById("inspireText").innerHTML = "Nice! You finished everything for today!";
}   
 }
 
 function finishedTask(){
   // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_removechild
   if(document.getElementById("simpleList").childElementCount > 1){
   doneTask.removeChild(doneTask.firstElementChild);
   
   doTasks();
   changeInspireText();
   }
   else if(document.getElementById("simpleList").childElementCount <= 1){
   document.getElementById("focusTask").innerHTML = ""; 
     document.getElementById("inspireText").innerHTML = "Nice! You finished everything for today!";
     doneTask.removeChild(doneTask.firstElementChild)
   }
 }
 
 
 
 function skipTask(){
 // bugs: removes more than necessary
 // get top task
    // if list is empty, show text
 
   // instead of using first child, copy the text
   //or use next sibling
   var duplicateTask = document.getElementById("simpleList").firstElementChild.innerHTML;
 
 // add to bottom
   task.classList.add('list-group-item');
   task.innerHTML = duplicateTask;
   document.getElementById("simpleList").appendChild(task);
   
 // remove top task
   var skippedTask = document.getElementById("simpleList");
   //document.getElementById("simpleList").childNodes[0];
   
  skippedTask.removeChild(skippedTask.firstElementChild);
   //skippedTask.removeChild(skippedTask.childNodes[0]);
   
   //copy new first child
   //var newfocusTask = document.getElementById("simpleList").firstElementChild.innerHTML;
  document.getElementById("focusTask").innerHTML = document.getElementById("simpleList").firstElementChild.innerHTML;
   
  // doTasks();
   changeInspireText();
   
 }
 
 
 function finishedToday(){
   
 }
 
 
  function changeInspireText(){
    // randomise?
    // have two sets of texts for "doing" and "skipping"
    
  document.getElementById("inspireText").innerHTML = "Great! Now try this one!";
    
 // Skipping   //document.getElementById("inspireText").innerHTML = "No worries! Try this one instead.";
  }
 
 /*
 
 let todayTasks = ["do laundry", "do homework"];
 let tomorrowTasks = [];
 
 // add task 
 //todayTasks.push('test');
 
 // remove task from "today"
 const finishedTasks = () => { 
    
   var index = todayTasks.indexOf("do laundry"); 
   if (index > -1) {todayTasks.splice(index, -1);
    }
    
 };
 
 // move tasks from "today" to "tomorrow"
 const unfinishedTasks = (todayTasks) => {
  
   // move to tomorrow
   tomorrowTasks.push(todayTasks); 
   
   // then remove from "today"
   
  
 };
 
 finishedTasks();
 // unfinishedTasks(todayTasks);
 
 console.log("Today: " + todayTasks);
 console.log("Tomorrow: " + tomorrowTasks);
 */