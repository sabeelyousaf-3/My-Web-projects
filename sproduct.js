const MainImg = document.getElementById("MainImg");
const smallImgs = document.querySelectorAll(".small-img");

smallImgs.forEach(img => {
    img.addEventListener("click", () => {
        MainImg.src = img.src;
    });
});