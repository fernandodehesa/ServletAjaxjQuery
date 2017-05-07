/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    $("#form-login input[type='button']").click(function(){
        console.log( $("#form-login") );
    });
    $("#form-login").submit(function(){
        var url = $(this).attr("action");
        console.log(this);
        var data = $(this).serialize();
        $.get(url,data,function(xml){
            var xmlDoc = $.parseXML( xml );
            //window.location.href = "index.html";
            console.log(xml);
        });
        
        /*posting.done(function( data ) {
            //console.log(data);
            alert("GGGGGG");
        });*/
        /*$.post({
           type: "post",
           url: form.attr("action"),
           data: $("#idForm").serialize(),
           success: function(data){
               alert(data); // show response from the php script.
           }
        });*/
        
    });
});


    