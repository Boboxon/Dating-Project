const imgDisplay = document.getElementById("imgDisplay");
const infoDisplay = document.getElementById("infoDisplay");
const nextBtn = document.getElementById("next");
const nextMale = document.getElementById("nextMale");

nextMale.addEventListener("click", getMaleInfo);

nextBtn.addEventListener("click", randomUsers);

const baseFemaleURL = "https://randomuser.me/api/?gender=female";
const baseMaleURL = "https://randomuser.me/api/?gender=male";

// alert("Before searching, You should select Male or Female button!!!");

function randomUsers() {
  removeMaleButton();
  fetch(`${baseFemaleURL}`)
    .then((response) => response.json())
    .then(function (data) {
      // console.log(data);
      let userData = data.results[0];

      let imgoutput = `<img class="imgChange" src="${userData.picture.medium}" class="rounded" alt="...">`;
      let output = `<ul class="list-group">
      <li class="list-group-item "><strong class="text-left">Full Name:</strong>${userData.name.first} ${userData.name.last}</li>
      <li class="list-group-item "><strong class="text-left">Location:</strong> ${userData.location.city} ${userData.location.state}</li>
      <li class="list-group-item "><strong class="text-left">Email:</strong>${userData.email}</li>
      <li class="list-group-item "><strong class="text-left">Age:</strong>${userData.dob.age}</li>
      <li class="list-group-item "><strong class="text-left">Phone Number:</strong>${userData.phone}</li>
    </ul>`;
      imgDisplay.innerHTML = imgoutput;
      infoDisplay.innerHTML = output;
    });
}

//getMale info

function getMaleInfo() {
  removeFemaleButton();
  //male
  fetch(`${baseMaleURL}`)
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      let userData = data.results[0]; //  getti=ng the value
      let imgoutput = `<img class="imgChange" src="${userData.picture.medium}" class="rounded" alt="...">`;
      let output = `<ul class="list-group">
   
   <li class="list-group-item "><strong class="text-left">Full Name:</strong>${userData.name.first} ${userData.name.last}</li>
   <li class="list-group-item "><strong class="text-left">Location:</strong> ${userData.location.city} ${userData.location.state}</li>
   <li class="list-group-item "><strong class="text-left">Email:</strong>${userData.email}</li>
   <li class="list-group-item "><strong class="text-left">Age:</strong>${userData.dob.age}</li>
   <li class="list-group-item "><strong class="text-left">Phone Number:</strong>${userData.phone}</li>
 </ul>`;

      imgDisplay.innerHTML = imgoutput;
      infoDisplay.innerHTML = output;
    });
}

//diappear female button

function removeFemaleButton() {
  if (nextBtn != "clicked") {
    nextBtn.style.visibility = "hidden";
  } else {
    nextMale.style.visibility = "visible";
  }
  document.getElementById("textInfo").innerHTML = "";
}

//disappear Male Button

function removeMaleButton() {
  if (nextMale != "clicked") {
    nextMale.style.visibility = "hidden";
  } else {
    nextBtn.style.visibility = "visible";
  }
  document.getElementById("textInfo").innerHTML = "";
}
