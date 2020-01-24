app.run(function($rootScope) {
    $rootScope.parseLooninput = function() {
        var selection = window.getSelection().toString();
        if ( selection !== '' ) {
            return;
        }
        if ( $.inArray( event.keyCode, [38,40,37,39] ) !== -1 ) {
            return;
        }
        var input = $('#loon-input').val()
        var input = input.replace(/[\D\s\._\-]+/g, "");
        input = input ? parseInt( input, 10 ) : 0;
        $('#loon-input').val(( input === 0 ) ? "" : input.toLocaleString( "en-US" ))
    };

    $rootScope.parseMWInput = function() {
        var selection = window.getSelection().toString();
        if ( selection !== '' ) {
            return;
        }
        if ( $.inArray( event.keyCode, [38,40,37,39] ) !== -1 ) {
            return;
        }
        var input = $('#minderwerken-input').val()
        var input = input.replace(/[\D\s\._\-]+/g, "");
        input = input ? parseInt( input, 10 ) : 0;
        $('#minderwerken-input').val(( input === 0 ) ? "" : input.toLocaleString( "en-US" ))
    };
});

app.controller('PlotCtrlr', function ($scope) {
    $scope.brutojaarsalaris_loon = '30,000';
    $scope.brutojaarsalaris_minder_werken = '30,000';

    $('#loon-input').on('keyup', function(){
      $scope.parseLooninput();
    });

    $('#minderwerken-input').on('keyup', function(){
      $scope.parseMWInput();
    });
});

app.directive('loonWaterval', function () {

    // Create a link function
    function linkFunc(scope, element, attrs) {
        scope.$watch('brutojaarsalaris_loon', function (brutojaarsalaris_loon) {
            brutojaarsalaris_loon = parseInt(brutojaarsalaris_loon.replace(',', ''))
            loonbelastingdata = getLoonBelastingData(brutojaarsalaris_loon)
            watervalplot = createLoonWaterval(loonbelastingdata)
            Plotly.newPlot(element[0], watervalplot['data'], watervalplot['layout']);
        }, true);
    }

    // Return this function for linking ...
    return {
        link: linkFunc
    };
});

app.directive('minderUrenPlot', function () {

    // Create a link function
    function linkFunc(scope, element, attrs) {
        scope.$watch('brutojaarsalaris_minder_werken', function (brutojaarsalaris_minder_werken) {
            brutojaarsalaris_minder_werken = parseInt(brutojaarsalaris_minder_werken.replace(',', ''))

            werkurendata = getMinderUrenData(brutojaarsalaris_minder_werken)
            werkurenplot = createWerkurenPlot(werkurendata)

            Plotly.newPlot(element[0], werkurenplot['data'], werkurenplot['layout']);
        }, true);
    }

    // Return this function for linking ...
    return {
        link: linkFunc
    };
});
