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
   var task = document.createElement("li");
   var duplicateTask = document.getElementById("simpleList").firstElementChild.innerHTML;
 
 // add to bottom
   task.classList.add('list-group-item');
   task.innerHTML = duplicateTask;
   document.getElementById("simpleList").appendChild(task);

 // remove top task
   var skippedTask = document.getElementById("simpleList");
   //document.getElementById("simpleList").childNodes[0];
   
  skippedTask.removeChild(skippedTask.firstElementChild);

  var focusTask = document.getElementById("simpleList").firstElementChild.innerHTML;
    document.getElementById("focusTask").innerHTML = focusTask;

   skipInspireText();

 }
 
 
 function finishedToday(){
   
 }
 
 
  function changeInspireText(){
    // randomise?
    // have two sets of texts for "doing" and "skipping"
    
  document.getElementById("inspireText").innerHTML = "Great! Now try this one!";
    
 // Skipping   //document.getElementById("inspireText").innerHTML = "No worries! Try this one instead.";
  }

  function skipInspireText(){
    const skipText1 = "No worries! Try this one instead.";
    const skipText2 = "We can come back to that one. Have a go at this one.";
    const skipText3 = "What about this one?";
    const skipText4 = "We've got the whole day ahead of us. This seems easy.";
    const skipText5 = "This one isn't too difficult.";

    var nextSkippedTest = document.getElementById("inspireText").innerHTML = skipText1;
    
    if (nextSkippedTest === skipText1){
        document.getElementById("inspireText").innerHTML = skipText2;
    }
    else if (nextSkippedTest === skipText2){
        document.getElementById("inspireText").innerHTML = skipText3;
    }
    else if (nextSkippedTest === skipText3){
        document.getElementById("inspireText").innerHTML = skipText4;
    }
    else if (nextSkippedTest === skipText4){
        document.getElementById("inspireText").innerHTML = skipText1;
    }
    else{
        console.log('Error');
    }
    
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