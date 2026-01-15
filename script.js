let text = "Web Developer  |  Tech Enthusiast";
let index = 0;

function type() {
  document.getElementById("typing").innerHTML = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 0;
  }

  setTimeout(type, 150);
}

type();

// Button Functionality

// GitHub Button
document.getElementById("githubBtn").addEventListener("click", () => {
  window.open("https://github.com/ashishapotikar9-bot", "_blank");
});

// Resume Button
document.getElementById("resumeBtn").addEventListener("click", () => {
  window.open("/AshishPortfolio/resume.pdf", "_blank");
});

// LinkedIn Button
document.getElementById("linkedinBtn").addEventListener("click", () => {
  window.open(
    "https://www.linkedin.com/in/ashish-apotikar-051981285",
    "_blank"
  );
});


// Resume Download Button
document.getElementById("resumeBtn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "/AshishPortfolio/resume.pdf";
  link.download = "resume.pdf";
  link.click();
});
