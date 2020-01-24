var getLoonBelastingData = function(brutojaarsalaris){
      loonheffing = berekenLoonheffing(brutojaarsalaris,loonbelastingschaal2017);
      arbeidskorting = berekenArbeidskorting(brutojaarsalaris,arbeidskortingschaal2017);
      algheffingskorting = berekenAlgheffingskorting(brutojaarsalaris,heffingskortingschaal2017);
      nettojaarsalaris = (brutojaarsalaris - loonheffing + arbeidskorting + algheffingskorting);


      loonbelastingdata = {'brutojaarsalaris': brutojaarsalaris,
                           'nettojaarsalaris': nettojaarsalaris,
                           'loonheffing': loonheffing,
                           'arbeidskorting': arbeidskorting,
                           'algheffingskorting': algheffingskorting}
      return(loonbelastingdata)
};

var getMinderUrenData = function(jaarsalaris){
      var werkuren = []
      var brutojaarsalarissen = []
      var loonheffingen = []
      var arbeidskortingen = []
      var algheffingskortingen = []
      var nettojaarsalarissen = []

      for(uren = 40; uren>=8; uren -= 1){

          brutojaarsalaris = (jaarsalaris*uren)/40
          loonheffing = berekenLoonheffing(brutojaarsalaris,loonbelastingschaal2017);
          arbeidskorting = berekenArbeidskorting(brutojaarsalaris,arbeidskortingschaal2017);
          algheffingskorting = berekenAlgheffingskorting(brutojaarsalaris,heffingskortingschaal2017);
          nettojaarsalaris = (brutojaarsalaris - loonheffing + arbeidskorting + algheffingskorting);

          werkuren.push(uren)
          brutojaarsalarissen.push(brutojaarsalaris)
          loonheffingen.push(loonheffing)
          arbeidskortingen.push(arbeidskorting)
          algheffingskortingen.push(algheffingskorting)
          nettojaarsalarissen.push(nettojaarsalaris)
      };
      werkurendata = {'werkuren': werkuren,
                      'brutojaarsalarissen': brutojaarsalarissen,
                      'loonheffingen': loonheffingen,
                      'arbeidskortingen': arbeidskortingen,
                      'algheffingskortingen': algheffingskortingen,
                      'nettojaarsalarissen': nettojaarsalarissen}

      return(werkurendata)
};
