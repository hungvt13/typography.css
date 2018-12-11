let coll = document.getElementsByClassName("collapsible");
let i;
let label = document.getElementById("label");

let selectHeader = document.getElementById('select-header');
let selectParagraph = document.getElementById('select-paragraph');
let optionListHeaders = selectHeader.options;
let optionListParagraphs = selectParagraph.options;

let isCustomize = false; //control the html display on customize button

//class list for each element
let classListHeader = getClassList('sample-h1');
let classListHeader2 = getClassList('sample-h2');
let classListParagraph = getClassList('sample-paragraph');

//control the default for customized option pass from preset
let isChangedHeader= false;
let isChangedParagraph = false;

//mapping values to customize options
options.forEach(option => {
  optionListHeaders.add(
    new Option(option.text, option.valueH,option.selected)
  );
  optionListParagraphs.add(
    new Option(option.text, option.valueP,option.selected)
  );
});

// change the elements separately
// change the class for headers only
const changeClassHeader = () => {
  const selectedStyle = getSelected('select-header');
  //check if a class exist, delete if yes
  if(classListHeader[0] != 'undefined') {
    classListHeader.remove(classListHeader[0]);
    classListHeader2.remove(classListHeader2[0]);
  }
  //add style class for headers
  classListHeader.add(selectedStyle);
  classListHeader2.add(selectedStyle);

};

// change the class for paragraphs only
const changeClassParagraph= () => {
  const selectedStyle = getSelected('select-paragraph');
  //check if a class exist, delete if yes
  if(classListParagraph[0] != 'undefined') classListParagraph.remove(classListParagraph[0]);
  //add style class for paragraph
  classListParagraph.add(selectedStyle);
};

// add event to button for collapsible
coll[0].addEventListener("click", function() {
  // get the current selected preset
  // set start values for the two options
  selectHeader.selectedIndex = select.selectedIndex;
  selectParagraph.selectedIndex = select.selectedIndex;

  //check if preset class exist, delete if yes
  if(classList[1] != 'undefined') classList.remove(classList[1]);

  changeClassHeader();
  changeClassParagraph();

  // expand & collapise the element
  this.classList.toggle("active");
  let content = this.previousElementSibling;

  // if clicked show the preset elements
  // hide the customize options
  if (content.style.display === "inline") {
    content.style.display = "none"; // the expand element
    select.style.display ="flex"; // the preset element
    label.style.display ="flex"; // the label for preset element
  }
  // hide the preset elements
  // show the customize options
  else
  {
    content.style.display = "inline";
    select.style.display ="none";
    label.style.display ="none";
  }

  // change the Customize buttons when clicked
  let custBtn = document.getElementById('customizeBtn');
  if(!isCustomize){
    isCustomize = true;
    custBtn.innerHTML = 'preset';

  }
  else{
    isCustomize = false;
    custBtn.innerHTML = 'customize';
    // removing customized option
    if(classListHeader[0] != 'undefined') {
      classListHeader.remove(classListHeader[0]);
      classListHeader2.remove(classListHeader2[0]);
    }
    if(classList[0] != 'undefined') classList.remove(classList[1]);
    if(classListParagraph[0] != 'undefined') classListParagraph.remove(classListParagraph[0]);
    // switch to presets
    changeClass();
  }
});
