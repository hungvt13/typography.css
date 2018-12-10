let nightMode = false;

const clicked = () => {
  const nightBg = "black";
  const nightTxt = "white";
  const dayBg = "white";
  const dayTxt = "#3b4351";

  console.log("clicked");

  if(!nightMode){
    document.body.style.backgroundColor = nightBg;
    document.body.style.color = nightTxt;
    document.getElementById('mySelect').style.color = nightBg;
  }
  else{
    document.body.style.backgroundColor = dayBg;
    document.body.style.color = dayTxt;
    document.getElementById('mySelect').style.color = dayTxt;
  }

  if(nightMode) nightMode = false;
  else nightMode = true;
}
