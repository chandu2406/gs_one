$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

$(function() {
    $('form[name=factorform]').submit(function() {
        var jsondata = $('form[name=factorform]').serializeObject();
		localStorage.setItem('foo', JSON.stringify(jsondata));
alert(JSON.parse(localStorage.getItem('foo')));
	
        return false;
    });
});

var jsondata1 = {"widget": {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}} 

	
 $(function(){
  $('form[name=new_post]').submit(function(){
  	alert($(this).attr('action'));
    $.post($(this).attr('action'), $(this).serialize(), function(json) {
      alert(json.time);
    }, 'json').done(function() { alert("second success"); })
.fail( function(xhr, textStatus, errorThrown) {
        alert("Could not connect to internet");
		alert(errorThrown);
    });

    return false;
  });
});

document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is loaded and it is now safe to make calls Cordova methods
    //
    
	
	 function localstorage() {
        window.localStorage.setItem("key", "value");
        
        // keyname is now equal to "key"
		
        var value = window.localStorage.getItem("key");
		alert(value);
        // value is now equal to "value"
        
        // localStorage is now empty
    }

    function checkConnection() {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';

        return states[networkState];
    }

	
	

    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value 

    // Wait for Cordova to connect with the device
    //
   function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
		localstorage();
    }

    // Cordova is ready to be used!
    //
    

    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64 encoded image data
      // console.log(imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI 
      // console.log(imageURI);

      // Get image handle
      //
      var largeImage = document.getElementById('largeImage');

      // Unhide image elements
      //
      largeImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      largeImage.src = imageURI;
    }

    // A button will call this function
    //
    function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI });
    }

    // A button will call this function
    //
    function capturePhotoEdit() {
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string  
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.FILE_URI });
    }

    // A button will call this function
    //
    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Called if something bad happens.
    // 
    function onFail(message) {
      alert('Failed because: ' + message);
    }

	
	$('#addButtonName').click(function() {
    var theFooter = $('#addMoreButtons');
    var buttonName= $('#newButtonName');
    
    if(buttonName.val() != '') {
        theFooter.append('<a href="#" data-role="button" data-icon="delete">'+buttonName.val()+'</a>');
        buttonName.val('');
        $('#theHomePage').trigger('create');  
    }
});