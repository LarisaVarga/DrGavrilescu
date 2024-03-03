function toggleMenu(checkbox) {
    const parent = checkbox.parentElement.parentElement;
    parent.classList.toggle('open'); // Toggle the 'open' class directly
  }