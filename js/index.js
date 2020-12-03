$(document).ready(function() {
    $("#error").hide();
});
 
function signUp() {
    var id = $("#id").val();
    var pswd1 = $("#pswd1").val();
    var pswd2 = $("#pswd2").val();
 
    if(pswd1 != pswd2) {
        alert("비밀번호를 다시 확인해주세요.");
        return;
    }
 
    firebase.auth().createUserWithEmailAndPassword(id, pswd1)
            .then(function() {
                alert("Signed Up!");
            })
            .catch(function(e) {
                $("#error #errmsg").html(e.message);
                $("#error").show();
                $("#signUp").hide();
                return;
            });
}

function signIn() {
    var id = $("#id").val();
    var pw = $("#pwwd1").val();
    firebase.auth().signInWithEmailAndPassword(id, pswd1)
            .then(function() {
                $("#signIn").hide();
                $("#authorized").show();
            })
            .catch(function(e) {
                lastWork = "signIn";
                $("#error #errmsg").html(e.message);
                $("#error").show();
                $("#signIn").hide();
                return;
            });
}
 
function back() {
    $("#" + lastWork).show();
    $("#error").hide();
}