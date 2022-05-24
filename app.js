let image=document.getElementsByClassName('avatar');
let email=document.getElementsByClassName('email');
let address=document.getElementsByClassName('address');
let modalclose=document.getElementsByClassName('modalclose');
let overlay=document.getElementsByClassName('overlay');
let randomuser=`https://randomuser.me/api/?results=12&inc=name, picture,
email, location, phone, dob &noinfo &nat=US`;
let employees= [];
let gridcont= document.getElementById('grid-container');

function fetchData(url) {
  return fetch(url)
  .then(res=>res.json())
  .then(res=>console.log(res.results))
  .then(data=>displayEmployees(data));
}

function displayEmployees(employeeData) {
employees = employeeData;
// store the employee HTML as we create it
let employeeHTML = '';
// loop through each employee and create HTML markup
employees.forEach((employee, index) => {
let name = employee.name;
let email = employee.email;
let city = employee.location.city;
let picture = employee.picture;
// template literals make this so much cleaner!
employeeHTML += `
<div class="card" data-index="${index}">
<img class="avatar" src="${picture.large}" />
<div class="textinfo">
<h2 class="name">${name.first} ${name.last}</h2>
<p class="email">${email}</p>
<p class="address">${city}</p>
</div>
</div>
`
});
gridContainer.innerHTML = employeeHTML;
}

fetchData(randomuser);
