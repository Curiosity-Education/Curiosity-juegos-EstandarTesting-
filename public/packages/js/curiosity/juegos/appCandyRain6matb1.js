$(document).ready(function () {
  var src_background;
  // /$curiosity.menu.setPaginaId("#li-corral");
  // $juego.setTitulo("Candy Rain Game");
  // $juego.setObjetivo(objetivo);
  // $juego.setBackgroundColor("rgb(25, 132, 179)");
  // $juego.setBackgroundImg("/packages/images/fondos/fondo.jpg");
  // $juego.setNivelUsuarioIMG("/packages/images/cups/medalla1.png");
  // $juego.setSrcVideo({
  //   titulo:"| Restas Mentales |",
  //   ruta:"/packages/video/games/instrucciones/Juego.mp4",
  //   explanation1:"1. Observa la operacion.",
  //   explanation2:"2. Mueve el sombrero para atrapar la respuesta correcta."
  // });
  // $juego.slider.changeImages({
  //     img1:"sumaGame_slide1.png",
  //     img2:"sumaGame_slide2.png",
  //     img3:"sumaGame_slide3.png"
  // });
  $juego.boton.comenzar.setFuncion(function(){
    alert();
      $juego.game._start();
      $(".temp").hide();
      $("#pausa").hide();
      $(".zona-puntaje").hide();
      src_background = $(".zona-juego").css("background-image");
      $(".zona-juego").css("background-image","none");
  });
  $("#game").on("exit",function(){
    $(".zona-juego").css("background-image",src_background);
    parent.iframe_juego.location.reload();
  });

  // $("#btn-comenzar").click(function(event) {
  //   $("#zona-obj").hide();
  // });

});
