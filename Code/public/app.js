const socket = io("http://localhost:3000");

function diagno(erreur) {
    document.querySelector("#histo").innerHTML = '<div class="card mb-2"><div class=card-header>'+erreur+'</div></div>';
}

socket.on("STDS/2/Puissance", (arg) => {
    document.querySelector("#puissance").textContent = arg
    document.querySelector("#puissance2").textContent = arg
    document.getElementById("image").style.clipPath = "polygon(100% "+(100-(arg*100/60))+"%,100% 100%,0% 100%,0% "+(100-(arg*100/60))+"%)"
});

socket.on("STDS/2/CO2", (arg) => {
    document.querySelector("#co2").textContent = arg
    document.querySelector("#co22").textContent = arg
    //document.querySelector("#cardCo2").style.display = "none"
    //Pour cacher une card
});

socket.on("STDS/2/Température/T2", (arg) => {
    document.querySelector("#tint").textContent = arg
    gaugeInt.set(document.querySelector('#tint').textContent); // set actual value
    document.querySelector('#jaugeInt')
    document.querySelector("#tint2").textContent = arg
    if(arg < 120) {
        diagno("capteur température 2 déconnecté")
    }
});

socket.on("STDS/2/Température/T1", (arg) => {
    document.querySelector("#text").textContent = arg
    gaugeExt.set(document.querySelector('#text').textContent); // set actual value
    document.querySelector('#jaugeExt')
    document.querySelector("#text2").textContent = arg
    if(arg < 120) {
        diagno("capteur température fût déconnecté")
    }
});

socket.on("STDS/2/Niveau", (arg) => {
    document.querySelector("#quantite").textContent = arg
    document.querySelector("#quantite2").textContent = arg
});

socket.on("STDS/2/Diag", (arg) => {
    document.querySelector("#diag").textContent = arg
});

