const calcTemp = ()=>{
    const numberTemp = document.getElementById('temp').value;
 
    const givenScale = document.getElementById('givenscale').value;
    console.log("Entered temperature : ",numberTemp,givenScale);
    

    const tempSelected  = document.getElementById('tempscale').value;

    let result = 'To be Calculated';

    if(givenScale == 'Choose scale') alert('no scale selected');
    if(tempSelected == 'Choose scale') alert('please select the scale');

    if(givenScale == tempSelected && givenScale != 'Choose scale'){
        result = numberTemp + tempSelected;
    }

    else if(givenScale=='°C' && tempSelected=='K'){
        result = (parseFloat(numberTemp) + 273.15) + ' K';
    }
    else if(givenScale=='K' && tempSelected=='°C'){
        result = (parseFloat(numberTemp) - 273.15) + ' °C';
    }

    //celcius and fahrenheit
    else if(givenScale=='°C' && tempSelected=='°F'){
        result = (9*parseFloat(numberTemp)/5.0 + 32.0 ) + ' °F';
    }
    else if(givenScale=='°F' && tempSelected=='°C'){
        result = ((parseFloat(numberTemp) - 32.0)*5/9.0 ) + ' °C';
    }
    //kelvin and fahrenheit
    else if(givenScale=='K' && tempSelected=='°F'){
        result = (9*(parseFloat(numberTemp) - 273.15)/5.0 + 32.0 ) + ' °F';
    }
    else if(givenScale=='°F' && tempSelected=='K'){
        result = ((parseFloat(numberTemp) - 32.0)*5/9.0 + 273.15) + ' K';
    }

    //  result 
    console.log("Converted temperature : ",result);
    document.getElementById('resultContainer').innerHTML = result;


    

}