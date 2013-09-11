// Div Page Show
$("#pg_stylist").on("pageshow", function(event, ui) {
    document.getElementById('btnstylist1').addEventListener('touchstart', btn_touchstart, false);
    document.getElementById('btnstylist2').addEventListener('touchstart', btn_touchstart, false);
    document.getElementById('btnstylist3').addEventListener('touchstart', btn_touchstart, false);
    document.getElementById('btnstylist4').addEventListener('touchstart', btn_touchstart, false);
    document.getElementById('btnstylist5').addEventListener('touchstart', btn_touchstart, false);
    document.getElementById('btnstylist6').addEventListener('touchstart', btn_touchstart, false);
    document.getElementById('btnstylist7').addEventListener('touchstart', btn_touchstart, false);
    document.getElementById('btnstylist8').addEventListener('touchstart', btn_touchstart, false);
    document.getElementById('btnstylist9').addEventListener('touchstart', btn_touchstart, false);
    document.getElementById('btnstylist10').addEventListener('touchstart', btn_touchstart, false);
    document.getElementById('btnstylist11').addEventListener('touchstart', btn_touchstart, false);
    document.getElementById('btnstylist12').addEventListener('touchstart', btn_touchstart, false);
    document.getElementById('btnstylist13').addEventListener('touchstart', btn_touchstart, false);
    document.getElementById('btnstylist14').addEventListener('touchstart', btn_touchstart, false);
    document.getElementById('btnstylist15').addEventListener('touchstart', btn_touchstart, false);
});

function btn_touchstart() {
    $.mobile.changePage('#pg_settlement');
}
//
//$('#btnadmin_page').bind('touchstart',function(e){
//    //$.mobile.changePage('#pg_admin');
//    $('#popupLogin').popup('open',{transition: "slideup"});
//});