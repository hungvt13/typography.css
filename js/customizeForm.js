const label = document.getElementById('label');

const selectHeader = document.getElementById('select-header');
const selectParagraph = document.getElementById('select-paragraph');

// Control the html display on customize button
let isCustomize = false;

// Class list for each element
const classListHeader = getClassList('sample-h1');
const classListHeader2 = getClassList('sample-h2');
const classListParagraph = getClassList('sample-paragraph');

/*
 *Mapping values to customize options
 *self invoke
 */
(function (){
  const optionListHeaders = selectHeader.options;
  const optionListParagraphs = selectParagraph.options;

  options.forEach((item) => {
    optionListHeaders.add(new Option(item.text, item.valueH, item.selected));
    optionListParagraphs.add(new Option(item.text, item.valueP, item.selected));
  });
}());


/*
 * Change the elements separately
 * change the class for headers only
 */
const changeClassHeader = () => {
  const selectedStyle = getSelected('select-header');
  // Check if a class exist, delete if yes

  if(classListHeader[0] !== 'undefined') {
    classListHeader.remove(classListHeader[0]);
    classListHeader2.remove(classListHeader2[0]);
  }
  // Add style class for headers
  classListHeader.add(selectedStyle);
  classListHeader2.add(selectedStyle);

};

// Change the class for paragraphs only
const changeClassParagraph = () => {
  const selectedStyle = getSelected('select-paragraph');
  // Check if a class exist, delete if yes

  if(classListParagraph[0] !== 'undefined') classListParagraph.remove(classListParagraph[0]);
  // Add style class for paragraph
  classListParagraph.add(selectedStyle);
};

// Function to swapping names for toggle buttons
const changeToggleBtn = (ele, beforeName, afterName) => {
  // Change the Customize buttons when clicked
  const custBtn = document.getElementById(ele);

  if(!isCustomize){
    isCustomize = true;
    custBtn.innerHTML = afterName;

  }
  else{
    isCustomize = false;
    custBtn.innerHTML = beforeName;
    goBackPresets();
  }
};

// Function to clean up optimize optons and switch back to preset options
const goBackPresets = () => {
  // Removing customized option
  if(classListHeader[0] !== 'undefined') {
    classListHeader.remove(classListHeader[0]);
    classListHeader2.remove(classListHeader2[0]);
  }
  if(classList[0] !== 'undefined') classList.remove(classList[1]);
  if(classListParagraph[0] !== 'undefined') classListParagraph.remove(classListParagraph[0]);
  // Switch to presets
  changeClass();
};

// Add event to button for collapsible
const custBtnClicked = () => {
  // Get class list for the customize buttons
  const custBtn = getClassList('customizeBtn');

  /*
   * Get the current selected preset
   * set start values for the two options
   */

  selectHeader.selectedIndex = select.selectedIndex;
  selectParagraph.selectedIndex = select.selectedIndex;

  // Check if preset class exist, delete if yes
  if(classList[1] !== 'undefined') classList.remove(classList[1]);

  changeClassHeader();
  changeClassParagraph();

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
  changeToggleBtn('customizeBtn', 'customize', 'preset');
};
// Coll[0].addEventListener('click', function() );
