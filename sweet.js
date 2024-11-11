
window.onload = function() {
    initializeCarousel();
};

function sigmaAlert() {
    document.getElementById("loginButton").addEventListener("click", function(event) {
        event.preventDefault(); 
    
        const emailOrUsernameOrPhone = document.getElementById("emai").value;
        const password = document.getElementById("password");
        const passwordValue = password.value;
        
    
        let errorMessages = []; 
    
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const usernameRegex = /^[a-zA-Z0-9._]+$/;
        const phoneRegex = /^[0-9]{10,}$/; 
    
        
        if (!emailRegex.test(emailOrUsernameOrPhone) && !usernameRegex.test(emailOrUsernameOrPhone) && !phoneRegex.test(emailOrUsernameOrPhone)) {
            errorMessages.push("Please enter a valid email address, username, or phone number.");
        }
    
        
        const hasUpperCase = /[A-Z]/.test(passwordValue);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue);
        const isLongEnough = passwordValue.length > 6;
    
        
        if (!isLongEnough) {
            errorMessages.push("Password must be longer than 6 characters.");
        }
        if (!hasUpperCase) {
            errorMessages.push("Password must contain at least one uppercase letter.");
        }
        if (!hasSpecialChar) {
            errorMessages.push("Password must contain at least one special character.");
        }
    
        
        if (errorMessages.length > 0) {
            swal({
                title: "Error",
                text: errorMessages.join("\n"),
                icon: "error",
                button: {
                    text: "OK",
                    closeModal: true,
                    className: "custom-swal-button" 
                }
            });
            
            
            password.classList.add("invalid-input");
        } else {
            
            swal({
                title: "Good job!",
                text: "Login credentials are valid.",
                icon: "success",
                button: {
                    text: "OK",
                    closeModal: true,
                    className: "custom-swal-button"
                }
            });
            
            
            
            password.classList.remove("invalid-input");

        }
        
    });
    
    

    
    document.getElementById("password").addEventListener("focus", function() {
        this.classList.remove("invalid-input");
        this.classList.add("focus-input"); 
    });

    const password = document.getElementById("password");
    document.getElementById("emai").addEventListener("focus", function() {
        password.classList.remove("invalid-input");
        password.classList.add("focus-input"); 
    });
    
    
    document.getElementById("password").addEventListener("blur", function() {
        if (this.value === "") {
            this.classList.remove("invalid-input"); 
        }
        this.classList.remove("focus-input"); 
    });
}


let currentImageIndex = 0;
const images = [
    "./images/screenshot1.png",
    "./images/screenshot2.png",
    "./images/screenshot3.png",
    "./images/screenshot4.png"
];
const fadeDuration = 800; 
const displayDuration = 4000; 

function initializeCarousel() {
    const carousel = document.getElementById("carouselExampleSlidesOnly");

    function changeImage() {
        
        carousel.style.transition = `opacity ${fadeDuration}ms`;
        carousel.style.opacity = 0;

        setTimeout(() => {
            
            currentImageIndex = (currentImageIndex + 1) % images.length;
            carousel.querySelector("img").src = images[currentImageIndex];

            
            carousel.style.transition = `opacity ${fadeDuration}ms`;
            carousel.style.opacity = 1;
        }, fadeDuration);
    }

    
    setInterval(changeImage, displayDuration);
}

