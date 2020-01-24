//---------------------------------------------Relevante Classes--------------------------------------------------------------------------

var Arbeidskortingschaal = function(naam, jaar, kortingschijf1,
                               kortingschijf2, kortingschijf3, kortingschijf4, kortingschijf5){
    this.naam = naam;
    this.jaar = jaar;
    this.arbeidskortingschijf1 = arbeidskortingschijf1;
    this.arbeidskortingschijf2 = arbeidskortingschijf2;
    this.arbeidskortingschijf3 = arbeidskortingschijf3;
    this.arbeidskortingschijf4 = arbeidskortingschijf4;
    this.arbeidskortingschijf5 = arbeidskortingschijf5;
    this.arbeidskortingschijven = [this.arbeidskortingschijf1, this.arbeidskortingschijf2,
                              this.arbeidskortingschijf3, this.arbeidskortingschijf4, this.arbeidskortingschijf5]
}


var Arbeidskortingschijf = function(naam, ondergrens, bovengrens, basisarbeidskorting, arbeidskortingpercentage){
    this.naam = naam;
    this.ondergrens = ondergrens;
    this.bovengrens = bovengrens;
    this.basisarbeidskorting = basisarbeidskorting;
    this.arbeidskortingpercentage = arbeidskortingpercentage;

}

//----------------------------------------------Maak hier nieuwe arbeidskortingschalen aan------------------------------------------------
var arbeidskortingschaal2016 = new Arbeidskortingschaal("Arbeidskortingschaal 2016", "2016",
                                arbeidskortingschijf1 = new Arbeidskortingschijf("Arbeidskortingschijf 1", 0, 9147, 0, 0.01793),
                                arbeidskortingschijf2 = new Arbeidskortingschijf("Arbeidskortingschijf 2", 9148, 19758, 164, 0.27698),
                                arbeidskortingschijf3 = new Arbeidskortingschijf("Arbeidskortingschijf 3", 19759, 34015, 3103, 0),
                                arbeidskortingschijf4 = new Arbeidskortingschijf("Arbeidskortingschijf 4", 34016, 111590, 3103, -0.04),
                                arbeidskortingschijf5 = new Arbeidskortingschijf("Arbeidskortingschijf 5", 111591, 99999999, 0, 0));

var arbeidskortingschaal2017 = new Arbeidskortingschaal("Arbeidskortingschaal 2017", "2017",
                                arbeidskortingschijf1 = new Arbeidskortingschijf("Arbeidskortingschijf 1", 0, 9309, 0, 0.01772),
                                arbeidskortingschijf2 = new Arbeidskortingschijf("Arbeidskortingschijf 2", 9309, 20108, 165, 0.28317),
                                arbeidskortingschijf3 = new Arbeidskortingschijf("Arbeidskortingschijf 3", 20109, 32444, 3223, 0),
                                arbeidskortingschijf4 = new Arbeidskortingschijf("Arbeidskortingschijf 4", 32445, 121972, 3223, - 0.036),
                                arbeidskortingschijf5 = new Arbeidskortingschijf("Arbeidskortingschijf 5", 121973, 99999999, 0, 0));

var arbeidskortingschaal2018 = new Arbeidskortingschaal("Arbeidskortingschaal 2018", "2018",
                                arbeidskortingschijf1 = new Arbeidskortingschijf("Arbeidskortingschijf 1", 0, 9309, 0, 0.01772),
                                arbeidskortingschijf2 = new Arbeidskortingschijf("Arbeidskortingschijf 2", 9309, 20108, 165, 0.28067),
                                arbeidskortingschijf3 = new Arbeidskortingschijf("Arbeidskortingschijf 3", 20109, 32444, 3249, 0),
                                arbeidskortingschijf4 = new Arbeidskortingschijf("Arbeidskortingschijf 4", 32445, 121972, 3249, - 0.036),
                                arbeidskortingschijf5 = new Arbeidskortingschijf("Arbeidskortingschijf 5", 121973, 99999999, 0, 0));

//----------------------------------------------------------------------------------------------------------------------------------------

//functie die de arbeidskortingschaal teruggeeft op basis van het brutojaarsalaris
var getArbeidskortingschijf = function(brutojaarsalaris, arbeidskortingschaal){
    var arbeidskortingschijfnummer;
    $.each(arbeidskortingschaal.arbeidskortingschijven, function(schijfnummer,schijf){
        if(brutojaarsalaris < schijf.bovengrens && brutojaarsalaris >= schijf.ondergrens){
            arbeidskortingschijfnummer = schijfnummer + 1;
        }
    })

    return arbeidskortingschijfnummer;
}

//functie die de arbeidskorting teruggeeft op basis van het brutojaarsalaris
var berekenArbeidskorting = function(brutojaarsalaris, arbeidskortingschaal){
    var arbeidskorting;
    var schijfnummer = getArbeidskortingschijf(brutojaarsalaris, arbeidskortingschaal);
    var arbeidskortingschijf = arbeidskortingschaal['arbeidskortingschijf' + schijfnummer];
    arbeidskorting = arbeidskortingschijf.basisarbeidskorting +
                    arbeidskortingschijf.arbeidskortingpercentage *
                    (brutojaarsalaris - arbeidskortingschijf.ondergrens + 1);
    return arbeidskorting;
}
