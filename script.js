let text = "Guitarist  |  Photographer  |  Traveler";
let index = 0;

function type(){
document.getElementById("typing").innerHTML = text.slice(0,index);
index++;

if(index > text.length){
index = 0;
}

setTimeout(type,150);
}

type();

// Button Functionality
document.getElementById("githubBtn").addEventListener("click", () => {
  window.open("https://github.com/ashishapotikar9-bot", "_blank");
});

document.getElementById("resumeBtn").addEventListener("click", () => {
  window.open("/Users/apple/Documents/GitHub/AshishPortfolio/resume.pdf", "_blank");
});

document.getElementById("resumeBtn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "/Users/apple/Documents/GitHub/AshishPortfolio/resume.pdf";
  link.download = "resume.pdf";
  link.click();
});
