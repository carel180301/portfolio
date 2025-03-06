/* used to go to what section you want*/
function goToAboutMe() {
    document.getElementById("section_aboutMe").scrollIntoView({ behavior: "smooth" });
}
function goToProjects() {
    document.getElementById("section_projects").scrollIntoView({ behavior: "smooth" });
}

/* change the color of navigation menu links when being clicked*/
function changeColor(element) {
    let originalColor = element.style.color;

    element.style.color = "red";

    setTimeout(() => { //set the duration
        element.style.color = originalColor;
    }, 1000); //1 second
}

/* link it to your contact*/
function goToInstagram() {
    window.open("https://www.instagram.com/carelpcp", "_blank");
}
function goToWhatsapp(){
    window.open("https://wa.me/6285719657722", "_blank");
}
function goToEmail() {
    window.location.href = "mailto:carel.prianugra.cp@gmail.com";
}

function showProjectDetail() {
    let detail = document.getElementById("project_detail");

    if (detail.style.display === "none" || detail.style.display === "") {
        detail.style.display = "block";
    } else {
        detail.style.display = "none";
    }
}

function dropdown(){
    var x = document.getElementById("dropdownLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }