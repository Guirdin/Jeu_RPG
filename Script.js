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

const Heros = new Personnage("Aenor", 15,10,10);

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

function interfaceHeros()
{
    AfficheTexte("VieHeros",Heros.hp);
    AfficheTexte("DefHeros",Heros.defense);
    AfficheTexte("ForceHeros",Heros.force);
}

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

let Texte = "Bienvenue dans le jeu";
let Suite = 0;


let Nero = 0;
let Basket = false;
let Roi = false;
let Cour = false;
let choix;
let Carte;
let Victoire =false;

function MonHistoire()
{
    switch (Suite) 
    {
        case 0:
            BtnValeur("btnSuite","Continuer");
            Texte = "Il y avait une fois un Roi, qui vivait dans un immense château avec sa fille unique. Elle portait le nom d'Aenor, elle était une guerrière bigrement curieuse mais néanmoins trés doué au combat.";
        break;

        case 1:
            Texte = "Un beau matin alors que le chant du coq retenti. Un curieux étranger se présente dans l'enceinte du chateau. ";
        break;

        case 2:
            Texte = "L'histoire commence vous vous réveiller. Sans perdre un instant vous enfiler des jambieres, pris vos gantelets,  votre épée et décider de sortir de votre chambre";
        break;

        case 3:
            Texte = "Ou voulez vous allez ?";
            VisibleCaché("btnChoix","btnSuite");
            BtnValeur("btnChoix1","Aller dans la cour");
            BtnValeur("btnChoix2","Aller voir le Roi");
        break;

        case 4:
            VisibleCaché("btnSuite","btnChoix")
            if (choix == 1)
            {
                Texte = "En allant dans la cour vous vous dirrigez vers les cochons";
                Cour = true;
                Heros.hp = Heros.hp + 2;
                console.log(Heros.hp);
                interfaceHeros();
            }
            if (choix == 2)
            {
                Texte = "En allant dans la cour vous vous dirrigez vers  ";
                Roi= true;
            }
        break;

        case 5:
            if (Cour == true)
            {
                Texte = "Vous arrivez devants les cochons, un cochon nommé Nero viens vers vous. Que voulez-vous faire";
                VisibleCaché("btnChoix","btnSuite");
                BtnValeur("btnChoix1","Lui donner à manger");
                BtnValeur("btnChoix2","Voler sa nourriture");
            }

            if (Roi == true)
            {
                Texte = "Vous arrivez devants le roi. Que voulez-vous faire";
                VisibleCaché("btnChoix","btnSuite");
                BtnValeur("btnChoix1","Lui Parler du Vagabond");
                BtnValeur("btnChoix2","Lui demander de vous raconter la légende");
            }

        break;

        case 6:
        VisibleCaché("btnSuite","btnChoix")
        if (Cour == true)
        {
            if (choix == 1)
            {
                Texte = "Nero vous remercie et pars"
                Nero=1;
            }

            if (choix == 2)
            {
                Texte = "Nero pars trés énerver"
                Nero=3;
            }
        }

        if (Roi == true)
        {
            if (choix == 1)
            {
                Texte = "Le roi vous explique que le vagabond à l'aire étrange et qu'il va donc s'assurer que tout ce passe bien dans la cour."

            }

            if (choix == 2)
            {
                Texte = "Le roi vous compte l'histoire de la légende et vous donne le livre sacré. Qui est transmit de générations en générations"
                Carte=true;
            }
        }
        break;

        case 7:

        Texte = "Quelque chose ce passe dans la cour, en vous y rendant de mystèrieux combattant vous attaque"
        BtnValeur("btnSuite","Combattre");

        break;

        case 9:

        Combat();

        if (Victoire == true){
            Texte = "Félicitation vous avez reussi le combat et remporté"

            BtnValeur("btnSuite","Continuer");
        } 
        

        break;

        case 10:
        Texte = "Le vagabond ce dévoile. Il dit se nommer Corvus et exige que le roi vienne face à lui. Le roi le rejoignit alors dans la cour."

        VisibleCaché("btnChoix","btnSuite");
        BtnValeur("btnChoix1","Laisser le roi face à Corvus");
        BtnValeur("btnChoix2","Aller aider le Roi");


        break;

        case 11:
        if (choix == 1)
        {
            Texte = "Corvus est trop fort et le roi succombe. Il se proclame alors etre le nouveau roi et que quiconque s'opposerait à lui serais éxécuter"

        }

        if (choix == 2)
        {
            // Combat();
            Texte = ""
    
        }
        break;

        // case :

        // break;
    }

    AfficheTexte("Histoire",Texte);
    Suite++;
}



function Combat()
{ 

    VisibleCaché()
    AfficheTexte("VieHeros",Heros.hp);




}
