if (window.innerWidth <= 768) {
    const h4_1 = document.querySelector(".h4-1");
    const h4_2 = document.querySelector(".h4-2");
    const h4_3 = document.querySelector(".h4-3");
    const h5Container1 = document.querySelector(".h5-container1");
    const h5Container2 = document.querySelector(".h5-container2");
    const h5Container3 = document.querySelector(".h5-container3");

    h4_1.addEventListener("touchstart", (e) => {
        if (h5Container1.style.display === "block") {
            h5Container1.style.display = "none";
        }
        else {
            h5Container1.style.display = "block";
        }
    });
    
    h4_2.addEventListener("touchstart", (e) => {
        if (h5Container2.style.display === "block") {
            h5Container2.style.display = "none";
        }
        else {
            h5Container2.style.display = "block";
        }
    });
    
    h4_3.addEventListener("touchstart", (e) => {
        if (h5Container3.style.display === "block") {
            h5Container3.style.display = "none";
        }
        else {
            h5Container3.style.display = "block";
        }
    });
}