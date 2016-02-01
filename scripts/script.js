function calc(button){
	var allRadios = document.getElementsByName('sex');
	var sex;
	for (var i = 0; i < allRadios.length; i++){
		if (allRadios[i].checked){
			sex = allRadios[i].value;
		}
	}
	var height = (document.getElementById('height').value) * 0.01;
	var weight = document.getElementById('weight').value;
	var result = (weight / (height * height) ).toFixed(1);
	if (height < 1 || height > 2.4 || weight < 15 || weight > 500 || isFinite(result) == false){
		document.getElementById('bmi').innerHTML = '<p>Please, input the correct data</p>';
	} else if (sex == 'male' && result < 20 || sex == 'female' && result < 19){
		document.getElementById('bmi').innerHTML = '<p>Your BMI is ' + result + '.</br>You are underweight, so you should gain more kgs to be healthier.</p>';
	} else if (sex == 'male' && result < 25 && result > 20 || sex == 'female' && result > 19 && result < 24) {
	    document.getElementById('bmi').innerHTML = '<p>Your BMI is ' + result + '.</br>You weight is normal. Stay fit!</p>';
	} else if (sex == 'male' && result < 30 && result > 25 || sex == 'female' && result < 30 && result > 24)  {
	    document.getElementById('bmi').innerHTML = '<p>Your BMI is ' + result + '.</br>You are overweight, be patient to your health.</p>';
	} else if (sex == 'male' && result < 40 && result > 30 || sex == 'female' && result < 40 && result > 30)  {
	    document.getElementById('bmi').innerHTML='<p>Your BMI is ' + result + '.</br>You have obesity, I recommend you to correct your weight before it is too late.</p>';
	} else {
	    document.getElementById('bmi').innerHTML='<p>Your BMI is ' + result + '.</br>You have morbid obesity, go immediately to the doctor!</p>';
	};
};