$( document ).delegate("#pollshow", "pageinit", function() {
    var pid = $('#hdata').attr('pid');
    var socket = io.connect('http://localhost');
    console.log("Subscribing to channel " + pid);
    socket.emit('subscribe', pid);

    socket.on('update', function (data) {
        console.log("Update data: " + data.message);
        if(data.message == 0){
            var nn = Number($('#bc1').text()) + 1;
            $('#bc1').text(" " + nn + " ");
        } else if(data.message == 1){
            var nn = Number($('#bc2').text()) + 1;
            $('#bc2').text(" " + nn + " ");
        }
    });

    $('#button1').click(function() {
        socket.emit('vote', { pchannel: pid, message: 0 });
    });
    $('#button2').click(function() {
        socket.emit('vote', { pchannel: pid, message: 1 });
    });
});