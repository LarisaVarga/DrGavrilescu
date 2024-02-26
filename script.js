function toggleMenu(checkbox) {
    const parent = checkbox.parentElement.parentElement;
    if (checkbox.checked) {
        parent.classList.add('open'); 
    } else {
        parent.classList.remove('open'); 
    }
}


const dentalServices  = [
    {id: 1,
        src: "./images/albire.jpg",
        title: "Albire dentara",
        description: "Professional cleaning to remove plaque and tartar buildup, promoting oral health."
    },
    {id: 2,
        src: "./images/remineralizare.jpg",
        title: "Tratament de remineralizare",
        description: "Professional cleaning to remove plaque and tartar buildup, promoting oral health."
    },
    {id: 3,
        src: "./images/microscop.jpg",
        title: "Tratamente endodontice efectuate la microscop",
        description: "Professional cleaning to remove plaque and tartar buildup, promoting oral health."
    },
    {id: 4,
        src: "./images/coroane.jpg",
        title: "Coroane si fatete dentare ceramice",
        description: "Professional cleaning to remove plaque and tartar buildup, promoting oral health."
    },
    {id: 5,
        src: "./images/hero.jpg",
        title: "Lucrari proteticeg",
        description: "Professional cleaning to remove plaque and tartar buildup, promoting oral health."
    },
    {id: 6,
        src: "./images/hero.jpg",
        title: "Obturatii realizate sub izolare cu diga",
        description: "Professional cleaning to remove plaque and tartar buildup, promoting oral health."
    },
    {id: 7,
        src: "./images/hero.jpg",
        title: "Lucrari proteticeg",
        description: "Professional cleaning to remove plaque and tartar buildup, promoting oral health."
    },
    {id: 8,
        src: "./images/hero.jpg",
        title: "Obturatii realizate sub izolare cu diga",
        description: "Professional cleaning to remove plaque and tartar buildup, promoting oral health."
    },

]
const carousel = document.querySelector('.carousel');
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
  <h3>${service.title}</h2>
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