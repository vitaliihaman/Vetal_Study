
//alert("somethink text");
//document.write("somethink text 2");
/*var myCounter = 1;
var myCounterStr = "1";
var myCounterBulElem = false;
var a = true;
var b = false;
//alert(myCounter, myCounterStr, myCounterFalse);
console.log(myCounter, myCounterStr, myCounterBulElem);
var person = null;
var name;
console.log(person, name);
//alert(artem);
console.log(!!name);
console.log(a && b);
console.log(a || b);
var number = 5;
var number2 = 5.9;
var number3 = 5e10;
console.log('number', number, number2, number3);
console.log(1/0, 0/0, 1+"artem", "1"+true );
var str2 = "100.7853";
var str3 = "vetal";
console.log(parseInt(str2),parseFloat(str2),  str2);
console.log(parseInt(str3), str3);
console.log(number+number2, number3-number2, 5*5.9, 5.9/5, 10%12);
var name4 =  prompt("enter your name");
console.log(name4);
*/

/*
var name5 ="vetal",
    name6 = 'artem',
    name7 = 'vetal',
    name8 = 1,
    name9 = "1";

if((name5 == name7) && (name8 === name9)) {
    console.log("true");
}else{
    console.log("false");
}

*/



/*
if(!num){
    console.log('Is not a number');
}

if(num == 5){
    console.log(5+10);

}
if(num > 100){
    console.log("It is so much");
}
*/

/*var voron = prompt("Skolko voron sidit?"),
    num = parseInt(voron),
    end = "",
    count;

if(num<20) {
   count = num;
}else{
    count = num%10;
}

switch (count){
    case 1:
        end = 'a';
        break;
    case 2:
        end = 'i';
        break;
    case 3:
        end = 'i';
        break;
    case 4:
        end = 'i';
        break;
}

console.log("Na vetke sidit " + num + " voron" + end);*/

//var newArray = [ 855, 23, 56, 'vasya', 45];
/*
console.dir( newArray, newArray[4]);
console.log(newArray.length);*/
//newArray.push('vetal');
//newArray[newArray.length-1];
//console.log(newArray[newArray.length-2]);
/*
console.log(newArray.pop());
console.log(newArray[0]);
console.log(newArray.shift());
console.log(newArray.unshift(99));
*/

/*
var string =  newArray.join(' - ');
console.log( string);
var str = 'mamamularanu';
var mrt = str.split("");
console.log(mrt);
*/

/*
function checkArray(){
    var newArray = [ 855, 23, 56, 'vasya', 45];
    for(var i = 0; i<2; i++){
        console.log(newArray[i]);
    }
}

/!*
checkArray();*!/

function helloWorld(str, str2 ){
    console.log("Hello "+str + " and "+ str2);
}

helloWorld("vetal", "Artem");*/

/*
var polyndrom = prompt("vvedie slovo"),
    origWord = null,
    wordToArr = null,
    reversArr = null,
    reversWord = null;

function isPolyndrom(str){
    origWord = str;
    wordToArr = str.split("");
    reversArr = wordToArr.reverse();
    reversWord = reversArr.join("");

    if(origWord == reversWord){
        console.log("This is polindrom");
    } else{
        console.log("This is not polindrom");
    }

}
isPolyndrom(polyndrom);*/

/*var anagramma1 = prompt("vvedie pervoe slovo"),
    anagramma2 = prompt("vvedie vtoroe slovo"),
    word1 = null,
    word2 = null,
    wordToArr = null,
    reversArr = null,
    reversWord = null;*/

/*function isAnagrama(str, str2){
    anagramma1 = str;
    wordToArr1 = str.split("");
    word2 = str2;
    wordToArr2 = str2.split("");

     for( var i=0; i<wordToArr1.length; i++){
       var letter = wordToArr[i];
    }





}
isAnagrama(anagramma1, anagramma2);*/

/*function helloWorld ( str1, str2){
    var result = str1 + str2;
    return result ;
}
/!*console.log(helloWorld(2, 5));*!/

function recurse(){
    if(prompt()){
        console.log('we have name');
    }else{
        recurse();
    }
}
recurse();*/

/*var massiv = [5, 10, 5];

function sumaChisel(perFunc){
    var sumaCh = 0,
        midSumCh = 0;
    for( var i = 0; i<perFunc.length; i++){
      sumaCh =  perFunc[i];
        midSumCh = sumaCh/perFunc.length;
    }
   console.log(midSumCh);
}
sumaChisel(massiv);*/

/*var massiv = [2, 3, 2, 3, 2],
    kratnost = 3;

function sumaKratn(perFunc, kratnost){
    var suma = 0;
    for( var i = 0; i<perFunc.length; i++){
        if(!(i%kratnost)){
            suma = suma + perFunc[i] ;
        }
    }
    console.log(suma);
}
sumaKratn(massiv, kratnost);*/

/*var massiv = [5, 10, 5, 12, 10];

function sumaParnuh(perFunc){
    var suma = 0;
    for( var i = 0; i<perFunc.length; i++){
        if((i%2)){
            suma = suma + perFunc[i] ;
        }

    }
    console.log(suma);
}
sumaParnuh(massiv);*/


/*/*stroka = "mnogo raznogo texta";
upStr = stroka.toUpperCase("");*!/


var massiv = prompt('vvedite slovo'),
    splitElement = null,
    firstElement = null,
    upCase = null,
    pushElem = null,
    newWord = null;


function bBukva(massiv){

    splitElement = massiv.split("");
    console.log(splitElement);
    firstElement = splitElement.shift();
    console.log(firstElement);
        upCase = firstElement.toUpperCase();
    console.log(upCase);
    pushElem = splitElement.unshift(upCase);

        newWord = splitElement.join('');
    console.log(newWord);
}
bBukva(massiv);*/



/*var arr = [5,10,15,20,30];


function sumaChisel(str){
    arr = str;
    suma=0;
    for(i=0; i<str.length; i++){
        suma += str[i];
    }
     console.log(suma);
}
sumaChisel(arr);*/

/*name = 'vetal';
name2 = name.toUpperCase();
console.log(name2);*/

/*var array = [5,10,3,6,9];

kratnost = 5;
function sumKratn(array, kratnost){
    suma = 0;
    for(i=0; i<array.length; i++) {
        if (!(i % kratnost)) {
            suma += array[i];
        }
    }
            if(suma){
                console.log(suma);

        }else{
            console.log("net chisel kratnuh vvedennomu");
        }

}
sumKratn(array,kratnost);*/

/
/*
var count = prompt("vvedite vashe imya"),
    s = "<h1>Privet "+count+" !</h1>" ;
document.write(s);
var num1 = prompt('vvedite 1 chislo'),
    num2 = prompt('vvedite 2 chislo'),
    num3 = parseInt(num1),
    num4 = parseInt(num2),
    suma = num3*num4;
document.write(num3,' * ',num4,' = ', suma);

*/

/*
var name= prompt('Введите ваше имя', "");
var nn = "<h1>Привет, " + name  + "! </h1>" ;
document.write(nn);
var ch1= prompt('ведите 1 число', "");
var ch2= prompt('ведите 2 число', "");
var umn= ch1*ch2;
var uns= parseInt(umn);
document.write(uns);
*/

/*
var name= prompt("Введите Ваше Имя","");
tn="Коля";
tn2="коля"
k="<h1>Привет, Коля </h1>";
un="Привет Незнакомец";
if(name==tn || name==tn2)
{
    document.write(k);
}else{
    document.write(un);
}
*/
/*
var name= prompt("Введите Ваше Имя","");
if((!name)||(name=null)){
    document.write("Привет незнакомец");
}else{
    document.write("<h1>Привет "+name+ "!</h1>")
}

*/

/*
var a = prompt ("Введите количетво ворон на ветке:","");

a = parseInt(a);
var str;

    switch (a) {
        case 0:
            str = "На ветке нет ворон";
            break;
        case 1:
            str = "На ветке одна ворона";
            break;
        case 2:
            str = "На ветке две вороны";
            break;
        case 3:
            str = "На ветке три вороны";
            break;
        case 4:
            str = "На ветке четыре вороны";
            break;
        case 5:
            str = "На ветке пять ворон";
            break;
        case 6:
            str = "На ветке шесть ворон";
            break;
        case 7:
            str = "На ветке семь ворон";
            break;
        case 8:
            str = "На ветке восемь ворон";
            break;
        case 9:
            str = "На ветке девять ворон";
            break;
        case 10:
            str = "На ветке десять ворон";
            break;
        default:
            str="На ветке больше 10 ворон";
    }
alert(str);
*/
/*
var a= prompt("Введите количество ворон");
a=parseInt(a);
var str;
var name= " ворон";
var count;

if(a>20){
    count=a%10;
    switch(count)
    {
        case 0:
            str = a + name;
            break;
        case 1:
            str = a + name + "а";
            break;
        case 2:
            str = a + name + "ы";
            break;
        case 3:
            str = a + name + "ы";
            break;
        case 4:
            str = a + name + "ы";
            break;
        case 5:
            str = a + name;
            break;
        case 6:
            str = a + name;
            break;
        case 7:
            str = a + name;
            break;
        case 8:
            str = a + name;
            break;
        case 9:
            str = a + name;
            break;
        case 10:
            str = a + name;
            break;
    }}else{
    switch(a){
        case 0:
            str= a+name;
            break;
        case 1:
            str= a+name+"а";
            break;
        case 2:
            str= a+name+"ы";
            break;
        case 3:
            str= a+name+"ы";
            break;
        case 4:
            str= a+name+"ы";
            break;
        case 5:
            str= a+name;
}}
alert("На ветке сидит "+str);


*/
/*
var i=1;
//var i2=10;

for(i;i<10;i++)
{
document.write(i);
break;
}

*/

var white ="#FFFFFF";
var black ="#000000";
var n = 9;
var color = black;
document.write("<table>");
for(var tr = 1; tr<= n;tr++)
{
    document.write("<tr>");
    for (var td=1; td<=n;td++)
    {
        document.write("<td>");
        document.write("A");
        document.write("</td>");

        // document.write("<td  style=\"background-color: " + color +"\">&nbsp;</td>");
       // color =(color == black) ? white : black;
    }
    document.write("</tr>");
}
document.write("</table>");