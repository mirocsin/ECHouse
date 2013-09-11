$("#popupLogin").on("pagebeforeshow", function(event, ui) {
     $('#txtuser').val('');
     $('#txtpassword').val('');
});

$('#btncancel_login').bind('touchstart',function(e){
   $.mobile.changePage('#pg_stylist'); 
});

$('#btnok_login').bind('touchstart',function(e){
   $.mobile.changePage('#pg_admin'); 
});