const news = 
[
    {
        "title": "La Classe des 18 ans reprend du service !",
        "type": "",
        "imagesrc": "",
        "description": "Si depuis février 2020, la Classe des 18 ans - projet initié par le Pôle Jeunesse de Mont de Marsan Agglo - est impactée par le contexte sanitaire, la promotion 2004 a décidé de relancer les activités pour permettre aux jeunes du territoire de se retrouver autour de moments festifs et conviviaux."
    },
    
    {
        "title": "La Classe des 18 ans reprend du service !",
        "imagesrc": "",
        "type": "",
        "description": "Si depuis février 2020, la Classe des 18 ans - projet initié par le Pôle Jeunesse de Mont de Marsan Agglo - est impactée par le contexte sanitaire, la promotion 2004 a décidé de relancer les activités pour permettre aux jeunes du territoire de se retrouver autour de moments festifs et conviviaux."
    },
    
    {
        "title": "Adaptation des services municipaux et communautaires aux nouvelles mesures sanitaires",
        "type": "",
        "imagesrc": "",
        "description": "En raison de la dégradation du contexte sanitaire, de nouvelles mesures sanitaires sont mises en place sur le territoire jusqu'au 3 février.\nSi les services municipaux et communautaires restent ouverts au grand public, certains adaptent leurs horaires."
    },

    {
        "title": "La Classe des 18 ans reprend du service !",
        "type": "",
        "imagesrc": "",
        "description": "Si depuis février 2020, la Classe des 18 ans - projet initié par le Pôle Jeunesse de Mont de Marsan Agglo - est impactée par le contexte sanitaire, la promotion 2004 a décidé de relancer les activités pour permettre aux jeunes du territoire de se retrouver autour de moments festifs et conviviaux."
    },

    {
        "title": "La Classe des 18 ans reprend du service !",
        "type": "",
        "imagesrc": "",
        "description": "Si depuis février 2020, la Classe des 18 ans - projet initié par le Pôle Jeunesse de Mont de Marsan Agglo - est impactée par le contexte sanitaire, la promotion 2004 a décidé de relancer les activités pour permettre aux jeunes du territoire de se retrouver autour de moments festifs et conviviaux."
    }
    
];

const MAX_CH = 400;

$(document).ready(function() {
    loadCards();
})

function loadCards() {
    var title, type, imagesrc, description;
    news.forEach(element => {

        title = element.title;
        description = element.description;
        type = (element.type) == "" ? "Communauté" : element.type;
        imagesrc = (element.imagesrc) == "" ? "./images/defaultNews.jpg" : element.imagesrc;
        $(".container").append(`

            <a href="#" class="newsCard">
              <div class="cardHeading">
                <img src="${imagesrc}">
              </div>
              <div class="cardBody">
                <span class="cardType">${type}</span>
                <h4 class="cardTitle">${title}</h4>
                <p class="cardContent">${description}</p>
              </div>
            </a44>`)
    })

    $(".cardContent").each(function(i, obj) {
        console.log("oe");
        let str = $(this).text();

        if($(this).text().length > MAX_CH) {
            $(this).text((str.substring(0, MAX_CH).trim()) + "...");
        }
    })
}

function recherche(mot) {
    var cards = document.getElementsByClassName("newsCard");
    for (let i = 0 ; i < cards.length ; i++) {
        if (cards[i].textContent.toUpperCase().indexOf (mot) == -1) {
            cards[i].style.display = "none";
        }
    }
}

var bouton = document.getElementById("boutonRecherche")
var input = document.getElementById("input")
bouton.onclick = function() {
    //console.log(input.value)
    recherche(input.value.toUpperCase())
}