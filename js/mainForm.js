let select = document.getElementById('select-preset');
const options = [{
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

// apply option[class] to a class byid
const setSelected = (ele, val) => document.getElementById(ele).classList.add(val);

// get a class list from id
const getClassList = (ele) => document.getElementById(ele).classList;

// get current selected style
const getSelected = (ele) => document.getElementById(ele).value;

(function(){
  const optionList = select.options;
  options.forEach(item =>
    optionList.add(
      new Option(item.text, item.value, item.selected)
    ));
})();

// set initial value match the select option
setSelected('sample-text', options[0].value);
let classList = getClassList('sample-text');

// Change class based on selected preset
const changeClass = () => {
  const selectedStyle = getSelected('select-preset');
  classList.remove(classList[1]);
  classList.add(selectedStyle);
};
