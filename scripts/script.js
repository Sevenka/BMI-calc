function calc(button){
	var height = document.getElementById('height').value;
	var weight = document.getElementById('weight').value;
	height*=0.01;
	var result=(weight/(height*height)).toFixed(1);
	document.getElementById('bmi').innerHTML='<p>Your BMI is '+result+'</p>';
	/*document.body.innerHTML+='<p>Your BMI is '+result+'</p>';*/
};