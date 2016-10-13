//se declaran las variables  globalmente
var tabla, estrella, paraguas, reloj, fondoJuego, grid, music, contador, musicDulce, btnFull, musicError;

var counter = 90;
var text = 0;
var puntos = 0, score;

var bandera = true;
var bandera1 = true;

var temparray = [];
var cc = 0;

var relojPts = 0, estrellaPts, paraguasPts = 3;

//el arreglo botonDulce almacena todos los botones que mandan parametro ya sea de letra o de numero
var botonDulce = [11];
//las variables tabla_X y tabla_Y determina cantos dulces tendra en cada row
var tabla_Y = 7;
var tabla_X = 6;
//el arreglo dulce amacena los dulces usados en el juego
const dulce = [41];
//candys es un arreglo diseñado para dar el color del dulce que se lanze a el canvas por medio del random
var candys = [3];
//las variables parametroX y parametroY tendran almacenado el valor de los parametros que se manden por medio de los //botones base
var parametroX = -1;
var parametroY = -1;

var tarro=[3];

var dulceDestruido = [];

var numDulceDestroy = 0;

var posicionPixelesY = [null, 225, 300, 375, 450, 525, 600];

var juego = new Phaser.Game(1024, 768, Phaser.AUTO, 'candyRain');

var estadoPrincipal = {


    preload: function(){
        //en esta zona se inicializan los sprites requeridos en la escena
        juego.load.image('fondo', 'packages/dataGamesPhaser/candyRain6matb1/packages/images/games/fondo.png');
        juego.load.image('grid', 'packages/dataGamesPhaser/candyRain6matb1/packages/images/games/tablero.png');


        //esta parte se inicializan los iconos como el PARAGUAS, ESTRELLA y el RELOJ estos serviran como ayuda en el //juego para el nino
        juego.load.image('paraguas', 'packages/dataGamesPhaser/candyRain6matb1/packages/images/games/paraguas.png');
        juego.load.image('reloj', 'packages/dataGamesPhaser/candyRain6matb1/packages/images/games/reloj.png');
        juego.load.image('estrella', 'packages/dataGamesPhaser/candyRain6matb1/packages/images/games/estrella.png');
        juego.load.spritesheet('btnFull', 'packages/dataGamesPhaser/candyRain6matb1/packages/images/games/fullScreen.png', 100, 100);

        //Esta zona es para declarar todos los botones usados para los parametros X y Y
        juego.load.spritesheet('boton_1', 'packages/dataGamesPhaser/candyRain6matb1/packages/images/games/boton1.png',200, 200);
        juego.load.spritesheet('boton_2', 'packages/dataGamesPhaser/candyRain6matb1/packages/images/games/boton2.png',200, 200);
        juego.load.spritesheet('boton_3', 'packages/dataGamesPhaser/candyRain6matb1/packages/images/games/boton3.png',200, 200);
        juego.load.spritesheet('boton_4', 'packages/dataGamesPhaser/candyRain6matb1/packages/images/games/boton4.png',200, 200);
        juego.load.spritesheet('boton_5', 'packages/dataGamesPhaser/candyRain6matb1/packages/images/games/boton5.png',200, 200);
        juego.load.spritesheet('boton_6', 'packages/dataGamesPhaser/candyRain6matb1/packages/images/games/boton6.png',200, 200);
        juego.load.spritesheet('boton_a', 'packages/dataGamesPhaser/candyRain6matb1/packages/images/games/botona.png',200, 200);
        juego.load.spritesheet('boton_b', 'packages/dataGamesPhaser/candyRain6matb1/packages/images/games/botonb.png',200, 200);
        juego.load.spritesheet('boton_c', 'packages/dataGamesPhaser/candyRain6matb1/packages/images/games/botonc.png',200, 200);
        juego.load.spritesheet('boton_d', 'packages/dataGamesPhaser/candyRain6matb1/packages/images/games/botond.png',200, 200);
        juego.load.spritesheet('boton_e', 'packages/dataGamesPhaser/candyRain6matb1/packages/images/games/botone.png',200, 200);
        juego.load.spritesheet('boton_f', 'packages/dataGamesPhaser/candyRain6matb1/packages/images/games/botonf.png',200, 200);

        //se  inicializan los 4 dulces a usar en el juego
        juego.load.image('dulce1', 'packages/dataGamesPhaser/candyRain6matb1/packages/images/games/dulce_rojo.png');
        juego.load.image('dulce2', 'packages/dataGamesPhaser/candyRain6matb1/packages/images/games/dulce_amarillo.png');
        juego.load.image('dulce3', 'packages/dataGamesPhaser/candyRain6matb1/packages/images/games/dulce_verde.png');
        juego.load.image('dulce4', 'packages/dataGamesPhaser/candyRain6matb1/packages/images/games/dulce_azul.png');


        juego.load.image('tarro2', 'packages/dataGamesPhaser/candyRain6matb1/packages/images/games/jar-yellow.png');
        juego.load.image('tarro3', 'packages/dataGamesPhaser/candyRain6matb1/packages/images/games/jar-green.png');
        juego.load.image('tarro4', 'packages/dataGamesPhaser/candyRain6matb1/packages/images/games/jar-blue.png');
        juego.load.image('tarro1', 'packages/dataGamesPhaser/candyRain6matb1/packages/images/games/jar-pink.png');

        juego.load.audio('crystal', 'packages/dataGamesPhaser/candyRain6matb1/packages/music/Crystal.ogg');
        juego.load.audio('dulceF', 'packages/dataGamesPhaser/candyRain6matb1/packages/music/dulceF.ogg');
        juego.load.audio('error', 'packages/dataGamesPhaser/candyRain6matb1/packages/music/pp080916_erroneo.ogg');
    },




    create: function(){

        juego.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		juego.scale.pageAlignHorizontally = true;
		juego.scale.pageAlignVertically = true;

        juego.stage.backgroundColor = '#000000';
        fondoJuego = juego.add.tileSprite(0, 0, 1024, 768, 'fondo');
        music = juego.add.audio('crystal');
        musicDulce = juego.add.audio('dulceF');
        musicError = juego.add.audio('error');

        contador = juego.add.text(20, 35,'90 Seg', {font: "55px Kiddish", fill: "#ed6922", strokeThickness: 6, stroke: "#ffffff"});
        score = juego.add.text(20, 680,'0 Pts', {font: "45px Kiddish", fill: "#ed6922", strokeThickness: 6, stroke: "#ffffff"});



        grid = juego.add.tileSprite(545, 412, 500, 500, 'grid');
        grid.anchor.setTo(0.5);
        grid.scale.setTo(1.03, 0.92);

        //aqui se crea y se asigna la posicion de los sprites usados en el juego
        paraguas = juego.add.button(860, 250, 'paraguas');
        paraguas.scale.setTo(0.43);
        paraguas.events.onInputDown.add(Destruir, this);
        paraguas.events.onInputDown.add(llenarTablero, this);
        paraguas.events.onInputDown.add(actionOnClick, this);
        paraguas.inputEnabled = false;

        reloj = juego.add.button(860, 460, 'reloj');
        reloj.scale.setTo(0.43);
        reloj.events.onInputDown.add(sumaTime, this);
        reloj.events.onInputDown.add(actionOnClick1, this);
        reloj.inputEnabled = false;



        //se da a cada uno de los botonesDulces una posicion se escalan y se les asigna una variable la cual se usara como parametro para la destuccion de srite(dulce) tambien se le asigna un evento click el cual hara lo dicho anteriormente, estose repite por cada uno de los botones asignados
        botonDulce[0] = juego.add.button(264, 605, 'boton_1');
        botonDulce[0].anchor.setTo(0.5);
        botonDulce[0].scale.setTo(0.3);
        botonDulce[0].variable = 0;
        botonDulce[0].events.onInputDown.add(agregarValorY, this);
        botonDulce[0].events.onInputDown.add(cambioBoton, this);

        botonDulce[1] = juego.add.button(264, 525, 'boton_2');
        botonDulce[1].anchor.setTo(0.5);
        botonDulce[1].scale.setTo(0.3);
        botonDulce[1].variable = 6;
        botonDulce[1].events.onInputDown.add(agregarValorY, this);
        botonDulce[1].events.onInputDown.add(cambioBoton, this);

        botonDulce[2] = juego.add.button(264, 450, 'boton_3');
        botonDulce[2].anchor.setTo(0.5);
        botonDulce[2].scale.setTo(0.3);
        botonDulce[2].variable = 12;
        botonDulce[2].events.onInputDown.add(agregarValorY, this);
        botonDulce[2].events.onInputDown.add(cambioBoton, this);

        botonDulce[3] = juego.add.button(264, 380, 'boton_4');
        botonDulce[3].anchor.setTo(0.5);
        botonDulce[3].scale.setTo(0.3);
        botonDulce[3].variable = 18;
        botonDulce[3].events.onInputDown.add(agregarValorY, this);
        botonDulce[3].events.onInputDown.add(cambioBoton, this);

        botonDulce[4] = juego.add.button(264, 305, 'boton_5');
        botonDulce[4].anchor.setTo(0.5);
        botonDulce[4].scale.setTo(0.3);
        botonDulce[4].variable = 24;
        botonDulce[4].events.onInputDown.add(agregarValorY, this);
        botonDulce[4].events.onInputDown.add(cambioBoton, this);

        botonDulce[5] = juego.add.button(264, 220, 'boton_6');
        botonDulce[5].anchor.setTo(0.5);
        botonDulce[5].scale.setTo(0.3);
        botonDulce[5].variable = 30;
        botonDulce[5].events.onInputDown.add(agregarValorY, this);
        botonDulce[5].events.onInputDown.add(cambioBoton, this);


        botonDulce[6] = juego.add.button(340, 680, 'boton_a');
        botonDulce[6].anchor.setTo(0.5);
        botonDulce[6].scale.setTo(0.3);
        botonDulce[6].variable = 5;
        botonDulce[6].events.onInputDown.add(agregarValorX, this);
        botonDulce[6].events.onInputDown.add(cambioBoton, this);

        botonDulce[7] = juego.add.button(420, 680, 'boton_b');
        botonDulce[7].anchor.setTo(0.5);
        botonDulce[7].scale.setTo(0.3);
        botonDulce[7].variable = 4;
        botonDulce[7].events.onInputDown.add(agregarValorX, this);
        botonDulce[7].events.onInputDown.add(cambioBoton, this);

        botonDulce[8] = juego.add.button(500, 680, 'boton_c');
        botonDulce[8].anchor.setTo(0.5);
        botonDulce[8].scale.setTo(0.3);
        botonDulce[8].variable = 3;
        botonDulce[8].events.onInputDown.add(agregarValorX, this);
        botonDulce[8].events.onInputDown.add(cambioBoton, this);

        botonDulce[9] = juego.add.button(585, 680, 'boton_d');
        botonDulce[9].anchor.setTo(0.5);
        botonDulce[9].scale.setTo(0.3);
        botonDulce[9].variable = 2;
        botonDulce[9].events.onInputDown.add(agregarValorX, this);
        botonDulce[9].events.onInputDown.add(cambioBoton, this);

        botonDulce[10] = juego.add.button(670, 680, 'boton_e');
        botonDulce[10].anchor.setTo(0.5);
        botonDulce[10].scale.setTo(0.3);
        botonDulce[10].variable = 1;
        botonDulce[10].events.onInputDown.add(agregarValorX, this);
        botonDulce[10].events.onInputDown.add(cambioBoton, this);

        botonDulce[11] = juego.add.button(750, 680, 'boton_f');
        botonDulce[11].anchor.setTo(0.5);
        botonDulce[11].scale.setTo(0.3);
        botonDulce[11].variable = 0;
        botonDulce[11].events.onInputDown.add(agregarValorX, this);
        botonDulce[11].events.onInputDown.add(cambioBoton, this);

        btnFull = juego.add.button(950, 60, 'btnFull');
        btnFull.anchor.setTo(0.5);
        btnFull.scale.setTo(0.8);
        btnFull.frame = 0;
        btnFull.events.onInputDown.add(cambioBotonFull, this);
        btnFull.events.onInputDown.add(makeFullScreen, this);

        //se anda a llamar la funcion que se encarga de llenar el tablero
        music.play();
        juego.time.events.loop(Phaser.Timer.SECOND, updateCounter, this);
        llenarTablero();
        tarros();


    },




    update: function(){


        if(paraguasPts == 3){

            paraguas.inputEnabled = true;
            juego.time.events.repeat(Phaser.Timer.SECOND, 6, pulsoParaguas, this);
            paraguasPts = 0;
        }

        if (relojPts == 4){

            reloj.inputEnabled = true;
            juego.time.events.repeat(Phaser.Timer.SECOND, 6, pulsoReloj, this);
            relojPts = 0;
        }


        if(parametroX >= 0 && parametroY >= 0){
            var aux;
            aux = parametroX + parametroY;
            if(dulce[aux].key.substr(5, 6) == tarro[0].key.substr(5, 6)){

                var dulceArriba = 6;
                var faltante, lineas, espacio = 0, max = 41, pos, temp = aux, temp1 = aux;
                dulce[aux].destroy();
                puntos += 100;
                score.setText(puntos + ' Pts');
                faltante = max - aux;
                lineas = juego.math.floorTo(faltante / 6);
                dulceArriba = aux + 6;
                pos = lineas;

                for(var i = 0; i < lineas; i++){

                    temp = temp + 6;
                    juego.add.tween(dulce[dulceArriba]).to({y: posicionPixelesY[pos]}, 500, Phaser.Easing.Linear.None, true);
                    swapArrayElements(dulce, temp1, temp);
                    dulceArriba = dulceArriba + 6;
                    pos = pos - 1;
                    temp1 = temp1 + 6;
                }


                var random = juego.rnd.integerInRange(1, 4);
                dulce[dulceArriba - 6] = juego.add.sprite(335 *  (.250 * (9 - parametroX)) , 150 , 'dulce' + [random]);
                dulce[dulceArriba - 6].anchor.setTo(0.5);
                dulce[dulceArriba - 6].scale.setTo(0.8);

                var num = tarro[0].key.substr(5, 6);
                var posDulcePequeX = ((numDulceDestroy + 1)  % 2) ? 63 : 110;
                var posDulcePequeY = (numDulceDestroy % 2 == 0) ? 530 - (numDulceDestroy * 15) : 530 - (numDulceDestroy * 13);
                dulceDestruido[numDulceDestroy] = juego.add.sprite(posDulcePequeX, posDulcePequeY, 'dulce' + num);
                dulceDestruido[numDulceDestroy].anchor.setTo(0.5);
                dulceDestruido[numDulceDestroy].scale.setTo(0.26);
                numDulceDestroy = numDulceDestroy + 1;
                musicDulce.play();


                parametroX = -1;
                parametroY = -1;


        }
            else{

                musicError.play();
                if(puntos > 50){

                    puntos -= 50;
                    score.setText(puntos + ' Pts');
                }
                parametroX = -1;
                parametroY = -1;

            }
    }



        if(dulceDestruido.length == 8){
           tarro[0].kill();
           numDulceDestroy = -1;
            for(var i = 0; i<8; i++){
                dulceDestruido[i].destroy();
            }
            tarros();
            dulceDestruido = [];
            numDulceDestroy = 0;
            relojPts += 1;
        }
    }

};

//se manda a llamar la escena
juego.state.add('principal', estadoPrincipal);
juego.state.start('principal');


//aqui comienzan los metodos
function llenarTablero(){

    var numDulce = 41;
    var espacioX = 1;
    var espacioY = 0;

    for(var i=0; i<tabla_Y; i++){

        for(var j=0; j<tabla_X; j++){

            var random = juego.rnd.integerInRange(1, 4);
            dulce[numDulce] = juego.add.sprite(335 * espacioX, 150 + (i * espacioY) , 'dulce' + [random]);
            dulce[numDulce].anchor.setTo(0.5);
            dulce[numDulce].scale.setTo(0.8);
            dulce[numDulce].enableBody = true;
            dulce[numDulce].physicsBodyType = Phaser.Physics.ARCADE;

            espacioX = espacioX + .250;
            numDulce = numDulce - 1;

        }

         espacioY = 75;
         espacioX = 1;
    }
}



// estas dos funciones son llamadas para pasar el valor  de los parametros enviados por los botonesDulces
function agregarValorX(boton){
    parametroX = boton.variable;
}

function agregarValorY(boton){
    parametroY = boton.variable;
}

function Destruir(){
    for (var i = 0; i<42; i++){

        dulce[i].kill();
    }
}
function cambioBoton(boton){

    cc += 1;

    boton.frame = 1;

    temparray[cc] = boton.key;

    if(cc == 2){

        for(var i = 0; i < botonDulce.length; i++){

             botonDulce[i].frame = 0;
        }
       temparray = [];
        cc = 0;
    }
}
function cambioBotonFull(boton){

    cc += 1;

    boton.frame = 1;

    if(cc == 2){

        btnFull.frame = 0;

        cc = 0;
    }
}


function tarros(){
    var espacioX = 0;

    for(var i=0; i<1; i++){
        var numTarro = 0;
        var random = juego.rnd.integerInRange(1, 4);
        tarro[numTarro] = juego.add.sprite(115 + espacioX, 460, 'tarro' + [random]);
        tarro[numTarro].anchor.setTo(0.5);
        tarro[numTarro].scale.setTo(1);


        numTarro = numTarro + 1;
        espacioX = espacioX + 130;
   }
}

var swapArrayElements = function(arr, indexA, indexB) {
  var temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
};

function updateCounter() {

    counter--;

    contador.setText(counter + ' Seg');

}

function render() {

    juego.debug.text("Time until event: " + juego.time.events.duration.toFixed(0), 32, 32);
    juego.debug.text("Next tick: " + juego.time.events.next.toFixed(0), 32, 64);

}

function sumaTime(){
    counter += 10;
}

 function makeFullScreen(){
    if (juego.scale.isFullScreen)
    {
        juego.scale.stopFullScreen();
    }
    else
    {
        juego.scale.startFullScreen(false);
    }
  }

function actionOnClick(boton) {

    boton.inputEnabled = false;
    paraguasPts = 0;

}

function actionOnClick1(boton) {

    console.log(relojPts);
    boton.inputEnabled = false;
    relojPts = 0;
    d(false);
}

function pulsoParaguas(){



    if(bandera == true){

        juego.add.tween(paraguas.scale).to( { x: 0.55, y: 0.55 }, 2000, Phaser.Easing.Linear.None, true);
        bandera = false;

    }
    else{

        juego.add.tween(paraguas.scale).to( { x: 0.43, y: 0.43 }, 2000, Phaser.Easing.Linear.None, true);
        bandera = true;

    }
}


function pulsoReloj(){

    if(bandera1 == true){
        juego.add.tween(reloj.scale).to( { x: 0.55, y: 0.55 }, 2000, Phaser.Easing.Linear.None, true);
        bandera1 = false;

    }
    else{

        juego.add.tween(reloj.scale).to( { x: 0.43, y: 0.43 }, 2000, Phaser.Easing.Linear.None, true);
        bandera1 = true;

    }
}
