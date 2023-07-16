function volume_sphere() {
    //Write your code here
	// event.preventDefault();
	var radius = document.getElementById("radius").value;
	radius = Math.abs(radius);
	var volume = (4/3) * Math.PI * Math.pow(radius, 3);
	volume = volume.toFixed(4);//keep the value till 4 decimal places
	document.getElementById('volume').value = volume ;
   return false; // to prevent the default behaviour of browser so that 
	// value will be shown in the 
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;



 