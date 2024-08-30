var on = 1;
var on1 = 1;
var id = 1; 
var url = "https://pokeapi.co/api/v2/pokemon/";
var url2 = "https://pokeapi.co/api/v2/pokemon-species/"; 
var url3 = "https://pokeapi.co/api/v2/pokemon-form/";
var myVar;
document.getElementById("miniLoad").style.display='none';

onload = myFunction;

function myFunction(){
  myVar = setTimeout(showPage, 4200);
  init();
  document.body.onkeydown = key;
}

function showPage() {
  document.getElementById('StefTastan').style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


// FUNÇÔES PRA FECHAR E ABRIR A POKEDEX
function init(){
  fechar();
  padrao();
}

function fechar(){
  document.getElementById("style").innerHTML = "<style>div#pokedex{width: 400px;}div#buttonGlass{background: radial-gradient(#000000, #000000);background: -webkit-radial-gradient(#000000, #000000);		background:-moz-radial-gradient(#000000, #000000);background:-o-radial-gradient(#000000, #000000);}div#miniButtonGlass1{background: radial-gradient(#000000, #000000);background: -webkit-radial-gradient(#000000, #000000);		background:-moz-radial-gradient(#000000, #000000);background:-o-radial-gradient(#000000, #000000);}div#miniButtonGlass2{background: radial-gradient(#000000, #000000);background: -webkit-radial-gradient(#000000, #000000);		background:-moz-radial-gradient(#000000, #000000);background:-o-radial-gradient(#000000, #000000);}div#miniButtonGlass3{background: radial-gradient(#000000, #000000);background: -webkit-radial-gradient(#000000, #000000);		background:-moz-radial-gradient(#000000, #000000);background:-o-radial-gradient(#000000, #000000);}div#logo{width: 310px;height: 280px;background-image: url('pokeball.png'); no-repeat left top;	z-index: 1;	position: absolute;	top: 220px;		left: 30px;	}	div#left{	width: 400px;	height: 500px;	float: left;		position: relative;	z-index: 1;	margin: 0 auto;}div#curve1_left	{		width: 201px;	height: 85px;	background-color: #8b0000;	float: left;	padding: 15px 0 0 15px;		position: absolute;	top: 0;	left: 0;		box-shadow: 0 0 #5e0000;	-webkit-box-shadow: 0 0 #5e0000;	-moz-box-shadow: 0 0 #5e0000;	-o-box-shadow: 0 0 #5e0000;		border-bottom-right-radius: 85px 60px;		-webkit-border-bottom-right-radius: 85px 60px;		-moz-border-bottom-right-radius: 85px 60px;		-o-border-bottom-right-radius: 85px 60px;		border-top-left-radius: 30px;		-webkit-border-top-left-radius: 30px;		-moz-border-top-left-radius: 30px;	-o-border-top-left-radius: 30px;}	div#bg_curve1_left	{	width: 400px;	height: 80px;		background-color: #8b0000;	box-shadow: -10px 9px #5e0000;		-webkit-box-shadow: -10px 9px #5e0000;	-moz-box-shadow: -10px 9px #5e0000;	-o-box-shadow: -10px 9px #5e0000;		border-top-left-radius: 30px;	-webkit-border-top-left-radius: 30px;		-moz-border-top-left-radius: 30px;	-o-border-top-left-radius: 30px;}	div#right, div#screen, div#bigbluebutton, div#barbutton1, div#barbutton2, div#cross{display: none;	}</style>"
  on = 0;
}

function abrir(){
  document.getElementById("style").innerHTML = " ";
  on = 1;
}

function ligar(){
  on1 = 1;
  var up = document.getElementById("picture").innerHTML = "<img id='img' src='up.gif' alt='down' height='160' />";
  
  document.getElementById('buttonbottomPicture').style.pointerEvents = 'none';

  var time = setTimeout(branco, 3000);
  function branco(){
    document.getElementById("picture").innerHTML = "<img id='miniLoad' src='loader.gif' height='160' alt='loader'/><img id='img' src='' alt='' height='185'/>";

    document.getElementById('img').style.display ='block';

    document.getElementById('stats').innerHTML = "<div id='name' class='header'></div><div id='tipo'></div><div id='altura'></div>      <div id='peso'></div><br><div id='desc'></div>";

    document.getElementById('buttonbottomPicture').style.pointerEvents = 'auto';

    padrao();
  }
}

function desligar(){
  on1 = 0;
  var down = document.getElementById("picture").innerHTML = "<img id='img' src='down.gif' alt='down' height='140' />";

  document.getElementById('buttonbottomPicture').style.pointerEvents = 'none';

  var time = setTimeout(preto, 4900);
  function preto(){
    document.getElementById('img').style.display ='none';
    document.getElementById('stats').innerHTML = " ";   
    document.getElementById('buttonbottomPicture').style.pointerEvents = 'auto';
  }
}

function reset(){
  if(on1 == 1){
    desligar();    
  }else{
    ligar();    
  }
}

function power(){
  if(on == 0){
    abrir();
  }
  else{
    fechar();
  }
}


//FUNÇÔES AJAX
function ajax(){
  new Ajax.Request(url + id,
    {
      method : "get",
      onSuccess : ajaxSuccess
    }
  );

  new Ajax.Request(url2 + id,
    {
      method : "get",
      onSuccess : ajaxSuccess2
    }
  );

  new Ajax.Request(url3 + id,
    {
      method : "get",
      onSuccess : ajaxSuccess3
    }
  );
}

function padrao(){
  new Ajax.Request(url + 1,
    {
      method : "get",
      onSuccess : ajaxSuccess
    }
  );

  new Ajax.Request(url2 + 1,
    {
      method : "get",
      onSuccess : ajaxSuccess2
    }
  );

  new Ajax.Request(url3 + 1,
    {
      method : "get",
      onSuccess : ajaxSuccess3
    }
  );
}

function processRequest(){
  var letra = document.querySelector("#pokeName").value;

  idNumber = parseInt(letra,10);
  
  
 if(Number.isNaN(idNumber)){
    new Ajax.Request(url + letra,
      {
        method : "get",
        onSuccess : ajaxSuccess,
        onFailure : naoExiste
      }
    );

    new Ajax.Request(url2 + letra,
      {
        method : "get",
        onSuccess : ajaxSuccess2
      }
    );

    new Ajax.Request(url3 + letra,
      {
        method : "get",
        onSuccess : ajaxSuccess3
      }
    );

  }else{
    id = letra;
    if((id >= 1) && (id <= 898)){
      ajax();
    }else{
      naoExiste();
    }
 } 
}

function loader(){
  document.getElementById('img').style.display='none';
  document.getElementById('miniLoad').style.display='block';
  exit = setTimeout(exit2, 1000);

  function exit2(){
    document.getElementById("miniLoad").style.display='none';
    document.getElementById('img').style.display='block';
  }
}

function random(){
  id = Math.floor( Math.random() * 898 + 1); //Randomiza um numero de 1 á 898
  ajax();
}

function proximo(){
  id++;
  if(id == 899){
    id = 1;
  }
  ajax();
  document.getElementById('pokeName').value = '';
}

function anterior(){
  id--;
  if(id == 0){
    id = 898;
  }
  ajax();
  document.getElementById('pokeName').value = '';
}

function key(event){
  if(event.key == "ArrowRight"){
    proximo();
  }
  if(event.key == "ArrowLeft"){
    anterior();
  }
  if(event.key == "'"){
    power();
  }
}

function ajaxSuccess(response){
  loader();
  trocaCor1();
  trocaCor2();
  trocaCor3();
  var obj = JSON.parse(response.responseText);

  var nomeM = obj.name[0].toUpperCase() + obj.name.substring(1);
  document.getElementById("name").innerHTML = nomeM;

  id = obj.id;
  document.getElementById("stats2").innerHTML ="<p><strong>ID: "+id+"</strong> ";

  document.getElementById("img").src = obj.sprites.front_default;

  if(obj.types[1] == undefined){
    var tipo1 = obj.types[0].type.name[0].toUpperCase() + obj.types[0].type.name.substring(1);

    document.getElementById("tipo").innerHTML = "<strong>Type 1:</strong> "+ tipo1;
  }else{
    var tipo1 = obj.types[0].type.name[0].toUpperCase() + obj.types[0].type.name.substring(1);
    var tipo2 = obj.types[1].type.name[0].toUpperCase() + obj.types[1].type.name.substring(1);

    document.getElementById("tipo").innerHTML = "<strong>Type 1:</strong> "+ tipo1 +" <strong>Type 2:</strong> " + tipo2;
  }

  document.getElementById("peso").innerHTML = "<strong>Weight :</strong> "+ obj.weight/10+"kg";
  
  var altura = obj.height/10;
  document.getElementById("altura").innerHTML = "<strong>Height :</strong> "+ altura.toFixed(2) +"m";

  
}


function ajaxSuccess2(response){
  var obj = JSON.parse(response.responseText);

  var desc = obj.flavor_text_entries[0].flavor_text;
  var descForm = obj.flavor_text_entries[0].flavor_text.replace(/\n|\f/g, " ");
  document.getElementById("desc").innerText = descForm;

  document.getElementById("gen").innerHTML ="<strong>" + obj.generation.name[0].toUpperCase() + obj.generation.name.substring(1) + "</strong>";
  
}


function ajaxSuccess3(response){
  var obj = JSON.parse(response.responseText);

  document.getElementById("aparicao").innerHTML = "<p><strong>" + obj.version_group.name.toUpperCase() + "</strong></p>";
}

function naoExiste(){
  loader();
  id = 0;

  document.getElementById("name").innerHTML ="<strong>NULL</strong>";

  document.getElementById("stats2").innerHTML ="<p><strong>ID: NULL</strong> ";

  document.getElementById("img").src='nsei.gif' ;

  document.getElementById("tipo").innerHTML = "<strong>Type 1: NULL </strong> <strong> Type 2: NULL</strong> ";

  document.getElementById("peso").innerHTML = "<strong>Weight : NULL</strong> ";
  
  document.getElementById("altura").innerHTML = "<strong>Height : NULL</strong> ";

  document.getElementById("desc").innerText = "Pokemon não existe...";

}


function trocaCor1(){
  var randomColor = Math.floor(Math.random()*16777215).toString(16);

  document.getElementById("mini1").innerHTML = "<style>div#miniButtonGlass1	{		width: 20px;		height: 20px;		margin-right: 10px;		float: left;		box-shadow: 0 0 10px #490000;		-webkit-box-shadow: 0 0 10px #490000;		-moz-box-shadow: 0 0 10px #490000;		-o-box-shadow: 0 0 10px #490000;		border-radius: 20px;		-webkit-border-radius: 20px;		-moz-border-radius: 20px;		-o-border-radius: 20px;		background: radial-gradient(#"+randomColor+", #"+randomColor+");		background: -webkit-radial-gradient(#"+randomColor+", #"+randomColor+");		background: -moz-radial-gradient(#"+randomColor+", #"+randomColor+");		background: -o-radial-gradient(#"+randomColor+", #"+randomColor+");	}</style>";
}

function trocaCor2(){
  var randomColor = Math.floor(Math.random()*16777215).toString(16);

  document.getElementById("mini2").innerHTML = "<style>div#miniButtonGlass2	{		width: 20px;		height: 20px;		margin-right: 10px;		float: left;		box-shadow: 0 0 10px #490000;		-webkit-box-shadow: 0 0 10px #490000;		-moz-box-shadow: 0 0 10px #490000;		-o-box-shadow: 0 0 10px #490000;		border-radius: 20px;		-webkit-border-radius: 20px;		-moz-border-radius: 20px;		-o-border-radius: 20px;		background: radial-gradient(#"+randomColor+", #"+randomColor+");		background: -webkit-radial-gradient(#"+randomColor+", #"+randomColor+");		background: -moz-radial-gradient(#"+randomColor+", #"+randomColor+");		background: -o-radial-gradient(#"+randomColor+", #"+randomColor+");	}</style>";
}

function trocaCor3(){
  var randomColor = Math.floor(Math.random()*16777215).toString(16);

  document.getElementById("mini3").innerHTML = "<style>div#miniButtonGlass3	{		width: 20px;		height: 20px;		margin-right: 10px;		float: left;		box-shadow: 0 0 10px #490000;		-webkit-box-shadow: 0 0 10px #490000;		-moz-box-shadow: 0 0 10px #490000;		-o-box-shadow: 0 0 10px #490000;		border-radius: 20px;		-webkit-border-radius: 20px;		-moz-border-radius: 20px;		-o-border-radius: 20px;		background: radial-gradient(#"+randomColor+", #"+randomColor+");		background: -webkit-radial-gradient(#"+randomColor+", #"+randomColor+");		background: -moz-radial-gradient(#"+randomColor+", #"+randomColor+");		background: -o-radial-gradient(#"+randomColor+", #"+randomColor+");	}</style>";
}

$('.teste').select2({
  ajax: {
    url: 'https://api.github.com/search/repositories',
    dataType: 'json'
    // Additional AJAX parameters go here; see the end of this chapter for the full code of this example
  }
});

//colocar botao pra passar a descrição, criar um if else com controlador, enquanto esse controlador for 1 discrição ++ ou --, se for 0 discrição retorna 1