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
        
        // create task which is the value of input
        const task = input.value;

        // create task input
        const task_el = document.createElement('div');

        // add the task input to the list
        task_el.classList.add('task');

        // create task input element
        const task_content_el = document.createElement('div');

        // add the task to the list
        task_content_el.classList.add('content');

        // append the task content to the task element
        task_el.appendChild(task_content_el);
    })
})