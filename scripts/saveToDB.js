$( document ).ready(function() {
    $( "#submit1" ).click(function() {
       save();
    });
    $( "#submit2" ).click(function() {
        save2();
     });
});

function save(){
    var name = $("#name1").val();
    var email = $("#email1").val();
    var origin = $("#origin1").val();
    $.ajax({
        type: "POST",
        url: "../guardarInfo.php", 
        data: {
            name: name,
            email: email,
            origin: origin
        },
        success: function(result){
        }
    });
}

function save2(){
    var name = $("#name2").val();
    var email = $("#email2").val();
    var origin = $("#origin2").val();
    $.ajax({
        type: "POST",
        url: "../guardarInfo.php", 
        data: {
            name: name,
            email: email,
            origin: origin
        },
        success: function(result){
        }
    });
}