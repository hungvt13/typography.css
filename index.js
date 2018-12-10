let select = document.getElementById('mySelect');
let val = select.value;
const optionList = select.options;
const options = [
  { text: 'general', value: 'general' },
  { text: 'high-end', value: 'high-end' },
  { text: 'modern', value: 'modern' },
  { text: 'start-up', value: 'start-up' },
  { text: 'elegant', value: 'elegant' },
  { text: 'attention', value: 'attention' },
  { text: 'medieval', value: 'medieval' },
  { text: 'art', value: 'art' },
];
options.forEach(option =>
  optionList.add(
    new Option(option.text, option.value,option.selected)
  ));

//set option
const setSelected = (ele,val) =>{
  document.getElementById(ele).classList.add(val);
};

//get current selected style
const getSelected = () => {
  return document.getElementById('mySelect').value;
};

//set initial value match the select option
setSelected('sample-text',options[0].value);
const changeClass = () => {
  let classList = document.getElementById('sample-text').classList;
  const selectedStyle = getSelected();
  classList.remove(classList[1]);
  classList.add(selectedStyle);
}
