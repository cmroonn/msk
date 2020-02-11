$(window).on('load', function() {
    $('.preloader').fadeOut().end().delay(1000).fadeOut('slow');
    $('.preloader-overlay').fadeOut().end().delay(1000).fadeOut('slow');
  });

$(document).ready(function(){
    $('#openModal').click(function(e){
        e.preventDefault();
        $('.modal').toggleClass('active');
        $('.overlay').toggleClass('active');
    });

    $('.modal-close').click(function(e){
        $('.modal').removeClass('active');
        $('.overlay').removeClass('active');
        $('.thanks').removeClass('active');
    });
    

    // ajax

    $("#sender").click(function(e){
        e.preventDefault();
        console.log($('.inputName').val());
        if($('.inputName').val() !== '' && $('.inputTel').val() !== '' && $('.inputName').val() !== undefined && $('.inputTel').val() !== undefined){
            sendAjaxForm('result_form', 'form', 'sender.php');
            return false; 
        } else{
            $('#result-form').text('Проверьте правильность ввода данных');
        }
    });
     
    function sendAjaxForm(result_form, ajax_form, url) {
        $.ajax({
            url:     url, //url страницы 
            type:     "POST", //метод отправки
            dataType: "html", //формат данных
            data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
            success: function(response) { //Данные отправлены успешно
                // result = $.parseJSON(response);
                // $('#result_form').html('Имя: '+result.name+'<br>Телефон: '+result.phonenumber);
                $('.modal').removeClass('active');
                $('.thanks').addClass('active');
                var link = document.createElement('a');
                link.setAttribute('href','../docs.jpg');
                link.setAttribute('download','download');
                link.click();
            },
            error: function(response) { // Данные не отправлены
                $('#result_form').html('Ошибка. Данные не отправлены.');
            }
         });
    };

    // phone mask 
    var phoneMask = IMask(
        document.getElementById('phone-mask'), {
          mask: '+{7}(000)000-00-00'
        });
});