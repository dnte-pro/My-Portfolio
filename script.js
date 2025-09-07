let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
 

function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email : document.getElementById("email").value,
        number: document.getElementById("number").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };
    emailjs.send("service_yl2w5fy", "template_12iqqka", parms)
        .then(function(response) {
            alert("Message Sent Successfully");
        })
        .catch(function(error) {
            alert("Failed to send message: " + error.text);
        });
}