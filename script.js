//type animation code starts here
var options = {
    strings: ["a Full Stack Developer.", "a Copywriter.", "an AI Engineer", "a Lifelong Learner."],
    typeSpeed: 50, // Speed in milliseconds for each character
    backSpeed: 30, // Speed for deleting text
    loop: true // Loop the animation
};

var typed = new Typed("#typing", options);
//type animation code ends here

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}


//side menu code starts here
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0px";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}
//side menu code ends here

//contact form code starts here
const scriptURL = 'https://script.google.com/macros/s/AKfycbz04tZd3qPueZnTRa1y8yBeU5c9GRZoT-9Oowl0jHavHDBnO__WoLuVHIr1bvbQcd7q/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully!";
            setTimeout(function () {
                msg.innerHTML = ""
            },3000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})
//contact form code ends here