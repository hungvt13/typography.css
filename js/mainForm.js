class optionsList{
 // get Option List
 static getList(){
  const storedOptions = [{
        text: 'general',
        value: 'general',
        valueH: 'general_header',
        valueP: 'general_paragraph'
      },
      {
        text: 'high-end',
        value: 'high-end',
        valueH: 'high-end_header',
        valueP: 'high-end_paragraph'
      },
      {
        text: 'modern',
        value: 'modern',
        valueH: 'modern_header',
        valueP: 'modern_paragraph'
      },
      {
        text: 'start-up',
        value: 'start-up',
        valueH: 'start-up_header',
        valueP: 'start-up_paragraph'
      },
      {
        text: 'elegant',
        value: 'elegant',
        valueH: 'elegant_header',
        valueP: 'elegant_paragraph'
      },
      {
        text: 'attention',
        value: 'attention',
        valueH: 'attention_header',
        valueP: 'attention_paragraph'
      },
      {
        text: 'medieval',
        value: 'medieval',
        valueH: 'medieval_header',
        valueP: 'medieval_paragraph'
      },
      {
        text: 'art',
        value: 'art',
        valueH: 'art_header',
        valueP: 'art_paragraph'
      },
    ];
    return storedOptions;
  }
}

class UI {
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

// Event: Display options
document.addEventListener('DOMContentLoaded', UI.displayOptions());

// Change class based on selected preset
// Event: listen to preset select changes
document.getElementById('select-preset').addEventListener('change', () => {
  const classList = UI.getClassList('sample-text');
  const selectedStyle = UI.getSelected('select-preset');
  classList.remove(classList[1]);
  classList.add(selectedStyle);
});
