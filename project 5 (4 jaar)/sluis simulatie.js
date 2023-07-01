document.addEventListener(
    "DOMContentLoaded", start, false);
let c;
let ctx;

let bootX = 0, bootY = 45;
let lpoortje= 75,rpoortje = 75;
let lpheight= 55,rpheight = 55;
let wheight = -20;
let isRood1 = true;
let isRood2 = true;
let deel3 =true;

 function start() {
    c = document.getElementById("canvasboot");
    ctx = c.getContext("2d");

    requestAnimationFrame(tekening);
}

//einde boilerplate


let vaarboot = new Image();
vaarboot.src = "./images/Vaar_op_LPG_met_AISB.jpg";
vaarboot.style.width = "100px"

function tekening() {
    requestAnimationFrame(tekening);

    ctx.fillStyle = 'white';
    ctx.fillRect(0,0, c.width, c.height);

    console.log("hoi");
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.strokeStyle = "BlanchedAlmond";
    ctx.fillStyle = "BlanchedAlmond";
    ctx.fillRect(0, 95, 120, 100);
    ctx.stroke();

    ctx.lineWidth = 6;
    ctx.strokeStyle = "Blue";
    ctx.fillStyle = "Blue";
    ctx.fillRect(0, 75, 120, 20);
    ctx.stroke();

    ctx.lineWidth = 6;
    ctx.strokeStyle = "BlanchedAlmond";
    ctx.fillStyle = "BlanchedAlmond";
    ctx.fillRect(120, 130, 180, 100);
    ctx.stroke();

    ctx.lineWidth = 6;
    ctx.strokeStyle = "Blue";
    ctx.fillStyle = "Blue";
    ctx.fillRect(130, 110, 170, 20);
    ctx.stroke;

//verlaging water/verhoging

    ctx.lineWidth = 6;
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "blue";
    ctx.fillRect(120, 130, 70, wheight);
    ctx.stroke;

//poortjes

    ctx.lineWidth = 6;
    ctx.strokeStyle = "green";
    ctx.fillStyle = "green";
    ctx.fillRect(120, lpoortje, 3, lpheight);
    ctx.stroke;

    ctx.lineWidth = 6;
    ctx.strokeStyle = "green";
    ctx.fillStyle = "green";
    ctx.fillRect(190, rpoortje, 3, rpheight);
    ctx.stroke;


    ctx.drawImage(vaarboot, bootX, bootY, 30, 30);


     //stoplichten
      ctx.strokeStyle = "black";
      if( isRood1){
          ctx.fillStyle = "red";
      }
      else {
          ctx.fillStyle = "green";
      }
      ctx.lineWidth = 1;
      ctx.arc(110, 10, 10, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();

    ctx.beginPath()
    ctx.strokeStyle = "black";
    if( isRood2){
        ctx.fillStyle = "red";
    }
    else {
        ctx.fillStyle = "green";
    }
    ctx.lineWidth = 1;
    ctx.arc(210, 10, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}




function deel2(){

    bootX = 271;
    bootY = 80;
    wheight = -54;
    lpoortje= 75;
    rpoortje = 75;
    lpheight= 55;
    rpheight = 55;
    isRood2 = true;
    isRood1 = true;
}


function linkerpoortje(){
    if (lpheight === 20)
    {
        lpheight = 55;
        lpoortje = 75
    }
    else{
        if (lpheight === 55){
            lpoortje = 0
            lpheight = 20
        }
    }

}

function rechterpoortje(){


    if (rpheight === 20)
    {
        rpheight = 55;
        rpoortje = 75
    }
    else{
        if (rpheight === 55){
            rpoortje = 0
            rpheight = 20
        }
    }


}







function waterverhogen(){
    if (bootX === 140)
    {
        wheight = -55
        bootY = 45
    }

   // if (bootX === 140)
    wheight = -55;
}
function wateromlaag(){
   if (bootX === 140)
    {wheight = -20
      bootY = 80}

       wheight = -20;
}



function varen() {

     if (wheight <=-50 && lpoortje <=0)
    {
        bootX = 140;
        bootY = 45;
        isRood1 = false;
    }
     if (isRood2 === false){
         bootX = 0
     }
}


function stoplicht(){

   //links naar rechts toe
    if (bootY === 80 && bootX === 140 && rpheight ===20) {
        bootX = 271;
        isRood2 = false;
        console.log("werkt")
        return
    }
//rechts naar links toe
    if (bootY === 80 && bootX ===271 && wheight ===-20 && rpheight ===20 && deel3=== true)
    {
        bootX = 140;
        isRood2 = false;
        console.log("werkt2")
    }
}