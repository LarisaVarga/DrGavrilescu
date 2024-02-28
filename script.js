function toggleMenu(checkbox) {
    const parent = checkbox.parentElement.parentElement;
    if (checkbox.checked) {
        parent.classList.add('open'); 
    } else {
        parent.classList.remove('open'); 
    }
}


const dentalServices  = [
    {
        id: 1,
        src: "./images/albire.jpg",
        title: "Profilaxie",
        description: "Professional cleaning to remove plaque and tartar buildup, promoting oral health."
    },
    {
        id: 2,
        src: "./images/remineralizare.jpg",
        title: "Terapie dentară",
        description: "Professional cleaning to remove plaque and tartar buildup, promoting oral health."
    },
    {
        id: 3,
        src: "./images/microscop.jpg",
        title: "Endodonție",
        description: "Professional cleaning to remove plaque and tartar buildup, promoting oral health."
    },
    {
        id: 4,
        src: "./images/coroane.jpg",
        title: "Protetică",
        description: "Professional cleaning to remove plaque and tartar buildup, promoting oral health."
    },
    {
        id: 5,
        src: "./images/hero.jpg",
        title: "Chirurgie",
        description: "Professional cleaning to remove plaque and tartar buildup, promoting oral health."
    },
    {
        id: 6,
        src: "./images/hero.jpg",
        title: "Pedodonție",
        description: "Professional cleaning to remove plaque and tartar buildup, promoting oral health."
    },
    {
        id: 7,
        src: "./images/hero.jpg",
        title: "Ortodonție",
        description: "Professional cleaning to remove plaque and tartar buildup, promoting oral health."
    },
    {
        id: 8,
        src: "./images/albire.jpg",
        title: "Cosmetică și estetică dentară",
        description: "Professional cleaning to remove plaque and tartar buildup, promoting oral health."
    },

]
// const carousel = document.querySelector('.carousel');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');

// let currentIndex = 0;
// let itemsPerPage = 4;

// function showServices() {
//   carousel.innerHTML = '';
//   const endIndex = Math.min(currentIndex + itemsPerPage, dentalServices.length);

//   // Adjust itemsPerPage dynamically based on screen size
//   if (window.innerWidth <= 768) {
//     itemsPerPage = dentalServices.length;
//   } else if( window.innerWidth <= 1024) {
//     itemsPerPage = 4; 
//   }

//   for (let i = currentIndex; i < endIndex; i++) {
//     const service = dentalServices[i];
//     const card = document.createElement('div');
//     card.classList.add('card');
//     card.innerHTML = `
//       <img src="${service.src}" alt="${service.title}">
//       <h3>${service.title}</h3>
//       <p>${service.description}</p>
//     `;
//     carousel.appendChild(card);
//   }
// }

// function showNextServices() {
//   if (itemsPerPage < dentalServices.length) { // Only navigate if pagination is enabled
//     currentIndex += itemsPerPage;
//     if (currentIndex >= dentalServices.length) {
//       currentIndex = 0;
//     }
//   }
//   showServices();
// }

// function showPrevServices() {
//   if (itemsPerPage < dentalServices.length) { // Only navigate if pagination is enabled
//     currentIndex -= itemsPerPage;
//     if (currentIndex < 0) {
//       currentIndex = Math.max(0, dentalServices.length - itemsPerPage);
//     }
//   }
//   showServices();
// }

// // Add event listener to window resize event
// window.addEventListener('resize', () => {
//   showServices(); // Recalculate and re-render based on updated screen size
// });

// prevButton.addEventListener('click', showPrevServices);
// nextButton.addEventListener('click', showNextServices);

// showServices();.

const carousel = document.querySelector('.carousel');
const mobileCarousel = document.querySelector('.mobile-carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');



let currentIndex = 0;
const itemsPerPage = 4;

function showServices() {
    carousel.innerHTML = '';
    const endIndex = Math.min(currentIndex + itemsPerPage, dentalServices.length);
    for (let i = currentIndex; i < endIndex; i++) {
        const service = dentalServices[i];
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${service.src}" alt="${service.title}">
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        carousel.appendChild(card);
    }
}

function showNextServices() {
    currentIndex += itemsPerPage;
    if (currentIndex >= dentalServices.length) {
        currentIndex = 0;
    }
    showServices();
}

function showPrevServices() {
    currentIndex -= itemsPerPage;
    if (currentIndex < 0) {
        currentIndex = Math.max(0, dentalServices.length - itemsPerPage);
    }
    showServices();
}

prevButton.addEventListener('click', showPrevServices);
nextButton.addEventListener('click', showNextServices);

showServices();

function showServicesMobile() {
    mobileCarousel.innerHTML = '';
    dentalServices.forEach(service => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${service.src}" alt="${service.title}">
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        mobileCarousel.appendChild(card);
    });
}

showServicesMobile();