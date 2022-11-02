window.addEventListener('load', () => {
    // Once the page is loaded
    // Create the form element added to the page using the id for the form
    const form = document.querySelector("#new-task-form");
    // Create the input element that's entered
    const input = document.querySelector("#new-task-input");
    // Create the list or tasks element
    const list_el = document.querySelector("#tasks");


    form.addEventListener('submit', (e) => {
        // keeps page from refreshing
        e.preventDefault();

        console.log("Submitted")
        
        // create task which is the value of input
        const task = input.value;

        // Error handling
        if (!task) {
            alert("Please fill out the Task");
            return;
        }

        // create task input (DOM Node)
        const task_el = document.createElement('div');

        // add the task input to the list
        task_el.classList.add('task');

        // create task input element
        const task_content_el = document.createElement('div');

        // add the task to the list
        task_content_el.classList.add('content');

        // append the task content to the task element
        task_el.appendChild(task_content_el);

        // Create the task input element
        const task_input_el = document.createElement('input');  
        // set it's class
        task_input_el.classList.add('text');
        // set it's type
        task_input_el.type = 'text';
        // set it's value. Which is the input value 'task' variable
        task_input_el.value = task;
        // set it's attribute
        task_input_el.setAttribute('readonly', 'readonly');

        // append the input to the content
        task_content_el.appendChild(task_input_el);

        // create the task action element
        task_actions_el = document.createElement('div');
        // add task action to the list
        task_actions_el.classList.add('actions');


        // BUTTONS

        // create the task edit button
        const task_edit_el = document.createElement('button');
        // set it's class
        task_edit_el.classList.add('edit');
        // set the inner text
        task_edit_el.innerText = "Edit";

        // Create the task delete button
        const task_delete_el = document.createElement('button');
        // set it's class
        task_delete_el.classList.add('delete');
        // set the inner text 
        task_delete_el.innerText = "Delete";

        // Add the image
        // const image = document.createElement('img');
        // image.src = '/img/delete.png';
        // document.querySelector('.delete').appendChild(image);


        // APPENDS OF THE ACTIONS
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        // set's input to blank after button clicked
        input.value = '';

        // Event listener's for the Edit and Delete Buttons
        task_edit_el.addEventListener('click', (e) => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                // set innerText to save
                task_edit_el.innerText = "Save";
                // remove 'readonly' attribute
                task_input_el.removeAttribute("readonly");
                // set focus function 
                task_input_el.focus();
            } else {
                // set innerText to edit
                task_edit_el.innerText = "Edit";
                // set Attribute 
                task_edit_el.setAttribute("readonly", "readonly");
            }
        });

        // Set delete action
        task_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(task_el);
        })
    })
})