$(document).ready(function(){
    $('#plus').click(function(event){
        console.log('click');
        popupOpen();
    });
    function popupOpen(){
        var url="../html/addschedule.html";
        var winWidth =400;
        var winHeight =400;
        var popupOption = "Width="+winWidth+", height="+winHeight;
        window.open(url, "", popupOption);
    }

    $('#main_title').click(function(){
        window.location.href="../html/first_p.html"
    });
    $('#schedule_tab').click(function(){
        window.location.href="../html/timetable.html"
    });
    $('#friend_tab').click(function(){
        window.location.href="../html/friend.html"
    });
    $('schedule_add_tab').click(function(){
        window.location.href="../html/time_match.html"
    });
    $('#right').click(function(){
        alert("4주차 마지막 화면입니다")
    });
    $('#left').click(function(){
        document.location.href="../html/schedule3.html";
    });
});