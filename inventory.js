// Pace class: Represents a Pace
class Pace{
    constructor(title, pcode, subject){
        this.title = title;
        this.pcode = pcode;
        this.subject = subject;
    }
}

//UI class: Handle UI tasks
class UI{
    static displayPaces(){
        const StoredPaces = [
            {
                title: "Pace One",
                pcode: "1020",
                subject: "Literacy"

            },
            {
                title: "Pace Two",
                pcode: "1021",
                subject: "Maths"
            },
        ];
        const paces = StoredPaces;
        paces.forEach((pace) => UI.addPaceToList(pace));
    }
    static addPaceToList(pace) {
        const list = document.querySelector("#pace-list");

        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${pace.title}</td>
        <td>${pace.pcode}</td>
        <td>${pace.subject}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);
    }

    static deletePace(el){
        if(el.classList.contains("delete")){
            el.parentElement.parentElement.remove();
        }
    }
    // <div class="alert alert-success">Entry Submitted</div>
static showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector("#pace-form");
    container.insertBefore(div, form);
// vanish in 2 secs
setTimeout(() => document.querySelector(".alert").remove(), 2000);
}

static clearFields(){
    document.querySelector("#title").value = "";
    document.querySelector("#pcode").value = "";
    document.querySelector("#subject").value = "";
}
}

//Store class: Handles Storage

//Event class: Display a Pace
document.addEventListener("DOMContentLoaded", UI.displayPaces);

//Event class: Add a Pace
document.querySelector("#pace-form").addEventListener("submit", (e) =>
 {
 // Prevent actual submit
 e.preventDefault();    
// Get values
const title = document.querySelector("#title").value;
const pcode = document.querySelector("#pcode").value;
const subject = document.querySelector("#subject").value;

// Validate
if(title === "" || pcode === "" || subject === "")
{
    UI.showAlert("please enter all fields", "danger");
}
else{
    

// instantiate pace

const pace = new Pace(title, pcode, subject);
// console.log(pace);

// Add pace to UI
UI.addPaceToList(pace); 
// Clear fields

UI.clearFields();
}
}
);
//Event class: Remove a Pace

document.querySelector("#pace-list").addEventListener("click", (e) => {
UI.deletePace(e.target);
}
);