// GENERAL
console.log("%cWebsite entirely created by luca33573 (Discord)", "letter-spacing:.5px; padding:10px; font-size:20px; font-family:sans-serif; font-weight:900; text-shadow: 2px 3px 5px rgba(0,0,0,0.5); border-bottom:solid 1px #101010;");
const Copyrigh_and_version = document.getElementById("LogoAndCopyright").lastElementChild;
Copyrigh_and_version.innerHTML = "© Copyright 2024 Kour.io <span>v 0.1.0</span>";

//MOBILE
if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
        console.log("MOBILE USER");
        SetHeaderHeight("68px");
    }
else {
    console.log("NON MOBILE USER");
}

function SetHeaderHeight(n) {
    var root = document.querySelector(":root");
    root.style.setProperty("--Header", n)
}

// Navigation Menu Icon Change
let ChangeIcon = function(icon) {
    icon.classList.toggle("fa-xmark");
    var menuBtn = document.getElementById("MenuBtn");
    menuBtn.style.height = "190px";
}

// Kour windows download
function WDownload() {
    window.open("https://play.google.com/store/apps/details?id=com.LEGiONPlatforms.Kour&hl=en_US&gl=US")
}