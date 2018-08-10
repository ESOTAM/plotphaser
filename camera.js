var graphics ;
var vw = window.innerWidth;
var vh = window.innerHeight;
var mundox;
var mundoy;
var theplot=[];
var  editex;
var ox=0;
var oy=0;
var indice=0;
var text_nux=[];
var text_nuxn=[];
var text_nuy=[];
var text_nuyn=[];
var mirtensparente;
var mir;

 var unidadmedida=60;
 var cuantaslineas=20;
    
        var IDE_HOOK = false;
        var VERSION = '2.6.2';
var graphics2;


var  varinputext="";
var xminmio=-3;
var xmaxmio=3;
var resul="";








var colorAmarill='FFEB3B';
var colorazul='03A9F4';

var colorverde='37d67a';
var colormorado='ba68c8';
var colornaranja='ff9800';

var cahngecol=colorazul;
function cahngecolor(){



}

function getvalorinputex(){
varinputext=getallid("idinputextvalor").value;
xminmio=parseFloat(getallid("idinx1").value);
xmaxmio=parseFloat(getallid("idinx2").value);

varinputext=varinputext.toLowerCase();

theplot1=new Fooplot(document.getElementById('theplot'));
theplot1.addPlot(String(varinputext),FOOPLOT_TYPE_FUNCTION);
theplot1.reDraw();

 //cahngecol=colorAmarill;
  ecuacion();

  escribreresul(resul);
}

function getallid(st){

  return  document.getElementById(String(st));
 }

function escribreresul(st1res){

  document.getElementById("idparrafo").innerHTML ="result= " +String(st1res);
}




function tiene_letras(texto){
   texto = texto.toLowerCase();
   for(i=0; i<texto.length; i++){
      if (varinputext.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
}
var idfondo=0;
function fondo(){

if(idfondo>7){

idfondo=0;
}console.log(idfondo);
  fon.loadTexture ('fon'+String(idfondo));
idfondo=idfondo+1;

}


var booltieneletras=false;
function calcular(){

  varinputext=getallid("idinputextvalor").value;

  booltieneletras=tiene_letras(varinputext);
  if(booltieneletras==0){
    escribreresul("it can not be calculated, it has letters");
  }
    else{
xminmio=1;
xmaxmio=2;

varinputext=varinputext.toLowerCase();

//theplot1=new Fooplot(document.getElementById('theplot'));
theplot1.addPlot(String(varinputext),FOOPLOT_TYPE_FUNCTION);
theplot1.reDraw();
  escribreresul(resul);
  resul=0;}

}

function ejemplo(){
var mirando=Math.random() * (7- 0) + 0;
  if(mirando<1&&mirando>=0){varinputext="(cos(pi*x)+2)^2-(4^(1/2)) +asinh(e)";}
  if(mirando<3&&mirando>=2){varinputext="atanh(0.7*x)+e";}
  if(mirando<4&&mirando>=3){varinputext="(e+pi)^(sin(2*x))";}
  if(mirando<5&&mirando>=4){varinputext="(9*x)^(1/2)";}
  if(mirando<6&&mirando>=5){varinputext="(x*)^(2)";}
  if(mirando<7&&mirando>=6){varinputext="(1/2)-(2/3)+3";}


  document.getElementById("idinputextvalor").value=varinputext;
}


function randommio(stn){

return  Math.floor(Math.random() * stn);
}

var theplot1=new Fooplot(document.getElementById('theplot'));
        
var game = new Phaser.Game(vw,vh, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {
 game.load.image('mirtensparente', 'mirtensparente.png');
    game.load.image('mirtensparentedos', 'mirtensparentedos.png');

     game.load.spritesheet('mir', 'mir.png',60, 60, 3);
 
  game.load.image('fon0', 'fon0.png');
   game.load.image('fon1', 'fon1.png');
    game.load.image('fon2', 'fon2.png');
     game.load.image('fon3', 'fon3.png');
      game.load.image('fon4', 'fon4.png');
       game.load.image('fon5', 'fon5.png');
        game.load.image('fon6', 'fon6.png');
          game.load.image('fon7', 'fon7.png');

      game.load.image('player','phaser-dude.png');
          game.load.spritesheet('gamepad', 
            'gamepad_spritesheet.png', 100, 100);
   
}

var player;
var pstatico;
var cursors;

 var textsaly;
  var textsalx;
  var fon1;
    var fon2;
      var fon3;
        var fon4;
          var fon5;
            var fon6;

var styles2;
var styles;

function recargar(){
location.reload();

}
var buscax=0;
var buscay=0;
function buscarfuncion(){



       fon.x =buscax+mundox/2*unidadmedida;
        fon.y =buscay+mundoy/2*-unidadmedida;
        console.log(fon.x+" x y"+fon.y);
       
}
function create() {

   //game.add.tileSprite(0, 0, 1920, 1920, 'background');

    game.world.setBounds(0, 0, 5000, 5000);
    mundox=game.world.centerX*2;
    mundoy=game.world.centerY*2;


    game.physics.startSystem(Phaser.Physics.ARCADE);


var idfondo=randommio(8);

  fon=game.add.sprite(0,0, 'fon'+String(idfondo));
  fon.anchor.setTo(0.5, 0.5);
 // if(vw<670){ fon.scale.set(0.0022580645*vw+0.5612903226)}
  fon.scale.set(0.004*vw);
  fon.width;
  fon.x=mundox/2;
   fon.y=mundoy/2;
game.physics.enable(fon, Phaser.Physics.ARCADE);

    game.physics.arcade.gravity.y = 0;








mirtensparente= game.add.sprite(vw/2, vh/2, 'mirtensparente');
mirtensparentedos= game.add.sprite(vw/2, vh/2, 'mirtensparentedos');

  mir = game.add.sprite(0, 0, 'mir');
   
    mir.anchor.setTo(0.5, 0.5);
 game.physics.enable(mir, Phaser.Physics.ARCADE);
mir.body.allowRotation = false;


mir.animations.add('miraniid', [0, 1, 2 ]);
   mir.animations.play('miraniid', 20, true);



 pstatico = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
pstatico.anchor.setTo(0.5, 0.5);

pstatico.visible=false;
    player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
  player.anchor.setTo(0.5, 0.5);
   game.physics.enable(player, Phaser.Physics.ARCADE);
   
    player.body.allowRotation = false;
   player.visible=false;
    

     styles = { font: "bold "+String(vw*0.04)+"px Arial", fill: "#ACD6EA", boundsAlignH: "center", boundsAlignV: "middle" };
  styles2 = { font: "bold "+String(vw*0.04)+"px Arial", fill: "#03A9F4", boundsAlignH: "center", boundsAlignV: "middle" };
 
    
  textsalx = game.add.text(vw*0.5+100, vh*0.07, 'x=', styles);
  textsaly = game.add.text(vw*0.5+100, vh*0.1+20,'y=', styles);
textsaly.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
textsalx.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    textsalx.fixedToCamera=true;
    textsaly.fixedToCamera=true;
   
   

var p1x=mundox/2;
var p1y=0;
var p2x=mundox/2;
var p2y=mundoy/2;




game.camera.follow(fon, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
graphics =game.add.graphics(0, 0);

    
    graphics.lineStyle(4, 0xFF7359, 0.6);
    
    graphics.moveTo(mundox/2, 0);
    graphics.lineTo(mundox/2,mundoy);
    graphics.moveTo(0,mundoy/2);
    graphics.lineTo(mundox,2500);
    
 
 graphics2 =game.add.graphics(0, 0);

   // graphics2.beginFill(0x027a71);
    graphics2.lineStyle(4, 0x02fdeb, 0.6);



  // Add the VirtualGamepad plugin to the game
        this.gamepad = this.game.plugins.add(Phaser.Plugin.VirtualGamepad);
        
        // Add a joystick to the game (only one is allowed right now)
        this.joystick = this.gamepad.addJoystick(100, vh*0.5, 1.2, 'gamepad');
        
        // Add a button to the game (only one is allowed right now)
        this.button = this.gamepad.addButton(-400,- 4200, 1.0, 'gamepad');
   
  this.button.visible=false;






//crearejes(ox,oy);




console.log(fon.x,fon.y);










}

function update() {

  if(idfondo===7){

textsaly.setStyle(styles2);
textsalx.setStyle(styles2);
  }else{
    textsaly.setStyle(styles);
    textsalx.setStyle(styles);
  }
  fon.rotation += 0.005;
 if (this.joystick.properties.inUse) {
           
       fon.x =fon.x+ 0.1* this.joystick.properties.x;
        fon.y =fon.y+ 0.1 * this.joystick.properties.y;
       
}

//console.log( fon.x);
mirtensparente.x=((mir.x+ox*unidadmedida)-mundox/2)/unidadmedida;
mirtensparente.y=-((mir.y+(-oy)*unidadmedida)-mundoy/2)/unidadmedida;
 

mir.rotation = game.physics.arcade.moveToPointer(mir, 60, game.input.activePointer, 500);

textsaly.text="y= "+mirtensparente.y;
textsalx.text="x= "+mirtensparente.x; 


}

function render() {
 // game.debug.spriteInfo(mirtensparente, 32, 32);

   // game.debug.text("ESOTAM", 32, 32);

}
     





function crearejes(ix,iy){
   contx=ix;
contxn=ix;
conty=iy;
contyn=iy;
 for(var i=0 ;i<(cuantaslineas*unidadmedida);i=i+unidadmedida){


      

       tamanotexto_nu=15;
   
        var style_nu = { font: "bold "+tamanotexto_nu+"px Arial", fill: "#FF3E00", boundsAlignH: "center", boundsAlignV: "middle" };
 
  
     

        text_nux[indice]= game.add.text(mundox/2+(i+(unidadmedida*0.01)), mundoy/2, "",style_nu);
        text_nux[indice].setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        text_nux[indice].setText (contx);

        text_nuxn[indice]= game.add.text(mundox/2+(-i-(unidadmedida*0.01)), mundoy/2, "",style_nu);
        text_nuxn[indice].setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        text_nuxn[indice].setText (contxn);


        text_nuy[indice]= game.add.text(mundox/2, mundoy/2+(-i-(unidadmedida*0.01)), "",style_nu);
        text_nuy[indice].setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        text_nuy[indice].setText (conty);


        text_nuyn[indice]= game.add.text(mundox/2, mundoy/2+(i-(unidadmedida*0.01)), "",style_nu);
        text_nuyn[indice].setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        text_nuyn[indice].setText (contyn);





 contx=contx+1;
       contxn=contxn-1;
       conty=conty+1;
          contyn=contyn-1;
       indice=indice+1;

    }


}



      function texnumer(px,py,texnu){


       tamanotexto_nu=15;
   
        var style_nu = { font: "bold "+tamanotexto_nu+"px Arial", fill: "#0dffbd", boundsAlignH: "center", boundsAlignV: "middle" };
 
  
     

       var text_nu= game.add.text(px,py, "",style_nu);
   
    
      text_nu.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

       text_nu.setText (texnu);

      }

















function act_btngraf(){




 

}
var idcolorline=0;


var idcarteciano=0;

function ecuacion (){
var cc=0;

var  arrayl=[]; 

arrayl=[];
//arrayl.pop();



for(var i=1; i<fy1.length;i=i+1){

 arrayl.push(new Phaser.Point(fx1[i],fy1[i]));
}


console.log("cxx "+parseInt(fy1[parseInt(fx1.length/2)])
  + "  "+ fon.x+"  "+fon.y+ " "+ mundox+"   "+mundoy);


if(idcarteciano==0){idcarteciano=idcarteciano+1;
  buscax=parseInt(fx1[parseInt(fx1.length/2)]);
 buscay=parseInt(fy1[parseInt(fx1.length/2)]);
ox=buscax;
oy=buscay;
 crearejes(buscax,buscay);
}
/*
if(false){
var indicefy1=0;
indicefy1=fy1.length/2;
ox=Math.round(fx1[indicefy1]);
 oy=Math.round(fy1[indicefy1]);
 console.log(ox+"  "+oy);
cambiartextx();
}
*/
idcolorline=7;
if(idcolorline>7){idcolorline=0}
if(idcolorline==0){cahngecol= colorazul;}
if(idcolorline==1){cahngecol= colorAmarill;}
if(idcolorline==2){cahngecol= colormorado;}
if(idcolorline==3){cahngecol= 'cddc39';}
  if(idcolorline==4){cahngecol= 'e91e63';}
if(idcolorline==5){cahngecol= '4dd0e1';}
if(idcolorline==6){cahngecol= 'dd003a';}
if(idcolorline==7){cahngecol= '0d47a1';}



idcolorline=idcolorline+1;
var  n1=0;
var n2=0;
var f=unidadmedida;
var ct=0;


 //graphics2.beginFill(0x027a71);cahngecol
    graphics2.lineStyle(4, '0x'+cahngecol, 0.6);
graphics2.moveTo(mundox/2+(arrayl[n1].x-ox)*f,mundoy/2-(arrayl[n1].y-oy)*f);
for(var i=1; i<arrayl.length;i=i+1){
  ct=ct;
  n1=ct;
  n2=ct+1;
 
// graphics2.moveTo(mundox/2, 0);
  graphics2.lineTo(mundox/2+(arrayl[i].x-ox)*f,mundoy/2 -(arrayl[i].y-oy)*f);
    

    
    
  
/*
bmdobj.line(mundox/2+(arrayl[n1].x-ox)*f,mundoy/2-(arrayl[n1].y-oy)*f,
  mundox/2+(arrayl[n2].x-ox)*f,mundoy/2 -(arrayl[n2].y-oy)*f,colr, 7);
ct=ct+1;*/

}


fy1=[];
fx1=[];


}



      function btflechad_phaser(visi){

//editex.visiblebasico(false);
      }
