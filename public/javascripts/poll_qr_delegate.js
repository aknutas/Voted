$( document ).delegate("#pollshow", "pageinit", function() {
    var pid = $('#hdata').attr('pid');
    $('#qrcode').qrcode({
        width: "200",
        height: "200",
        text: 'http://localhost:3000/polls/' + pid});
});