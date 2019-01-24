const UI = require('./mainForm.js').default;
const customizeForm = require('./customizeForm.js').default;
const buttonEvent = require('./button.js').default;
const switchEvent = require('./switchMode.js').default;

// Event: Display main preset options
document.addEventListener('DOMContentLoaded', UI.displayOptions());

// Change class based on selected preset
// Event: listen to preset select changes
document.getElementById('select-preset').addEventListener('change', () => UI.changePreset());

//Event: load cust options
document.addEventListener('DOMContentLoaded', () => customizeForm.displayCustomizeOptions());

//Event: listen to Headers changes
document.getElementById('select-header')
        .addEventListener('change', () => customizeForm.changeClassHeader());

//Event: listen to Paragraph changes
document.getElementById('select-paragraph')
        .addEventListener('change', () => customizeForm.changeClassParagraph());

//Event: Customize button
document.getElementById('customizeBtn').addEventListener('click', () => buttonEvent.custBtnClicked());

//Event: switch button - day/night mode
document.getElementById('switch')
        .addEventListener('input', () => switchEvent.switchClicked());

