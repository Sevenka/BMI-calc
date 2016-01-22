function calc(button){
	var height = document.getElementById('height').value;
	var weight = document.getElementById('weight').value;
	height*=0.01;
	var result=(weight/(height*height)).toFixed(1);
	if (height<1||height>2.4||weight<15||isFinite(result)==false){
		document.getElementById('bmi').innerHTML='<p>Please, input the correct data</p>';
	} else {
		document.getElementById('bmi').innerHTML='<p>Your BMI is '+result+'</p>';
	}
};