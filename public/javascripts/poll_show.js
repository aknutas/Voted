$(document).ready(function() {
    var pid = $('#hdata').attr('pid');
    $('#qrcode').qrcode('http://localhost:3000/polls/' + pid);
});