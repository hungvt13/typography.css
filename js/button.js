import CustomizeForm from './customizeForm.js';
import UI from './mainForm';

// Control the html display on customize button
let isCustomize = false;

export default class ButtonEvent{
    // Function to swapping names for toggle buttons
    static changeToggleBtn(ele, beforeName, afterName){
        // Change the Customize buttons when clicked
        const custBtn = document.getElementById(ele);
    
        if(!isCustomize){
        isCustomize = true;
        custBtn.innerHTML = afterName;
        }
        else{
        isCustomize = false;
        custBtn.innerHTML = beforeName;
        ButtonEvent.goBackPresets();
        }
    };

    // Function to clean up optimize optons and switch back to preset options
    static goBackPresets(){
        const classListHeader = UI.getClassList('sample-h1');
        const classListHeader2 = UI.getClassList('sample-h2');
        const classListParagraph = UI.getClassList('sample-paragraph');
        const classList = UI.getClassList('sample-text');
        // Removing customized option
        if(classListHeader[0] !== 'undefined') {
        classListHeader.remove(classListHeader[0]);
        classListHeader2.remove(classListHeader2[0]);
        }
        if(classList[0] !== 'undefined') classList.remove(classList[1]);
        if(classListParagraph[0] !== 'undefined') classListParagraph.remove(classListParagraph[0]);
        // Switch to presets
        //changeClass();
    };
    // Add event to button for collapsible
    static custBtnClicked(){
        const label = document.getElementById('label');
        const selectHeader = document.getElementById('select-header');
        const selectParagraph = document.getElementById('select-paragraph');
    
        // Get class list for the customize buttons
        const custBtn = UI.getClassList('customizeBtn');
    
        /*
        * Get the current selected preset
        * set start values for the two options
        */
        const select = document.getElementById('select-preset');
        selectHeader.selectedIndex = select.selectedIndex;
        selectParagraph.selectedIndex = select.selectedIndex;
    
        // Check if preset class exist, delete if yes
        const classList = UI.getClassList('sample-text');
        if(classList[1] !== 'undefined') classList.remove(classList[1]);
    
        CustomizeForm.changeClassHeader();
        CustomizeForm.changeClassParagraph();
    
        // Expand & collapise the element
        custBtn.toggle('active');
        const content = document.getElementById('content-panel');
    
        /*
        * If clicked show the preset elements
        * hide the customize options
        */
        if (content.style.display === 'inline') {
        content.style.display = 'none'; // The expand element
        select.style.display = 'flex'; // The preset element
        label.style.display = 'flex'; // The label for preset element
        }
    
        /*
        * Hide the preset elements
        * show the customize options
        */
        else {
        content.style.display = 'inline';
        select.style.display = 'none';
        label.style.display = 'none';
        }
        ButtonEvent.changeToggleBtn('customizeBtn', 'customize', 'preset');
    };
}
