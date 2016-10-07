
<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------

| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

// Rutas de Acceso al Sistema
Route::get('/', 'loginController@verPagina');
Route::post('/login', 'loginController@verPagina');
Route::post('/verificarUsuario', 'loginController@verificarUsuario');
Route::post('/remote-username','userController@remoteUsername');

// Rutas de los juegos en Testing
// Route::group(array('before' => 'auth'), function(){
  Route::get('/juego/{idActividad}/{nombre}','actividadController@getViewJuego');
  Route::get('/game-testing', function () {
    return View::make('juegos.vista_juego_layer');
  });
// });
