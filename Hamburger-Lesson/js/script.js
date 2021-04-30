$(function(){
  $('.menu-trigger').on('click',function(event){
    // トグル処理では、該当のclass属性がある場合にはclassが削除され、ない場合にはclassが追加されます。
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});