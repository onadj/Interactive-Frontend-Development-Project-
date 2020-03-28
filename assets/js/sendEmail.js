function sendMail(contactForm) {
    emailjs.send("gmail", "template_GPCu9IP9", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("Uspijesno", response);
        },
        function(error) {
            console.log("Dogodila se greska!", error);
        }
    );
    return false;  // To block from loading a new page
}


