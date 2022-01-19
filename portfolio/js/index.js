$(document).ready(function() {
  $(".hamburger").click(function() {
    $(this).toggleClass("is-active");
  });
});

// $(document).ready(function() {
//   $('.header_burger, .header_list').click(function(event) {
//       $('.header_burger, .header_menu').toggleClass('active');
//       $('body').toggleClass('lock');
//   });
// });