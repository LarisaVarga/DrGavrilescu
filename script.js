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
            <h4>${service.title}</h4>
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
            <h4>${service.title}</h4>
            <p>${service.description}</p>
        `;
        mobileCarousel.appendChild(card);
    });
}

showServicesMobile();

const highlightsWrapper = document.querySelector('.highlights-inner');
const highlights  = [
    {
        id: 1,
        src: "./icons/modern-tech.svg",
        title: "Tehnologie moderna",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 2,
        src: "./icons/no-pain.svg",
        title: "Urgențe stomatologice",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 3,
        src: "./icons/emergencies.svg",
        title: "Fără durere",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
]
function showHighlights() {
    highlightsWrapper.innerHTML = '';
    highlights.forEach(service => {
        const card = document.createElement('div');
        card.classList.add('highlights-card');
        card.innerHTML = `
            <img src="${service.src}" alt="${service.title}">
            <h3 class="uppercase">${service.title}</h3>
            <p>${service.description}</p>
        `;
        highlightsWrapper.appendChild(card);
    });
}

showHighlights();


const testimonialsWrapper = document.querySelector('.testimonials-inner');
const testimonials  = [
    {
        id: 1,
        src: "./icons/quotes.svg",
        title: "Nume pacient",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 2,
        src: "./icons/quotes.svg",
        title: "Nume pacient",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 3,
        src: "./icons/quotes.svg",
        title: "Nume pacient",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
]
function showTestimonials() {
    testimonialsWrapper.innerHTML = '';
    testimonials.forEach(service => {
        const card = document.createElement('div');
        card.classList.add('testimonials-card');
        card.innerHTML = `
            <h3 class="uppercase">${service.title}</h3>
            <img class="testimonials-img" src="${service.src}" alt="${service.title}">
            <p>${service.description}</p>
        `;
        testimonialsWrapper.appendChild(card);
    });
}

showTestimonials();