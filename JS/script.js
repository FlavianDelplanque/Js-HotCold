var nombreOrdi = Math.floor(Math.random() * (100 - 1 +1)) + 1;
var reponse = document.getElementById("reponse");
var reponseB = document.getElementById("reponseB");
var reponseM = document.getElementById("reponseM");
var nombreEssaie = 0;
var button = document.getElementById("button");
var entrer = document.getElementById("chiffre");
var chiffreRoulette = document.getElementById("roulette");
var boutonR = document.getElementById("boutonRoulette");
// Math.floor(Math.random() * 100 + 1 );
console.log(nombreOrdi);
function nombreUti(){
    var nombreUti = document.getElementById("chiffre").value;
   	console.log(nombreUti);
   	var nombreDiff = Math.abs(nombreOrdi - nombreUti);
   	document.getElementById("chiffre").focus();
   	document.getElementById("chiffre").select();
	// console.log(nombreDiff);

	if (nombreUti == nombreOrdi) {
		reponse.innerHTML = "";
		reponseM.innerHTML = "";
		reponseB.innerHTML = "YOU WIN ! Vous avez réussi au bout de " + (nombreEssaie +1) + " fois" ;
		reponseB.style.animationName = 'ZOOMB';
		button.disabled = true;
		entrer.disabled = true;
		boutonR.disabled = true;
		finish();
		// reponseB.style.animationDuration = '5s';
		// reponseB.style.animationIterationCount = 'infinite';
		// reponseB.style.animationDirection = 'alternate';
		console.log("gg");
	}
	else if (nombreUti == "" || nombreUti < 1 || nombreUti > 100) {
		reponseB.innerHTML = "";
		reponse.innerHTML = "erreur";
		reponse.style.color = "red";
		console.log("erreur");
	}
	else if (nombreDiff < 15) {
		reponseB.innerHTML = "";
		reponse.innerHTML = "chaud";
		reponse.style.color = "orange";
		console.log("chaud");
	}
	else {
		reponseB.innerHTML = "";
		console.log("froid");
		reponse.innerHTML = "froid";
		reponse.style.color = "blue";
	}

	nombreEssaie++;
	console.log(nombreEssaie + " essaie");

	if (nombreEssaie == 5 || nombreEssaie == 6 || nombreEssaie == 7 || nombreEssaie == 8 || nombreEssaie == 9) {
		console.log("indice");
		if (nombreUti == "" || nombreUti < 1 || nombreUti > 100) {
		reponseB.innerHTML = "";
		reponse.innerHTML = "erreur";
		reponse.style.color = "red";
		console.log("erreur");
		}
		else if (nombreUti == nombreOrdi) {
		reponse.innerHTML = "";
		reponseM.innerHTML = "";
		reponseB.innerHTML = "YOU WIN ! Vous avez réussi au bout de " + (nombreEssaie) + " fois" ;
		reponseB.style.animationName = 'ZOOMB';
		button.disabled = true;
		entrer.disabled = true;
		console.log("gg");
		}
		else if (nombreDiff < 10) {
			console.log("de 1 à 10");
			reponseM.innerHTML = "";
			reponseB.innerHTML = "";
			reponse.innerHTML = "L'écart du chiffre est entre 1 à 10";
			reponse.style.color = "orange";
		}
		else if (nombreDiff < 20) {
			console.log("de 10 à 20");
			reponseM.innerHTML = "";
			reponseB.innerHTML = "";
			reponse.innerHTML = "L'écart du chiffre est entre 10 à 20";
			reponse.style.color = "blue";
		}
		else {
			console.log("trop");
			reponseM.innerHTML = "";
			reponseB.innerHTML = "";
			reponse.innerHTML = "L'écart du chiffre est trop gros Jamy !";
			reponse.style.color = "red";
		}
	}
	else if (nombreEssaie == 10) {
		reponse.innerHTML = "";
		reponseB.innerHTML = "";
		reponseM.innerHTML = "YOU LOSE ! Le chiffre étais " + nombreOrdi;
		reponseM.style.animationName = 'ZOOMM';
		button.disabled = true;
		entrer.disabled = true;
		boutonR.disabled = true;
		finish();
	}

}

// var nombreUti = "50";

// chiffreRoulette.innerHTML = "test";

var nombreRoulette = 0;


// for(var i=0; i < 50; i++){
 

// chiffreRoulette.innerHTML = nombreRoulette;

// }

var counter = 100;
var intervalId = null;
function relance() {

  nombreRoulette = 0;
  counter = 100;
  console.log(nombreRoulette);
  console.log(counter);
  clearInterval(intervalId);
  start();	
  console.log("finish");
}
function bip() {
    
    if(counter === 0) relance();
    else {
    	counter--;
    	nombreRoulette++;
        chiffreRoulette.innerHTML = nombreRoulette;
        document.getElementById("roulette").animate([{ transform: 'translateY(-90px)' }, { transform: 'translateY(80px)' }], { duration: 1000, iterations: Infinity});
        console.log(nombreRoulette);

    }	
}
function start(){
  intervalId = setInterval(bip, 500);
  console.log(intervalId);
  console.log("start");
}	
function finish() {
	clearInterval(intervalId);
	console.log(nombreRoulette);
}


start();








function nombreUtiR(){
   	var nombreDiffR = Math.abs(nombreOrdi - nombreRoulette);
	// console.log(nombreDiff);

	if (nombreRoulette == nombreOrdi) {
		reponse.innerHTML = "";
		reponseM.innerHTML = "";
		reponseB.innerHTML = "YOU WIN ! Vous avez réussi au bout de " + (nombreEssaie +1) + " fois" ;
		reponseB.style.animationName = 'ZOOMB';
		button.disabled = true;
		entrer.disabled = true;
		boutonR.disabled = true;
		// reponseB.style.animationDuration = '5s';
		// reponseB.style.animationIterationCount = 'infinite';
		// reponseB.style.animationDirection = 'alternate';
		console.log("gg");
	}
	else if (nombreDiffR < 15) {
		reponseB.innerHTML = "";
		reponse.innerHTML = "chaud";
		reponse.style.color = "orange";
		console.log("chaud");
		start();	
	}
	else {
		reponseB.innerHTML = "";
		console.log("froid");
		reponse.innerHTML = "froid";
		reponse.style.color = "blue";
		start();	
	}

	nombreEssaie++;
	console.log(nombreEssaie + " essaie");

	if (nombreEssaie == 5 || nombreEssaie == 6 || nombreEssaie == 7 || nombreEssaie == 8 || nombreEssaie == 9) {
		console.log("indice");
		if (nombreRoulette == nombreOrdi) {
		reponse.innerHTML = "";
		reponseM.innerHTML = "";
		reponseB.innerHTML = "YOU WIN ! Vous avez réussi au bout de " + (nombreEssaie) + " fois" ;
		reponseB.style.animationName = 'ZOOMB';
		button.disabled = true;
		entrer.disabled = true;
		boutonR.disabled = true;
		console.log("gg");
		}
		else if (nombreDiffR < 10) {
			console.log("de 1 à 10");
			reponseM.innerHTML = "";
			reponseB.innerHTML = "";
			reponse.innerHTML = "L'écart du chiffre est entre 1 à 10";
			reponse.style.color = "orange";
		}
		else if (nombreDiffR < 20) {
			console.log("de 10 à 20");
			reponseM.innerHTML = "";
			reponseB.innerHTML = "";
			reponse.innerHTML = "L'écart du chiffre est entre 10 à 20";
			reponse.style.color = "blue";
		}
		else {
			console.log("trop");
			reponseM.innerHTML = "";
			reponseB.innerHTML = "";
			reponse.innerHTML = "L'écart du chiffre est trop gros Jamy !";
			reponse.style.color = "red";
		}
	}
	else if (nombreEssaie == 10) {
		reponse.innerHTML = "";
		reponseB.innerHTML = "";
		reponseM.innerHTML = "YOU LOSE ! Le chiffre étais " + nombreOrdi;
		reponseM.style.animationName = 'ZOOMM';
		button.disabled = true;
		entrer.disabled = true;
		boutonR.disabled = true;
		finish();
	}

}