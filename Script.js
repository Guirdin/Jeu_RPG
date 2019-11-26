class Personnage
{
    constructor (nom, hp, defense, force, xp, niveau)
    {
        this.nom = nom;
        this.hp = hp;
        this.defense = defense;
        this.force = force;
        this.xp = xp;
        this.niveau = niveau;
    };
    
};

class Aenor extends Personnage
{
    constructor ()
    {
        super (nom, hp, defense, force, niveau);
    };
    nom = "Aenor";
    hp = 10;
    defense = 10;
    force = 10;
    niveau = 1;
};

class Barbarus extends Personnage{

    constructor ()
    {
        super (nom, hp, defense, force);
    };
    nom = "Barbarus";
    hp = 1000;
    defense = 1000;
    force = 1000;
};

class Grizius extends Personnage{

    constructor ()
    {
        super (nom, hp, defense, force);
    }
    nom = "Grizius";
    hp = 1000;
    defense = 1000;
    force = 1000;
};

function le_niveau()
{
    if(xp >= 100)
    {
        niveau++;
    }
};


let Texte = "Bienvenue dans le jeu";
let Suite = 0;


function AfficheTexte(MonId,Txt)
{
    document.getElementById(MonId).innerHTML = Txt;
}

function Caché(Valeur){
    document.getElementById(Valeur).style.visibility='hidden';
}

function Visible(Valeur){
    document.getElementById(Valeur).style.visibility='visible';
}

function VisibleCaché(Visi,Cach){
    Visible(Visi);
    Caché(Cach);
}

function BtnValeur (Btn,Valeur){
    document.getElementById(Btn).value = Valeur;
}


let Nero = false;
let Basket = false;
let Roi = false;
let Cour = false;
let choix;


function MonHistoire()
{
    switch (Suite) 
    {
        case 0:
            BtnValeur("btnSuite","Continuer");
            Texte = "Il y avait une fois un Roi, qui vivait dans un immense château avec sa fille unique. Elle portait le nom d'Aenor, elle était une guerrière bigrement curieuse mais néanmoins trés doué au combat.";
        break;

        case 1:
            Texte = "L'histoire commence vous vous réveiller. Sans perdre un instant vous enfiler des jambieres, pris vos gantelets,  votre épée et décider de sortir de votre chambre";
        break;

        case 2:
            Texte = "Ou voulez vous allez ?";
            VisibleCaché("btnChoix","btnSuite");
            BtnValeur("btnChoix1","Aller dans la cour");
            BtnValeur("btnChoix2","Aller voir le Roi");
        break;

        case 3:
            VisibleCaché("btnSuite","btnChoix")
            if (choix == 1)
            {
                Texte = "En allant dans la cour vous vous dirrigez vers les cochons";
                Cour = true;
            }
            if (choix == 2)
            {
                Texte = "En allant dans la cour vous vous dirrigez vers  ";
                Roi= true;
            }
        break;

        case 4:
            if (Cour == true)
            {
                Texte = "Vous arrivez devants les cochons, un cochon nommé Nero viens vers vous. Que voulez-vous faire";
                VisibleCaché("btnChoix","btnSuite");
                BtnValeur("btnChoix1","Lui donner à manger");
                BtnValeur("btnChoix2","Voler ça nourriture");
            }

            if (Roi == true)
            {
                Texte = "Vous arrivez devants le roi. Que voulez-vous faire";
                VisibleCaché("btnChoix","btnSuite");
                BtnValeur("btnChoix1","Lui Parler du Vagabond");
                BtnValeur("btnChoix2","Lui demander de vous raconter la légende");
            }

        break;

        case 5:
        VisibleCaché("btnSuite","btnChoix")
        if (Cour == true)
        {
            if (choix == 1)
            {
                Texte = "Nero vous remercie et pars"
            }

            if (choix == 2)
            {
                Texte = "Nero pars trés énerver"
            }
        }

        if (Roi == true)
        {
            if (choix == 1)
            {
                Texte = "Le vagabond"
            }

            if (choix == 2)
            {
                Texte = "Il était une fois"
            }
        }

        break;

        // case :

        // break;
    }

    AfficheTexte("Histoire",Texte);
    Suite++;
}


