(function(){
        'use strict';

    document.getElementById('convert').addEventListener('submit',function(event){
        event.preventDefault();
        var distance = parseFloat(document.getElementById('distance').value);
        var answer = document.getElementById('answer');
        //distance = parseFloat(distance);
        //alert(distance);
        if(distance){
            var conversion = (distance * 1.609344).toFixed(3);
            //var roundConvertion = (Math.round(conversion * 1000))/1000;
        //	var roundConvertion = conversion.toFixed(3);
        //	alert(roundConvertion);
        answer.innerHTML = `<h1>${distance} miles convert to ${conversion} miles kilometer</h1>`;
        }
        else{
        answer.innerHTML = '<h2>Please provide a Number</h2>'
    
        }
    
    });
})();