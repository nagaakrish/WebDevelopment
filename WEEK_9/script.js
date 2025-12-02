// // This code runs when the script is loaded by the browser

// // Select the parent element with the class 'wrapper'
// const wrapperDiv = document.querySelector('.wrapper');

// // Create the new child element (a div)
// const innerDiv = document.createElement('div');

// // Set the class name for the new div
// innerDiv.classList.add('inner');

// // Set the text content for the new div
// innerDiv.textContent = 'this is inner text';


// // Append the new child element to the parent element
// if (wrapperDiv) {
//     wrapperDiv.appendChild(innerDiv);
// } else {
//     console.error("Parent element with class 'wrapper' not found!");
// }\

window.addEventListener('DOMContentLoaded', () => {
const test = document.getElementById('test');
console.log(test);
    test.style.height = '200px';
    test.style.width = '200px';
    test.style.backgroundColor = 'blue';
});    