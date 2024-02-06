function DefinirClave(){	
//Definimos variables globales 
    var M=0,N=0;
    var ValorEntero=0;
    TextoEncriptado = "";
    TextoDesEncriptado = "";
    texto = document.getElementById('intro').value;

       var TLlave;
       var M;
       var N;
       var valorSub;
       var vTemp=0;
       kay = 0;
       TLlave=document.getElementById('key').value.toString();
       if ( TLlave== "")
           kay = 0;
       else
       {		    
           for (M = 0; M < TLlave.length; M=M+1)
           {   
               N=M+1;
               valorSub=TLlave.substring(M,N);
               vTemp=valorSub.charCodeAt(0);
               kay = kay + vTemp;				
           }				
       }
   }

function Encriptar(){
    console.log(kay)
    console.log(typeof(kay))
    for (M = 0; M < texto.length; M=M+1){
        N=M+1;
        ValorEntero = (texto.substring(M,N)).charCodeAt(0)+kay;
        console.log(ValorEntero)
        console.log(typeof(ValorEntero))
        TextoEncriptado = TextoEncriptado + String.fromCharCode(ValorEntero);
        console.log(TextoEncriptado)
        console.log(typeof(TextoEncriptado))
    }
    document.getElementById('key').value="";
    document.getElementById('ans').value=TextoEncriptado;	
    TextoResult=TextoEncriptado	
}  

 function DesEncriptar(){
    for (M = 0; M < texto.length; M=M+1){
        N=M+1;
        ValorEntero = (texto.substring(M,N)).charCodeAt(0) - kay;
        TextoDesEncriptado = TextoDesEncriptado + String.fromCharCode(ValorEntero);
    }		
    document.getElementById('key').value="";
    document.getElementById('ans').value=TextoDesEncriptado;
} 

function copiar(){
let Txt= document.getElementById('ans').value;
let btncopi= document.getElementById('copibtn');

navigator.clipboard.writeText(Txt);
}

function cambiar(){
if(TextoDesEncriptado==""){
    document.getElementById('intro').value=TextoEncriptado;
    document.getElementById('ans').value="";}
else{
        document.getElementById('intro').value=TextoDesEncriptado;
        document.getElementById('ans').value="";
}
//para poder usar la funcion cambiar de forma ilimmitada :D
TextoDesEncriptado=""
}