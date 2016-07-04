/*
alert("somethink text");
document.write("somethink text 2");
var myCounter = 1;
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
isPolyndrom(polyndrom);\
*/

/*
var anagramma1 = prompt("vvedie pervoe slovo"),
    anagramma2 = prompt("vvedie vtoroe slovo"),
    word1 = null,
    word2 = null,
    wordToArr = null,
    reversArr = null,
    reversWord = null;

function isAnagrama(str, str2){
    anagramma1 = str;
    wordToArr1 = str.split("");
    word2 = str2;
    wordToArr2 = str2.split("");

     for( var i=0; i<wordToArr1.length; i++){
       var letter = wordToArr[i];
    }
}

isAnagrama(anagramma1, anagramma2);

*/


/*

function helloWorld ( str1, str2){
    var result = str1 + str2;
    return result ;
}
/*console.log(helloWorld(2, 5));*/

/*
function recurse(){
    if(prompt()){
        console.log('we have name');
    }else{
        recurse();
    }
}
recurse();*/

/*
var massiv = [5, 10, 5];

function sumaChisel(perFunc){
    var sumaCh = 0,
        midSumCh = 0;
    for( var i = 0; i<perFunc.length; i++){
        sumaCh = sumaCh + perFunc[i];
        console.log("сумма чисел массива = " + sumaCh);
        midSumCh = sumaCh/perFunc.length;
    }
    console.log(midSumCh);
}
sumaChisel(massiv);

*/


///////////////////////////////////////////////////////////////////////////////

/*
var massiv = [2, 3, 2, 3, 2],
    kratnost = 3;

function sumaKratn(massiv, kratnost){
    var suma = 0;
    for( var i = 0; i<massiv.length; i++){
        if(!(i%kratnost)){
            suma = suma + perFunc[i] ;
        }
    }
    console.log(suma);
}
sumaKratn(massiv, kratnost);

/////////////////////////////////////////////////////////////////////////////////

var massiv = [5, 10, 5, 12, 10];

function sumaParnuh(peremFunc){
    var suma = 0;
    for( var i = 0; i<peremFunc.length; i++){
        if((i%2)){
            suma = suma + peremFunc[i] ;
        }

    }
    console.log(suma);
}
sumaParnuh(massiv);


/////////////////////////////////////////////////////////////////////////


/*
stroka = "mnogo raznogo texta";
upStr = stroka.toUpperCase("");*/



/*
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
bBukva(massiv);
*/



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
/*
var white ="#FFFFFF";
var black ="#000000";
var n = 9;
var color = black;
var count = 1;
document.write("<table>");
for(var tr = 1; tr <= n; tr++)
{
    if(tr==1){
        document.write("<tr style='background-color: red'>");
    }else
    {
        document.write("<tr>");
    }
    for (var td = 1; td <= n;td++)
    {
        if(td==1) {
            document.write("<td style='background-color: blue'>"+ td * tr +"</td>");
        }else
        {
        document.write("<td>"+ td * tr +"</td>");
        //document.write("<td  style=\"background-color: " + color +"\">&nbsp;</td>");
        //color =(color == black) ? white : black;
    }
    }
    document.write("</tr>");
}
document.write("</table>");
    */
/*
var name1,
    name2,
    ch1,
    ch2,
    count = 1;

do
{
    name1 = prompt("Введите ваше имя:");
}while(!name1);
document.write("<h1>Число загадал: " + name1 + "</h1>");
do{
    ch1 = prompt(name1 + " Введите число от 1 до 100:");
    ch1 = parseInt(ch1);
}while(!ch1);
do
{
    name2 = prompt("Введите ваше имя:");
    alert(name2 + " Удачи!");
}while(!name2);
document.write("<h1>Число отгадывает: " + name2 + "</h1>");
do {

        ch2 = prompt("Введите предполагаемое число:");
        ch2 = parseInt(ch2);
        if (ch1 > ch2)
            alert("Вы не угадали, попробуйте ввести больше число :)");
        if (ch1 < ch2)
            alert("Вы не угадали, попробуйте ввести меньше число :)");
        if (ch1 == ch2)
            alert("Поздравляем Вы угадали число :)");
        count++;
    }while(ch1 != ch2);
alert("Количество попыток: " + count);

*/
/*
function voron(kolichestvo)
{
    var str;
    switch(kolichestvo)
    {
        case 0:
            str = " На ветке нет ни одной вороны";
            break;
        case 1:
            str ="На ветке сидит одна ворона";
            break;
        case 2:
            str ="На ветке сидит две вороны";
            break;
        case 3:
            str ="На ветке сидит три вороны";
            break;
        case 4:
            str ="На ветке сидит четфре вороны";
            break;
        case 5:
            str ="На ветке сидит пять ворон";
            break;
        case 6:
            str ="На ветке сидит шесть ворон";
            break;
        case 7:
            str ="На ветке сидит семь ворон";
            break;
        case 8:
            str ="На ветке сидит восемь ворон";
            break;
        case 9:
            str = "На ветке сидит девять ворон";
            break;
        case 10:
            str = "На ветке сидит десять ворон";
            break;
        default :
            str = "На ветке сидит больше 10 ворон";
    }
    return str;

}
var num = prompt("Введите количество ворон: ");
num = parseInt(num);
var a = voron(num);
alert(a);
*/
/*
function mid(ch1, ch2)
{
    sr = ch1 + ch2 / 2;
    return sr;
}

x = prompt("Введите первое число");
x = parseInt(x);
y = prompt("Введите второе число");
y = parseInt(y);
var answer = mid(x, y);
alert("Среднее арифметичное введеных вами чисел = " + answer);

*/

/*
var name,
    name1,
    name2,
    name3,
    name4;
    name = prompt("Введите Вашу фамилию, имя и отчество: ");
name1 = name.indexOf(" ");
name1 = name.substring(0,name1);
document.writeln(name1 + "<br>");
name2 = name.indexOf(" ");
name3 = name.lastIndexOf(" ");
name3 = name3 - name2;
name2 = name.substr(name2, name3);
document.writeln(name2 + "<br>");
name4 = name.lastIndexOf(" ");
name4 = name.substring(name4);
document.write(name4 + "<br>");
*/


/*
var fio,

    n1,
    n2,
    lastName,
    name;


fio = prompt("Введите ваше имя и фамилию через запятую: ");  //Гаман, Виталий
n1 = fio.indexOf(",");
console.log(n1);
n2 = n1+1;
lastName = fio.substring(0, n1);
name = fio.substring(n2);
document.writeln(name + "<br>");
document.writeln(lastName);
*/

/*
var ch,
    sum,
    arr,
    mid;
arr = [];
do {
    ch = prompt("Введите пожалуйста число: ");
    ch = parseInt(ch);
    if (ch) arr.push(ch);
}while( ch );
  sum = 0;
for(i=0; i<arr.length; i++)
{
    sum += arr[i];
    document.writeln(arr[i]);
}
if(arr.length > 0)
{
    mid = sum / arr.length;
    document.writeln(" Среднее = " + mid);
}

*/
/*
function demo() {
    var d = new Date();
    document.write(d.toLocaleString());
}
*/
/*
var array = [];
        function openWindow()
        {

            var h = 100;
            var w = 200;
            for(i=0; i<3; i++)
            {
                for(j=0; j<3; j++)
                {
                    var top = i * (w+100);
                    var left = j * (h+100);
                    var params = "width=" +  w + ",height=" + h + ",top=" + top + ",left=" + left ;
                    var vnd = open("http://google.ua", "", params  );
                    array.push(vnd);
                }

            }


        }
function closeWindow()
{
    if(array)
    {
        for(i=0; i<array.length; i++)
        {
            array[i].close();
        }
        array = null;

    }
}
*/

/*
 function myTryTimer()
 {
 var timer1 = setTimeout("alert('Hello')", 3000);
 }
 */
/*
var d,
    timer;

function ShowTime()
{
    d = new Date();
   d = d.toLocaleTimeString();
    console.log(d);
}
function startClock() {
    if(!timer)
    timer = setInterval("ShowTime()", 1000);
}
function stopClock()
{
    clearInterval(timer);
    timer = null;
    console.log("");

}
*/
/*
var adress,
    result;
function goWebSite()
{
    adress = prompt("Введите сайт на который вы хотите перейти :");
    result = "http://" + adress;
location.assign(adress);
}
*/

/*
var vnd = window.open("", "", "width = 400", "height = 250");
vnd.document.open();
vnd.document.write("<html>");
vnd.document.write("<head>");
vnd.document.write("</head>");
vnd.document.write("<body>");
vnd.document.write("<h1>Привет</h1>");
vnd.document.write("</body>");
vnd.document.write("</html>");
vnd.document.close();

*/

/*
var vnd,
    timer,
    time = "",
    top,
    left,
    params;
function openClockWindow()
{
        top = (screen.height - 100) / 2;
        left = (screen.width - 200) / 2;
        //params = "width = 400, height = 250, top = "+ top + " , left = " + left + "";
        vnd = window.open("", "", "width=200, height=100, top = " + top +"  , left = "+ left+"" );
        function nowTime()
        {
                time = new Date();
                time = time.toLocaleTimeString();
                vnd.document.open();
                vnd.document.write(time);
                vnd.document.close();
        }
        timer = setInterval(nowTime, 1000);
}
function closeClockWindow()
{
    clearInterval(timer);
    vnd.close();

}

/*

var time,
    seconds,
    timer,
    clock,
    colors;

function showTime(){
    time = new Date();
    time = time.toLocaleTimeString();
    //seconds = time.getSeconds();
    clock = document.getElementById("clock");
    //clock.firstChild.nodeValue = time;      // это когда мы заменяем имеющийся текст на другой
    clock.innerHTML = time;                   // так когда нет текста внутри тегов
    //clock.style.color = "red";              // таким образом мы изменяем АТРИБУТ
    //clock.style.backgroundColor = "yellow";                   style = "" в теге html
    clock.className = "clock";                // так мы изменяем класс
    //colors = ["red", "green", "blue","brown" ];
    //clock.style.color = colors[time.getSeconds() % 4];


}

function startTimer(){
   if(!timer)
    timer = setInterval("showTime()", 1000);
}

function stopTimer(){
    if(timer)
    clearInterval(timer);
    timer = null;
    clock.firstChild.nodeValue ="Вы остановили часики";
}

function startStopClock(){
    if(!timer) {
        timer = setInterval("showTime()", 1000);
    }else{
        clearInterval(timer);
        timer = null;
        clock.firstChild.nodeValue ="Вы остановили часики";
    }
}

window.onload = function() {
    var t = document.getElementById("clock");
    t.onclick = startStopClock;
};

*/


/*
var div,
    par = [];
function colorP(){
    div = document.getElementById("paragraf");
    par = div.getElementsByTagName("P");

    for(i=1; i<par.length; i++){
        par[i].style.color = "blue";
        par[i].style.title = "Это подсказка";
    }
}

*/

//console.log(typeof(10));


/*

var obj = {
    left : 10,
    right : 50,
    array : [2,25,16,20],
    array2 :[2,56,41,58,89],
    insideObj :{
        age : 23,
        height : 193,
        weight :95,
        sex : "M"
    }
};
for(key in obj){
    var count = obj[key];
        if(typeof(obj[key]) == "object"){
        for(i=0; i<count.length; i++){
            console.log(i);

          }

         console.log(obj[key]);
       }
  console.log(count.length);
}


*/

/*

function changeSideBar(){
    var sideBar = document.getElementById("rSideBar");
    if(sideBar.style.display == "none") {
        sideBar.style.display = "";
        document.getElementById("lrS");
        lrS.firstChild.nodeValue = "Скрыть rSideBar"
    }else {
        sideBar.style.display = "none";
        lrS.firstChild.nodeValue = "Вернуть rSideBar"
    }

}

*/

/*
function changeAttribute(){
    var myDiv = document.getElementById("paragraf");
    var allP = myDiv.getElementsByTagName("P");
    for(i=0; i<allP.length; i++){
       var p = allP[i];
        if(p.getAttribute("align") == "left"){
            p.setAttribute("align", "right");
        }else {
            p.setAttribute("align", "left");
        }
    }


    //if(allP.getAttribute ==)
}

*/

/*
function changeList() {
    var ask,
        text,
        ul,
        li;
    ask = prompt("Введите слово, которое хотите добавить:");
    if(ask) {
        ul = document.getElementById("ulList");
        li = document.createElement("LI");
        li.onclick = changeColor;
        ul.appendChild(li);
        text = document.createTextNode(ask);
        li.appendChild(text);
}
}


function deleteLastElement() {
    var ul,
        last;

    ul = document.getElementById("ulList");
    last = ul.lastChild;

    while (last && last.nodeType != 1)
        last = last.previousSibling;
    if (last) {
        last.parentNode.removeChild(last);
    }
}

function deleteFirstElement() {
    var ul,
        first;

    ul = document.getElementById("ulList");
    first = ul.firstChild;

    while (first && first.nodeType != 1)
        first = first.nextSibling;
    if (first) {
        first.parentNode.removeChild(first);
    }
}

function changeColor () {
    if(this.parentNode.selectedItem){
        this.parentNode.selectedItem.style.color = "";
    }
    this.style.color = "red";
    this.parentNode.selectedItem = this;
}

window.onload = function() {
    var ul,
        li;
    ul = document.getElementById("ulList");
    li = ul.getElementsByTagName("LI");
    for (var i = 0; i < li.length; i++) {
       li[i].onclick = changeColor;
    }
};

*/

/*
var ch = [],
    a = prompt("Введите число 1"),
    a = parseInt(a),
    countA,
    b = prompt("Введите число 2"),
    b = parseInt(b),
    countB,
    c = prompt("Введите число 3"),
    c = parseInt(c),
    countC,
    answer;

function number(a,b,c){
    if(!(a%2)){
        countA = a;
        console.log("Число " + a + " делится на 2 без остачи");
    }else{
        console.log("Число " + a + " НЕ делится на 2 без остачи");
    }

    if(!(b%2)) {
        countB = b;
        console.log("Число " + b + " делится на 2 без остачи");
    }else{

        console.log("Число " + b + " НЕ делится на 2 без остачи");
    }

    if(!(c%2)) {
        countC = c;
        console.log("Число " + c + " делится на 2 без остачи");
    }else{
        console.log("Число " + c + " НЕ делится на 2 без остачи");
    }


    if(countB < countA > countC) {
        console.log("Число " + countA + " наибольшее делящеяся на 2");
    }else{
        console.log("d")
    }

        if(countA < countB > countC){
            console.log("Число " + countB + " наибольшее делящеяся на 2");
        }
            if(countB < countC > countA){
                 console.log("Число " + countC + " наибольшее делящеяся на 2");
             }
}

number(a,b,c);
*/


/*
var r1,
    s1,
    r2,
    s2,
    p = 2.14;

function round(r1,r2){
    do {
        r1 = prompt("Введите радиус 1 круга");
        r1 = parseInt(r1);
    }while(!r1);
    do{
        r2 = prompt("Введите радиус 2 круга");
         r2 = parseInt(r2);
    }while( !r2);

    s1 = 2 * p * r1;
    console.log(s1);
    s2 = 2 * p * r2;
    console.log(s2);
    if(s1 == s2) {
        console.log("Круги равны по площади");
    }

    if(s1 > s2){
        console.log("Площадь первого круга больше чем второго, она равна = " + s1);
    }else{
        console.log("Второй круг больше первого");
    }

}

round(1,2);

*/

/*
var ch;

function proverka(ch){
    do {
        ch = prompt("Введите число");
    }while(!ch);
    ch =  parseInt(ch);
    if(typeof(ch) == "number" ){
        console.log("Вы ввели число " + ch);
    }

    if(ch < 100 ){
        console.log("Ваше число в промежутке от 0 до 100")
    }else{
        if( ch >= 100 || ch <= 1000 ) {
        console.log("Ваше число в промежутке от 100 до 1000")
        }
    }
if( ch > 1000 ){
    console.log("Ваше число 1000+")
}
}

proverka(ch);

*/

/*
 function type(){
 var t = 10;
 t = typeof(t);
 console.log(t);
 }

 type();

 */

/*
var a,
    b,
    rdmM,
    rdm;

function random(a,b){
    do {
        a = prompt("Введите 1-е число");
            a = parseInt(a);
        b = prompt("Введите 2-е число");
            b = parseInt(b);
    }while(!a && !b);
    if(a < b){
        console.log("Первое число меньше второго, введите числа заново");
        random();
    }else{
        rdm = a - b;
        rdmM = Math.random();
        rdmM = Math.round(rdm * rdmM);
    }
    console.log("Рандомное число между " + a + " и " + b + " = " + rdmM)
}
random(a,b);

*/

/*


var t = true,
    r,
    f = false;

function random(){
    r = Math.random();
    r = Math.round(r);
    if(r >= 0.5 && r <= 1){
        console.log(t);
    }else{
       console.log(f);
    }
}

random();

*/

/*
var array = [2,5,6,13,16],
    maxNumber = 0,
    count2,
    count3;

function number(massiv){
    for(i = 0; i < massiv.length; i++){
        if(!(massiv[i] % 2)) {
            maxNumber = Math.max(maxNumber, massiv[i]);
        }
    }console.log(maxNumber);
}


number(array);

*/

/*
var array = [6,13,22],

    kratnost = 3;

function number3(array){
    var  maxNumber = 0;
    for(i=0; i<array.length; i++){
        if(!isNaN(array[i])) {
            if (!(array[i] % 6 ) && array[i] !=0) {
                maxNumber = Math.max(maxNumber, array[i]);
                maxNumber = Math.round(maxNumber);
            }
        }else {
            console.log(array[i] + " Is Not a Number");
        }
    }
    console.log(maxNumber);
}

number3(array);
*/


/*
var a,
    b,
    gap,
    rdmNum;

function rdm(){
       // confirm("Приветствуем! Введите 2 числа, Второе число должно быть больше первого :");
        do {
            a = prompt("Введите первое число");
                a = parseInt(a);
        }while(!a);
        do{
            b = prompt("Введите второе число");
                b = parseInt(b);
        } while (!b);
    if(a >= b ){
        console.log("Первое число больше или равно второму, введите числа заново");
        rdm();
    }else {
        gap = b - a;
        rdmNum = Math.random();
        rdmNum = Math.round( rdmNum * gap);
        if(!(rdmNum%3)) {
            console.log("Ваше рандомное число " + rdmNum + " Поздравляем! Вы выиграли ");
        }else{
            console.log("Ваше рандомное число " + rdmNum + " не кратно 3, Вы проиграли")
        }
    }

}
rdm();
*/

/*
var name = prompt("Каково 'официальное' название JavaScript?");
if(name == "ECMAScript" ){
    console.log("Верно!")
}else{
    console.log("Не знаете? «ECMAScript»!")

}

*/
/*
function testLogin(){
    var login,
        password;
    login = prompt("Введите ваш логин");
    if(login == "Admin"){
       password = prompt("Введите ваш пароль");
        if(password == "Чёрный Властелин"){
            console.log("Добро пожаловать!");
        }else if(password == null){
            console.log("Вход отменён");
        }else {
            console.log("Пароль неверен");
        }
    }else if(login == null){
        console.log("Вход отменён");
    }else{
        console.log("Я Вас не знаю")
    }

}

*/

/*
var mArr = [],
    arr1 = ["торс","кот","ток","рост","финт","рок","орк"];
*/

/*
function factorial(num){
    var n = num;
    var result = 1;
    for(var i = 1; i<=n; i++){
        result *= i;
    }
return result
}

factorial(5);

*/
/*
if(browser == "IE"){
    console.log("О, да у вас IE! ");
}else if(browser == "Chrome"
    || browser == "Firefox"
    || browser == "Safari") {
    console.log("Эти браузеры мы  поддерживаем");
}else{
    console.log("У вас неизвестный браузер");
}


*/

/*
var a = +prompt("a?","");
switch(a){
    case  0 :
        console.log(" Number = 0 ");
        break;
    case  1 :
        console.log(" Number = 1 ");
        break;
    case 2 :
    case 3 :
        console.log(" Number "+" = "+ a);
        break;
}

*/

/*
function checkAge(age){
   // return (age>18) ? true : confirm( "Родители разрешили?");
    return(age>18) || confirm("Родители разрешили?");
}
checkAge(18);

*/

/*
function helloWorld(a,b){
    if(a<b){
        console.log("min" + " (" + a + " ,"+ b+ ")" + "==" + a );
    }else{
        console.log("min" + " (" + a + " ,"+ b+ ")" + "==" + b );

    }
}

helloWorld(5,10);

*/

/*
function pow(x,n) {
    var result = x;
    for (var i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

    x = prompt("Введите число");
    n = prompt("Введите степень");

if(n <= 1){
    console.log("степень меньше или равна 1, введите большее число");
}else{
    console.log(pow(x,n));
}

*/

/*
function sum(a,b){
    return a + b;
}

*/

/*
function ask(question, yes, no) {
    if (confirm(question)){
        yes()
    } else{
        no();
    }
}

function showOk() {
    alert( "Вы согласились." );
}

function showCancel() {
    alert( "Вы отменили выполнение." );
}

// использование
ask("Вы согласны?", showOk, showCancel);

*/

/*
var str = "Ослик Иа-Иа посмотрел на виадук"; // ищем в этой строке
var target = "Иа"; // цель поиска

var pos = 0;
while (true) {
    var foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;

    alert( foundPos ); // нашли на этой позиции
    pos = foundPos + 1; // продолжить поиск со следующей
}

*/

/*

 alert( "testme".slice(1, -1) ); // "estm", от 1 позиции до первой с конца.


 */

/*
name = "вася";

function upCase(word){
    newWord = word;
    if(!newWord) return word;
    return newWord[0].toUpperCase() + newWord.slice(1);
}


*/

/*
function checkSpam(word){
  var  newWord = word;
  var  lCase = newWord.toLowerCase();
  var  index1 = lCase.indexOf("viagra");
  var  index2 = lCase.indexOf("xxx");
    if(index1 || index2){
        return "Spam";
    }
    return "no Spam"
}

*/

/*
function trunCate(str, maxLength){
    if(str.length > maxLength){
        var newStr = str.slice(0, maxLength - 3);
        var last = "..."
        return newStr + last;
    }else{
        return str;
    }

}

*/

/*
function extractCurrencyValue(str){
    return +str.slice(1);
}

*/

/*
var menu = {
    width: 300,
    height: 200,
    title: "Menu"
};

for (var key in menu)
{
    console.log("Ключ (свойство) : " + key + " значение: " + menu[key] );
}

*/
/*
function isEmprty(obj){
    count = null;
    for(var key in obj){
        count++;
    }
    if(count >0 ){
        return false;
    }else{
        return true;
    }
}

*/


/*

function sumSalaries(obj){
    var sum = 0;
    for(var key in obj){
        sum += obj[key];
    }
        if(sum !=0 ) {
            return sum;
        }else{
            return " Salaries = 0";
        }
}

*/

/*
function maxSalaries(salaries){
    var max = 0;
    var maxName ="";
    for( var name in salaries){

        if( max < salaries[name] ){
            max = salaries[name];
            maxName = name;
        }
    }
    return maxName;
}

*/

/*

var people = {
    vasya : 250,
    kolya : 300,
    dasha : 250,
    alan  : "No Money"
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

function valueX2(obj){
    for( var key in obj){
        if(isNumeric(obj[key])){
            obj[key] *= 2;
        }
    }
    console.log(" Vasya: " + people.vasya + " Kolya :" + people.kolya
                + "dasha" + people.dasha + "alan" + people.alan);
}



var arr = [1,2,3,4,5,6,7];
var last = arr[arr.length -1];
console.log(last);
console.log(arr);

var fruits = ["Яблоко", "Груша", "Слива"];
fruits[fruits.length] = "Виноград";


*/

/*
var styles = ["Джаз","Блюз","Rock","TRAP","Live Musik"];
var rdm = Math.random(x);
    rdm = Math.round(x*styles.length);
    console.log(styles[rdm]);


*/

/*

function calculator(arr){
    arr = [];
    var  sum = 0;
    while(true){
        var number = prompt("Введите число");
        if(number == null || number == "" || isNaN(number)) break;
        arr.push(+number);
    }

    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;

}

*/

/*
var obj = {
    className : "open menu"
};

function addClass(obj,cls){
    var classes = obj.className ? obj.className(" ") : [];
    for( var i = 0; i < classes.length; i++){
        if(classe[i] == cls) return;
    }

    classes.push(cls);
    obj.className = classes.join(" ");
}

*/

/*
function camelize(str){
    var arr = str.split("-");
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr.slice(1);
        console.log(arr);
    }
    return arr.join("");
}

*/

/*
var obj = {
    className : "open menu"
};

function removeClass(obj,cls){
var rCl = obj.className.split(' ');

    for (var i = 0; i < rCl.length; i++){
        if (rCl[i] == cls){
            rCl.splice(i, 1);
            i--;
        }
    }
  obj.className =  rCl.join(" ");
}

*/
/*
var arr = [1,3,5,2,7,23,9];

function filterRangeInPlace(arr, a, b){
    for (var i = 0; i < arr.length; i++){
        var value = arr[i];
        if ( value < a ||  value > b ){
            arr.splice(i--,1);
        }
    }
    console.log(arr);
}
*/

/*
var arr = [1,3,5,2,7,-23,9];

function compareNumeric(a, b){
    return b - a;
}

function reversSortArray(arr){
    arr.sort(compareNumeric);
console.log( arr );
}

*/
/*

var arr = ["HTML", "JavaScript", "CSS"];

function arrSorted(arr){
    arrCopy = arr.concat();
    arrCopy.sort();
    console.log(arrCopy);
    console.log(arr);

}

*/
/*
var arr = [1,3,5,2,7,-23,9];

function rdm(a,b){
    return Math.random() -0.5;
}
function rdmSort(arr){
 arr.sort(rdm);
    console.log(arr);
}

*/

/*
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var katya = { name: "Катя", age: 6 };

var people = [ vasya , masha , katya ];

function objSort(a, b){
    return a.age - b.age;
}

function sorted(people){
  people.sort(objSort);

    for(var i = 0; i < people.length; i++ ){
        console.log(people[i].name);
    }


}

*/

/*
var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
*/

/*
function printList(list){
    var tmp = list;
    while(tmp){
        console.log(tmp.value);
        tmp = tmp.next;
    }
}
*/
/*
function printListRecursia(list){
    console.log(list.value);
    if(list.next){
        printListRecursia(list.next);
    }
}

*/
/*
function printReverseList(list) {

    if (list.next) {
        printReverseList(list.next);
    }

    console.log( list.value );
}

printReverseList(list);

*/

/*
function checkWord(){

    var array  = ["торс", "кот", "ток", "рост", "финт", "рок", "орк"],
        tmpArr = ["торс", "кот", "ток", "рост", "финт", "рок", "орк"],
        modArr = [];

    for (var i = 0; i < array.length; i++) {
        var word1 = array[i];
        var mWord1 = word1.split('').sort().join('');

        for (var j = i + 1; j < array.length; j++) {
            var word2 = array[j].split("").sort().join("");
        }

    }
            if (word2 == mWord1 ) {
                modArr.push( [word1, array[j]] );
                tmpArr.splice(tmpArr.indexOf(word1), 1);
                tmpArr.splice(tmpArr.indexOf(array[j]), 1);
                array.splice(j, 1);
            }

modArr.push(tmpArr);
console.log(JSON.stringify(modArr));
}

*/
/*
function checkAdmin() {
    var login = prompt("Введите Ваш логин");

    if (login == "Админ") {
        var password = prompt("Введите Ваш пароль");
        if(password == "Чёрный Властелин"){
            console.log(" Добро пожаловать ");
        }else if(password == null) {
            console.log(" Вход отменён");
        }else{
            console.log(" Пароль неверен, попробуйте заново ");
        }
    } else if(login == null){
        console.log("Вход отменён");
    } else{
        console.log(" Мы Вас не знаем ")
    }
}

*/


/*

function transform() {
    var a = prompt("A =");
    var b = prompt("B =");
    var result = (a + b < 4 ) ? console.log("Мало") : console.log("Много");
}

*/

/*

function transform2(){
    var login = prompt("Введите логин");
    var message;
    (login == "Вася")? console.log("Привет") : (login == "Директор")?console.log("Здравствуйте"):
       (login == " ")? console.log("Нет логина") : console.log("Незнакомец");
}
*/


function checkAge(){
    var age = prompt("Введите возраст");
    if( (age >=14) && (age <= 90) ){
        console.log(" Возраст находится в промежутке ");
    }else{
        console.log(" Возраст находится НЕ в промежутке ");

    }
}

























