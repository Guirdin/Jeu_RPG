let Texte = "Bienvenue dans le jeu";
let Suite = 0;

let DegatHeros;
let DegatEnnemi;

let Nero = 0;
let Basket_Basket = false;
let Explosion = false;
let Roi = false;
let Cour = false;
let Grotte = false;
let Montagne = false;
let choix;
let Livre_Legendaire = false;
let Victoire =false;

class Personnage
{
    constructor (nom, hp, defense, force)
    {
        this.nom = nom;
        this.hp = hp;
        this.defense = defense;
        this.force = force;

    };
};


const Heros = new Personnage("AENOR",15,10,10);

const Corvus = new Personnage("CORVUS",50,20,20);

const Guerrier = new Personnage("GUERRIER",8,6,12);

const Garde = new Personnage("GARDE",10,5,8);

const Monstre = new Personnage("MONSTRE",15,4,13);

const Basket = new Personnage("BASKET",25,0,25);

const Gargouille = new Personnage("GARGOUILLE",6,9,12);

let Ennemi = Guerrier;



function interfaceHeros()
{
    AfficheTexte("VieHeros",Heros.hp);
    AfficheTexte("DefHeros",Heros.defense);
    AfficheTexte("ForceHeros",Heros.force);
}

function interfaceEnnemi()
{
    AfficheTexte("NomEnnemi",Ennemi.nom);    
    AfficheTexte("VieEnnemi",Ennemi.hp);
    AfficheTexte("DefEnnemi",Ennemi.defense);
    AfficheTexte("ForceEnnemi",Ennemi.force);
}

function AfficheTexte(MonId,Txt)
{
    document.getElementById(MonId).innerHTML = Txt;
}

function Cache(Valeur){
    document.getElementById(Valeur).style.visibility='hidden';
}

function Visible(Valeur){
    document.getElementById(Valeur).style.visibility='visible';
}

function VisibleCache(Visi,Cach){
    Visible(Visi);
    Cache(Cach);
}

function BtnValeur (Btn,Valeur){
    document.getElementById(Btn).value = Valeur;
}

function Degat()
{   
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

    if(Explosion == true)
    {
        DegatEnnemi = Ennemi.force + Heros.force;
        DegatHeros = Heros.force - Ennemi.defense + DegatEnnemi;
    }

    Ennemi.hp = Ennemi.hp - DegatHeros;
    Heros.hp = Heros.hp - DegatEnnemi;
}

function Attaque()
{ 
    Degat();
    interfaceHeros();
    interfaceEnnemi();

    if (Ennemi.hp <= 0)
    {
        VisibleCache("btnSuite","btnAttaque");
        BtnValeur("btnSuite","Continuer")
        Texte = "Félicitation vous avez reussi le combat et remporté";
        AfficheTexte("Histoire",Texte);
        Ennemi.hp = 0;
        interfaceEnnemi();
    }
    if (Heros.hp <= 0)
    {
        if (Explosion == true)
        {
        Texte = "Basket à lancer ça tête qui à exploser, ce qui la tuer. Vous avez perdu, voulez-vous recommencer ?";
        AfficheTexte("Histoire",Texte);
        }
        else
        {
            Texte = "Vous avez perdu, voulez-vous recommencer ?";
            AfficheTexte("Histoire",Texte);
        }
        Cache("btnAttaque");
        Cache("btnSuite");
        Visible("btnReco");
        Heros.hp = 0;
        interfaceHeros();
    }
}

function LancerCombat(cible)
{
    VisibleCache("btnAttaque","btnSuite");
    Visible("Ennemi");
    Cache("btnSuite");
    Cache("btnChoix");
    Ennemi = cible;
    interfaceEnnemi();
}

function Recommencer()
{
    window.location.reload();
}
