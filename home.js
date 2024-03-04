const dentalServices  = [
    {
        id: 1,
        src: "./images/profilaxie.png",
        title: "Profilaxie",
        description: "Prevenirea apariției celor mai frecvente afecțiuni dentare: cariile și boală parodontala, prin îndepărtarea profesională a tartrului și a plăcii bacteriene."
    },
    {
        id: 2,
        src: "./images/obturatie-compozit.jpg",
        title: "Terapie dentară",
        description: "Tratamentul cariilor prin îndepărtarea lor și refacerea structurii dentar."
    },
    {
        id: 3,
        src: "./images/endodontie.jpg",
        title: "Endodonție",
        description: "Tratamentul canalelor dentare, prin instrumentare la microscop și dezinfecție, scopul fiind stoparea complicațiilor din cariile profunde, care au lezat pulpă dentară."
    },
    {
        id: 4,
        src: "./images/proteica.png",
        title: "Protetică",
        description: "Înlocuirea dinților lipsa, reconstrucția dinților cu distructie avansată, cu refacerea integrității arcadelor dentare."
    },
    {
        id: 5,
        src: "./images/chirurgie.png",
        title: "Chirurgie",
        description: "Extracția molarilor de minte erupți parțial sau incluși, implantologie, îndepărtarea unor formațiuni chistice, regenerare gingivală și osoasă, microchirurgie estetică muco-gingivală."
    },
    {
        id: 6,
        src: "./images/pentodontie.png",
        title: "Pedodonție",
        description: "Servicii de stomatologie pediatrică."
    },
    {
        id: 7,
        src: "./images/ortodontie.png",
        title: "Ortodonție",
        description: "Corectarea anomaliilor dento-maxilarea și alinierea corectă a dinților"
    },
    {
        id: 8,
        src: "./images/albire.png",
        title: "Cosmetică și estetică dentară",
        description: "Albire dentară, realizarea de fațete dentare ceramice sau din compozit, microchirugie gingivală,  gingivectomii."
    },

]
const carousel = document.querySelector('.carousel');

        function showServices() {
            carousel.innerHTML = '';
            dentalServices.forEach(service => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <img src="${service.src}" alt="${service.title}">
                    <h4>${service.title}</h4>
                    <p>${service.description}</p>
                `;
                carousel.appendChild(card);
            });
        }

        showServices();

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
if(testimonialsWrapper) {showTestimonials();}