// js for the images appearing on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = { 
    threshold:0,
    rootMargin: "0px 0px -250px 0px"
};

const appearWhileScroll = new IntersectionObserver(function (entries, appearWhileScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else {
            entry.target.classList.add('appear');
            appearWhileScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(faders => {
    appearWhileScroll.observe(faders);
})

//-----------------------------------------------


// validiate email on classes mailing list
function ValidateEmail(){   

    var emailformat = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
    var email = document.forms["myForm"]["email"].value;
    if(email.match(emailformat)){
        console.log("Email Validated!")
        return true;
    }
    else if(email == null || email == ""){
        alert("Please enter an email adrress to be added to our mailing list!");  //Checking empty field
        return false;
    }
    else{
        alert("You have entered an invalid email address!");  //The pop up alert for an invalid email address
        return false;
    }
}

//-----------------------------------------------
// Modal Popup image function
$('.modal-img').click(function(){
    var src = $(this).attr('src');
    $('.modal').modal('show');
    $('#img-popup').attr('src', src);
});
