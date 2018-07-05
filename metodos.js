var primero ='D|00001659|TEPIC, NAY.   |014|002|';
var fechas ='|22/02/2017';
var formaPago='|001|   |                $0.00|            ';
var fechal='|16/12/2018|'
var encabezado='TIPO|CONTRATO|NOMBRE PLAZA|NUMERO PLAZA|NUMERO SUCURSAL|FECHA RECIBO|FECHA DE PAGO|FECHA DEPOSITO|IND IMPORTE|IMPORTE DOCUMENTO|FORMA DE PAGO|INTERESES O DESCUENTOS|IMPORTE INTERESES O DESCUENTOS|IMPORTE TOTAL PAGADO|HORA DE PAGO|                            TOTAL A PAGAR| NUMERO DE REFERENCIA| FECHA LIMITE DE PAGO| NOMBRE| CONCEPTO DE PAGO|CTE. COB. LITE|IND. ORIGEN|';


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
            final=final+primero+fechas+fechas+fechas+'|'+signo+importe;
            
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