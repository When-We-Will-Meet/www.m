$(document).ready(function(){
    $('#finish').click(function(){
        var title = $('#title').val();
        var title1 = $('#title1').val();
        var memo = $('#memo').val();
        var onemore = 0;
        var merge=0;

        console.log(title);
        var param = {
            title : title,
            title1 : title1,
            memo : memo,
            onemore : onemore,
            merge = merge
        };
        $.post('/add_title1',param,function(data){
            window.opener.location.reload();
        window.close();
        })
    });
    
});
