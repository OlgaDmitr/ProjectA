function back() {
    let button = $('.back');
    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 20) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000);
    })
};

back();



// var ava = document.getElementsByTagName('img');
// [].forEach.call(ava,function(elem){
//   if (elem.getAttribute('src') == 'LOGO.png'){
//     elem.setAttribute('src','logo2.PNG');
//   }
// });


