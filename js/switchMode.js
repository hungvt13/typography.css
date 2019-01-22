let nightMode = false;
class switchEvent{
  static switchClicked() {
    const nightBg = '#141c29';
    const nightTxt = 'white';
    const nightTxtCust = '#00A8E8';
    const dayBg = 'white';
    const dayTxt = '#3b4351';
    const dayTxtCust = '#007EA7';
  
    if(!nightMode){
      switchEvent.switchMode(nightBg, nightTxt, nightTxtCust);
      nightMode = true
    }
    else{
      switchEvent.switchMode(dayBg, dayTxt, dayTxtCust);
      nightMode = false
    }
  }
  static switchMode(select, text, custText){
    document.body.style.backgroundColor = select;
    document.body.style.color = text;
    document.getElementById('select-preset').style.color = select;
    document.getElementById('customizeBtn').style.color = custText;
    document.getElementById('content-panel').style.backgroundColor = select;
    if(select !== 'white')
    {
      document.getElementById('select-header').style.color = select;
      document.getElementById('select-paragraph').style.color = select;
    }
  }
}

//Event: switch button - day/night mode
document.getElementById('switch')
        .addEventListener('input', () => switchEvent.switchClicked());

