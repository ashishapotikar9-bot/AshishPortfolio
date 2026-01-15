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

document.addEventListener("DOMContentLoaded", () => {

  const githubBtn = document.getElementById("githubBtn");
  const resumeBtn = document.getElementById("resumeBtn");
  const linkedinBtn = document.getElementById("linkedinBtn");

  if (githubBtn) {
    githubBtn.addEventListener("click", () => {
      window.open("https://github.com/YOUR_USERNAME", "_blank");
    });
  }

  if (resumeBtn) {
    resumeBtn.addEventListener("click", () => {
      window.open("assets/resume.pdf", "_blank");
    });
  }

  if (linkedinBtn) {
    linkedinBtn.addEventListener("click", () => {
      window.open(
        "https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/",
        "_blank"
      );
    });
  }

});



// Resume Download Button
document.getElementById("resumeBtn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "/AshishPortfolio/resume.pdf";
  link.download = "resume.pdf";
  link.click();
});
