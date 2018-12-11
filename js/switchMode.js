let nightMode = false;

const switchClicked = () => {
  const nightBg = "black";
  const nightTxt = "white";
  const nightTxtCust = "#00A8E8";
  const dayBg = "white";
  const dayTxt = "#3b4351";
  const dayTxtCust = "#007EA7";


  if(!nightMode){
    document.body.style.backgroundColor = nightBg;
    document.body.style.color = nightTxt;
    document.getElementById('select-preset').style.color = nightBg;
    document.getElementById('customizeBtn').style.color = nightTxtCust;
    document.getElementById('content-panel').style.backgroundColor = nightBg;
    document.getElementById('select-header').style.color = nightBg;
    document.getElementById('select-paragraph').style.color = nightBg;
  }
  else{
    document.body.style.backgroundColor = dayBg;
    document.body.style.color = dayTxt;
    document.getElementById('select-preset').style.color = dayTxt;
    document.getElementById('customizeBtn').style.color = dayTxtCust;
    document.getElementById('content-panel').style.backgroundColor = dayBg;
  }

  if(nightMode) nightMode = false;
  else nightMode = true;
}
