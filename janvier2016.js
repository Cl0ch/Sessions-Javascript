1.
<script>

// PV veut dire Points de Vie
var PV = 12;
var degats = 3;
var soins = 2;

function attaque() {
  if(PV-degats >= 0){
     PV=PV-degats;
     alert("Le monstre a perdu "+degats+" PV. Il lui en reste "+PV);
  }
  else {
    PV=0;
    alert("Le monstre est mort !");
    }
}

function soin() {
    if(PV <= 0){
	    alert("Le monstre est mort. Il ne peut plus récupérer de PV ! ");
    }
    else if (PV+soins >= 12){
        PV=12;
        alert("Le monstre a ses points de vie déjà au maximum.");
    }
    else {
        PV= PV+soins;
        alert("Le monstre a gagné "+soins+" PV. Il en a maintenant "+PV);
    }
}
</script>
<button onclick="attaque()">Attaque</button>
<button onclick="soin()">Soin</button>
2.
<script>

// PV veut dire Points de Vie
var PV = 12;
var degats = getRandomMinMax(3,7);
var soins = getRandomMinMax(1,4);

function attaque() {
degats = getRandomMinMax(3,7);  
  if(PV-degats >= 0){
     PV=PV-degats;
     alert("Le monstre a perdu "+degats+" PV. Il lui en reste "+PV);
  }
  else {
    PV=0;
    alert("Le monstre est mort !");
    }
}

function soin() {
soins = getRandomMinMax(1,4);
   if(PV <= 0){
	    alert("Le monstre est mort. Il ne peut plus récupérer de PV ! ");
    }
    else if (PV+soins >= 12){
        PV=12;
        alert("Le monstre a ses points de vie déjà au maximum.");
    }
    else {
        PV= PV+soins;
        alert("Le monstre a gagné "+soins+" PV. Il en a maintenant "+PV);
    }
}

function getRandomMinMax(min,max) {
   return Math.floor(Math.random()*(max-min))+min;
}
alert(getRandomMinMax(3,7));
alert(getRandomMinMax(1,4));




</script>
<button onclick="attaque()">Attaque</button>
<button onclick="soin()">Soin</button>
3.
</script>

<button onclick="attaque()">Attaque</button>
<button onclick="soin()">Soin</button>

<img src="http://www.planet-mammiferes.org/Photos/Ongule/Gazelle/Ourebi4.jpg"/>
