$(document).ready(function(){
    var eee = [];
    var param={
        ip:1
    };
    $.post('/merge1',param,function(data){
        var dd = JSON.parse(data);
        
            
        var table = document.getElementById('merge');
        for(var a=0;a<105;a++){
            eee[a] = dd[a].merge;
            console.log(eee[a]);
        }
        var a=0;
            for(var i=1; i<16;i++){
                for(var j=1;j<8;j++&&a++){
                    if(eee[a]==0){
                        table.rows[i].cells[j].style.backgroundColor="green";
                    }
                    else if(eee[a]==1){
                        table.rows[i].cells[j].style.backgroundColor="yellow";
                        
                    }
                    else {
                        table.rows[i].cells[j].style.backgroundColor="red";
                    }
                }
            }
        
        
        
    });

    //var table = document.getElementById('merge');
    //table.rows[1].cells[1].style.backgroundColor="red";
    

})
