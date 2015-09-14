
  console.log("hello world");


  var fullnameInput =document.getElementById('fullname');
  var ageInput =    document.getElementById('age');
  var weightInput = document.getElementById('weight');
  var heightInput = document.getElementById('height');
  ///radio buttons value ///
  var radios =  document.getElementsByName('exercise');

   // smoke drop down menu
  var smokeInput =  document.getElementById('smoke');
  // input box
  var emailInput =  document.getElementById('email');
  //checkbox
  var optinInput = document.getElementById('optin');
  // input box
  var test = document.getElementById('health-form');
  // bmi function
  function bmi(weight,height){
    var bmi= weight/height*height;
    alert("You have a Body Mass Index of"+bmi);
  };


  test.addEventListener('submit', function(e) {
  e.preventDefault();
      var exerciseInput='';
      for (var i = 0; i <=radios.length; i++) {
        console.log(radios[i].value);
        console.log(radios[i].checked);

        if (radios[i].type ==='radio' && radios[i].checked) {
            // do whatever you want with the checked radio
            exerciseInput =radios[i].value;
            console.log(exerciseInput);
             // only one radio can be logically checked, don't check the rest
            break;
        }
      }
  console.log("{Full Name: "+fullnameInput.value+"}");
  console.log("{Age: "+ageInput.value+"}");
  console.log("{Weight: "+weightInput.value+"}");
  console.log("{Height: "+heightInput.value+"}");
  console.log("{Exercise:"+exerciseInput+"}");
  console.log("{Smoke: "+smokeInput.value+"}");
  console.log("{Email: "+emailInput.value+"}");
  //prompt bmi ///
  bmi(weightInput.value,heightInput.value);

});




