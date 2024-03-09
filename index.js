console.log("Hello World!");
var Resume = document.getElementById("Resume");
console.log(Resume);

Resume.addEventListener('click', callAlert);
Resume.addEventListener('mouseover'), callAlert;
Resume.addEventListener('mouseout'), callAlert;

function callAlert() {
    alert("Attention: You are now being directed to Teresa Keck's LinkedIn profile.");
    Resume.innerHTML = "Thanks For Visiting";
}


