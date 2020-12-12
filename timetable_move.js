$(document).ready(function(){
    $('#main_title').click(function(){
        window.location.href="first_p.html"
    });
    $('#schedule_tab').click(function(){
        window.location.href="schedule.html"
    });
    $('#friend_tab').click(function(){
        window.location.href="friend.html"
    });
    $('#schedule_add_tab').click(function(){
        window.location.href="time_match.html"
    });
    $('#right').click(function(){
        document.location.href="timetable.html";
    });
    $('#left').click(function(){
        document.location.href="timetable.html";
    });
    /*$('#schedule_add_tab').click(function(){
        window.location.href="schedule.html"
    });*/

    $('#add').click(function(event){
        console.log('click');
        popupOpen();
    });
    function popupOpen(){
        var url="add_fix_schedule.html";
        var winWidth =400;
        var winHeight =400;
        var popupOption = "Width="+winWidth+", height="+winHeight;
        window.open(url, "", popupOption);
    }

});