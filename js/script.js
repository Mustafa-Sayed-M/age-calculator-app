// ## Get Elements:
// # Inputs:
const inputDay = document.querySelector('input#day');
const inputMonth = document.querySelector('input#month');
const inputYear = document.querySelector('input#year');
// # Results Elements:
const resultYears = document.querySelector('.result-years .num');
const resultMonths = document.querySelector('.result-months .num');
const resultDays = document.querySelector('.result-days .num');

// # Function to get current date
function calcAge(e) {
    e.preventDefault()
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = (date.getMonth() + 1);
    const currentDay = date.getDate();
    if (inputDay.value !== '' && inputMonth.value !== '' && inputYear.value !== '') {
        setNumbersAge(
            currentYear - inputYear.value,
            currentMonth - inputMonth.value,
            currentDay - inputDay.value
        );
    }
    clearInputs(inputDay, inputMonth, inputYear);
}
// # Function to set numbers age
function setNumbersAge(years, months, days) {
    resultYears.textContent = years;
    resultMonths.textContent = months;
    resultDays.textContent = days;
}
// # Function to clear inputs
function clearInputs(...inputs) {
    inputs.forEach(input => {
        input.value = '';
    });
}