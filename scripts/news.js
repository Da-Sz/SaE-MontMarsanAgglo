const news = 
[
    {
        "title": "Présentation du Projet Global de Territoire de Mont de Marsan Agglo",
        "type": "Projet",
        "imagesrc": "./images/pageNews/actu1.jpg",
        "description": "Territoire familial par essence, l'agglomération montoise est attractive pour les jeunes ménages. Mont de Marsan Agglo et ses partenaires se sont donc engagés avec enthousiasme et détermination dans la construction d'un projet global de territoire (PGT) pour les 0-30 ans. Au terme d'un long travail partenarial et participatif, le projet de PGT"
    },
    
    {
        "title": "Rencontre avec une virtuose de la couleur",
        "imagesrc": "./images/pageNews/actu2.jpg",
        "type": "Rencontre",
        "description": "Du 22 octobre au 12 novembre, la coloriste Isabelle Merlet expose ses couleurs à la médiathèque et vous emporte dans l'univers des albums de bande dessinée comme jamais vous ne les avez perçus."
    },
    
    {
        "title": "La bougeothèque, espace de motricité libre pour les tout-petits",
        "type": "",
        "imagesrc": "./images/pageNews/actu3.jpg",
        "description": "Terrain de découverte et d'apprentissage, la bougeothèque repose sur le concept de motricité libre des enfants, en les laissant explorer librement et à leur rythme leur environnement, dans un cadre sécurisé et adapté. Entrée libre et gratuite."
    },

    {
        "title": "La Médiathèque du Marsan, le Liban à l'affiche du Mois du doc",
        "type": "",
        "imagesrc": "./images/pageNews/actu4.jpg",
        "description": "Dans le cadre du Mois du film documentaire, la Médiathèque du Marsan propose un voyage au Liban, à travers deux films documentaires qui constituent deux beaux objets cinématographiques."
    },

    {
        "title": "Présentation du Projet Global de Territoire de Mont de Marsan Agglo",
        "type": "Territoire",
        "imagesrc": "./images/pageNews/actu5.jpg",
        "description": "Territoire familial par essence, l'agglomération montoise est attractive pour les jeunes ménages. Mont de Marsan Agglo et ses partenaires se sont donc engagés avec enthousiasme et détermination dans la construction d'un projet global de territoire (PGT) pour les 0-30 ans. Au terme d'un long travail partenarial et participatif, le projet de PGT... "
    },
    {
        "title": "Les Campulsations débarquent à Mont de Marsan !",
        "type": "Festival",
        "imagesrc": "./images/pageNews/actu6.jpg",
        "description": 'Pour son édition 2022, le festival "Les campulsations" fait halte à Mont de Marsan le 29 septembre prochain, au marché Saint-Roch ( initialement prévu place de la mairie). L\'occasion pour les étudiants montois de se rassembler et de créer des liens dans une ambiance festive.'
    },
    {
        "title": "Reprise des ateliers informatique",
        "type": "Communauté",
        "imagesrc": "./images/pageNews/actu7.jpg",
        "description": "Les ateliers informatique reprennent à la Plateforme Sociale du Marsan. Prochain rendez-vous mardi 13 septembre à 10h30. Gratuits et ouverts à tous, sur inscription, ces ateliers visent à lutter contre l'exclusion numérique en proposant d'explorer par petit groupe les technologies numériques de manière ludique et pédagogique."
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

document.querySelector("#searchQueryI").addEventListener("keyup", event => {
    if(event.key !== "Enter") return; // Use `.key` instead.
    document.querySelector("#searchBtn").click();
    event.preventDefault(); // No need to `return false;`.
});

function recherche(mot) {
    var cards = document.getElementsByClassName("newsCard");

    for (let i = 0 ; i < cards.length ; i++) {
        if((mot.trim()).length == 0) {
            cards[i].style.display = "block";
        } else if (cards[i].textContent.toUpperCase().indexOf (mot) == -1) {
            cards[i].style.display = "none";
        }
    }
}

var bouton = document.getElementById("searchBtn");
var input = document.getElementById("searchQueryI");
bouton.onclick = function() {
    //console.log(input.value)
    recherche(input.value.toUpperCase())
}