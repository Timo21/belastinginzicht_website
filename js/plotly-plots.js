var createLoonWaterval = function(loonbelastingdata){
    // Base
    var xData = ['Bruto<br>Jaarsalaris', 'Loonheffing',
      ' Algemene<br>Heffingskorting', 'Arbeids-<br>korting',
      'Netto<br>Jaarsalaris'
    ];

    //Invisible base
    var trace1 = {
      x: xData,
      hoverinfo: 'none',
      y: [0,
          loonbelastingdata['brutojaarsalaris'] - loonbelastingdata['loonheffing'],
          loonbelastingdata['brutojaarsalaris'] - loonbelastingdata['loonheffing'],
          loonbelastingdata['brutojaarsalaris'] - loonbelastingdata['loonheffing'] + loonbelastingdata['algheffingskorting'],
          0],
      marker: {
        color: 'rgba(1,1,1,0.0)'
      },
      type: 'bar'
    };

    //Blauwe salarissen
    var trace2 = {
      x: xData,
      y: [loonbelastingdata['brutojaarsalaris'], 0, 0, 0, loonbelastingdata['nettojaarsalaris']],
      type: 'bar',
      hoverinfo: 'y',
      marker: {
        color: 'rgba(55,128,191,0.7)',
        line: {
          color: 'rgba(55,128,191,1.0)',
          width: 2
        }
      }
    };

    //Rood de heffing
    var trace3 = {
      x: xData,
      y: [0, loonbelastingdata['loonheffing'], 0, 0, 0],
      type: 'bar',
      hoverinfo: 'y',
      marker: {
        color: 'rgba(219, 64, 82, 0.7)',
        line: {
          color: 'rgba(219, 64, 82, 1.0)',
          width: 2
        }
      }
    };

    //Groen de kortingen
    var trace4 = {
      x: xData,
      y: [0, 0, loonbelastingdata['algheffingskorting'], loonbelastingdata['arbeidskorting'],0],
      type: 'bar',
      hoverinfo: 'y',
      marker: {
        color: 'rgba(50,171, 96, 0.7)',
        line: {
          color: 'rgba(50,171,96,1.0)',
          width: 2
        }
      }
    };

    var watervaldata = [trace1, trace2, trace3, trace4];

    var layout = {
      title: 'Opbouw Netto Jaarsalaris (o.b.v. 2017 schalen)',
      barmode: 'stack',
      hovermode: 'closest',
      width: 1200,
      height: 600,
      showlegend: false,
      xaxis: {fixedrange: true},
      yaxis: {hoverformat: ',.2f', tickprefix: '€', fixedrange: true},
      annotations: []
    };

    return({'data': watervaldata, 'layout': layout})
};


var createWerkurenPlot = function(werkurendata){
      var trace_bruto = {
        x: werkurendata.werkuren,
        y: werkurendata.brutojaarsalarissen,
        mode: 'lines+markers',
        name: 'Bruto jaarsalaris',
        hoverinfo: 'Bruto jaarsalaris',
        line: {shape: 'linear', color: 'Coral', width: '4'}
      }

      var trace_netto = {
        x: werkurendata.werkuren,
        y: werkurendata.nettojaarsalarissen,
        mode: 'lines+markers',
        name: 'Netto jaarsalaris',
        hoverinfo: 'Netto jaarsalaris',
        line: {shape: 'linear', color: 'CornflowerBlue', width: '4'}
      }

      var trace_loonheffing = {
        x: werkurendata.werkuren,
        y: werkurendata.loonheffingen,
        mode: 'lines+markers',
        name: 'Loonheffing',
        hoverinfo: 'Loonheffing',
        line: {shape: 'linear', color: 'Crimson', width: '2'}
      }

      var trace_algheffingskorting = {
        x: werkurendata.werkuren,
        y: werkurendata.algheffingskortingen,
        mode: 'lines+markers',
        name: 'Algemene heffingskorting',
        hoverinfo: 'Algemene heffingskorting',
        line: {shape: 'linear', color: 'Gold', width: '2'}
        //line: {shape: 'linear', color: 'GoldenRod', width: '2'}
      }

      var trace_arbeidskorting = {
        x: werkurendata.werkuren,
        y: werkurendata.arbeidskortingen,
        mode: 'lines+markers',
        name: 'Arbeidskorting',
        hoverinfo: 'Arbeidskorting',
        line: {shape: 'linear', color: 'ForestGreen', width: '2'}
      }

      var werkurendata = [trace_bruto, trace_netto, trace_loonheffing, trace_algheffingskorting, trace_arbeidskorting]

      var layout = {
          title: 'Salaris bij minder werken (o.b.v. 2017 schalen)',
          width: 1200,
          height: 600,
          pad: '0',
          xaxis: {autorange: 'reversed', ticksuffix: ' uur', fixedrange: true},
          yaxis: {hoverformat: ',.2f', tickprefix: '€', fixedrange: true},
          margin: { t: 40, b:40, l:40, r:0 },
      };

      return({'data': werkurendata, 'layout': layout})
};

