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

  const addScreen = document.getElementById("add-section");
  const orderScreen = document.getElementById("order-section");
  const doScreen = document.getElementById("do-section");



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
  changeScreen('debug');

  console.log('Debug On');
  }

  // Turn off debug
  else if(debugMode.innerHTML === 'Debug: On'){
  // change text to say "off"
  debugMode.innerHTML = 'Debug: Off';

  //hide all hidden divs
  changeScreen('add');

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
      changeScreen('order');
    }
    else{
      document.getElementById("addUpdate").innerHTML = "Please add something";
    }
 }
 
 function doTasks(){ 
if (document.getElementById("simpleList").children.length >= 1){
    var focusTask = document.getElementById("simpleList").firstElementChild.innerHTML;
    document.getElementById("focusTask").innerHTML = focusTask;

    changeScreen('do');

    var calcProg = finishedTasks.length / (todayTasks.length + finishedTasks.length - skippedTasks.length);
    var progBar = document.getElementById("progress-bar");

    progBar.style = `width: ${calcProg * 100}%;`; 
    progBar.innerHTML = `${todayTasks.length - skippedTasks.length} to go`;

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

   }

   else if(document.getElementById("simpleList").children.length === 1){
    var calcProg = finishedTasks.length / (todayTasks.length + finishedTasks.length - skippedTasks.length);
    progBar.style = `width: ${calcProg * 100}%;`; 
      // Add to finishedTasks array and remove from todayTasks
      doTasks();
    finishedTasks.push(document.getElementById("focusTask").innerHTML);
    doneTask.removeChild(doneTask.firstElementChild);
    todayTasks.shift();

    console.log(`Finished tasks: ${finishedTasks}`); 

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

 }

 function ribbet(){
  
  ribbetText.innerHTML = "Ribbet! Time to get stuff done!";
  setTimeout(function(){
    ribbetText.innerHTML = "";
 }, 3000);
 }
 
 
 function addDiv(){
     changeScreen('add');

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
  changeScreen('order');
}

 function doDiv(){
  changeScreen('do');
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

function changeScreen(div){
  if (div === 'add'){
    addScreen.style.display = "block";
    orderScreen.style.display = "none";
    doScreen.style.display = "none";
  }

  else if (div === 'order'){
    addScreen.style.display = "none";
    orderScreen.style.display = "block";
    doScreen.style.display = "none";
  }

  else if (div === 'do'){
    addScreen.style.display = "none";
    orderScreen.style.display = "none";
    doScreen.style.display = "block";
  }
  else if (div === 'debug'){
    addScreen.style.display = "block";
    orderScreen.style.display = "block";
    doScreen.style.display = "block";
  }
  }
