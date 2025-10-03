// Auto hide the alert after 5 seconds (5000 milliseconds)
// setTimeout(function() {
//     document.getElementById('alert').style.display = 'none';
// }, 5000); // 5000 milliseconds = 5 seconds

// Auto hide the alert after 5 seconds (5000 milliseconds)
setTimeout(function() {
    var alertElement = document.getElementById('alert');
    if (alertElement) {  // Check if the element exists to avoid errors
        alertElement.style.display = 'none';
    } 
}, 5000); // 5000 milliseconds = 5 seconds


$(document).ready(function() {
    $('input').attr('autocomplete', 'off');
});

function changeBodyFontSize(size) {
    document.body.style.fontSize = size + 'px';
}

// function PopUp(hideOrshow) {
//     if (hideOrshow === 'hide') {
//         document.getElementById('ac-wrapper').style.display = "none";
//     } else {
//         document.getElementById('ac-wrapper').removeAttribute('style');
//     }
// }

function PopUp(hideOrshow) {
    const acWrapper = document.getElementById('ac-wrapper');
    if (acWrapper) { // Check if the element exists
        if (hideOrshow === 'hide') {
            acWrapper.style.display = "none";
        } else {
            acWrapper.removeAttribute('style');
        }
    } 
    // else {
    //     console.error('Element with ID "ac-wrapper" not found.');
    // }
}

window.onload = function() {
    setTimeout(function() {
        PopUp('show');
    }, 1000);
}

const inputField = document.getElementById("identitycard_no");
if (inputField) {
    inputField.addEventListener("keyup", function(event) {
        event.preventDefault();
        inputField.value = inputField.value.toUpperCase();
    });
}


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const sectionRect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const offset = (viewportHeight / 2) - (sectionRect.height / 2);

        window.scrollTo({
            top: window.scrollY + sectionRect.top - offset,
            behavior: 'smooth'
        });
    }
}