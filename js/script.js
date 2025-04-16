document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById("mainLogo");
    if (logo) {
      logo.style.transition = "transform 0.4s ease";
      logo.addEventListener("mouseenter", () => {
        logo.style.transform = "translateY(-8px)";
      });
      logo.addEventListener("mouseleave", () => {
        logo.style.transform = "translateY(0)";
      });
      logo.addEventListener("click", () => {
        logo.style.transition = "transform 0.6s ease";
        logo.style.transform = "rotate(360deg)";
        setTimeout(() => {
          logo.style.transform = "rotate(0deg)";
        }, 600);
      });
    }
  
  
  
    const btn = document.querySelector(".btn");
    if (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const contactSection = document.getElementById("footer2");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  
   
  
    const serviceImages = document.querySelectorAll(".service-img");
    serviceImages.forEach((img) => {
      img.addEventListener("click", () => {
        alert(`You clicked on ${img.alt} flavour!`);
      });
    });
  
   
    const scrollBtn = document.createElement("button");
    scrollBtn.innerText = "↑ Top";
    scrollBtn.style.position = "fixed";
    scrollBtn.style.bottom = "30px";
    scrollBtn.style.right = "30px";
    scrollBtn.style.padding = "10px 15px";
    scrollBtn.style.border = "none";
    scrollBtn.style.backgroundColor = "red";
    scrollBtn.style.color = "white";
    scrollBtn.style.borderRadius = "5px";
    scrollBtn.style.cursor = "pointer";
    scrollBtn.style.display = "none";
    scrollBtn.style.zIndex = "999";
    document.body.appendChild(scrollBtn);
  
    window.addEventListener("scroll", () => {
      scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
    });
  
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
   
    const navLinks = document.querySelectorAll("nav ul li a");
    const currentUrl = window.location.href;
    navLinks.forEach(link => {
      if (currentUrl.includes(link.getAttribute("href"))) {
        link.style.color = "red";
        link.style.textShadow = "0 0 10px gold";
      }
    });
  
   
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        button.style.transition = "transform 0.3s ease";
        button.style.transform = "scale(1.1)";
      });
      button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
      });
    });
  });
  