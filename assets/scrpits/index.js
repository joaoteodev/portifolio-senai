const sectionImages = document.querySelectorAll(".section-img");

sectionImages.forEach(img => {
  img.addEventListener("click", () => {
    const imgSrc = img.src;

    Swal.fire({
      imageUrl: imgSrc,
      imageWidth: "100%",
      showCloseButton: true
    });
  });
});

// Menu mobile

const menu = document.querySelector(".menu");
const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("html");

menuMobile.addEventListener("click", () => {
  body.style.overflow = "hidden";
  menu.classList.add("active");
});

menu.addEventListener("click", event => {
  menu.classList.remove("active");
  body.style.overflow = "auto";
});
