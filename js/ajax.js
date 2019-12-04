$(document).ready(function() {
    $('#txtname').keyup(function() {
        var txtname = $('#txtname').val();
        $.post('action.php', {
            name: txtname
        }, function(data) {
            $('#txtcontent').html(data);
        });
    });

});