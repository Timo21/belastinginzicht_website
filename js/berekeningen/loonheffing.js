//---------------------------------------------Relevante Classes--------------------------------------------------------------------------

var Loonbelastingschaal = function(naam, jaar,belastingschijf1,
                               belastingschijf2, belastingschijf3, belastingschijf4){
    this.naam = naam;
    this.jaar = jaar;
    this.belastingschijf1 = belastingschijf1;
    this.belastingschijf2 = belastingschijf2;
    this.belastingschijf3 = belastingschijf3;
    this.belastingschijf4 = belastingschijf4;
    this.belastingschijven = [this.belastingschijf1, this.belastingschijf2,
                              this.belastingschijf3, this.belastingschijf4]
}


var Loonbelastingschijf = function(naam, ondergrens, bovengrens, loonbelastingspercentage){
    this.naam = naam;
    this.ondergrens = ondergrens;
    this.bovengrens = bovengrens;
    this.loonbelastingspercentage = loonbelastingspercentage;

}

//----------------------------------------------Maak hier nieuwe loonbelastingschalen aan------------------------------------------------
var loonbelastingschaal2016 = new Loonbelastingschaal("Belastingschaal 2016", "2016",
                                belastingschijf1 = new Loonbelastingschijf("Belastingschijf 1", 0, 19922, 0.3655),
                                belastingschijf2 = new Loonbelastingschijf("Belastingschijf 2", 19923, 33715, 0.4015),
                                belastingschijf3 = new Loonbelastingschijf("Belastingschijf 3", 33716, 66421, 0.4015),
                                belastingschijf4 = new Loonbelastingschijf("Belastingschijf 4", 66422, 999999999, 0.52));

var loonbelastingschaal2017 = new Loonbelastingschaal("Belastingschaal 2017", "2017",
                                belastingschijf1 = new Loonbelastingschijf("Belastingschijf 1", 0, 19982, 0.3655),
                                belastingschijf2 = new Loonbelastingschijf("Belastingschijf 2", 19983, 33791, 0.408),
                                belastingschijf3 = new Loonbelastingschijf("Belastingschijf 3", 33792, 67072, 0.408),
                                belastingschijf4 = new Loonbelastingschijf("Belastingschijf 4", 67072, 999999999, 0.52));

var loonbelastingschaal2018 = new Loonbelastingschaal("Belastingschaal 2018", "2018",
                                belastingschijf1 = new Loonbelastingschijf("Belastingschijf 1", 0, 20142, 0.3655),
                                belastingschijf2 = new Loonbelastingschijf("Belastingschijf 2", 20143, 33994, 0.4085),
                                belastingschijf3 = new Loonbelastingschijf("Belastingschijf 3", 33995, 68507, 0.4085),
                                belastingschijf4 = new Loonbelastingschijf("Belastingschijf 4", 68508, 999999999, 0.5195));

//----------------------------------------------------------------------------------------------------------------------------------------

//functie die de loonbelastingschaal teruggeeft op basis van het brutojaarsalaris
var getLoonbelastingschaal = function(brutojaarsalaris, belastingschaal){
    var loonbelastingschaal;
    $.each(belastingschaal.belastingschijven, function(schaalnummer,schaal){
        if(brutojaarsalaris < schaal.bovengrens && brutojaarsalaris >= schaal.ondergrens){
          loonbelastingschaal = schaalnummer + 1;
        }
    })
    return loonbelastingschaal;
}

//functie die de loonheffing teruggeeft op basis van het brutojaarsalaris
var berekenLoonheffing = function(brutojaarsalaris, loonbelastingschaal){
    var loonbelasting;
    var schaalnummer = getLoonbelastingschaal(brutojaarsalaris, loonbelastingschaal);

    var belastingschijf1 = loonbelastingschaal.belastingschijf1;
    var belastingschijf2 = loonbelastingschaal.belastingschijf2;
    var belastingschijf3 = loonbelastingschaal.belastingschijf3;
    var belastingschijf4 = loonbelastingschaal.belastingschijf4;


    switch(schaalnummer){
        case 1:
            loonbelasting = brutojaarsalaris * belastingschijf1.loonbelastingspercentage;
            break;
        case 2:
            loonbelasting = belastingschijf1.bovengrens *
                            belastingschijf1.loonbelastingspercentage +
                            (brutojaarsalaris - belastingschijf1.bovengrens) *
                            belastingschijf2.loonbelastingspercentage;
            break;
        case 3:
            loonbelasting = belastingschijf1.bovengrens *
                            belastingschijf1.loonbelastingspercentage +
                            (belastingschijf2.bovengrens - belastingschijf1.bovengrens) *
                            belastingschijf2.loonbelastingspercentage +
                            (brutojaarsalaris - belastingschijf2.bovengrens) *
                            belastingschijf3.loonbelastingspercentage;
            break;
        case 4:
            loonbelasting = belastingschijf1.bovengrens *
                            belastingschijf1.loonbelastingspercentage +
                            (belastingschijf2.bovengrens - belastingschijf1.bovengrens) *
                            belastingschijf2.loonbelastingspercentage +
                            (belastingschijf3.bovengrens - belastingschijf2.bovengrens) *
                            belastingschijf3.loonbelastingspercentage +
                            (brutojaarsalaris - belastingschijf3.bovengrens) *
                            belastingschijf4.loonbelastingspercentage;
            break;
        default:
            return "Foutmelding in berekening loonheffing: Heeft u een geldig bruto jaarsalaris opgegeven?"
    }

    return loonbelasting;
}

var printschijven = function(loonbelastingschaal){
    $.each(loonbelastingschaal.belastingschijven, function(i, schaal){
        console.log(schaal.ondergrens, schaal.bovengrens)
    })
}

