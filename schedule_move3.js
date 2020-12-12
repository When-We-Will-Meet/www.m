$(document).ready(function(){
    $('#plus').click(function(event){
        console.log('click');
        popupOpen();
    });
    function popupOpen(){
        var url="addschedule.html";
        var winWidth =400;
        var winHeight =400;
        var popupOption = "Width="+winWidth+", height="+winHeight;
        window.open(url, "", popupOption);
    }

    $('#main_title').click(function(){
        window.location.href="first_p.html"
    });
    $('#schedule_tab').click(function(){
        window.location.href="timetable.html"
    });
    $('#friend_tab').click(function(){
        window.location.href="friend.html"
    });
    $('#right').click(function(){
        document.location.href="schedule4.html";
    });
    $('#left').click(function(){
        document.location.href="schedule2.html";
    });
});