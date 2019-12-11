let Texte = "Bienvenue dans le jeu";
let Suite = 0;

let DegatHeros, DegatEnnemi, DegatAllie, DegatEnnemiA, choix, chiffre, DegatBasket;
let VieMax = 15;
let Nero = 0;
let Basket_Basket, Explosion, Roi, Cour, Grotte, Montagne,Livre_Legendaire,Victoire,Final, Exception, Copain = false;
let Status = ["vie.","defense.","force."];


function AttributionStat()
{
    if (chiffre == 0 )
    {
        Heros.hp +=1 ;
        VieMax +=1;
        interfaceHeros();
    }
    if (chiffre ==  1)
    {
        Heros.defense +=1 ;
        interfaceHeros();
    }
    if (chiffre ==  2)
    {
        Heros.force +=1;
        interfaceHeros();
    }
}


function ChiffreRdm(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

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

let Ennemi = Guerrier;

let Allie = Grizius;



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

function AfficheTexte(MonId,Txt)
{
    document.getElementById(MonId).innerHTML = Txt;
}

function RemplaceImage(de_monId,par_maSrc)
{
    document.getElementById(de_monId).src = par_maSrc;
}

function RepositionLeft(de_monId,par_maValeur)
{
    document.getElementById(de_monId).style.left=par_maValeur;
}

function Cache(Valeur)
{
    document.getElementById(Valeur).style.visibility='hidden';
}

function Visible(Valeur)
{
    document.getElementById(Valeur).style.visibility='visible';
}

function VisibleCache(Visi,Cach)
{
    Visible(Visi);
    Cache(Cach);
}

function BtnValeur (Btn,Valeur)
{
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

    if (Copain == false)
    {
        if(Explosion == true)
        {
            DegatEnnemi = Ennemi.force + Heros.force;
            DegatHeros = Heros.force - Ennemi.defense + DegatEnnemi;
        }
    }
    
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

        if (Nero == 3 || Nero == 0)
        {
            if(Explosion == true)
            {
                DegatBasket = Basket.force;
                Allie.hp -= DegatBasket;
                Basket.hp -= DegatBasket;
                Ennemi.hp -= DegatBasket;
                Heros.hp -= DegatBasket;
            }
        }
        if (Nero == 1)
        {
            if(Explosion == true)
            {
                DegatBasket = Basket.force;
                Basket.hp -= DegatBasket;
                Ennemi.hp -= DegatBasket;
                Texte= "Basket, basket à lancer sa tête qui à exploser et la tuer. Heureusemnet Nero c'est interposer et vous à protéger de l'explosion";
                AfficheTexte("Histoire",Texte);
                VisibleCache("btnSuite","btnAttaque")
            }
            
        }
        Allie.hp -= DegatEnnemiA;
        Ennemi.hp -= DegatAllie;
    }
    Ennemi.hp -= DegatHeros;
    Heros.hp -= DegatEnnemi;
}

function Attaque()
{ 
    Degat();
    interfaceHeros();
    interfaceEnnemi();
    interfaceAllie();
    interfaceBasket();

    if (Final == false)
    {
        console.log("cc");
        if (Ennemi.hp <= 0)
        {
            console.log("re");
            chiffre = ChiffreRdm(0,2);
            VisibleCache("btnSuite","btnAttaque");
            BtnValeur("btnSuite","Continuer")
            Texte = "Félicitation vous avez reussi le combat et remporté 1 point de " + Status[chiffre] ;
            AttributionStat();
            AfficheTexte("Histoire",Texte);
            Ennemi.hp = 0;
            
            interfaceEnnemi();
        }
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
            Texte = "Vous avez perdu, voulez-vous recommencer le jeu ?";
            AfficheTexte("Histoire",Texte);
        }
        Cache("btnAttaque");
        Cache("btnSuite");
        Visible("btnReco");
        Heros.hp = 0;
        interfaceHeros();
    }

    if (Allie.hp <= 0)
    {
        Allie.hp = 0;
        Texte = "Votre partenaire est mort";
        AfficheTexte("Histoire",Texte);
    }

    if (Final == true)
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


function CombatFinal()
{
    VisibleCache("btnAttaque","btnSuite");
    Visible("Ennemi");
    Cache("btnChoix");
    Ennemi = Corvus;
    interfaceEnnemi();

}


function Recommencer()
{
    window.location.reload();
}
