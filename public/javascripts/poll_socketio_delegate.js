$( document ).delegate("#pollshow", "pageinit", function() {
    var pid = $('#hdata').attr('pid');
    var socket = io.connect('http://localhost');
    console.log("Subscribing to channel " + pid);
    socket.emit('subscribe', pid);

    socket.on('update', function (data) {
        console.log("Update data: " + data.poll);
        if(data.success){
            $('#bc1').text(" " + data.poll.polloptions[0].votes + " ");
            $('#bc2').text(" " + data.poll.polloptions[1].votes + " ");
        }
    });

    $('#button1').click(function() {
        socket.emit('vote', { pchannel: pid, message: 0 });
    });
    $('#button2').click(function() {
        socket.emit('vote', { pchannel: pid, message: 1 });
    });
});