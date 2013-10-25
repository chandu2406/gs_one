
//function checks for token in localstorage. if it finds it, it directs it to the home pagge else to the sign_in page


function loadscreen() {

//window.localStorage.removeItem("token");

setTimeout("window.location.replace('login.html')","5000");	

}


// takes a url and takes the user to the new url from the current window
function anchor(url){
	window.location.href= url;
}





function login() {

//send it to rails app
//wait for response
//save cookies
//go to home page
// var t = document.getElementById('email').value;
// t= "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=bank&sensor=false&key=AIzaSyD3rfAv2pL6ZNxU6MQjcFCUpZR1fZu3f0E";
// xmlrequest(t);


//document.getElementById('error1').style.display = 'block';
//window.location.href="home.html";
var value = window.localStorage.getItem("token");

}

function forgotpass() {
window.location.href="password_retrieval.html";
window.console.log("entered forgot");
}



function xmlrequest() {
console.log("entered xmlrequest");
var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open('POST', 'http://128.2.207.3:3001/api/v1/tokens.json');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		//var items = JSON.parse(request.responseText);	
		console.log("onreadystatechange");	
		document.writeln(request.responseText);

	}
	else {
		console.log("did not enter onreadystatechange")
	}
}
request.send();

}

