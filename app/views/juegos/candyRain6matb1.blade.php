@extends('juegos.vista_juego_layer')

@section('juego_css')
  {{--{{HTML::style('/packages/css/curiosity/juegos/iframe_layer.css')}}--}}
  <style media="screen">
    #candyRain{
      width: 100%;
      height: 384px;
    }
  </style>
@stop

@section('title')
  Candy Rain
@stop

@section('juego')
@stop

@section('game')
<!-- <center>
  <iframe src="/packages/iframes/juegos/phaser/candyRain/index.html" allowfullscreen webkitallowfullscreen mozallowfullscreen style="height:384px;width:512px;border:none" name="iframe_juego"></iframe>
</center> -->
<div id="candyRain"></div>
@stop

@section('juego_js')
  {{HTML::script('packages/js/libs/phaser/phaser.min.js')}}
  {{HTML::script('packages/dataGamesPhaser/candyRain6matb1/packages/js/curiosity/juegos/main.js')}}
  {{HTML::script('packages/js/curiosity/juegos/appCandyRain6matb1.js')}}
@stop
