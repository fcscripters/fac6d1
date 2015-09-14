
  var fullnameInput = document.getElementById('fullname'); 
  var ageInput =  document.getElementById('age');
  var weightInput =  document.getElementById('weight');
  var heightInput = document.getElementById('height'); 
  //requires radio button
  var exerciseInput = document.getElementById('exercise');
  //requires dropdown 
  var smokeInput = document.getElementById('smoke'); 
  var emailInput = document.getElementById('email');
  //checkbox
  var optinInput = document.getElementById('optin'); 

  document.querySelector('form.train-form').addEventListener('submit', function(e) {
  e.preventDefault();

/*  function getRadioValue(groupName, groupVal) {
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

*/


  getRadioValue("exercise", exerciseInput)+1);
  

  console.log("{Full Name: "+fullnameInput+"}"); 
  console.log("{Age: "+ageInput+"}"); 
  console.log("{Weight: "+weightInput.value+"}"); 
  console.log("{Height: "+heightInput.value+"}"); 
  console.log("{Exercise: "+execiseInput.value+"}"); 
  console.log("{Smoke: "+smokeInput.value+"}")});
  console.log("{Email: "+emaillInput.value+"}")});
  console.log("{Optin: "+optinInput.value+"}")});
