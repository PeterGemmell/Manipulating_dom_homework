document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);
// })

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})


const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

const coolCarsItem = createCoolCarsItem(event.target);
const coolCars = document.querySelector('#cool-cars');
coolCars.appendChild(coolCarsItem);

event.target.reset();
}


const createCoolCarsItem = function (form) {
  const coolCarsItem = document.createElement('li');
  coolCarsItem.classList.add('cool-cars-item');

  const make = document.createElement('h2');
  make.textContent = form.make.value;
  coolCarsItem.appendChild(make);

  const model = document.createElement('h3');
  model.textContent = form.model.value;
  coolCarsItem.appendChild(model);

  const topSpeed = document.createElement('h3');
  topSpeed.textContent = form.topSpeed.value;
  coolCarsItem.appendChild(topSpeed);

  const value = document.createElement('h3');
  value.textContent = form.value.value;
  coolCarsItem.appendChild(value);

  const country = document.createElement('p');
  country.textContent = form.country.value;
  coolCarsItem.appendChild(country);

  // var form = document.querySelector("form");
  // var log = document.querySelector("#log");
  //
  // form.addEventListener("submit", function(event) {
  // var data = new FormData(form);
  // var output = "";
  // for (const entry of data) {
  //   output = output + entry[0] + "=" + entry[1] + "\r";
  // };
  // log.innerText = output;
  // event.preventDefault();
  // }, false);

  return coolCarsItem;
}

const handleDeleteAllClick = function (event) {
  const coolCars = document.querySelector('#cool-cars');
  coolCars.innerHTML = '';
}
