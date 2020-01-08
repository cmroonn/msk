$(document).ready(function(){
    $('#openModal').click(function(e){
        e.preventDefault();
        $('.modal').toggleClass('active');
        $('.overlay').toggleClass('active');
    });

    $('.modal-close').click(function(e){
        $('.modal').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('.thanks').remove('active');
    });
});