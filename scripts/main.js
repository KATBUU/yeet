const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "https://storage.googleapis.com/vue-mastery.appspot.com/flamelink/media/vuemastery-graphical-link-96x56.png") {
    myImage.setAttribute("src", "https://miro.medium.com/v2/resize:fit:679/1*2PEPQ0LxKFELp2lojVF-lw.jpeg");
  } else {
    myImage.setAttribute("src", "https://storage.googleapis.com/vue-mastery.appspot.com/flamelink/media/vuemastery-graphical-link-96x56.png");
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
  