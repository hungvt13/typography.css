let isSwitched = false;
export default class SwitchEvent{
  // When switch toggle is click
  static switchClicked() {
    const nightBg = '#141c29';
    const nightTxt = 'white';
    const nightTxtCust = '#00A8E8';
    const dayBg = 'white';
    const dayTxt = '#3b4351';
    const dayTxtCust = '#007EA7';

    if(!isSwitched){
      SwitchEvent.switchMode(nightBg, nightTxt, nightTxtCust);
      SwitchEvent.changeTextColor(nightBg);
      isSwitched = true
    }
    else{
      SwitchEvent.switchMode(dayBg, dayTxt, dayTxtCust);
      SwitchEvent.changeTextColor(dayTxt);
      isSwitched = false
    }
  }
  // Switch to different mode
  static switchMode(select, text, custText){
    document.body.style.backgroundColor = select;
    document.body.style.color = text;
    document.getElementById('customizeBtn').style.color = custText;
    document.getElementById('content-panel').style.backgroundColor = select;
  }
  // Change options text color
  static changeTextColor(color){
    document.getElementById('select-preset').style.color = color;
    document.getElementById('select-header').style.color = color;
    document.getElementById('select-paragraph').style.color = color;
  }
}
