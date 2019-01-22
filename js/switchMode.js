let isSwitched = false;
class switchEvent{
  // When switch toggle is click
  static switchClicked() {
    const nightBg = '#141c29';
    const nightTxt = 'white';
    const nightTxtCust = '#00A8E8';
    const dayBg = 'white';
    const dayTxt = '#3b4351';
    const dayTxtCust = '#007EA7';

    if(!isSwitched){
      switchEvent.switchMode(nightBg, nightTxt, nightTxtCust);
      switchEvent.changeTextColor(nightBg);
      isSwitched = true
    }
    else{
      switchEvent.switchMode(dayBg, dayTxt, dayTxtCust);
      switchEvent.changeTextColor(dayTxt);
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

//Event: switch button - day/night mode
document.getElementById('switch')
        .addEventListener('input', () => switchEvent.switchClicked());
