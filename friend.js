$(document).ready(function(){
    $('#main_title').click(function(){
        document.location.href="first_p.html"
    });
    $('#plus').click(function(){
        var prompt_test = prompt("추가하고 싶은 사람의 ID를 입력해주세요");
        alert(prompt_test);
    });
});
