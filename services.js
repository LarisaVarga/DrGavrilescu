const servicesAndPrices  = [
    {
        id: 1,
        category: "Profilaxie",
        title: "Consultatie",
        price: "100 lei"
    },
    {
        id: 2,
        category: "Profilaxie",
        title: "Igienizare dentara : detartraj, periaj, airflow",
        price: "350 lei"
    },
    {
        id: 3,
        category: "Profilaxie",
        title: "Igienizare periodica (3 - 6 luni)",
        price: "250 lei"
    },
    {
        id: 4,
        category: "Profilaxie",
        title: "Airflow",
        price: "150 lei"
    },
    {
        id: 5,
        category: "Profilaxie",
        title: "Periaj dentar",
        price: "100 lei"
    },
    {
        id: 6,
        category: "Terapie Dentara",
        title: "Obturatie compozit superficiala",
        price: "200 lei"
    },
    {
        id: 7,
        category: "Terapie Dentara",
        title: "Obturatie compozit medie",
        price: "300 lei"
    },
    {
        id: 8,
        category: "Terapie Dentara",
        title: "Obturatie compozit profunda",
        price: "350 lei"
    },
    {
        id: 9,
        category: "Endodontie",
        title: "Tratament endodontic microscop/lupe dinte frontal (monoradicular)",
        price: "400 lei"
    },
    {
        id: 10,
        category: "Endodontie",
        title: "Tratament endodontic microscop/lupe premolar (monoradicular/biradicular)",
        price: "500 lei"
    },
    {
        id: 11,
        category: "Endodontie",
        title: "Tratament endodontic microscop/lupe molar (pluriradicular)",
        price: "700 lei"
    },
    {
        id: 12,
        category: "Endodontie",
        title: "Retratament endodontic microscop/lupe",
        price: "+ 100 lei",
        extra: "IMPORTANT: Se adauga 100 lei la preturile tratamentului"
    },
    {
        id: 13,
        category: "Endodontie",
        title: "Reconstructie cu pivot fibra sticla",
        price: "400 lei"
    },
    {
        id: 14,
        category: "Endodontie",
        title: "Reconstructie cu pivot metalic",
        price: "300 lei"
    },
    {
        id: 15,
        category: "Endodontie",
        title: "Reconstructie cu pivot zirconiu",
        price: "500 lei"
    },
    {
        id: 16,
        category: "Endodontie",
        title: "Indepartare ac/ instrument/ pivot din canal",
        price: "200 lei"
    },
    {
        id: 17,
        category: "Protetica",
        title: "Coroana provizorie PMMA",
        price: "300 lei"
    },
    {
        id: 18,
        category: "Protetica",
        title: "Coroana metalo-ceramica total fizionomica",
        price: "700 lei"
    },
    {
        id: 19,
        category: "Protetica",
        title: "Coroana metalo-ceramica partial fizionomica",
        price: "500 lei"
    },
    {
        id: 20,
        category: "Protetica",
        title: "Coroana zirconiu",
        price: "1100 lei"
    },
    {
        id: 21,
        category: "Protetica",
        title: "Coroana ceramica – zirconiu",
        price: "1200 lei"
    },
    {
        id: 22,
        category: "Protetica",
        title: "Coroana ceramica integrala",
        price: "1500 lei"
    },
    {
        id: 23,
        category: "Protetica",
        title: "Incrustatie ceramica",
        price: "1000 lei"
    },
    {
        id: 24,
        category: "Protetica",
        title: "Incrustatie zirconiu",
        price: "900 lei"
    },
    {
        id: 25,
        category: "Protetica",
        title: "Proteza totala acrilica",
        price: "2000 lei"
    },
    {
        id: 26,
        category: "Protetica",
        title: "Proteza scheletata",
        price: "3500 lei"
    },
    {
        id: 27,
        category: "Chirurgie",
        title: "Extractie dentara dinte monoradicular",
        price: "150 lei"
    },
    {
        id: 28,
        category: "Chirurgie",
        title: "Extractie dentara dinte pluriradicular",
        price: "250 lei"
    },
    {
        id: 29,
        category: "Chirurgie",
        title: "Extractie molar de minte erupt",
        price: "400 lei"
    },
    {
        id: 30,
        category: "Chirurgie",
        title: "Extractie molar de minte semiinlcus",
        price: "500 lei"
    },
    {
        id: 31,
        category: "Chirurgie",
        title: "Extractie molar de minte inclus",
        price: "600 lei"
    },
    {
        id: 32,
        category: "Chirurgie",
        title: "Gingivectomie / arcada",
        price: "500 lei"
    },
    {
        id: 33,
        category: "Chirurgie",
        title: "Chistectomie",
        price: "700 lei"
    },
    {
        id: 34,
        category: "Chirurgie",
        title: "Aditie os – sinus lift",
        price: "2000 lei"
    },
    {
        id: 35,
        category: "Chirurgie",
        title: "Aditie os – bloc osos mandibula",
        price: "2000 lei"
    },
    {
        id: 36,
        category: "Chirurgie",
        title: "Decapusonare molar de minte",
        price: "200 lei"
    },
    {
        id: 37,
        category: "Chirurgie",
        title: "Drenaj abces",
        price: "200 lei"
    },
    {
        id: 38,
        category: "Chirurgie",
        title: "Frenectomie",
        price: "500 lei"
    },
    {
        id: 39,
        category: "Pedodontie",
        title: "Obturatie dinte temporar",
        price: "200 lei"
    },
    {
        id: 40,
        category: "Pedodontie",
        title: "Sigilare",
        price: "200 lei"
    },
    {
        id: 41,
        category: "Pedodontie",
        title: "Periaj",
        price: "100 lei"
    },
    {
        id: 42,
        category: "Pedodontie",
        title: "Igienizare completa",
        price: "200 lei"
    },
    {
        id: 43,
        category: "Pedodontie",
        title: "Tratament endodontic",
        price: "300 lei"
    },
    {
        id: 44,
        category: "Pedodontie",
        title: "Drenaj abces",
        price: "200 lei"
    },
    {
        id: 45,
        category: "Ortodontie",
        title: "Aparat ortodontic metalic/arcada",
        price: "2500 lei"
    },
    {
        id: 46,
        category: "Cosmetica si estetica dentara",
        title: "Albire dentara",
        price: "1000 lei"
    },
]
function displayServices() {
    const container = document.getElementById('services-container');
  
    for (const category of Object.keys(groupByCategory(servicesAndPrices))) {
      const categoryElement = document.createElement('div');
      categoryElement.classList.add('service-category');
  
      const categoryHeading = document.createElement('h3');
      categoryHeading.textContent = category;
      categoryElement.appendChild(categoryHeading);
  
      const serviceList = document.createElement('ul');
      serviceList.classList.add('service-list');
      for (const service of servicesAndPrices.filter(item => item.category === category)) {
        const serviceItem = document.createElement('li');
        serviceItem.classList.add('service-item');
  
        const serviceInfo = document.createElement('div');
        serviceInfo.classList.add('service-info');
  
        const titlePriceContainer = document.createElement('div');
        titlePriceContainer.classList.add('title-price'); // Optional class for styling
  
        const serviceTitle = document.createElement('p');
        serviceTitle.classList.add('service-title'); // Optional class for styling
        serviceTitle.textContent = service.title;
        titlePriceContainer.appendChild(serviceTitle);
  
        const servicePrice = document.createElement('p');
        servicePrice.classList.add('service-price'); // Optional class for styling
        servicePrice.textContent = service.price;
        titlePriceContainer.appendChild(servicePrice);
  
        serviceInfo.appendChild(titlePriceContainer);
  
        if (service.hasOwnProperty('extra')) {
          const serviceExtra = document.createElement('p');
          serviceExtra.classList.add('service-extra'); // Optional class for styling
          serviceExtra.textContent = service.extra;
          serviceInfo.appendChild(serviceExtra);
        }
  
        serviceItem.appendChild(serviceInfo);
  
        serviceList.appendChild(serviceItem);
      }
      categoryElement.appendChild(serviceList);
  
      container.appendChild(categoryElement);
    }
  }
  
  function groupByCategory(data) {
    return data.reduce((acc, item) => {
      acc[item.category] = acc[item.category] || [];
      acc[item.category].push(item);
      return acc;
    }, {});
  }
  
  displayServices();
