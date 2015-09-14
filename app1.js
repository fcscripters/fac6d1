
  console.log("hello world");


  var fullnameInput = document.getElementById('fullname');


  var ageInput =  document.getElementById('age');
  var weightInput =  document.getElementById('weight');
  var heightInput = document.getElementById('height');
  //requires radio button
//  var exerciseInput = document.getElementById('exercise');

  //requires dropdown
  var smokeInput = document.getElementById('smoke');
  var emailInput = document.getElementById('email');
  //checkbox
  var optinInput = document.getElementById('optin');

var test = document.getElementById('health-form');

console.log(test);

  test.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log("{Full Name: "+fullnameInput.value+"}");
  console.log("{Age: "+ageInput.value+"}");
  console.log("{Weight: "+weightInput.value+"}");
  console.log("{Height: "+heightInput.value+"}");
  console.log("{Smoke: "+smokeInput.value+"}");
  console.log("{Email: "+emailInput.value+"}");
//  console.log("{Exercise: "+exerciseInput.value+"}");
  //console.log("{Optin: "+optinInput.value+"}");

});



var radios = document.getElementsByName('exercise');
console.log(radios);



for (var i = 0; i<radios.length; i++) {
    console.log(radios[i].value);
    console.log(radios[i].checked);

    if (radios[i].type === 'radio' && radios[i].checked) {
        // do whatever you want with the checked radio
        var testing =radios[i].value;
        console.log(testing);

        // only one radio can be logically checked, don't check the rest
        break;
    }
}

/*

var exerciseoutput = (getRadioValue("exercise",exerciseInput)+1);

 function getRadioValue(groupName, groupVal) {
            var valRet = 0;
            var radios = document.getElementsByName(groupName).value;
            for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            groupVal = i;
            break;
        }

    }
    // needs changed to log individual radio button title ?
    return groupVal;
  };

  /*

function getDropValue(groupName, groupVal) {
            var valRet = 0;
            var drops = document.getElementsByName(groupName);
            for (var i = 0; i < drops.length; i++) {
        if (drops[i].checked) {
            groupVal = i;
            break;
        }

    }
    // needs changed to log individual radio button title ?
    return groupVal;
  };




  getRadioValue("exercise", exerciseInput)+1);



  */
