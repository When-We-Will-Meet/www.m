$(document).ready(function(){
    $('#main_title').click(function(){
        window.location.href="../html/first_p.html"
    });
    $('#schedule_tab').click(function(){
        window.location.href="../html/schedule.html"
    });
    $('#friend_tab').click(function(){
        window.location.href="../html/friend.html"
    });
    $('#schedule_add_tab').click(function(){
        window.location.href="../html/time_match.html"
    });
    /*$('#schedule_add_tab').click(function(){
        window.location.href="schedule.html"
    });*/

    $('#add').click(function(event){
        console.log('click');
        popupOpen();
    });
    function popupOpen(){
        var url="../html/add_fix_schedule.html";
        var winWidth =400;
        var winHeight =400;
        var popupOption = "Width="+winWidth+", height="+winHeight;
        window.open(url, "", popupOption);
    }

});