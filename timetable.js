$(document).ready(function(){
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