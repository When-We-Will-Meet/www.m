$(document).ready(function(){
    $('#finish').click(function(){
        window.opener.location.reload();
        window.close();
    });
    
});
