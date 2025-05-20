function ExecuteScript(strId)
{
  switch (strId)
  {
      case "62ewCE6N5dY":
        Script1();
        break;
      case "6e1ycNhUf8x":
        Script2();
        break;
      case "5uYwpgiTirA":
        Script3();
        break;
      case "6hxO1WbFlXG":
        Script4();
        break;
      case "6WfqoFoakSy":
        Script5();
        break;
      case "5n5ToFygBCh":
        Script6();
        break;
      case "5yebkzbP24x":
        Script7();
        break;
      case "6hv4GjodyAW":
        Script8();
        break;
      case "6OWxnQTrqeL":
        Script9();
        break;
      case "6MrRwPDMXf4":
        Script10();
        break;
      case "6pb1EKMRrIo":
        Script11();
        break;
      case "6ZS74mD9ECV":
        Script12();
        break;
      case "5mogwhwsXb8":
        Script13();
        break;
  }
}

function Script1()
{
  //load the scripts dynamically into the head of the document
function add_line() {
 var line = document.createElement("audio");
 var head=document.getElementsByTagName('body')[0];
 line.type = "audio/mp3";
 line.src="";
 line.id="bgSong" ;
 line.autoplay = true;
 line.loop = true;
 head.appendChild(line);
}
//but we only want to add these once!
if(document.getElementById('bgSong')==null){
 add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}
var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"audio.mp3";
audio.load();
audio.play();
}

function Script2()
{
  //load the scripts dynamically into the head of the document
function add_line() {
 var line = document.createElement("audio");
 var head=document.getElementsByTagName('body')[0];
 line.type = "audio/mp3";
 line.src="";
 line.id="bgSong" ;
 line.autoplay = true;
 line.loop = true;
 head.appendChild(line);
}
//but we only want to add these once!
if(document.getElementById('bgSong')==null){
 add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}
var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"audio.mp3";
audio.load();
audio.play();
}

function Script3()
{
  //load the scripts dynamically into the head of the document
function add_line() {
 var line = document.createElement("audio");
 var head=document.getElementsByTagName('body')[0];
 line.type = "audio/mp3";
 line.src="";
 line.id="bgSong" ;
 line.autoplay = true;
 line.loop = true;
 head.appendChild(line);
}
//but we only want to add these once!
if(document.getElementById('bgSong')==null){
 add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}
var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"audio.mp3";
audio.load();
audio.play();
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.4;
}

function Script8()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}

function Script9()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script10()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script11()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

function Script12()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.4;
}

function Script13()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}

