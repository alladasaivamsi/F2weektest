let adduserbtn = document.getElementById("addUserBtn");
let tableData = document.getElementById("tableData");
let deletebtn = document.getElementById("deleteBtn");
let tbody = document.querySelector("tbody");
let form = document.querySelector("form");

var enterName = document.getElementById('enterName');
var enterProfession = document.getElementById('enterProfession');
var enterAge = document.getElementById('enterAge');

function addUser(event){
    event.preventDefault();

    var enterName = document.getElementById("enterName").value;
    var enterProfession = document.getElementById("enterProfession").value;
    var enterAge = document.getElementById("enterAge").value;
    
    localStorage.setItem('Name', enterName);
    localStorage.setItem('Profession', enterProfession);
    localStorage.setItem('Age', enterAge);

    tbody.innerHTML +=
    `
     <tr class="tableRow" id="tableRow">     
          <td>Name: <span id="fname">${enterName}</span></td>
          <td>Profession: <span id="profession">${enterProfession}</span></td>
          <td>Age: <span id="age">${enterAge}</span></td>&nbsp&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <td><button id="deleteBtn">Delete User</button></td>
     </tr>
    `;
}

adduserbtn.onclick = function() {
    fname.textContent = localStorage.getItem('Name');
    profession.textContent = localStorage.getItem('Profession');
    age.textContent = localStorage.getItem('Age');

   if(fname.textcontent == "" || profession.textContent == "" || age.textContent == "") 
   {
        error.innerHTML = "<span style = 'color : red; font-size : 18px' >Error : Please Make sure All the fields are filled before adding in an employee !</span>"   
        tableData.style.visibility = 'hidden';
        deleteBtn.style.visibility = 'hidden';
   }

   else if(fname.textcontent != "" || profession.textContent != "" || age.textContent != "") 
   {
        error.innerHTML = "<span style = 'color : green; font-size : 18px' >Success : Employee Added!</span>" 
        userData.style.visibility = 'hidden';
        tableData.style.visibility = 'visible';
        deleteBtn.style.visibility = 'visible';
   }
}

function onDeleteRow() {
     var tableRow = document.getElementById("tableRow").value;
     var row = document.getElementById(id);

     if(row) {
          row.remove();
     }
}

form.addEventListener("submit" , onAddWebsite);
tableData.addEventListener("click" , onDeleteRow);