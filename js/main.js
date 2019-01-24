import UI from './mainForm';
import CustomizeForm from './customizeForm';
import ButtonEvent from './button';
import SwitchEvent from './switchMode';

// Event: Display main preset options
document.addEventListener('DOMContentLoaded', UI.displayOptions());

// Change class based on selected preset
// Event: listen to preset select changes
document.getElementById('select-preset').addEventListener('change', () => UI.changePreset());

//Event: load cust options
document.addEventListener('DOMContentLoaded', () => CustomizeForm.displayCustomizeOptions());

//Event: listen to Headers changes
document.getElementById('select-header')
        .addEventListener('change', () => CustomizeForm.changeClassHeader());

//Event: listen to Paragraph changes
document.getElementById('select-paragraph')
        .addEventListener('change', () => CustomizeForm.changeClassParagraph());

//Event: Customize button
document.getElementById('customizeBtn').addEventListener('click', () => ButtonEvent.custBtnClicked());

//Event: switch button - day/night mode
document.getElementById('switch')
        .addEventListener('input', () => SwitchEvent.switchClicked());

