(function () {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init("user_KNaq6SlLZrMRjpTG3iMBh");
})();

window.onload = function () {

    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();
        // these IDs from emailJS integration 
        emailjs.sendForm("service_htp5iyh", "template_q11fxau", "#contactForm")
            .then(function (response) {
                // confirmation of the email has been submitted sucessfully
                alert('Your message has been sent to nci.stayfit@gmail.com');
            }, function (error) {
                // alert if the email cound not be sent
                alert('FAILED...', error);
            });
    });
}
