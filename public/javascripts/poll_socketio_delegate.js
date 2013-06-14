$( document ).delegate("#pollshow", "pageinit", function() {
    var pid = $('#hdata').attr('pid');
    var socket = io.connect('http://localhost');
    socket.emit('subscribe', pid);

    socket.on('update', function (data) {
        console.log(data);
    });

    $('#button1').click(function() {
        socket.emit('vote', { room: pid, message: 0 });
    });
    $('#button2').click(function() {
        socket.emit('vote', { room: pid, message: 1 });
    });
});