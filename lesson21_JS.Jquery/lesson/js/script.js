// console.log($("div").eq(1).html());
// $( "li" ).each(function( index, element ) {
//     console.log( index + ": " + $( this ).text() );
//     });
// function addOl(n){
//     for(let i=1;i<=n;i++){
//         $("body").append(`<div>${i}.</div>`);
//     }
// }
// addOl(5);
// $(window).resize(function () {
//     if ($(this).width() < 768) {
//         $(".btn").on("click", function(){
//             alert("qwerty");
//         })
//     }
// })
// $('.btn').on('click', function () {
//     if ($(window).width() < 768) {
//         alert(1);
//     }
// });
// $("button").click(function () {
//     $("#id1").animate({ top: '300px' });
// });
$.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    success: function (data) {
        $('.results').html(data);
    }
});
