// 필요한 것들을 넣어줄것
var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var mysql = require('mysql');
var app = http.createServer(function(request,response){
    var url = request.url; //내가 처리하고싶은 url


    if (request.method == 'GET') { //get으로 전달된거면 이부분 실행
        if(request.url == '/'){

            url = '/timetable.html';  //기본적으로 index.html이 실행됨
        }else if(request.url == '/favicon.ico'){
            response.writeHead(404); //바로가기 아이콘이 없으면 404 리턴
            response.end();
            return;
        }else {
            url = request.url; //기본이 아니라면 해당 url을 저장
        }

        response.writeHead(200); //잘 열렸다고 200으로 확인
        response.end(fs.readFileSync(__dirname + url)); //__dirname = 현재 서버가 있는 디렉터리
        return;
    }

    if (request.method == 'POST') { 
        var body = '';

        request.on('data', function (data) { //post로 전달된 데이터가 있으면 body에 차곡차곡 쌓아라
            body += data;

            if (body.length > 1e6)
                request.connection.destroy();
        });

        request.on('end', function () { //body로 들어온 데이터를 가공하여 뚝딱뚝딱해서 객체화시킴
            var post = qs.parse(body); //ex) 투표에서 찬성이 들어왔으면 객체화하여 출력
            console.dir(post);

            var text = request.url.split('/');
            var method = text[1];
        
            if(typeof(postMethods[method]) == 'undefined'){ //request.url이 정의되어 있지 않으면
                response.writeHead(404); //404에러 출력
                response.end();
                return;
            }else{
                console.dir(postMethods); //request.url이 존재하면 postMethods 실행하라
                postMethods[method](response,post);//post값 전달하는 과정
            }



            // use post['blah'], etc.
        });
    }

});
app.listen(3000); //localhost:80으로 서버에 접속. 자신은 3000을 들을 준비가 되어있음


var connInfo = {
    host     : 'localhost',   
    port     : '3307',
    user     : 'www',       
    password : '1234',     
    database : 'wwwm'    
};

var queryExecute = function(sql,callback){

    var connection = mysql.createConnection(connInfo);
    connection.connect();
    connection.query(sql,callback);
    connection.end();
};

var send200 = function(response,str){

    response.writeHead(200);
    response.write(str);
    response.end();
};



var getData = function(param,callback){

    var sql = 'select * from example';
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        callback(results);
    });

};

var postMethods = {};

postMethods.add_title1 = function(res, post){
    var sql="UPDATE wwwm.times SET title='"+post.title+"' WHERE number= "+post.title;
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        var returnStr = '';
    });
    var sql="UPDATE wwwm.times SET title1='"+post.title1+"' WHERE number= "+post.title;
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        var returnStr = '';
    }); 
    var sql="UPDATE wwwm.times SET memo='"+post.memo+"' WHERE number= "+post.title;
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        var returnStr = '';
    }); 
    var sql="UPDATE wwwm.times SET merge='"+post.merge+"' WHERE number= "+post.title;
    queryExecute(sql,function (error, results, fields) {
        console.log(results);
        if (error) throw error;
        var returnStr = '';
    });
    var sql="UPDATE wwwm.times SET onemore='"+post.onemore+"' WHERE number= "+post.title;
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        var returnStr = '';
        send200(res,returnStr);
    });
    
}
postMethods.get_title1 = function(res, post){
    var sql="select title,title1,memo,onemore from wwwm.times WHERE ip=1";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        console.dir(results);
        var returnStr = JSON.stringify(results);
        send200(res,returnStr)
    });
}
