function sendMail(contactForm) {
    emailjs.send("gmail", "template_GPCu9IP9", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "recommend_destination": contactForm.destination.value
    })
    .then(
        function(response) {
            console.log("Sent!", response);
        },
        function(error) {
            console.log("Not sent!", error);
        }
    );
    return false;  
}
