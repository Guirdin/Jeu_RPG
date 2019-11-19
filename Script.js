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
    }
    
}

class Aenor extends Personnage
{
    constructor ()
    {
        super (nom, hp, defense, force, xp, niveau);
    }
    nom = "Aenor";
    hp = 10;
    defense = 10;
    force = 10;
    xp = 0;
    niveau = 1;
}

class Barbarus extends Personnage{

    constructor ()
    {
        super (nom, hp, defense, force);
    }
    nom = "Barbarus";
    hp = 1000;
    defense = 1000;
    force = 1000;
}

class Grizius extends Personnage{

    constructor ()
    {
        super (nom, hp, defense, force);
    }
    nom = "Grizius";
    hp = 1000;
    defense = 1000;
    force = 1000;
}

function le_niveau()
{
    if(xp >= 100)
    {
        niveau++;
    }
}

console.log(Heros);

