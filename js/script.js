
// function getInputFieldValueById() {
//     console.log('24-09-25');
//     const inputFieldValue = document.getElementById('input-field-value').value;
//     return inputFieldValue;
// }

function getInputFieldValueById(id) {
  
    const inputFieldValue = document.getElementById(id).value;
    return inputFieldValue;
}

function getTextValueById(id) {
  
    const textValue = document.getElementById(id).innerText;
    return textValue;
}