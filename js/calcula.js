window.onload = function(){ //Acciones tras cargar la página
    pantalla=document.getElementById("textoPantalla"); //elemento pantalla de salida
}
x="0"; //número en pantalla
xi=1; //iniciar número en pantalla: 1=si; 0=no;
coma=0; //estado coma decimal 0=no, 1=si;
ni=0; //número oculto o en espera.
op="no"; //operación en curso; "no" =  sin operación.

//mostrar número en pantalla según se va escribiendo:
function numero(xx) { //recoge el número pulsado en el argumento.
    if (x=="0" || xi==1  ) {	// inicializar un número, 
        pantalla.innerHTML=xx; //mostrar en pantalla
        x=xx; //guardar número
        if (xx==".") { //si escribimos una coma al principio del número
            pantalla.innerHTML="0."; //escribimos 0.
            x=xx; //guardar número
            coma=1; //cambiar estado de la coma
        }
    }
    else { //continuar escribiendo un número
        if (xx=="." && coma==0) { //si escribimos una coma decimal pòr primera vez
            pantalla.innerHTML+=xx;
            x+=xx;
            coma=1; //cambiar el estado de la coma  
        }
        //si intentamos escribir una segunda coma decimal no realiza ninguna acción.
        else if (xx=="." && coma==1) {} 
        //Resto de casos: escribir un número del 0 al 9: 	 
        else {
            pantalla.innerHTML+=xx;
            x+=xx
        }
    }
    xi=0 //el número está iniciado y podemos ampliarlo.
}
function operar(s) {
    igualar() //si hay operaciones pendientes se realizan primero
    ni=x //ponemos el 1º número en "numero en espera" para poder escribir el segundo.
    op=s; //guardamos tipo de operación.
    xi=1; //inicializar pantalla.
}	
function igualar() {
    if (op=="no") { //no hay ninguna operación pendiente.
        pantalla.innerHTML=x;	//mostramos el mismo número	
    }
    else { //con operación pendiente resolvemos
        sl=ni+op+x; // escribimos la operación en una cadena
        sol=eval(sl) //convertimos la cadena a código y resolvemos
        pantalla.innerHTML=sol //mostramos la solución
        x=sol; //guardamos la solución
        op="no"; //ya no hay operaciones pendientes
        xi=1; //se puede reiniciar la pantalla.
    }
}
function raizc() {
    x=Math.sqrt(x) //resolver raíz cuadrada.
    pantalla.innerHTML=x; //mostrar en pantalla resultado
    op="no"; //quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla 
}
function porcent() { 
    x=x/100 //dividir por 100 el número
    pantalla.innerHTML=x; //mostrar en pantalla
    igualar() //resolver y mostrar operaciones pendientes
    xi=1 //reiniciar la pantalla
}
function opuest() { 
    nx=Number(x); //convertir en número
    nx=-nx; //cambiar de signo
    x=String(nx); //volver a convertir a cadena
    pantalla.innerHTML=x; //mostrar en pantalla.
}
function inve() {
    nx=Number(x);
    nx=(1/nx);
    x=String(nx);		 
    pantalla.innerHTML=x;
    xi=1; //reiniciar pantalla al pulsar otro número.
}
function retro(){ //Borrar sólo el último número escrito.
    cifras=x.length; //hayar número de caracteres en pantalla
    br=x.substr(cifras-1,cifras) //describir último caracter
    x=x.substr(0,cifras-1) //quitar el ultimo caracter
    if (x=="") {
        x="0";
    }
    //si ya no quedan caracteres, pondremos el 0
    if (br==".") {
        coma=0;
    } //Si el caracter quitado es la coma, se permite escribirla de nuevo.
        pantalla.innerHTML=x; //mostrar resultado en pantalla	          
}
function borradoParcial() {
    pantalla.innerHTML=0; //Borrado de pantalla;
    x=0; //Borrado indicador número pantalla.
    coma=0;	//reiniciamos también la coma				
}
function borradoTotal() {
    pantalla.innerHTML=0; //poner pantalla a 0
    x="0"; //reiniciar número en pantalla
    coma=0; //reiniciar estado coma decimal 
    ni=0 //indicador de número oculto a 0;
    op="no" //borrar operación en curso.
}
function binario(){
    x=sol.toString(2);//convierte el resultado a binario
    pantalla.innerHTML=x;//muestra en pantalla el resultado
    op="no";//quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla
}
function octal(){
    x=sol.toString(8);//convierte el resultado a octal
    pantalla.innerHTML=x;//muestra en pantalla el resultado
    xi=1; //se puede reiniciar la pantalla
}
function hexadecimal(){
    x=sol.toString(16);//convierte el resultado a hexadecimal
    pantalla.innerHTML=x;//muestra en pantalla el resultado
    xi=1; //se puede reiniciar la pantalla
}
    function sin(){
    x=Math.sin(x*Math.PI/180) //resuelve seno de un numero,  resultado en grados
    pantalla.innerHTML=x; //muestra en pantalla el resultado
    op="no"; //quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla
}
function cos(){
    x=Math.cos(x*Math.PI/180);//resuelve coseno de un numero,  resultado en grados
    pantalla.innerHTML=x;//muestra en pantalla el resultado
    xi=1; //se puede reiniciar la pantalla
}
function tan(){
    x=Math.tan(x*Math.PI/180);//resuelve tangente de un numero,  resultado en grados
    pantalla.innerHTML=x;//muestra en pantalla el resultado
    xi=1; //se puede reiniciar la pantalla
}
function potencia2(){
    x=Math.pow(x,2)//resuelve potencia a la 2 de un numero
    pantalla.innerHTML=x;//muestra en pantalla el resultado
    xi=1; //se puede reiniciar la pantalla
}
function potencia3(){
    x=Math.pow(x,3)//resuelve potencia a la 3 de un numero
    pantalla.innerHTML=x;//muestra en pantalla el resultado
    xi=1; //se puede reiniciar la pantalla
}
function senohiperbolico(){
    x=Math.sinh(x);//resuelve seno hiperbolico de un numero
    pantalla.innerHTML=x;//muestra en pantalla el resultado
    xi=1; //se puede reiniciar la pantalla
}
function cosenohiperbolico(){
    x=Math.cosh(x);//resuelve coseno hiperbolico de un numero
    pantalla.innerHTML=x;//muestra en pantalla el resultado
    xi=1; //se puede reiniciar la pantalla
}
function tangentehiperbolica(){
    x=Math.tanh(x);//resuelve tangente hiperbolica de un numero
    pantalla.innerHTML=x;//muestra en pantalla el resultado
    xi=1; //se puede reiniciar la pantalla
}
function arcoseno(){
    x=Math.asin(x)*180/Math.PI;//resulve el arco seno de un número, resultado en grados
    pantalla.innerHTML=x;//muestra en pantalla el resultado
    xi=1; //se puede reiniciar la pantalla
}
function arcocoseno(){
    x=Math.acos(x)*180/Math.PI;//resulve el arco coseno de un número, resultado en grados
    pantalla.innerHTML=x;//muestra en pantalla el resultado
    xi=1; //se puede reiniciar la pantalla
}
function arcotangente(){
    x=Math.atan(x)*180/Math.PI;//resulve el arco tangente de un número, resultado en grados
    pantalla.innerHTML=x;//muestra en pantalla el resultado
    xi=1; //se puede reiniciar la pantalla
}
function lognatural(){
    x=Math.log(x);//resuelve logaritmo natural base e de un número
    pantalla.innerHTML=x;//muestra en pantalla el resultado
    xi=1; //se puede reiniciar la pantalla
}
function logb10(){
    x=Math.log10(x);//resuelve logaritmo base 10 de un número
    pantalla.innerHTML=x;//muestra en pantalla el resultado
    xi=1; //se puede reiniciar la pantalla
}
function logb2(){
    x=Math.log2(x);//resuelve logaritmo base 2 de un número
    pantalla.innerHTML=x;//muestra en pantalla el resultado
    xi=1; //se puede reiniciar la pantalla
}
function pinum(){
    x=Math.PI//relación entre la circunferencia de un círculo y su diámetro.
    pantalla.innerHTML=x;//muestra en pantalla el resultado
    xi=1; //se puede reiniciar la pantalla
}
function raizmedio(){
    x=Math.SQRT1_2//La raíz cuadrada de 0.5, o, equivalentemente, una dividida por la raíz cuadrada de 2
    pantalla.innerHTML=x;//muestra en pantalla el resultado
    xi=1; //se puede reiniciar la pantalla
}
function numeroabsoluto(){
    x=Math.abs(x);//Devuelve el valor absoluto de un número (el valor independientemente de si es positivo o negativo).
    pantalla.innerHTML=x;//muestra en pantalla el resultado
    xi=1; //se puede reiniciar la pantalla
}
function numeroEuler(){
    x=Math.E;//La constante matemática e. Este es el número de Euler, la base de los logaritmos naturales.
    pantalla.innerHTML=x;//muestra en pantalla el resultado
    xi=1; //se puede reiniciar la pantalla
}