// Déclaration de Variables
    let Texte = "Bienvenue dans le jeu";
    let Suite = 0;

    let DegatHeros, DegatEnnemi, DegatAllie, DegatEnnemiA, choix, chiffre, DegatBasket;
    let VieMax = 15;
    let Nero = 0;
    let Basket_Basket, Explosion, Roi, Cour, Grotte, Montagne,Livre_Legendaire,Victoire,Final, Exception, Copain = false;
    let Status = ["vie.","defense.","force."];
// Déclaration de Variables

// Function attribution de point de statistique aléatoire
    function AttributionStat() // Permet d'attribuer un point dans une statistique aléatoirement apres un combat 
    {
        if (chiffre == 0 )
        {
            Heros.hp +=1;
            VieMax +=1;
            interfaceHeros();
        }
        if (chiffre ==  1)
        {
            Heros.defense +=1;
            interfaceHeros();
        }
        if (chiffre ==  2)
        {
            Heros.force +=1;
            interfaceHeros();
        }
    }
    function ChiffreRdm(min, max) 
    {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
// Function attribution de point de statistique aléatoire

// Déclaration des class
    class Personnage // Class mère 
    {
        constructor (nom, hp, defense, force)
        {
            this.nom = nom;
            this.hp = hp;
            this.defense = defense;
            this.force = force;

        };
    };

    // Class héritier
        const Heros = new Personnage("AENOR",15,10,10);

        const Corvus = new Personnage("CORVUS",35,20,20);

        const Barbarus = new Personnage("BARBARUS",49,30,30);

        const Grizius = new Personnage("GRIZIUS",50,25,40);

        const Guerrier = new Personnage("GUERRIER",10,6,12);

        const Garde = new Personnage("GARDE",10,5,8);

        const Monstre = new Personnage("MONSTRE",15,4,13);

        const Basket = new Personnage("BASKET",25,0,25);

        const JustNero = new Personnage ("NERO",100,50,10);

        const Gargouille = new Personnage("GARGOUILLE",8,6,12);

        const Gladiateur = new Personnage("GLADIATEUR",6,12,8);
    // Class héritier

// Déclaration des class


// Attribution d'un ennemi et d'un allié par défaut afin de charger les interfaces lancer dans l'html
let Ennemi = Guerrier;
let Allie = Grizius;
// Sans cette attribution la page html ne se lance pas correctement 


// Création des interfaces
    function interfaceHeros()
    {
        AfficheTexte("VieHeros",Heros.hp);
        AfficheTexte("DefHeros",Heros.defense);
        AfficheTexte("ForceHeros",Heros.force);
    }

    function interfaceAllie()
    {
        AfficheTexte("NomAllie",Allie.nom);    
        AfficheTexte("VieAllie",Allie.hp);
        AfficheTexte("DefAllie",Allie.defense);
        AfficheTexte("ForceAllie",Allie.force);
    }

    function interfaceBasket()
    {
        AfficheTexte("NomBasket",Basket.nom);    
        AfficheTexte("VieBasket",Basket.hp);
        AfficheTexte("DefBasket",Basket.defense);
        AfficheTexte("ForceBasket",Basket.force);
    }

    function interfaceEnnemi()
    {
        AfficheTexte("NomEnnemi",Ennemi.nom);    
        AfficheTexte("VieEnnemi",Ennemi.hp);
        AfficheTexte("DefEnnemi",Ennemi.defense);
        AfficheTexte("ForceEnnemi",Ennemi.force);
    }
// Création des interfaces


// Déclaration de fonction utiles
    function AfficheTexte(monId,Txt)  // Permet de changer le contenu entre des balises
    {
        document.getElementById(monId).innerHTML = Txt;
    }

    function RemplaceImage(de_monId,par_maSrc) // Permet de changer la source (image) d'une balise
    {
        document.getElementById(de_monId).src = par_maSrc;
    }

    function RepositionLeft(de_monId,par_maValeur) // Permet de repositionner une balise vers la gauche
    {
        document.getElementById(de_monId).style.left=par_maValeur;
    }

    function RepositionTop(de_monId,par_maValeur) // Permet de repositionner une balise vers le haut
    {
        document.getElementById(de_monId).style.top=par_maValeur;
    }

    function Cache(monId) // Permet de rendre invisible une balise
    {
        document.getElementById(monId).style.visibility='hidden';
    }

    function Visible(monId) // Permet de rendre visible une balise
    {
        document.getElementById(monId).style.visibility='visible';
    }

    function VisibleCache(Visi,Cach) // Permet de rendre visible une balise puis invisible une autre
    {
        Visible(Visi);
        Cache(Cach);
    }

    function BtnValeur(Btn,Valeur) // Permet de changer la valeur d'un bouton
    {
        document.getElementById(Btn).value = Valeur;
    }

    function Recommencer() // Permet de recommencer le jeu du début
    {
        window.location.reload();
    }

// Déclaration de fonction utiles

// Fonction de Gestion des degâts
    function Degat() // les degâts se calcul avec le rapport entre l'attaque et la défense. Ils sont retirer diractement sur les points de vie
    { // Si la défense est trop haute les dégâts seront toujours de 1 point minimum


    // Calcul de degâts de base
            if (Heros.force <= Ennemi.defense) 
            {
                DegatHeros = 1;
            }
            if (Ennemi.force <= Heros.defense)
            {
                DegatEnnemi = 1;
            }
            if (Heros.force > Ennemi.defense)
            {
                DegatHeros = Heros.force - Ennemi.defense;
            }
            if (Ennemi.force > Heros.defense)
            {
                DegatEnnemi = Ennemi.force - Heros.defense;
            }
    // Calcul de degâts de base


    // Variante du calcul de base sans allié mais avec l'explosion
            if (Copain == false)
            {
                if(Explosion == true) // l'ennemi se prend ça propre attaque en degâts en plus du calcul normal
                {
                    DegatEnnemi = Ennemi.force + Heros.force;
                    DegatHeros = Heros.force - Ennemi.defense + DegatEnnemi;
                }
            }
    // Variante du calcul de base sans allié mais avec l'explosion


    // Variante du calcul de base avec allié
        if (Copain == true)
        {

            if (Allie.force <= Ennemi.defense)
            {
                DegatAllie = 1;
            }
            if (Ennemi.force <= Allie.defense)
            {
                DegatEnnemiA = 1;
            }
            if (Allie.force > Ennemi.defense)
            {
                DegatAllie = Allie.force - Ennemi.defense;
            }
            if (Ennemi.force > Allie.defense)
            {
                DegatEnnemiA = Ennemi.force - Allie.defense;
            }
    // Variante du calcul de base avec allié


    // Variante du calcul de base avec Nero (fin du jeu)
            if (Nero == 3 || Nero == 0) // Si nero est neutre ou contre nous
            {
                if(Explosion == true) // Permet d'ajouter l'explosion avec l'allié
                {
                    DegatBasket = Basket.force;
                    Allie.hp -= DegatBasket;
                    Basket.hp -= DegatBasket;
                    Ennemi.hp -= DegatBasket;
                    Heros.hp -= DegatBasket;
                }
            }
            if (Nero == 1) // Si Nero est avec nous
            {
                if(Explosion == true) // Si il y a l'explosion Neros vous aide en vous protégeant 
                {
                    DegatBasket = Basket.force;
                    Basket.hp -= DegatBasket;
                    Ennemi.hp -= DegatBasket;
                    Texte= "Basket, basket a lancé sa tête qui a explosé et la tué. Heureusemnet Nero c'est interposer et vous à protéger de l'explosion";
                    AfficheTexte("Histoire",Texte);
                    VisibleCache("btnSuite","btnAttaque")
                }
            }
    // Variante du calcul de base avec Nero (fin du jeu)
            Allie.hp -= DegatEnnemiA;
            Ennemi.hp -= DegatAllie;
        }
        Ennemi.hp -= DegatHeros;
        Heros.hp -= DegatEnnemi;
    }
// Fonction de Gestion des degâts

// Function regroupant les actions lier aux degâts
    function Attaque()
    {
        // Calcul des degats puis modification des interfaces en conséquence
        Degat();
        interfaceHeros();
        interfaceEnnemi();
        interfaceAllie();
        interfaceBasket();

        if (Final == false)
        {
            // Evenement à la mort de l'ennemi
                if (Ennemi.hp <= 0)
                {
                    chiffre = ChiffreRdm(0,2);
                    VisibleCache("btnSuite","btnAttaque");
                    BtnValeur("btnSuite","Continuer")
                    Texte = "Félicitation vous avez reussi le combat et remporté 1 point de " + Status[chiffre] ;
                    AttributionStat();
                    AfficheTexte("Histoire",Texte);
                    Ennemi.hp = 0;
                    interfaceEnnemi();
                }
            // Evenement à la mort de l'ennemi
        }
        // Evenement à la mort de l'héroïne
            if (Heros.hp <= 0)
            {
                if (Explosion == true) // Avec l'explosion
                {
                Texte = "Basket à lancer ça tête qui à exploser, ce qui la tuer. Vous avez perdu, voulez-vous recommencer ?";
                AfficheTexte("Histoire",Texte);
                }
                else
                {
                    Texte = "Vous avez perdu, voulez-vous recommencer le jeu ?";
                    AfficheTexte("Histoire",Texte);
                }
                Cache("btnAttaque");
                Cache("btnSuite");
                Visible("btnReco");
                Heros.hp = 0;
                interfaceHeros();
            }
        // Evenement à la mort de l'héroïne

        // Evenement à la mort de l'allié
            if (Allie.hp <= 0) // Cette condition ne seras jamais activer votre allié ayant plus de vie il ne pouras pas mourir avant vous
            {
                Allie.hp = 0;
                Texte = "Votre partenaire est mort";
                AfficheTexte("Histoire",Texte);
            }
        // Evenement à la mort de l'allié

        // Evenement Final
        if (Final == true) // Histoire final lier aux degâts
        {

            if (Exception == true)
            {
            VisibleCache("btnSuite","btnAttaque");
            Texte = "Corvus semble trop fort ! En regardant vers le ciel vous voyez Grizius. Il vous dit de vous servir de la lame des limbes";
            AfficheTexte("Histoire",Texte);
            }
            if (Heros.hp > 0)
            {
                if (Ennemi.hp <= 0)
                {
                    VisibleCache("btnSuite","btnAttaque");
                    Texte = "Félicitation vous avez vaincu Barbarus";
                    AfficheTexte("Histoire",Texte);
                }
            }
            if (Ennemi.hp <= 0)
            {
                Ennemi.hp = 0;
                interfaceEnnemi();
            }
        // Evenement Final
        }
    }
// Function regroupant les actions lier aux degâts


// Fonction de gestion du lancement des combats
function LancerCombat(cible)
    {
        VisibleCache("btnAttaque","btnSuite");
        Visible("Ennemi");
        Cache("btnSuite");
        Cache("btnChoix");
        Ennemi = cible;
        interfaceEnnemi();
    }
// Fonction de gestion du lancement des combats