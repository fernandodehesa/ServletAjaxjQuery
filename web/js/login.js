/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    $("#form-login").submit(function(event){
        event.preventDefault();
        var form = $(this);
        $.ajax({
            method: form.attr("method"),
            url: form.attr("action"),
            dataType: 'json',
            data: {
                usuario: form.children("input[name='usuario']").val(),
                pass: form.children("input[name='pass']").val()
            },
            success: function (data) {
                console.log(data);
                if(data.success == false){
                    console.log(data.accion.mensaje);
                }else{
                    window.location.href = data.accion.tipo;
                }
            }
        });
    });
});


    