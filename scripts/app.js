 // Simple list JS
 Sortable.create(simpleList, {  });

 var debug;

 var doneTask = document.getElementById("simpleList");
 
 function addTask() {   
   var getTask = document.getElementById("inputTask").value;   
   
   if (getTask !== ''){
      var task = document.createElement("li");
   task.classList.add('list-group-item');
   task.innerHTML = getTask;
   document.getElementById("simpleList").appendChild(task);
   document.getElementById('inputTask').value = "";
   document.getElementById("addError").innerHTML = "";
   }
   else{
   document.getElementById("addError").innerHTML = "Please type something";
   }
 }

 // Hide and show DIVS
 function finishAddTask(){
    var addSection = document.getElementById("add-section");
    addSection.style.display = "none";

    var orderSection = document.getElementById("order-section");
    orderSection.style.display = "block";
 }
 
 function doTasks(){ 
if (document.getElementById("simpleList").firstElementChild != undefined){
    var focusTask = document.getElementById("simpleList").firstElementChild.innerHTML;
    document.getElementById("focusTask").innerHTML = focusTask;

    var orderSection = document.getElementById("order-section");
    orderSection.style.display = "none";

    var doSection = document.getElementById("do-section");
    doSection.style.display = "block";
}
else{
    document.getElementById("inspireText").innerHTML = "Nice! You finished everything for today!";
}   
 }
 
 function finishedTask(){
   if(document.getElementById("simpleList").childElementCount > 1){
   doneTask.removeChild(doneTask.firstElementChild);
   
   doTasks();
   doneInspireText();
   }
   else if(document.getElementById("simpleList").childElementCount === 1){
   document.getElementById("focusTask").innerHTML = ""; 
     document.getElementById("inspireText").innerHTML = "Nice! You finished everything for today!";
     doneTask.removeChild(doneTask.firstElementChild)

     // remove buttons and have a "back" button that goes go back the "add" screen
     var doneButton = document.getElementById("done-button");
     var skipButton = document.getElementById("skip-button");

     doneButton.style.display = "none";
     skipButton.style.display = "none";

     var addMoreButton = document.getElementById("add-more");
     addMoreButton.style.display = "inline-block";
   }
   else{
    console.log('Error');
    }
 }
 
 function skipTask(){
   var task = document.createElement("li");
   var duplicateTask = document.getElementById("simpleList").firstElementChild.innerHTML;
 
 // add to bottom
   task.classList.add('list-group-item');
   task.innerHTML = duplicateTask;
   document.getElementById("simpleList").appendChild(task);

 // remove top task
   var skippedTask = document.getElementById("simpleList");
   
  skippedTask.removeChild(skippedTask.firstElementChild);

  var focusTask = document.getElementById("simpleList").firstElementChild.innerHTML;
    document.getElementById("focusTask").innerHTML = focusTask;

   skipInspireText();
 }
 
 
 function addMore(){
    var doSection = document.getElementById("do-section");
    doSection.style.display = "none";

    var addSection = document.getElementById("add-section");
    addSection.style.display = "block";
 }
 
  function doneInspireText(){
    var DoNo = Math.floor(Math.random() * 5);
    console.log(DoNo);
    
    if (DoNo === 0){
        document.getElementById("inspireText").innerHTML = "Great! Now try this one!";
    }
    else if (DoNo === 1){
        document.getElementById("inspireText").innerHTML = "Keep it up! Now this one.";
    }
    else if (DoNo === 2){
        document.getElementById("inspireText").innerHTML = "You're on a roll";
    }
    else if (DoNo === 3){
        document.getElementById("inspireText").innerHTML = "Doing great so far!";
    }
    else if (DoNo === 4){
        document.getElementById("inspireText").innerHTML = "That was easy wasn't it?";
    }
    else{
        document.getElementById("inspireText").innerHTML = "Error";
    }
  }

  function skipInspireText(){
    var skipNo = Math.floor(Math.random() * 5);
    console.log(skipNo);
    
    if (skipNo === 0){
        document.getElementById("inspireText").innerHTML = "No worries! Try this one instead.";
    }
    else if (skipNo === 1){
        document.getElementById("inspireText").innerHTML = "We can come back to that one. Have a go at this one.";
    }
    else if (skipNo === 2){
        document.getElementById("inspireText").innerHTML = "What about this one?";
    }
    else if (skipNo === 3){
        document.getElementById("inspireText").innerHTML = "We've got the whole day ahead of us. This seems easy.";
    }
    else if (skipNo === 4){
        document.getElementById("inspireText").innerHTML = "This one isn't too difficult.";
    }
    else{
        document.getElementById("inspireText").innerHTML = "Error";
    }
  }