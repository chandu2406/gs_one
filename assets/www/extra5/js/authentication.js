

$(function(){
   $('form[name=new_post]').submit(function(){
    
    $.post($(this).attr('action'), $(this).serialize(), function(json) {
      

if (!window.localStorage.getItem("token")) {
  alert("no token found");
  anchor('login.html');
}
window.localStorage.setItem("token", json.token);
alert(window.localStorage.getItem("token"));
anchor('home.html');
    }, 'json').done(function() { alert("second success"); })
.fail( function(xhr, textStatus, errorThrown) {
        alert(errorThrown);
    });

    return false;
  });
  });


