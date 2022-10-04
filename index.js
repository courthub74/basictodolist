// Create a "close" button and append it to each list item
var nodeList = document.getElementsByClassName("listitem");
// create node list
// console.log(nodeList);
var i;
for (i = 0; i < nodeList.length; i++) {
    // iterate through nodelist
    var listitem = document.createElement("span");
    // create a <li> element
    var txt = document.createTextNode("\u00D7");
    // creates the little x 
    // console.log(listitem);
    // console.log(txt);
    listitem.className = "close";
    // setting the class name of the created span to 'close'
    // console.log(listitem);
    // console.log(txt);
    nodeList[i].appendChild(listitem);
    // for every iteration of myNodelist, append the span
        // so add to the list
    // console.log(nodeList);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
// get the close element
var i;
for (i = 0; i < close.length; i++) {
    // now for the length of 'close'
    close[i].onclick = function() {
        // for every iteration through close clicked perform below
        var div = this.parentElement;
        // create or make this the parent element
        div.style.display = "none";
        // no style on that parent element
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
// queries the whole list by the list id
list.addEventListener('click', function(ev) {
    // add eventlistener to the above query select
    if (ev.target.tagName === 'li') {
        // if event target's tagname is 'li'
        ev.target.classList.toggle('checked');
        // turn off the class name 'checked'
    }
}, false);
// return false

console.log("Look at this");


// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    // create a new <li> element 
    var inputValue = document.getElementById("myinput").value;
    // get the input from the input field
    var t = document.createTextNode(inputValue);
    // create a text node with the input value
    li.appendChild(t);
    // appending the text node to the list element
    console.log(li);
    if (inputValue === '') {
        alert("Must enter a task here");
    } else {
        document.getElementById("todoUL").appendChild(li);
        // append the <li> item to the todo list
    }
    document.getElementById("input").value = "";
    // put the value entered inside the input

    var span = document.createElement("span");
    // create a new span
    var txt = document.createTextNode("\u00D7");
    // create the x next to it
    span.className = "close";
    // change the class name of the new span to close
    span.appendChild(txt);
    // append the x to the span
    li.appendChild(span);
    // append the new span to the list
    console.log("Add Button pressed");

    for (i = 0; i < close.length; i++) {
        // iterate through the close spans
        close[i].onclick = function() {
            // set onclick to those iterations
            var div = this.parentElement;
            // make this parent element
            div.style.display = "none";
            // no display on this parent element
        }
    }
}