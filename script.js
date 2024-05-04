// event saat link di klik
$(".page-scroll").on("click", function () {
  //ambil isi href
  var tujuan = $(this).attr("href");
  //tangkap element
  var elemenTujuan = $(tujuan);
  //pindahkan scroll
  $("body").animate(
    {
      scrollTop: elemenTujuan.offset().top - 50,
    },
    1025
  );

  elemenTujuan.preventDefault();
});
