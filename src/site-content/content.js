// increment age every year
const ageElement = document.querySelector('.age');
const yearOfBirth = 1995;
const age = new Date().getFullYear() - yearOfBirth;

ageElement.innerText = age;