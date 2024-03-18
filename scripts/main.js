const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/1.png") {
    myImage.setAttribute("src", "images/chess.jpg");
  } else {
    myImage.setAttribute("src", "images/1.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("당신의 이름은 뭔가요?");
    if (!myName) {
        setUserName();
      } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `김치찌개 장인! ${myName}`;
      }
    }
  
  
  myButton.onclick = () => {
    setUserName();
  };
  