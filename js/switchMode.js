let nightMode = false;

const switchClicked = () => {
  const nightBg = "black";
  const nightTxt = "white";
  const dayBg = "white";
  const dayTxt = "#3b4351";
  const dayTxtCust = "#007EA7";

  console.log("clicked");

  if(!nightMode){
    document.body.style.backgroundColor = nightBg;
    document.body.style.color = nightTxt;
    document.getElementById('mySelect').style.color = nightBg;
    //document.getElementById('customizeBtn').style.color = nightTxt;
  }
  else{
    document.body.style.backgroundColor = dayBg;
    document.body.style.color = dayTxt;
    document.getElementById('mySelect').style.color = dayTxt;
    //document.getElementById('customizeBtn').style.color = dayTxtCust;
  }

  if(nightMode) nightMode = false;
  else nightMode = true;
}
