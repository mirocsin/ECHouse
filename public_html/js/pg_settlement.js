$("#pg_settlement").on("pageshow", function(event, ui) {
    $('#lblpayamount').text('');
    $('#lbldispense').text('');
    document.getElementById('btncash').addEventListener('touchstart', btn_touchstart_settlement, false);
    document.getElementById('btnnets').addEventListener('touchstart', btn_touchstart_settlement, false);
    document.getElementById('btnothers').addEventListener('touchstart', btn_touchstart_settlement, false);
});

$('#btn_backpay').bind('touchstart', function(e) {
    $.mobile.changePage("#pg_stylist", {transition: "slide", reverse: true});
});

function btn_touchstart_settlement() {
    $('#lblpayamount').text('10');
    $('#lbldispense').text('Dispensing Card, Please wait');
    blink('#lbldispense');
    setTimeout(function(){$.mobile.changePage('#pg_stylist');},5000)
}

function blink(selector){
$(selector).fadeOut('slow', function(){
    $(this).fadeIn('slow', function(){
        blink(this);
    });
});
}