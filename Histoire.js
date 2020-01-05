function MonHistoire()
{
    switch (Suite) 
    {
        
        case 0:
            Texte = "Il y avait une fois un Roi, qui vivait dans un immense château avec sa fille unique."+ "<br>" +"Elle portait le nom d'Aenor, elle était une guerrière bigrement curieuse mais néanmoins trés doué au combat.";
            Suite= 35;
            Final=false; 
            Nero=3;
            Suite= 35;
           
        break;

        case 1:
            Texte = "Un beau matin alors que le chant du coq retenti. Un curieux étranger se présente dans l'enceinte du chateau. ";
        break;

        case 2:
            Texte = "L'histoire commence vous vous réveiller. Sans perdre un instant vous enfiler des jambieres, pris vos gantelets, votre épée et décider de sortir de votre chambre";
        break;

        case 3:
            Texte = "Où voulez vous allez ?";
            VisibleCache("btnChoix","btnSuite");
            BtnValeur("btnChoix1","Aller dans la ferme");
            BtnValeur("btnChoix2","Aller voir le Roi");
        break;

        case 4:
            VisibleCache("btnSuite","btnChoix")
            if (choix == 1)
            {
                Texte = "En allant dans la ferme vous vous dirigez vers les cochons";
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
                BtnValeur("btnChoix1","Lui parler du Vagabond");
                BtnValeur("btnChoix2","Lui demander de vous racontez la légende");
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
                Texte = "Vous gagnez 5 point de vie et Nero pars très énerver"
                Nero=3;
                Heros.hp += 5;
                VieMax += 5
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
        
        Texte = "Quelque chose ce passe dans la cour, en vous y rendant un mystèrieux combattant vous attaque"
        BtnValeur("btnSuite","Combattre");
        break;

        case 8:
        
        LancerCombat(Guerrier);

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
            RemplaceImage("img_Ennemi","Img/Corvus.png");
            RepositionLeft("img_Ennemi","-29.5%");
            RepositionTop("img_Ennemi", "41%");
            Texte="Corvus vous attaque";
            LancerCombat(Corvus);
    
        }
        break;

        case 11:
        
        Texte = "Le vagabon découronna le rois et pris sa place, la fête de couronement auras lieu dans 2 jours.";        
        break;

        case 12:

        if (Livre_Legendaire == true )
        {
            Texte = "Grâce au livre que le roi vous a donné. Vous commencez vôtre aventure et gagnez 2 points de vie, 1 point de force et 1 point de défense";
            Heros.hp += 2;
            VieMax += 2;
            Heros.force += 1;
            Heros.defense += 1;
            interfaceHeros();
            VisibleCache("btnSuite","btnChoix");
            Suite = 15 ;
        }
        else
        {
        Texte="Où voulez vous allez ?";
        VisibleCache("btnChoix","btnSuite");
        BtnValeur("btnChoix1","Allez dans la chambre de corvus");
        BtnValeur("btnChoix2","Allez vous entrainer");
        }
        
        break;

        case 13:
            if (choix == 1)
            {
                   Texte = "Vous vous dirigez vers la chambre du Corvus, vous voyez un garde au loin. "
                   VisibleCache("btnSuite","btnChoix");

            }
            if (choix == 2)
            {
                Heros.defense += 1;
                interfaceHeros();
               if (Nero==1)
               {
                    Texte = "Vous allez vous entrainer et gagner 1 point de défense. Nero vous y attendait et vous donne le livre de légende";
                    Livre_Legendaire = true;
                    Suite = 15;
                    VisibleCache("btnSuite","btnChoix");
               }
               else
               {
                    VisibleCache("btnSuite","btnChoix");
                    Texte = "Vous allez vous entrainer et gagner 1 point de défense"

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
                Texte="Le garde vous attaque";
                LancerCombat(Garde);
            }
            if(choix == 2){
                // Fuir
                VisibleCache("btnSuite","btnChoix");
                Texte = "Vous décidez de fuir le soldat. En vous retournant vous voyez une ombre"

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
        LancerCombat(Monstre);
            
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
        if (choix == 1)
        {
            Texte ="Vous entrez dans la grotte et croiser un monstre avec un grand oeil à la place de la tête. Il utilise sa tête pour faire des dribbles";
            Grotte = true;
            
        }
        if(choix == 2)
        {
            Texte = "Vous commencer à gravir la montagne. Une gargouille fonce sur vous";
            Montagne = true;
        }
        VisibleCache("btnSuite","btnChoix");
        break;

        case 21:

        if (Grotte == true)
        {
            Texte = "Que voulez-vous faire ?";
            BtnValeur("btnChoix1","Lui parler");
            BtnValeur("btnChoix2","Combattre");
            VisibleCache("btnChoix","btnSuite");
        }

        if (Montagne == true)
        {
            LancerCombat(Gargouille);
        }

        break;
        
        case 22:

        if (Grotte == true)
        {
            Basket_Basket = true;
            if (choix == 1)
            {
                VisibleCache("btnSuite","btnChoix");
                Texte = 'Le monstre dit "Basket, basket". Vous dicider donc de le rennomer comme tel et de le suivre';
            }

            if (choix == 2)
            {
                Texte = 'Le monstre dit "Basket, basket". Vous dicider donc de le rennomer comme tel';
                Explosion = true;
                LancerCombat(Basket);
            }
        }
        if (Montagne == true)
        {
            Cache("Ennemi");
            Texte = "Vous continuez votre ascension mais l'épuisement ce fait sentir. Vous commencez à perdre connaissance";
        }


        break;

        case 23:

        if (Grotte == true)
        {
            Texte = '"Basket Basket" vous enmmène en haut de la montagne, pars les grotte. Arriver à la sortie, il vous assome par derrière';
        }

        if (Montagne == true)
        {
            Texte = "Avant de perdre connaissance, vous appercevez une ombre gigantesque";
        }

        break;

        case 24:

        Texte = "En vous reposant, vous récupérez toute votre vie";
        Heros.hp = VieMax;
        interfaceHeros();
        
        break;

        case 25:

        Texte = "Vous vous réveillez dans une cabane et en entrouvrant un oeil, vous voyez deux Gargouilles";

        break;

        case 26:
            Texte = "Les deux gargouiles faces à vous discute, que faites-vous?";
            BtnValeur("btnChoix1","Courir vers elle");
            BtnValeur("btnChoix2","Marcher reposé vers elle");
            VisibleCache("btnChoix","btnSuite");
        break;
    
        case 27:
            if(choix == 1)
            {
                if(Nero != 1)
                {
                    Texte = "Les gargouilles, par un élan d'auto-défence vous attaque" ;
                    Gargouille.hp = 8;
                    LancerCombat(Gargouille);
                }
                else{
                    Texte="Nero entrain de manger, fais un pets, ce qui vous interpelle. Vous comprenez grace à cela que c'est des amis à lui. Un personnage nommé Grizius vous interpelle et vous demande de le suivre.";
                    VisibleCache("btnSuite","btnChoix");
                    
                }
             
            }
            if(choix == 2)
            {
                Texte="En vous levant, une personne vous interpelle et vous demande de le suivre. Vous lui demandez sont nom: Grizius.";
                VisibleCache("btnSuite","btnChoix");
                
            }
        break;

        case 28:
        Cache("Ennemi");
        Texte = "Vous suivez grizius hors de la cabane. Il vous dit qu'il vous attendez depuis longtemps" + "<br>" +"Il vous explique que peut avant son déclin, son cavalier et ami avait forger une lame qu'il avait appeller la lame des limbes";
        Visible("btnSuite");
        break;

        case 29:
            Texte = "Il reprit en vous expliquant que la lame est envelopper d'une aura magique" + "<br>" + "Et que seul la descendante du héros des cieux peut utiliser la puissance de la lame";
        break;
        
        case 30:

            Texte = "Vous expliquez à Grizius ce qui se passe au château et soliciter son aide" + "<br>" + "Le vieux dragon accepte et vous dit de monter sur son dos";

        break;

        case 31:

            Texte = "Vous partez donc en direction du chateau pars les airs sur le dos de Grizius";

        break;
        
        case 32:

            Texte = "Arriver dans l'espace aérien du chateau vous subissez des feu nourit. Grizius vous pose alors dans l'enceinte et vous dit de le retrouver dans la cour"

        break;

        case 33:

            Texte = "En vous dirigeant vers la cour, un gladiateur vous bloque la route";
        
        break;

        case 34:

            Texte = "Le Gladiateur vous attaque";
            LancerCombat(Gladiateur);
        
        break;
    
        case 35:
            Cache("Ennemi");
            Texte = "En allant dans la cour un autre gladiateur vous barre la route";
            Gladiateur.hp =  6 ;
            LancerCombat(Gladiateur);
        break;

        case 36:
            Cache("Ennemi");
            Texte = "Corvus sort pour vous affrontez";
            Final = true;
            Exception = true;
            RemplaceImage("img_Ennemi","Img/Corvus.png");
            RepositionLeft("img_Ennemi","-29.5%");
            RepositionTop("img_Ennemi", "41%");
            LancerCombat(Corvus);
        
        break;
        
        case 37:

            Texte = "En vous munissant de celle-ci Corvus semble eblouit par ça lumière"
            
        break;
        
        case 38:
            Exception = false;
            Texte = "La métamorphose de Corvus s'estompe et Il se révéla etre le deuxieme dragon de la légende: Barbarus." + "<br>" +"Le vielle ennemi de Grizius énervé devient plus puissant que jamais"
        
        break;
        
        case 39:
            RemplaceImage("img_Ennemi","Img/Barbarus.png");
            RepositionLeft("img_Ennemi","-29.5%");
            RepositionTop("img_Ennemi", "41%");
            RepositionLeft("Ennemi","-29.5%");
            Ennemi=Barbarus;
            interfaceEnnemi();
            Texte = "La lame des limbes et le bouclier sacré brille de mille feu et vous confère sa puissance !"
        break;
        
        case 40:

            Texte = "Vous régénerez toute votre vie et recevez 10 point de défense, 15 point de force et 20 point de vie ";
            Heros.defense += 10;
            Heros.force += 25;
            VieMax += 20;
            Heros.hp = VieMax;
            interfaceHeros();
            Copain =true;
            RemplaceImage("img_Aenor","Img/Aenor_Charge.png");
            RepositionLeft("img_Aenor","-29.2%");
        break;

        case 41:

            Texte ="Barbarus vous attaque et Grizius viens vous aidez";
            Visible("Allie");
            Allie = Grizius;
            interfaceAllie();
        break;

        case 42:
            if (Nero == 3)
            {
                Texte = "Nero en colère débarque, mange Babarus et absorbe tout ses pouvoir !"
            }
            else
            {
                VisibleCache("btnAttaque","btnSuite")
            }
            if (Nero == 1)
            {
                if (Basket_Basket == true)
                {
                Texte = "Basket, basket se joint à la bataille !";
                Explosion = true;
                }
                VisibleCache("btnAttaque","btnSuite");
            }

            if (Nero == 0)
            {
                if (Basket_Basket == true)
                {
                Texte = "Basket, basket se joint à la bataille !";
                Explosion = true;
                }
                VisibleCache("btnAttaque","btnSuite");
            }

        break;

        case 43:

            if (Nero == 3)
            {
                JustNero.hp += Barbarus.hp;
                JustNero.defense += Barbarus.defense;
                JustNero.force += Barbarus.force;
                Ennemi = JustNero;
                interfaceEnnemi();

                if (Basket_Basket == true)
                {
                Texte = "Basket, basket se joint à la bataille !";
                Explosion = true;
                }
                RemplaceImage("img_Ennemi","Img/JustNero.png");
                RepositionLeft("img_Ennemi","-29.5%");
                RepositionTop("img_Ennemi", "41%");
                RepositionLeft("Ennemi","-29.5%");
                VisibleCache("btnAttaque","btnSuite");
            }

            if (Nero == 1)
            {
                if (Basket_Basket == true)
                {
                    Explosion=false;
                    Texte = "Barbarus vous attaque"
                    Cache("Basket");
                    VisibleCache("btnAttaque","btnSuite");
                }
            }
            
        break;

        case 44:
               
            Texte = "Tout le village à vu que vous avez tuer un puissant dragon. Vous gagnez leurs rescpect est devenez la nouvelle Reine";
               
        break;
        
        case 45:
        
            Texte = "Vous avez fini le jeu. Voulez vous recommencer ? Vous pouvez suivre un autre chemin afin d'avoir une histoire modifier";
            VisibleCache("btnReco","btnSuite");


        break;
        
        case 46:
        
        break;

        // case :

        // break;
    }
    AfficheTexte("Histoire",Texte);
    Suite++;
}