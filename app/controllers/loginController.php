<?php

/**
 *
 */
class loginController extends BaseController
{

  function verPagina() {
    if (Request::method() == 'POST') {
      /*Guardamos en la variable $Form todos los valores obtenidos*/
      $Form = Input::get('data'); //datos
      /*Creamos la reglas de validacion para esos valores*/
      $Reglas = array(
        'username' => 'required',
        'password' => 'required'
      );
      $mensajes = array( 'required' => 'Ingresar Contraseña' );
      if($Form){
          $Validar  = Validator::make($Form, $Reglas, $mensajes);
          /* Verificamos si los datos fueron validados*/
          if($Validar->fails())
          {
              /*Retornamos los errores de validación encontrados*/
             return $Validar->messages();
          }
          else
          {
            /*Creamos el array para enviar los datos
            * a la autentifiacion del usuario*/
            $validarAuth = array(
                'username'  =>  '',
                'password'  =>  Input::get('data.password'),
                'active'    =>  1
            );
              /*Vemos si las credenciales son correctas*/
              if(Input::get('data.password') == 'gametester'){
                return Response::json(array(0=>'success'));
              }
              else{
                return Response::json(array(0=>'error'));;
              }
          }
        }
      }
      else{ return View::make('vista_login'); }
    }

    public function salir(){
        Auth::logout();
        return Redirect::to('/');
    }

    public function verificarUsuario(){
      $reglas = array( 'username' => 'required' );
      $Validar  = Validator::make(Input::get('data'), $reglas);
      if (Input::get('data') == "curiosityTesting"){ return Response::json(array(0=>"exist")); }
      else { return Response::json(array(0=>'null')); }
    }

}
