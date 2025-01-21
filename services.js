const servicesAndPrices  = [
    {
        id: 1,
        category: "Stomatologie generală",
        title: "Consultatie",
        price: "100 lei"
    },
    {
        id: 2,
        category: "Stomatologie generală",
        title: "Igienizare",
        price: "350 lei"
    },
    {
        id: 3,
        category: "Stomatologie generală",
        title: "Detartraj",
        price: "250 lei"
    },
    {
        id: 4,
        category: "Stomatologie generală",
        title: "Periaj",
        price: "100 lei"
    },
    {
        id: 5,
        category: "Stomatologie generală",
        title: "Airflow",
        price: "150 lei"
    },
    {
        id: 6,
        category: "Stomatologie generală",
        title: "Obturație superficială",
        price: "200 lei"
    },
    {
        id: 7,
        category: "Stomatologie generală",
        title: "Obturație medie",
        price: "300 lei"
    },
    {
        id: 8,
        category: "Stomatologie generală",
        title: "Obturație mare",
        price: "350 lei"
    },
    {
        id: 9,
        category: "Stomatologie generală",
        title: "Tratament endodontic frontal",
        price: "400 lei"
    },
    {
        id: 10,
        category: "Stomatologie generală",
        title: "Tratament endodontic premolar",
        price: "500 lei"
    },
    {
        id: 11,
        category: "Stomatologie generală",
        title: "Tratament endodontic molar",
        price: "700 lei"
    },
    {
        id: 12,
        category: "Stomatologie generală",
        title: "Retratament endodontic frontal",
        price: "450 lei",
        // extra: "IMPORTANT: Se adauga 100 lei la preturile tratamentului"
    },
    {
        id: 13,
        category: "Stomatologie generală",
        title: "Retratament endodontic premolar",
        price: "550 lei"
    },
    {
        id: 14,
        category: "Stomatologie generală",
        title: "Retratament endodontic frontal",
        price: "750 lei"
    },
    {
        id: 15,
        category: "Stomatologie generală",
        title: "Pivot fibra sticla",
        price: "350 lei"
    },
    {
        id: 16,
        category: "Stomatologie generală",
        title: "Pivot metalic",
        price: "250 lei"
    },
    {
        id: 17,
        category: "Stomatologie generală",
        title: "Pivot zirconiu",
        price: "400 lei"
    },
    {
        id: 18,
        category: "Stomatologie generală",
        title: "Indepartare instrument separat",
        price: "200 lei"
    },
    {
        id: 19,
        category: "Stomatologie generală",
        title: "Coroana provizorie PMMA",
        price: "300 lei"
    },
    {
        id: 20,
        category: "Stomatologie generală",
        title: "Coroana metalo-ceramica TF",
        price: "700 lei"
    },
    {
        id: 21,
        category: "Stomatologie generală",
        title: "Coroana metalo-ceramica SF",
        price: "500 lei"
    },
    {
        id: 22,
        category: "Stomatologie generală",
        title: "Coroana zirconiu monolitic",
        price: "1100 lei"
    },
    {
        id: 23,
        category: "Stomatologie generală",
        title: "Coroana ceramica-zirconiu",
        price: "1200 lei"
    },
    {
        id: 24,
        category: "Stomatologie generală",
        title: "Coroana ceramica integrala",
        price: "1500 lei"
    },
    {
        id: 25,
        category: "Stomatologie generală",
        title: "Incrustatie ceramica",
        price: "1000 lei"
    },
    {
        id: 26,
        category: "Stomatologie generală",
        title: "Incrustatie zirconiu",
        price: "1000 lei"
    },
    {
        id: 27,
        category: "Stomatologie generală",
        title: "Proteza totala acrilica",
        price: "2000 lei"
    },
    {
        id: 28,
        category: "Stomatologie generală",
        title: "Proteza totala flexibila",
        price: "3000 lei"
    },
    {
        id: 29,
        category: "Stomatologie generală",
        title: "Proteza scheletata",
        price: "3500 lei"
    },
    {
        id: 30,
        category: "Chirurgie",
        title: "Extractie inte monoradicular",
        price: "150 lei"
    },
    {
        id: 31,
        category: "Chirurgie",
        title: "Extractie dinte pluriradicular",
        price: "250 lei"
    },
    {
        id: 32,
        category: "Chirurgie",
        title: "Extractie molar de minte erupt",
        price: "400 lei"
    },
    {
        id: 33,
        category: "Chirurgie",
        title: "Extractie molar de minte semiinlcus",
        price: "500 lei"
    },
    {
        id: 34,
        category: "Chirurgie",
        title: "Extractie molar de minte inlcus",
        price: "600 lei"
    },
    {
        id: 35,
        category: "Chirurgie",
        title: "Gingivectomie / arcada",
        price: "500 lei"
    },
    {
        id: 36,
        category: "Chirurgie",
        title: "Gingivectomie / dinte",
        price: "150 lei"
    },
    {
        id: 37,
        category: "Chirurgie",
        title: "Chistectomie",
        price: "500 lei"
    },
    {
        id: 38,
        category: "Chirurgie",
        title: "Aditie os-sinus lift",
        price: "2000 lei"
    },
    {
        id: 39,
        category: "Chirurgie",
        title: "Aditie os",
        price: "2000 lei"
    },
    {
        id: 40,
        category: "Chirurgie",
        title: "Decapusonare",
        price: "250 lei"
    },
    {
        id: 41,
        category: "Chirurgie",
        title: "Drenaj abces",
        price: "250 lei"
    },
    {
        id: 42,
        category: "Chirurgie",
        title: "Frenectomie",
        price: "500 lei"
    },
    {
        id: 43,
        category: "Chirurgie",
        title: "Extractie dinte mobil",
        price: "150 lei"
    },
    {
        id: 44,
        category: "Chirurgie",
        title: "Implant dentar",
        price: "2400 lei"
    },
    {
        id: 45,
        category: "Chirurgie",
        title: "Vestibuloplastie",
        price: "500 lei"
    },
    {
        id: 46,
        category: "Pedodonție",
        title: "Sigilare",
        price: "200 lei"
    },
    {
        id: 47,
        category: "Pedodonție",
        title: "Periaj denrar copii",
        price: "100 lei"
    },
        {
        id: 48,
        category: "Pedodonție",
        title: "Obsturatie dinte temporar",
        price: "200 lei"
    },
    {
        id: 49,
        category: "Estetica",
        title: "Albire dentara",
        price: "1000 lei"
    },.
    {
        id: 50,
        category: "Parodontologie",
        title: "Gutiera bruxism",
        price: "400 lei"
    },
    {
        id: 51,
        category: "Parodontologie",
        title: "Imobilizare",
        price: "600 lei"
    },
    {
        id: 52,
        category: "Parodontologie",
        title: "Chiuretaj paradontal in camp inchis/dinte",
        price: "100 lei"
    },
    {
        id: 53,
        category: "Parodontologie",
        title: "Chiuretaj paradontal in camp deschis/dinte",
        price: "200 lei"
    },
    {
        id: 54,
        category: "Parodontologie",
        title: "Chiuretaj paradontal/arcada",
        price: "800 lei"
    },
    {
        id: 55,
        category: "Parodontologie",
        title: "Parodontometrie",
        price: "250 lei"
    },
    {
        id: 56,
        category: "Parodontologie",
        title: "Remineralizare ICON/dinte",
        price: "250 lei"
    },
    {
        id: 57,
        category: "Parodontologie",
        title: "Consultație de specialitate",
        price: "150 lei"
    },
    {
        id: 58,
        category: "Ortodontie",
        title: "Plan de tratament",
        price: "Gratuit"
    },
    {
        id: 59,
        category: "Ortodontie",
        title: "Aparat ortodontic mobilizabil, preț pe o arcadă",
        price: "900 lei"
    },
    {
        id: 60,
        category: "Ortodontie",
        title: "Control aparat ortodontic mobilizabil",
        price: "50 lei"
    },
    {
        id: 61,
        category: "Ortodontie",
        title: "Reparație aparat mobilizabil",
        price: "200-400 lei"
    },
    {
        id: 62,
        category: "Ortodontie",
        title: "Trainer",
        price: "1000 lei"
    },
    {
        id: 63,
        category: "Ortodontie",
        title: "Al doilea trainer (a doua etapă în tratament)",
        price: "600 lei"
    },
    {
        id: 64,
        category: "Ortodontie",
        title: "Aparat ortodontic fix - bracketuri metalice, preț pe o arcadă",
        price: "2500 lei"
    },
    {
        id: 65,
        category: "Ortodontie",
        title: "Aparat ortodontic fix - bracketuri fizionomice (transparente sau de ceramică cu slot metalic), preţ pe o arcadă",
        price: "3500 lei"
    },
    {
        id: 66,
        category: "Ortodontie",
        title: "Aparat ortodontic fix - bracketuri combinate (fizionomice în zona frontală, vizibilă; metalice in zonele laterale), preț pe o arcadă",
        price: "3000 lei"
    },
    {
        id: 671,
        category: "Ortodontie",
        title: "Aparat ortodontic fix parțial lateral - bracketuri metalice (cuprinde 3 - 5 dinți)",
        price: "1000 lei"
    },
    {
        id: 672,
        category: "Ortodontie",
        title: "Aparat ortodontic fix autoligaturant metalic, preț pe o arcadă",
        price: "4000 lei"
    },
    {
        id: 68,
        category: "Ortodontie",
        title: "Disjunctor cu ancoraj dentar",
        price: "1500 lei"
    },
    {
        id: 69,
        category: "Ortodontie",
        title: "Disjunctor hibrid (ancoraj mixt)",
        price: "5200 lei"
    },
    {
        id: 69,
        category: "Ortodontie",
        title: "Disjunctor hibrid (ancoraj mixt)",
        price: "5200 lei"
    },
    {
        id: 70,
        category: "Ortodontie",
        title: "Disjunctor pe 4 mini-implanturi",
        price: "7200 lei"
    },
    {
        id: 71,
        category: "Ortodontie",
        title: "Dispozitiv Benefit de Distalizare/Mezialiare",
        price: "4800 lei"
    },
    {
        id: 72,
        category: "Ortodontie",
        title: "Masca Delaire",
        price: "500 lei"
    },
    {
        id:73,
        category: "Ortodontie",
        title: "Ortoimplant",
        price: "5500 lei"
    },
    {
        id: 74,
        category: "Ortodontie",
        title: "Îndepărtare aparat fix la cerere",
        price: "300 lei"
    },
    {
        id: 75,
        category: "Ortodontie",
        title: " Îndepărtare aparat fix, preț pe arcadă",
        price: "90 lei"
    },
    {
        id: 76,
        category: "Ortodontie",
        title: "Gutieră de contenție, preț pe arcadă",
        price: "200 lei"
    },
    {
        id: 77,
        category: "Ortodontie",
        title: "Gutieră de contenție, preț pe arcadă, în cazul pacienților carora nu li s-a indepartat aparatul fix în cabinet",
        price: "400 lei"
    },
    {
        id: 78,
        category: "Ortodontie",
        title: "Aparat de contenție colat realizat in cabinet pe arcada superioară",
        price: "290 lei"
    },
    {
        id: 79,
        category: "Ortodontie",
        title: "Aparat de contenție colat realizat in cabinet pe arcada inferioară",
        price: "250 lei"
    },
    {
        id: 80,
        category: "Ortodontie",
        title: "Aparat de contenție colat realizat in cabinet pe arcada superioară, în cazul pacienţilor carora nu li s-a indepartat aparatul fix în cabinet",
        price: "500 lei"
    },
    {
        id: 81,
        category: "Ortodontie",
        title: "Aparat de contenție colat realizat in cabinet pe arcada inferioară, în cazul pacienţilor carora nu li s-a indepartat aparatul fix în cabinet",
        price: "400 lei"
    },
    {
        id: 82,
        category: "Ortodontie",
        title: "Îndepărtare aparat de contenție colat la cererea pacientului sau care a fost 83 fracturat, în cazul pacienților netratați în cabinet (include profilaxia)",
        price: "300 lei"
    },
    {
        id: 83,
        category: "Ortodontie",
        title: "Reparaţie aparat contenție colat, preţ pe dinte",
        price: "35 lei"
    },
    {
        id: 84,
        category: "Ortodontie",
        title: "Reparatie aparat contentie colat, preț pe dinte, în cazul pacienților netrataţi în cabinet",
        price: "65 lei"
    },
    {
        id: 85,
        category: "Ortodontie",
        title: "Inlocuire gutiera de contentie",
        price: "150 lei"
    },
    {
        id: 86,
        category: "Ortodontie",
        title: "Gutieră dezangrenare ocluzală prefabricată",
        price: "800 lei"
    },
    {
        id: 87,
        category: "Ortodontie",
        title: "Control/activare aparat ortodontic preţ pe o arcadă",
        price: "100 lei"
    },
    {
        id: 88,
        category: "Ortodontie",
        title: "Control/activare aparat ortodontic - pret pe 2 arcade",
        price: "180 lei"
    },
    {
        id: 89,
        category: "Ortodontie",
        title: "Control aparate de contenție (cuprinde profilaxie şi efectuare fotografii)",
        price: "100 lei"
    },
    {
        id: 90,
        category: "Ortodontie",
        title: "Recimentare inel ortodontic",
        price: "20 lei"
    },
    {
        id: 91,
        category: "Ortodontie",
        title: "Spark dificultate mică (Spark 10)",
        price: "12000 lei"
    },
    {
        id: 92,
        category: "Ortodontie",
        title: "Spark dificultate medie (Spark 20)",
        price: "16000 lei"
    },
    {
        id: 92,
        category: "Ortodontie",
        title: "Spark dificultate ridicată",
        price: "20000 lei"
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
