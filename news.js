const news = 
[
    {
        "title": "La Classe des 18 ans reprend du service !",
        "imagesrc": "",
        "description": "Si depuis février 2020, la Classe des 18 ans - projet initié par le Pôle Jeunesse de Mont de Marsan Agglo - est impactée par le contexte sanitaire, la promotion 2004 a décidé de relancer les activités pour permettre aux jeunes du territoire de se retrouver autour de moments festifs et conviviaux."
    },
    
    {
        "title": "La Classe des 18 ans reprend du service !",
        "imagesrc": "",
        "description": "Si depuis février 2020, la Classe des 18 ans - projet initié par le Pôle Jeunesse de Mont de Marsan Agglo - est impactée par le contexte sanitaire, la promotion 2004 a décidé de relancer les activités pour permettre aux jeunes du territoire de se retrouver autour de moments festifs et conviviaux."
    },
    
    {
        "title": "Adaptation des services municipaux et communautaires aux nouvelles mesures sanitaires",
        "imagesrc": "",
        "description": "En raison de la dégradation du contexte sanitaire, de nouvelles mesures sanitaires sont mises en place sur le territoire jusqu'au 3 février.\nSi les services municipaux et communautaires restent ouverts au grand public, certains adaptent leurs horaires."
    },

    {
        "title": "La Classe des 18 ans reprend du service !",
        "imagesrc": "",
        "description": "Si depuis février 2020, la Classe des 18 ans - projet initié par le Pôle Jeunesse de Mont de Marsan Agglo - est impactée par le contexte sanitaire, la promotion 2004 a décidé de relancer les activités pour permettre aux jeunes du territoire de se retrouver autour de moments festifs et conviviaux."
    },

    {
        "title": "La Classe des 18 ans reprend du service !",
        "imagesrc": "",
        "description": "Si depuis février 2020, la Classe des 18 ans - projet initié par le Pôle Jeunesse de Mont de Marsan Agglo - est impactée par le contexte sanitaire, la promotion 2004 a décidé de relancer les activités pour permettre aux jeunes du territoire de se retrouver autour de moments festifs et conviviaux."
    }
    
];

function loadNews() {
    const regex = /(?:\r\n|\r|\n)/g;
    var page = document.getElementsByClassName('newsList');
    page = page[0];
    var title, imagesrc, description;
    news.forEach(element => {
        
        title = element.title;
        title.replaceAll(regex,'<br/>hdhgfd');
        console.log(title);
        description = element.description;
        description.replaceAll(regex,'<br/>hgfdhgfd');

        imagesrc = (element.imagesrc) == "" ? "./images/defaultNewsImg.jpg" : element.imagesrc;

        page.innerHTML += `
        <div class="newsBox">
            <img src="${imagesrc}">
            <div class="newsContent">
                <h2 class="title">${title}</h2>
                <br>
                <p class="desc">${description}</p>
            </div>
        </div>
        `; 
    });
}