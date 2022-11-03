
// Load the Window
window.addEventListener('load', () => {
    // Once the page is loaded
    // Create the form element added to the page using the id for the form
        // OR the actual list or p element
    const form = document.querySelector("#new-task-form");
        // TRY CREATING A BASIC LI OR P ELEMENT INSTEAD
    // set a variable that retrieves the input element that's entered
    const input = document.querySelector("#new-task-input");
    // Create the list or tasks element
    const list_el = document.querySelector("#tasks");

    console.log(form);

    form.addEventListener('submit', (e) => {
        // keeps page from refreshing
        e.preventDefault();

        console.log("Submitted")

        // create task which is the value of input
        const task = input.value;

        // Error handling
        if (!task) {
            alert("Please enter your freelance job");
            return;
        }



        // TASK DIV

        // create task element (DOM Node)
        const task_el = document.createElement('div');

        // add the task element to the list
        task_el.classList.add('task');




        // TASK CONTENT DIV

        // create task content element
        const task_content_el = document.createElement('div');

        // add the task to the list
        task_content_el.classList.add('content');

        // task_content_el.innerText = task;

        // append the task content to the task element
        task_el.appendChild(task_content_el);

        // list_el.appendChild(task_el);




        // TASK INPUT DIV

        // Create the task input element
        const task_input_el = document.createElement('input');
        // set it's class
        task_input_el.classList.add('text');
        // set it's ID
        task_input_el.setAttribute("id", "task");
        // set it's type
        task_input_el.type = 'text';
        // get the value from input
        task_input_el.value = task;
        // set it's attribute
        task_input_el.setAttribute('readonly', 'readonly');

        // append the input to the content
        task_content_el.appendChild(task_input_el);

        // console.log(task_content_el); 
        // The whole div
        // console.log(task_input_el.value);
        // The content of the div


        // ACTIONS BUTTONS DIV

        // create the task action element
        task_actions_el = document.createElement('div');
        // add task action to the list
        task_actions_el.classList.add('actions');

        // ACTION BUTTONS

        // EDIT
        // create the task edit button
        const task_edit_el = document.createElement('button');
        // set it's class
        task_edit_el.classList.add('edit');
        // set the inner text
        task_edit_el.innerText = "Edit";

        // DELETE
        // Create the task delete button
        const task_delete_el = document.createElement('button');
        // set it's class
        task_delete_el.classList.add('delete');
        // set the inner text
        task_delete_el.innerText = "Delete";

        // CROSS
        // create the cross button
        const task_cross_el = document.createElement('button');
        // set it's class
        task_cross_el.classList.add('cross');
        // set the inner text
        task_cross_el.innerText = "Cross";



        // APPENDS OF THE ACTIONS

        // edit to actions
        task_actions_el.appendChild(task_edit_el);
        // delete to actions
        task_actions_el.appendChild(task_delete_el);
        // cross to actions
        task_actions_el.appendChild(task_cross_el);

        // actions to task 
        task_el.appendChild(task_actions_el);

        // task to list
        list_el.appendChild(task_el);

        // set's input to blank after button clicked
        input.value = '';

        // Event listener's for the Edit and Delete Buttons
        task_edit_el.addEventListener('click', (e) => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                // set innerText to save (turns into save)
                task_edit_el.innerText = "Save";
                // remove 'readonly' attribute
                task_input_el.removeAttribute("readonly");
                // set focus function (makes the element active)
                task_input_el.focus();
                // in here lookup how to edit in firebase
            } else {
                // set innerText to edit
                task_edit_el.innerText = "Edit";
                // set Attribute back to readonly
                task_edit_el.setAttribute("readonly", "readonly");
            }
        });

        // Set delete action
        task_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(task_el);
            // for firebase you just do a remove() from firebase
        })

        // set the cross action
        // needs to change the class of the input to that of cross
        // start with the button
        task_cross_el.addEventListener('click', (e) => {
            // let cross = task_cross_el.innerText;
            // console.log(cross);
            if (task_cross_el.innerText === "CROSS"){
                // if the buttons texts says 'Cross'
                // test print the input
                console.log(task_input_el);
                task_input_el.classList.add("crossed");
                // set the input's class to crossed
                task_cross_el.innerText = "UNCROSS";
                // set the button innertext
                // task_edit_el.remove('button')
                // hide the button element
                task_edit_el.style.display = 'none';
                // remove the edit button
            } else if (task_cross_el.innerText === "UNCROSS") {
                // remove the cross css
                task_input_el.classList.remove("crossed");
                // change the text of the button
                task_cross_el.innerText = "CROSS";
                // bring the button back
                task_edit_el.style.display = 'block';
            }
           
        })
        // NEXT toggle back the uncross and add back the edit button
    })
    
})

// config firebase
const firebaseConfig = {
    apiKey: "AIzaSyATc5lxId7q3aWvm2bTy2oVjX3JzqJJszE",
    authDomain: "workflowapp-c191d.firebaseapp.com",
    databaseURL: "https://workflowapp-c191d-default-rtdb.firebaseio.com",
    projectId: "workflowapp-c191d",
    storageBucket: "workflowapp-c191d.appspot.com",
    messagingSenderId: "205004352373",
    appId: "1:205004352373:web:89d233c2cdc4e4ccbf413c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// create the reference point of your database
var freelanceFormDB = firebase.database().ref("freelance")


// TO DATABASE (WHEN YOU GET HERE JUST USE THE OTHER ONE)

// Event Listener to submit button
document.getElementById("new-task-form").addEventListener("submit", submitForm);

// create the submit form function called above
function submitForm(e) {
    // keeps page from refreshing
    e.preventDefault();

    // get the value of the task entered
    var task = getElementVal("new-task-input");

    // test print in console the value added
    // console.log(task);

    // save to database
    saveMessages(task);
}

// NOW save the messages to the database
const saveMessages = (task) => {
    var newFreelance = freelanceFormDB.push();

    newFreelance.set({
        task: task,
    });
};

// getElement Value
const getElementVal = (id) => {
    console.log(id + "The ID");
    return document.getElementById(id).value;
}

// NOW YOU NEED TO DISPLAY THE DB TO THE PAGE
// Map thru items added
// GETS items added 
// iterates through items added 
// Displays items added

// create the reference point
// var freelanceFormDB = firebase.database().ref("freelance");

// test print the db object
// console.log(freelanceFormDB);

// reference for retrieval
// define database
database = firebase.database();
var ref = database.ref('freelance');
console.log(ref);
ref.on('value', getData, getErr)

// utilize the on function (adopts to changes)
// freelanceFormDB.on('value', getData, getErr);

// getData function 
function getData(data) {
    console.log(data.val());
    // set variable to get the value of each task (or node)
    var tasks = data.val();
    // set variable to get the keys of each task
    var keys = Object.keys(tasks);
    // test print the keys
    console.log(keys);
    // iterate through all of the tasks
    for(let i in tasks){
        var freelances = tasks[i];
        console.log(freelances);
        // create a new element
        // This is where you have to mesh with previous code
            // test with below first
        document.querySelector("#tasks").innerHTML += `
            <div>${freelances.task}</div>
        `
    }
}      
    
  
// getErr function
function getErr(err){
    console.log(err);
}

// utilize the on function
// freelanceFormDB.on("value", function(snapshot) {
//     // set a variable for the snapshot value
//     var data = snapshot.val();
//     console.log(data);
//     // loop through the snapshot value
//     for(let i in data){
//         console.log(data[i]);
//     }
// });



// The actual way to translate this it works now try it on the same page

// Reference the Database
//   var ref = database.ref('tasks');
//   console.log(ref);
//   ref.on('value', gotData, errData);

//   function gotData(data) {

//     // to remove the tasks
//     // var taskslist = selectAll('#taskslist');
//     // for (var i = 0; i < taskslist.length; i++) {
//     //     taskslist[i].remove();
//     // }


//     console.log(data.val());
//     // set variable to get the value of each task
//     var tasks = data.val();
//     // set variable to get the keys of each task
//     var keys = Object.keys(tasks);
//     // test print the keys
//     // console.log(keys);
//     // iterate through everything
//     for(let i in tasks){
//         console.log(tasks[i]);
//         document.querySelector('#taskslist').innerHTML +=`
//         <div>${tasks[i]}</div>
//       `
//     }
// }