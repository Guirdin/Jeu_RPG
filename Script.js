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



let Ennemi = Guerrier;



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

let Texte = "Bienvenue dans le jeu";
let Suite = 0;

let DegatHeros;
let DegatEnnemi;

let Nero = 0;
let Basket = false;
let Roi = false;
let Cour = false;
let choix;
let Livre_Legendaire = false;
let Victoire =false;

function MonHistoire()
{
    switch (Suite) 
    {
        case 0:
            BtnValeur("btnSuite","Continuer");
            Texte = "Il y avait une fois un Roi, qui vivait dans un immense château avec sa fille unique. Elle portait le nom d'Aenor, elle était une guerrière bigrement curieuse mais néanmoins trés doué au combat.";
            Suite= 15;
        break;

        case 1:
            Texte = "Un beau matin alors que le chant du coq retenti. Un curieux étranger se présente dans l'enceinte du chateau. ";
        break;

        case 2:
            Texte = "L'histoire commence vous vous réveiller. Sans perdre un instant vous enfiler des jambieres, pris vos gantelets,  votre épée et décider de sortir de votre chambre";
        break;

        case 3:
            Texte = "Où voulez vous allez ?";
            VisibleCache("btnChoix","btnSuite");
            BtnValeur("btnChoix1","Aller dans la cour");
            BtnValeur("btnChoix2","Aller voir le Roi");
        break;

        case 4:
            VisibleCache("btnSuite","btnChoix")
            if (choix == 1)
            {
                Texte = "En allant dans la cour vous vous dirrigez vers les cochons";
                Cour = true;
            }
            if (choix == 2)
            {
                Texte = "Vous arrivez devants le roi.";
                Roi= true;
            }
        break;

        case 5:
            if (Cour == true)
            {
                Texte = "Vous arrivez devants les cochons, un cochon nommé Nero viens vers vous. Que voulez-vous faire";
                VisibleCache("btnChoix","btnSuite");
                BtnValeur("btnChoix1","Lui donner à manger");
                BtnValeur("btnChoix2","Voler sa nourriture");
            }

            if (Roi == true)
            {
                Texte = "Que voulez-vous faire ?";
                VisibleCache("btnChoix","btnSuite");
                BtnValeur("btnChoix1","Lui Parler du Vagabond");
                BtnValeur("btnChoix2","Lui demander de vous raconter la légende");
            }

        break;

        case 6:
        VisibleCache("btnSuite","btnChoix")
        if (Cour == true)
        {
            if (choix == 1)
            {
                Texte = "Nero vous remercie et pars"
                Nero=1;
            }

            if (choix == 2)
            {
                Texte = "Vous gagnez 5 point de vie et Nero pars trés énerver"
                Nero=3;
                Heros.hp = Heros.hp + 5;
                interfaceHeros();
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
                Livre_Legendaire=true;
            }
        }
        break;

        case 7:
        
        Texte = "Quelque chose ce passe dans la cour, en vous y rendant de mystèrieux combattant vous attaque"
        BtnValeur("btnSuite","Combattre");
        break;

        case 8:
        Combat();

        break;

        case 9:
        Cache("Ennemi");
        Texte = "Le vagabond ce dévoile. Il dit se nommer Corvus et exige que le roi vienne face à lui. Le roi le rejoignit alors dans la cour."

        VisibleCache("btnChoix","btnSuite");
        BtnValeur("btnChoix1","Laisser le roi face à Corvus");
        BtnValeur("btnChoix2","Aller aider le Roi");


        break;

        case 10:
        if (choix == 1)
        {
            Texte = "Corvus est trop fort et le roi succombe. Il se proclame alors etre le nouveau roi et que quiconque s'opposerait à lui serais éxécuter"
            VisibleCache("btnSuite","btnChoix");
        }

        if (choix == 2)
        {
            Texte="Corvus vous attaque";
            Cache("btnChoix");
            Ennemi = Corvus;
            interfaceEnnemi();
            Combat();
    
        }
        break;

        case 11:
        
        Texte = "Le vagabon découronna le rois et pris sa place, la fête de couronement auras lieu dans 2 jours.";        
        break;

        case 12:

        if (Livre_Legendaire == true )
        {
            Texte = "Grâce au livre que le roi vous a donné. Vous commencez vôtre aventure et gagnez 2 points de vie, de force et 1 point de défense";
            Heros.hp = Heros.hp + 2;
            Heros.force = Heros.force + 2;
            Heros.defense = Heros.defense + 1;
            interfaceHeros();
            VisibleCache("btnSuite","btnChoix");
            Suite = 15 ;
        }
        else
        {
        Texte="Où voulez vous allez ?";
        VisibleCache("btnChoix","btnSuite");
        BtnValeur("btnChoix1","Aller dans la chambre de corvus");
        BtnValeur("btnChoix2","Aller vous entrainer");
        }
        
        break;

        case 13:
            if (choix == 1)
            {
                   Texte = "Vous vous dirigez vers la chambre du Corvus, deux gardes vous interrompt... "
                   VisibleCache("btnSuite","btnChoix");

            }
            if (choix == 2)
            {
               if (Nero==1)
               {
                    Texte = "Nero vous y attendait et vous donne le livre de légende"
                    Livre_Legendaire = true;
                    Suite = 15;
                    VisibleCache("btnSuite","btnChoix");
               }
               else
               {
                    VisibleCache("btnSuite","btnChoix");
                    Texte = "Vous allez vous entrainer."

                    choix = 2;
                    Suite-=4;
               }
            }
        break;
        
        case 14:

            if (Nero==1)
            {
                
                Texte = "Nero vous arrête et vous donne le livre de légende"
                Livre_Legendaire = true;
                Suite = 15;
            }
            else
            {
                Texte="Que voulez-vous faire ?";
                VisibleCache("btnChoix","btnSuite");
                BtnValeur("btnChoix1","Affronter");
                BtnValeur("btnChoix2","Fuir");
            }
            


        break;

        case 15:
            if (choix == 1)
            {
                //affronter les gardes
                Texte="Les gardes vous attaque";
                Cache("btnChoix");
                Ennemi = Garde;
                interfaceEnnemi();
                Combat();
            }
            if(choix == 2){
                // Fuir
                VisibleCache("btnSuite","btnChoix");
                Texte = "Vous êtes appeurrer face au charisme de ces deux soldats et fuyer en appelant votre maman. Vôtre pantalon tombe et en le remettant vous voyez une ombre"

                choix = 2;
                Suite-=6;     
            }

        break;

        case 16:
            Texte = "Vous partez pour le Pahoehoe";
            VisibleCache("btnSuite","btnChoix");
        break;
    
        case 17:
            Texte = "Sur le chemin, vous croisez un monstre";
            VisibleCache("btnSuite","btnChoix");

        break;

        case 18:

        Texte="Le Monstre vous attaque";
        Cache("btnChoix");
        Ennemi = Monstre;
        interfaceEnnemi();
        Combat();
            
        break;

        case 19:
            Cache("Ennemi");
            VisibleCache("btnChoix","btnSuite");
            if (Nero == 1)
            {
                Texte="Vous tombez sur Nero. Nero content, il vous octroie de la Force. Derrière Nero se trouve un croisement, que faites-vous?"
                Heros.force = Heros.force + 5;
                interfaceHeros();
            }
            if (Nero == !1)
            {
                Texte= "Vous tombez sur un croisement";
            }

            BtnValeur("btnChoix1","Allez en direction d'une grotte");
            BtnValeur("btnChoix2","Allez en direction du pied de la montagne");

        break;

        case 20:
            if(choix==1){
                if(Nero == 1)
                {
                    Texte = "Nero parti à l'opposer de vous, vous tombez dans une grotte";
                    
                }
                else{
                    Texte="Vous sentez une aura derriere vous. Vous entrez dans la grotte.";
                }
            }
            else{
                if(Nero == 1)
                {
                    Texte = "Nero parti à l'opposer de vous, vous vous dirigez vers le pied de la montagne";
                    
                }
                else{
                    Texte="Vous sentez une aura derriere vous. Vous vous dirigez vers le pied de la montagne.";
                }
            }
            VisibleCache("btnSuite","btnChoix");
        break;




        // case :

        // break;
    }

    AfficheTexte("Histoire",Texte);
    Suite++;
}


function Degat()
{   
    if (Heros.force <= Ennemi.defense)
    {
        DegatHeros = 1;
    }
    if (Ennemi.force <= Heros.defense)
    {
        console.log("cc");
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

    Ennemi.hp = Ennemi.hp - DegatHeros;
    Heros.hp = Heros.hp - DegatEnnemi;
}

function Attaque()
{
    
    Degat();
    console.log(DegatEnnemi);
    console.log(DegatHeros);
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
        
        Cache("btnAttaque");
        Cache("btnSuite");
        Visible("btnReco");
        Texte = "Vous avez perdu, voulez-vous recommencer ?";
        AfficheTexte("Histoire",Texte);
        Heros.hp = 0;
        interfaceHeros();
    }
    

}

function interfaceEnnemi()
{
    AfficheTexte("NomEnnemi",Ennemi.nom);    
    AfficheTexte("VieEnnemi",Ennemi.hp);
    AfficheTexte("DefEnnemi",Ennemi.defense);
    AfficheTexte("ForceEnnemi",Ennemi.force);
}

function Combat()
{ 

    VisibleCache("btnAttaque","btnSuite");
    Visible("Ennemi");

}

function Recommencer()
{
    window.location.reload();
}
