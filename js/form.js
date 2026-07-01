/* =====================================================
   TOMORROW - Contact Form
   File: js/form.js
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || phone === "" || message === "") {
            alert("Please fill all the fields.");
            return;
        }

        const whatsappMessage =
` NEW ENQUIRY - TOMORROW WEBSITE

 Name : ${name}

 Phone : ${phone}

 Requirement :
${message}

-------------------------
Sent from Tomorrow Website`;

        const whatsappURL =
            "https://wa.me/919884766502?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank");

        form.reset();

    });

});
