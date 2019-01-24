const optionsList = require('./optionsList.js').default;

export default class UI {
  // display options to the UI
  static displayOptions() {
    // tempo store for options
    const options = optionsList.getList();

    // add items to the select options
    options.map(item => UI.addOptionToList(item));

    // set initial value match the select option
    UI.setSelected('sample-text', options[0].value);
  }
  // add items to options List
  static addOptionToList(item) {
    const select = document.getElementById('select-preset');
    const optionList = select.options;
    optionList.add(new Option(item.text, item.value, item.selected))
  }

  // apply option[class] to a class byid
  static setSelected(ele, val){
    return document.getElementById(ele).classList.add(val)
  };

  // get a class list from id
  static getClassList(ele) {
    return document.getElementById(ele).classList;
  }

  // get current selected style
  static getSelected(ele) { 
    return document.getElementById(ele).value;
  }
}