function toggleMenu(checkbox) {
    const parent = checkbox.parentElement.parentElement;
    if (checkbox.checked) {
        parent.classList.add('open'); 
    } else {
        parent.classList.remove('open'); 
    }
}




