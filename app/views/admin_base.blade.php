<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="icon" type="image/png" href="/packages/images/landing/logo.png">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    {{ HTML::style('/packages/css/libs/bootstrap/bootstrap.min.css')}}
    {{ HTML::style('/packages/css/libs/awensome/css/font-awesome.min.css')}}
  	{{ HTML::style('/packages/css/libs/animate/animate.min.css')}}
    {{ HTML::style('/packages/css/curiosity/preloadSpinner.css') }}
    {{ HTML::style('/packages/css/curiosity/alert.css') }}
    {{ HTML::style('/packages/css/curiosity/userStyle.css') }}
    {{ HTML::style('/packages/css/curiosity/vistaEstandar.css') }}
    {{ HTML::style('/packages/css/curiosity/preloadSpinner.css') }}
    {{ HTML::style('/packages/css/libs/tooltipster/tooltipster.css') }}
    {{ HTML::style('/packages/css/libs/sweetalert/sweetalert.css') }}
    {{HTML::style('/packages/css/libs/notificacion_toast/jquery.toast.css')}}
    <link rel="stylesheet" href="/packages/css/skins/skin-blue.css">
    @yield('mi_css')
    <title>Curiosity | @yield('title')</title>
  </head>
  <body class="hold-transition skin-blue sidebar-mini sidebar-collapse">
    <audio src="/packages/notificaciones/music.mp3" id="notyAudio"></audio>
    <div class="wrapper">

      <header class="main-header" >
        <div class="logo">
          <span class="logo-mini">
            <img src="/packages/images/Curiosity-mini.png" style="width:30px; height:30px;">
          </span>
          <span class="logo-lg">
            <img src="/packages/images/Curiosity-mini.png" style="width:30px; height:30px;">
            &nbsp;
            <b>Curiosity Edu<small></small></b>
          </span>
        </div>

        <!-- Header Navbar -->
        <nav class="navbar navbar-fixed-top" role="navigation">
          <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button" title="ocultar/mostrar menu"></a>
          <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">

              <!-- Menu de cuenta de usuario -->
              <li class="dropdown user user-menu hidden-xs">
                <a id="menu-usuario" href="#" class="dropdown-toggle" data-toggle="dropdown">
                  {{HTML::image('', 'alt', array('class' => 'user-image img-profile'))}}
                  Tester Games <i class="fa fa-angle-down" id="arrow"></i>
                </a>
                <ul class="dropdown-menu">
                  <li class="user-header">
                    <!-- Ìmagen de perfil de la parte superior derecha -->
                    <img src="/packages/images/avatars/lupa.png" alt="" class="img-profile">
                    <p><small><b>¡ Soy curiosity !</b></small></p>
                  </li>

                  <!-- Footer Menu -->
                  <li class="user-footer">
                    <!--<div class="pull-left">
                      <a href="/perfil" class="btn btn-primary">
                        <span class="fa fa-gear"></span>
                        Editar Perfil
                      </a>
                    </div>-->
                    <div class="text-center">
                      <a href="/logout" class="btn form-control" style="width:90%; background-color:#44c6ee; color:white; border-radius:50px; outline:none;">
                        <span class="fa fa-sign-out"></span>
                        Cerrar Sesión
                      </a>
                    </div>
                  </li>
                </ul>
              </li>

            </ul>
          </div>
        </nav>
      </header>

      <!-- Barra lateral izquierda con menu y estatus -->
      <aside class="main-sidebar" id="main-sidebar">
        <section class="sidebar">

          <div class="user-panel">
              <div class="pull-left image">
				<!-- Imagen de Perfil de la parte del menú -->
				    {{HTML::image('', 'alt', array('class' => 'img-circle img-profile'))}}
            </div>
            <div class="pull-left info">
              <h4 style="">Curiosity</h4>
              <small></small>
            </div>
          </div><hr id="hrAside">

          <!-- menu en la barra lateral izquierda -->

        <ul class="sidebar-menu">
        </ul>
      </section>
    </aside>
      <!-- Preloader web -->
      <div id="cssload-pgloading">
        <div class="cssload-loadingwrap">
          <ul class="cssload-bokeh">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <!-- <h4 class="textPreloader">Espera un momento...</h4> -->
        </div>
      </div>
      <!-- Fin de preloader -->
      <!-- Zona de Contenido general -->
      <div class="content-wrapper" hidden="hidden"><br><br>
        <!-- Encabezado de la pagina -->
        <section class="content-header" id="img-portada">
          <div class="">
           	<h1 id="titulo_hijo">
              @yield('titulo_contenido')
          		@yield('titulo_contenido_hijo')
  			   </h1>
          <div class="custom-brands">
            <ul id="migas">
              @yield('migas')
            </ul>
          </div>
        </div>
      </section>

        <!-- Contenido principal -->
      <section class="content_body">
        <div class="container-fluid">
          <div class="row" id="make-all">
            @yield('panel_opcion') <!-- panel para contenido en general -->
          </div>
        </div>
      </section>
    </div>

    <!-- modal premium alert -->
    <div class="modal fade" id="modalPremium" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-keyboard="false">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body text-center">
            <button type="button" class="close" data-dismiss="modal" id="closePrem" aria-hidden="true">&times;</button>
            <span class="fa fa-star" id="iconPrem"></span>
            <br><br>
            <h4 class="tituloPrem">Curiosity Premium</h4>
            <br>
            <p class="text-center bodyPrem">
              Este Tema se encuentra bloqueado por hoy.<br><br>
              Para poder practicar en este juego es necesario que seas un usuario premium. <br>
              Nos encontramos en fase Beta actualmente. <br>
              En poco tiempo podrás cambiar tu cuenta a premium ¡Cuentale a tus papás!
            </p>
          </div>
        </div>
      </div>
    </div>

  {{HTML::script('/packages/js/libs/jquery/jquery.min.js')}}
  <script type="text/javascript">
    function finalizado (){
      $("#cssload-pgloading").fadeOut('slow', function() {
        setTimeout(function () {
          $(".content-wrapper").fadeIn('slow');
        }, 500);
      });
    };
    window.onload = function(){
      finalizado();
    };
  </script>
  {{HTML::script('/packages/js/libs/bootstrap/bootstrap.min.js')}}
  {{HTML::script('/packages/js/app.min.js')}}
  {{HTML::script('/packages/js/curiosity/desktop-notify.js')}}
  {{HTML::script('/packages/js/curiosity/alert.js')}}
  {{HTML::script('/packages/js/libs/sweetalert/sweetalert.min.js')}}
  {{HTML::script('/packages/js/curiosity/curiosity.js')}}
  {{HTML::script('/packages/js/libs/mask/jquery-mask/jquery.mask.js')}}
  {{HTML::script('/packages/js/libs/tooltipster/jquery.tooltipster.min.js')}}
  {{HTML::script('/packages/js/libs/validation/jquery.validate.min.js')}}
  {{HTML::script('/packages/js/libs/validation/localization/messages_es.min.js')}}
  {{HTML::script('/packages/js/libs/notificacion_toast/jquery.toast.js')}}
  {{HTML::script('/packages/js/libs/knob/jquery.knob.js')}}
  {{HTML::script('/packages/js/libs/highcharts/highcharts.js')}}
  {{HTML::script('/packages/js/libs/highcharts/highcharts-more.js')}}
  {{--{{HTML::script('/packages/js/libs/highcharts/modules/exporting.js')}}--}}
  {{HTML::script('/packages/js/curiosity/finding.js')}}

  <script type="text/javascript">
  $(document).ready(function(){

		$('#menuDatos').click(function(){
			if($(window).width() <= 767){
				$(".sidebar-toggle").trigger("click");
			}
		});

		$(function () {
		  $('[data-toggle="tooltip"]').tooltip()
		});

      $(".tooltipShow").tooltipster({
        position : 'bottom',
        touchDevices: true
      });


		$(".tooltipShowRight").tooltipster({
        position : 'right',
        touchDevices: true
      });

      var source;

      if (window.EventSource) {
         var source = new EventSource('/recordatorio');
            source.onopen = function (e) {
              //console.log(e);
            };

            source.onerror = function (e) {
              //console.log(e);
            };

           source.addEventListener('message',function(e){
               var data = JSON.parse(e.data);
               $.each(data,function(i,array){
                   $curiosity.noty(array.mensaje,"message","Papa dice: ","packages/images/perfil/"+array.foto_perfil);
               });
           },false);

      }
});
  </script>
  @yield('mi_js')
  </body>
</html>
