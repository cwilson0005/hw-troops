document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded', window);

  const form = document.querySelector('#new-item-form');
  console.dir(form);
  form.addEventListener('submit', handleSubmit);

  const button = document.querySelector('#button');
  button.addEventListener('click', handleButtonClick);
});

const handleSubmit = function () {
  event.preventDefault();
  // list.appendChild('#reading-list');

  const newItem = document.createElement('li');
  console.log(this.readiness);
  newItem.textContent = `Name: ${this.title.value} | Age: ${this.age.value} | Role: ${this.role.value} | Gender: ${this.gender.value} | Readiness: ${this.readiness.name} | Upkeep :£${this.upkeep.value}`;
  newItem.classList.add('item');

  const item = document.querySelector('#army-list');

  item.appendChild(newItem);
  // newItem.textContent = `Title: ${this.title.value} | Author: ${this.author.value} | Category: ${this.category.value}`;
  // newItem.classList.add('display');
};

const handleButtonClick = function () {
  const buttonText = document.querySelector('#army-list');
  buttonText.textContent = "The army is disbanded";
};
