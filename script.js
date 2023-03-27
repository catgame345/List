$(function(){
    $("#env").click(function(){
        var e = $("input").val();
        if(e !== "") {
var list = $("<li></li>").text(e);
var bu = $(list).append("<button class='rem'>X</button>");
        $("#ol").append(list);
        $("input").val("");
    $(".rem").click(function(){
        $(this).parent().remove();
        });
     }
    });
});