

const Persona1= {Nombre:'juan',nota: 10};
const Persona2= {Nombre:'maria',nota: 30};
const Persona3= {Nombre:'carlos',nota: 20};
const Persona4= {Nombre:'karla',nota: 40};

const Persona5= {Nombre:'Lili',nota: 30};
const Persona6= {Nombre:'Cleo',nota: 40};
const Persona7= {Nombre:'Pedro',nota: 33};
const Persona8= {Nombre:'Marco',nota: 21};

var color ="";

    function userTemplate(Persona) {
        
        if(parseInt(Persona.nota) <= 10){ color = "red";}
        else if(parseInt(Persona.nota) >= 21){ color = "blue";}
        else {color ="green"}  
        return `<p> ${Persona.Nombre} &nbsp;&nbsp;&nbsp;<FONT COLOR="${color}">${Persona.nota} </FONT><br></p>`;
      }

    document.write(`<h3>Desarrollo web </h3>`);
    document.write(userTemplate( Persona1));
    document.write(userTemplate( Persona2));
    document.write(userTemplate( Persona3));
    document.write(userTemplate( Persona4));
    document.write(`<h3>Programacion 2 </h3>`);
    document.write(userTemplate( Persona5));
    document.write(userTemplate( Persona6));
    document.write(userTemplate( Persona7));
    document.write(userTemplate( Persona8));


    function crear()
    {
    var numero=document.getElementById("numero").value;

    multiplicar(numero);

    division(numero);
    
    suma(numero);

    resta(numero);
    }

    function multiplicar(numero){
        tabla="<a> Multiplicacion <a> <table border>";
        tabla+="<tr>";
        tabla+=`<td> <FONT  COLOR="blue"> Multiplicacion </FONT> </td>`;
    tabla+=`<td> <FONT  COLOR="red"> Total </FONT> </td>`;
    tabla+="</tr>";
    for (var i = 1; i <= 10; i++){
        tabla+="<tr>";
        tabla+=`<td> <FONT  COLOR="blue"> ${numero} * ${i} </td>`;
        tabla+=`<td> <FONT  COLOR="red">`+(numero*i)+" </FONT> </td>";
        tabla+="</tr>";
    }
    tabla+="</table>";
    document.getElementById("resultado1").innerHTML=tabla;
    }

    function division(numero){
        tabla="<a> Division <a> <table border>";
    tabla+="<tr>";
    tabla+=`<td> <FONT  COLOR="blue"> Division </FONT> </td>`;
    tabla+=`<td> <FONT  COLOR="red"> Total </FONT> </td>`;
    tabla+="</tr>";
    for (var i = 1; i <= 10; i++){
        tabla+="<tr>";
        tabla+=`<td> <FONT  COLOR="blue">`+(numero*i)+" / "+numero+"</td>";
        tabla+=`<td> <FONT  COLOR="red">`+(parseInt(numero*i)/numero)+" </FONT> </td>";
        tabla+="</tr>";
    }
    tabla+="</table>";
    document.getElementById("resultado2").innerHTML=tabla;
    }

    
    function suma(numero){
        tabla="<a> Suma <a> <table border>";
    tabla+="<tr>";
    tabla+=`<td> <FONT  COLOR="blue"> suma </FONT> </td>`;
    tabla+=`<td> <FONT  COLOR="red"> Total </FONT> </td>`;
    tabla+="</tr>";
    for (var i = 1; i <= 10; i++){
        tabla+="<tr>";
        tabla+=`<td> <FONT  COLOR="blue">`+numero+" + "+i+"</td>";
        tabla+=`<td> <FONT  COLOR="red">`+(parseInt(numero)+parseInt(i))+" </FONT> </td>";
        tabla+="</tr>";
    }
    tabla+="</table>";
    document.getElementById("resultado3").innerHTML=tabla;
    }

    function resta(numero){
        tabla="<a> Resta <a> <table border>";
    tabla+="<tr>";
    tabla+=`<td> <FONT  COLOR="blue"> Resta </FONT> </td>`;
    tabla+=`<td> <FONT  COLOR="red"> Total </FONT> </td>`;
    tabla+="</tr>";
    for (var i = 1; i <= 10; i++){
        tabla+="<tr>";
        tabla+=`<td> <FONT  COLOR="blue">`+numero+" - "+i+"</td>";
        tabla+=`<td> <FONT  COLOR="red">`+(numero-i)+" </FONT> </td>";
        tabla+="</tr>";
    }
    tabla+="</table>";
    document.getElementById("resultado4").innerHTML=tabla;
    }


function borrar(){
    document.getElementById("resultado1").innerHTML="";
    document.getElementById("resultado2").innerHTML="";
    document.getElementById("resultado3").innerHTML="";
    document.getElementById("resultado4").innerHTML="";
}