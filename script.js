document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
        menuIcon.onclick = () => {
            // toggle the navbar
            navbar.classList.toggle('active');

            // toggle between bx-menu and bx-x
            if (navbar.classList.contains('active')) {
                menuIcon.classList.remove('bx-menu');
                menuIcon.classList.add('bx-x');
            } else {
                menuIcon.classList.remove('bx-x');
                menuIcon.classList.add('bx-menu');
            }
        };
    } else {
        console.error('menuIcon or navbar not found in the DOM.');
    }
});

 




//I used form spree to handle the form submission
//but I left this here in case I want to switch back to emailjs
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