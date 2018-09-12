$(function() {
    $('[data-toggle="tooltip"]').tooltip();

    var ul = $('.product .nav-tabs');
    console.log(ul);
    var totalWidth = 0;
    var lis = ul.find('li');
    lis.each(function(index,value) {
        totalWidth += $(value).outerWidth(true);
        //console.log(totalWidth);
    })
    console.log(totalWidth);
    ul.width(totalWidth);


})
