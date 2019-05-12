 // Simple list JS
 Sortable.create(simpleList, {  });

 var doneTask = document.getElementById("simpleList");

 var todayTasks = [];
 var tomorrowTasks = [];
 var finishedTasks = [];
 var skippedTasks = [];
 var simpleListArr = document.getElementById("simpleList");

 var addMoreButton = document.getElementById("add-more");
 var mainButtons = document.getElementById("main-buttons");
 var ribbetText = document.getElementById("ribbet");


 /*////////////////////// storage /////////////// /*
var addButton = document.getElementById("add-button");
var getSavedTasks = localStorage.getItem("tasks");
var task = document.createElement("li");
var addingTask = task.classList.add('list-group-item');


addButton.addEventListener('click', function() {

 //localStorage.setItem("tasks", JSON.stringify(simpleListArr.appendChild(task)));
 
 localStorage.setItem('tasks', simpleListArr.appendChild(addingTask));

});

// if localstorage not empty, show "do" div and retrieve everything
if (getSavedTasks !== null) {
  doDiv();

 // document.getElementById("simpleList").innerHTML = parseSavedTasks;

  var getTask2 = getSavedTasks; 
  
  //var task = document.createElement("li");
  //task.classList.add('list-group-item');
 // addingTask.innerHTML = getTask2;
  //document.getElementById("simpleList").appendChild(addingTask);

  doTasks();
}


/*///////////////////////////////////////////////////////


 window.onload = function() {
  document.getElementById("inputTask").focus();
};

 function debug(){
  var debugMode = document.getElementById("debug-button"); 

  // Turn on debug
  if(debugMode.innerHTML === 'Debug: Off'){
  // change text to say "on"
  debugMode.innerHTML = 'Debug: On';

  // show all hidden divs
  var addSection = document.getElementById("add-section");
  addSection.style.display = "block";

  var orderSection = document.getElementById("order-section");
  orderSection.style.display = "block";

  var doSection = document.getElementById("do-section");
  doSection.style.display = "block";

  console.log('Debug On');
  }

  // Turn off debug
  else if(debugMode.innerHTML === 'Debug: On'){
  // change text to say "off"
  debugMode.innerHTML = 'Debug: Off';

  //hide all hidden divs
  var addSection = document.getElementById("add-section");
  addSection.style.display = "block";

  var orderSection = document.getElementById("order-section");
  orderSection.style.display = "none";

  var doSection = document.getElementById("do-section");
  doSection.style.display = "none";

  console.log('Debug Off');
  }
 }
 
 function addTask() {   
  var getTask = document.getElementById("inputTask").value; 
        
   if (getTask !== ''){
      var task = document.createElement("li");
   task.classList.add('list-group-item');
   task.innerHTML = getTask;
   document.getElementById("simpleList").appendChild(task);
   document.getElementById('inputTask').value = "";
   document.getElementById("addUpdate").innerHTML = "";

   // "added" visual feedback and remove after 2 seconds
   var confirmText = document.getElementById("addUpdate").innerHTML = `"${getTask}" has been added!`;
   setTimeout(function(){
   confirmText = document.getElementById("addUpdate").innerHTML = "";
  }, 2000);


   // add to todayTasks array
   todayTasks.push(getTask);
   console.log(`Today's tasks: ${todayTasks}`);
   }
   else{
   document.getElementById("addUpdate").innerHTML = "Please type something";
   }
 }

 function addAndReset(){
  todayTasks = [];
  finishedTasks = [];
  skippedTasks = [];
  addDiv();

  //hide results
  var results = document.getElementById("results")
    results.style.display = "none";
 }


 // Hide and show DIVS
 function finishAddTask(){
    if(document.getElementById("simpleList").childElementCount >= 1){
      var addSection = document.getElementById("add-section");
      addSection.style.display = "none";
  
      var orderSection = document.getElementById("order-section");
      orderSection.style.display = "block";
    }
    else{
      document.getElementById("addUpdate").innerHTML = "Please add something";
    }
 }
 
 function doTasks(){ 
if (document.getElementById("simpleList").children.length >= 1){
    var focusTask = document.getElementById("simpleList").firstElementChild.innerHTML;
    document.getElementById("focusTask").innerHTML = focusTask;

    var orderSection = document.getElementById("order-section");
    orderSection.style.display = "none";

    var doSection = document.getElementById("do-section");
    doSection.style.display = "block";

    var calcProg = finishedTasks.length / (todayTasks.length + finishedTasks.length - skippedTasks.length);
    var progBar = document.getElementById("progress-bar");

    progBar.style = `width: ${calcProg * 100}%;`; 
    progBar.innerHTML = `${todayTasks.length - skippedTasks.length} to go`;

    //put inspire text back to normal 
    //document.getElementById("inspireText").innerHTML = "";
}
else{
    document.getElementById("inspireText").innerHTML = "Nice! You finished everything for today!";
}   
 }
 
 function finishedTask(){
  var progBar = document.getElementById("progress-bar");
  var calcProg = finishedTasks.length / (todayTasks.length + finishedTasks.length - skippedTasks.length);
  //var roundedCalcProg = Math.trunc(calcProg * 100);

   if(document.getElementById("simpleList").children.length > 1){
    progBar.innerHTML = `${todayTasks.length - skippedTasks.length} to go`; 
    // Add to finishedTasks array and remove from todayTasks
   finishedTasks.push(document.getElementById("focusTask").innerHTML);
 
   // remove from array
  // var index = finishedTasks.indexOf(document.getElementById("focusTask").innerHTML);
   // if (index > -1) {
   // todayTasks.splice(index, 1);
   // }

   doneTask.removeChild(doneTask.firstElementChild);
  // doneTask.removeChild(doneTask.childNodes[0]);
   todayTasks.shift();
   doTasks();
   
  // doTasks();
   doneInspireText();
   console.log(`Finished tasks: ${finishedTasks}`);
   // update progress bar
   var calcProg = finishedTasks.length / (todayTasks.length + finishedTasks.length - skippedTasks.length);
    progBar.style = `width: ${calcProg * 100}%`; 
    progBar.innerHTML = `${todayTasks.length - skippedTasks.length} to go`; 
   
   /*if(document.getElementById("simpleList").childElementCount === 1){
    document.getElementById("inspireText").innerHTML = "Last one!";
    progBar.innerHTML = `${todayTasks.length - 1} to go!`; 

    //??????????????
    finishedTasks.push(document.getElementById("focusTask").innerHTML);
   //todayTasks.shift();
   }*/

   }

   else if(document.getElementById("simpleList").children.length === 1){
    var calcProg = finishedTasks.length / (todayTasks.length + finishedTasks.length - skippedTasks.length);
    progBar.style = `width: ${calcProg * 100}%;`; 
      // Add to finishedTasks array and remove from todayTasks
      doTasks();
    finishedTasks.push(document.getElementById("focusTask").innerHTML);
    doneTask.removeChild(doneTask.firstElementChild);
    todayTasks.shift();
   // doneTask.removeChild(doneTask.firstElementChild);
  // doneTask.removeChild(doneTask.childNodes[0]);
   //todayTasks.shift();

    console.log(`Finished tasks: ${finishedTasks}`);
    // remove from array
  // var index = finishedTasks.indexOf(document.getElementById("focusTask").innerHTML);
  // if (index > -1) {
  //todayTasks.splice(index, 1);
  // }

   

    document.getElementById("focusTask").innerHTML = ""; 
     document.getElementById("inspireText").innerHTML = "Nice! You finished everything for today!";

     // remove buttons and have a "back" button that goes go back the "add" screen
     addMoreButton.style.display = "inline-block";
     mainButtons.style.display = "none";
     var calcProg = finishedTasks.length / (todayTasks.length + finishedTasks.length - skippedTasks.length);
    progBar.style = `width: 100%;`; 
    progBar.innerHTML = `Everything complete!`;  

    // show results
    var results = document.getElementById("results")
    results.style.display = "block";
    var completedResults = document.getElementById("completed-tasks");
    var skippedResults = document.getElementById("skipped-tasks");

    completedResults.innerHTML = `Completed: ${finishedTasks.length}`;

    skippedResults.innerHTML = `Skipped: ${skippedTasks.length}`;
    
    

   }
   else{
    console.log('Error');
    }
 }
 
 function skipTask(){
  var lastTask = document.getElementById("simpleList").children.length;
if (lastTask === 1){

  skippedTasks.push(focusTask.innerHTML);
  doneTask.removeChild(doneTask.firstElementChild);

  document.getElementById("focusTask").innerHTML = ""; 
  document.getElementById("inspireText").innerHTML = "Nice! You finished everything for today!";

  // remove buttons and have a "back" button that goes go back the "add" screen
  addMoreButton.style.display = "inline-block";
  mainButtons.style.display = "none";
  //var calcProg = finishedTasks.length / (todayTasks.length + finishedTasks.length - skippedTasks.length);
  var progBar = document.getElementById("progress-bar");
 progBar.style = `width: 100%;`; 
 progBar.innerHTML = `Everything complete!`;  

    // show results
    var results = document.getElementById("results")
    results.style.display = "block";
    var completedResults = document.getElementById("completed-tasks");
    var skippedResults = document.getElementById("skipped-tasks");

    completedResults.innerHTML = `Completed: ${finishedTasks.length}`;
    skippedResults.innerHTML = `Skipped: ${skippedTasks.length}`;

}

else{
// if press "skip", move to new array called "Skipped"

skippedTasks.push(focusTask.innerHTML);

//then remove from today's tasks
doneTask.removeChild(doneTask.firstElementChild);

//then remove from list and do next thing
doTasks();
}

  /* // if press "skip", move to new array called "Skipped"
  if (document.getElementById("simpleList").children.length === 1){

  }

  else{
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
  }*/

 }

 function ribbet(){
  
  ribbetText.innerHTML = "Ribbet! Time to get stuff done!";
  setTimeout(function(){
    $('#ribbet').remove();
 }, 5000);
 }
 
 
 function addDiv(){
    var addSection = document.getElementById("add-section");
    addSection.style.display = "block";

    var orderSection = document.getElementById("order-section");
    orderSection.style.display = "none";

    var doSection = document.getElementById("do-section");
    doSection.style.display = "none";

    document.getElementById("addUpdate").innerHTML = "";

    // bring back "Do Div" buttons and remove "add more"
    addMoreButton.style.display = "none";
    mainButtons.style.display = "inline-block";

    // Have "Do" text back to standard
    document.getElementById("inspireText").innerHTML = "Let's go.";

    // focus on text box
    document.getElementById("inputTask").focus();

    // reset progbar
    var progBar = document.getElementById("progress-bar");

    progBar.style = `width: 0%;`; 
    progBar.innerHTML = `Add tasks to get started`;

 }

 function orderDiv(){
  var addSection = document.getElementById("add-section");
  addSection.style.display = "none";

  var orderSection = document.getElementById("order-section");
  orderSection.style.display = "block";

  var doSection = document.getElementById("do-section");
  doSection.style.display = "none";
}

 function doDiv(){
  var addSection = document.getElementById("add-section");
  addSection.style.display = "none";

  var orderSection = document.getElementById("order-section");
  orderSection.style.display = "none";

  var doSection = document.getElementById("do-section");
  doSection.style.display = "block";
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





  // Enter key
  document.getElementById("inputTask")
  .addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
      document.getElementById("add-button").click();
  }
});

