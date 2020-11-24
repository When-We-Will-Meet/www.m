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
});