//---------------------------------------------Relevante Classes--------------------------------------------------------------------------

var heffingskortingschaal = function(naam, jaar, kortingschijf1,
                               kortingschijf2, kortingschijf3){
    this.naam = naam;
    this.jaar = jaar;
    this.heffingskortingschijf1 = heffingskortingschijf1;
    this.heffingskortingschijf2 = heffingskortingschijf2;
    this.heffingskortingschijf3 = heffingskortingschijf3;
    this.heffingskortingschijven = [this.heffingskortingschijf1, this.heffingskortingschijf2,
                              this.heffingskortingschijf3]
}


var heffingskortingschijf = function(naam, ondergrens, bovengrens, basisheffingskorting, heffingskortingpercentage){
    this.naam = naam;
    this.ondergrens = ondergrens;
    this.bovengrens = bovengrens;
    this.basisheffingskorting = basisheffingskorting;
    this.heffingskortingpercentage = heffingskortingpercentage;

}

//----------------------------------------------Maak hier nieuwe heffingskortingschalen aan------------------------------------------------
var heffingskortingschaal2016 = new heffingskortingschaal("Algemene heffingskortingschaal 2016", "2016",
                                heffingskortingschijf1 = new heffingskortingschijf("heffingskortingschijf 1", 0, 19922, 2242, 0),
                                heffingskortingschijf2 = new heffingskortingschijf("heffingskortingschijf 2", 19923, 66417, 2242, -0.04822),
                                heffingskortingschijf3 = new heffingskortingschijf("heffingskortingschijf 3", 66418, 99999999, 0, 0));

var heffingskortingschaal2017 = new heffingskortingschaal("Algemene heffingskortingschaal 2017", "2017",
                                heffingskortingschijf1 = new heffingskortingschijf("heffingskortingschijf 1", 0, 19982, 2254, 0),
                                heffingskortingschijf2 = new heffingskortingschijf("heffingskortingschijf 2", 19983, 67068, 2254,  - 0.04787),
                                heffingskortingschijf3 = new heffingskortingschijf("heffingskortingschijf 3", 67069, 99999999, 0, 0));

var heffingskortingschaal2018 = new heffingskortingschaal("Algemene heffingskortingschaal 2018", "2018",
                                heffingskortingschijf1 = new heffingskortingschijf("heffingskortingschijf 1", 0, 20142, 2265, 0),
                                heffingskortingschijf2 = new heffingskortingschijf("heffingskortingschijf 2", 20143, 68508, 2265,  - 0.04683),
                                heffingskortingschijf3 = new heffingskortingschijf("heffingskortingschijf 3", 68505, 99999999, 0, 0));
//----------------------------------------------------------------------------------------------------------------------------------------

//functie die de heffingskortingschaal teruggeeft op basis van het brutojaarsalaris
var getHeffingskortingschijf = function(brutojaarsalaris, heffingskortingschaal){
    var heffingskortingschijfnummer;
    $.each(heffingskortingschaal.heffingskortingschijven, function(schijfnummer,schijf){
        if(brutojaarsalaris < schijf.bovengrens && brutojaarsalaris >= schijf.ondergrens){
            heffingskortingschijfnummer = schijfnummer + 1;
        }
    })

    return heffingskortingschijfnummer;
}

//functie die de algmene heffingskorting teruggeeft op basis van het brutojaarsalaris
var berekenAlgheffingskorting = function(brutojaarsalaris, heffingskortingschaal){
    var heffingskorting;
    var schijfnummer = getHeffingskortingschijf(brutojaarsalaris, heffingskortingschaal);
    var heffingskortingschijf = heffingskortingschaal['heffingskortingschijf' + schijfnummer];
    heffingskorting = heffingskortingschijf.basisheffingskorting +
                    heffingskortingschijf.heffingskortingpercentage *
                    (brutojaarsalaris - heffingskortingschijf.ondergrens + 1);
    return heffingskorting;
}
