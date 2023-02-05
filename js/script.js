// // kita akan membuat sebuah event untuk menangkap keadaan pada saat mengklik tiap-tiap tombl yaitu about, portofolio, contact, sama brand

// $('.page-scroll').on('click', function(e) {

//     // jadi saat saya klik salah satu link itu, saya mau mengambil isi dari aribut href nya. Misal klik about maka diambil #about nya
//     // ambil isi href
//     var tujuan = $(this).attr('href');

//     // /tangkap elemen yang bersangkutan
//     var elemenTujuan = $(tujuan);

//     // untuk mengetahui jarak antara sebuah elemen ke posisi paling atas, tapi ketika halamnnya kita scroll, nilai TopScroll nya berubah


//     // pindahkan scroll
//     $('body').animate({
//         scrollTop: elemenTujuan.offset().top - 50
//     }, 1250, 'easeInOutExpo');

//     // console.log(elemenTujuan.offset().top);

//     // supaya href nya gak jalan. Tapi dia sekarang mengembalikan nilai 0
//     e.preventDefault();


// });









// Parallax

// about
$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // untuk mengatur pergerakan teks dan gambar profil
    // ===== jumbotron =====
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
    });




    // ===== portofolio =====
    if (wScroll > $('.portofolio').offset().top - 250) {
        $('.portofolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portofolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });
    }

});