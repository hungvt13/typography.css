const optionsList = require('./optionsList.js').default;
const UI = require('./mainForm.js').default;

export default class customizeForm{
  /*
  *Mapping values to customize options
  *self invoke
  */
  static displayCustomizeOptions(){
    const options = optionsList.getList();
    options.map(item => customizeForm.addCustomizeOptions(item));
  }
  // add options to customize list
  static addCustomizeOptions(item) {
    const selectHeader = document.getElementById('select-header');
    const selectParagraph = document.getElementById('select-paragraph');

    const optionListHeaders = selectHeader.options;
    const optionListParagraphs = selectParagraph.options;
    optionListHeaders.add(new Option(item.text, item.valueH, item.selected));
    optionListParagraphs.add(new Option(item.text, item.valueP, item.selected));
  }
  /*
  * Change the elements separately
  * change the class for headers only
  */
  static changeClassHeader() {
    const classListHeader = UI.getClassList('sample-h1');
    const classListHeader2 = UI.getClassList('sample-h2');
    const selectedStyle = UI.getSelected('select-header');

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
  static changeClassParagraph() {
    const classListParagraph = UI.getClassList('sample-paragraph');
    const selectedStyle = UI.getSelected('select-paragraph');

    // Check if a class exist, delete if yes
    if(classListParagraph[0] !== 'undefined') classListParagraph.remove(classListParagraph[0]);
    // Add style class for paragraph
    classListParagraph.add(selectedStyle);
  };
}

