function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

function detectScreenSize() {
    const desktopElements = document.querySelectorAll('.desktop');
    const mobileElements = document.querySelectorAll('.mobile');
    
    if (window.innerWidth < 768) {
        desktopElements.forEach(element => element.style.display = 'none');
        mobileElements.forEach(element => element.style.display = 'block');
    } else {
        desktopElements.forEach(element => element.style.display = 'block');
        mobileElements.forEach(element => element.style.display = 'none');
    }
}

// Initial detection
detectScreenSize();

// Detect on resize
window.addEventListener('resize', detectScreenSize);


function copyToClipboard() {
    const address = document.getElementById("contract-address").innerText;
    navigator.clipboard.writeText(address).then(() => {
        alert("Contract address copied to clipboard!");
    }).catch(err => {
        console.error("Could not copy text: ", err);
    });

}


function openPopup(popupId) {
    document.getElementById(popupId).style.display = "flex";
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}