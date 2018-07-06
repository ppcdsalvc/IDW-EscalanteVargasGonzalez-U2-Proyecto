var primero ='D|00001659|TEPIC, NAY.   |014|002|';
var fechas ='|22/02/2017';
var formaPago='|001|   |                $0.00|            ';
var fechal='|16/12/2018|';

function leer(){
    var fs = require("fs");
    fs.readFile('BANCO NUEVO.TXT', 'utf8', (err, data) => {
        if (err) throw err;
        var arreglo= data.split('\n');
        var final='';
      
            for(var i=0;i<arreglo.length;i++){
         
            var signo=arreglo[i][72]+'|             ';
            //asignamos el importe
            var importe=arreglo[i].slice(73,85);
            var puntodec=arreglo[i].slice(85,87)
            //conertimos importe en entero
            importe= parseInt(importe,10);

            if(importe<10){
                importe='$'+importe+'.'+puntodec+'     ';
            }else if(importe<100){
                importe='$'+importe+'.'+puntodec+'    ';
            }else if(importe>100&&importe<1000){
                importe='$'+importe+'.'+puntodec+'   ';
            }else if(importe>=1000&&importe<10000){
                var temporal1=arreglo[i][81];
                var temporal2=arreglo[i].slice(82,85);
                importe='$'+temporal1+','+temporal2+'.'+puntodec+' ';
            }else if(importe>=10000){
                var temporal1=arreglo[i].slice(80,82);
                var temporal2=arreglo[i].slice(82,85);
                importe='$'+temporal1+','+temporal2+'.'+puntodec;
               }
               //Aqui especificamos la hora
            var h1 = arreglo[i].slice(24,26);
            var h2=arreglo[i].slice(26,28);
            var hora ='|'+h1+':'+h2+'|';
            var referencia='|'+arreglo[i].slice(109,149);
            var nombre='nombre ejemplo 30 caracteres  ';
            var concepto='|REINSCRIPCION||';
            final=final+primero+fechas+fechas+fechas+'|'+signo+importe+formaPago+importe+hora+referencia+fechal+nombre+concepto+'\n';
            
            
        }
        //finall= final.unshift('arrrg');
        console.log(final);
        fs.writeFile('resultante.txt',final,(err)=>{
            if(err)
            throw err;
            console.log("guardado");
        });

    });
}
module.exports.leer=leer;