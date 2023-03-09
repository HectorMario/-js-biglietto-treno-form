const dati = document.getElementById("envia")




dati.addEventListener("click", function(){
    let kilo = document.getElementById("distanza");
    let agi = document.getElementById("eta");
    let age = agi.value;
    let prezzo = 0.21 * kilo.value;
    let nime = document.getElementById("name");
    let nome = nime.value;
    console.log(prezzo);
    console.log(age);
    if(isNaN(prezzo)){
        mensage = "Si prega di mettere solo numeri"
        document.getElementById("price").innerHTML = mensage;
    } else if(isNaN(age)){
        mensage = "Si prega di mettere solo numeri"
        document.getElementById("price").innerHTML = mensage;
    } else {
        let offer = ""
        let finalPrezzo = ""
        let mensage = ""
        let codice = Math.round(Math.random() * 10000);
        let bin = Math.round(Math.random() * 10 + 1);
        if(age < 18){
            finalPrezzo = ((prezzo) - (prezzo * 0.2)).toFixed(2)
            offer = "Biglietto Minoreni"
        } else if(age>=65){
            finalPrezzo = ((prezzo) - (prezzo * 0.4)).toFixed(2)
            offer = "Biglietto Anciani"
        } else{
            finalPrezzo = prezzo.toFixed(2)
            offer = "Biglietto Standard"
        }
        
        console.log(finalPrezzo)
        document.getElementById("price").innerHTML ="$" + finalPrezzo;
        document.getElementById("user").innerHTML = nome;
        document.getElementById("offert").innerHTML = offer;
        document.getElementById("code").innerHTML = codice;
        document.getElementById("carro").innerHTML = bin;
    }

    const resit = document.getElementById("borra");

    resit.addEventListener("click", function(){
        let offer = "";
        kilo.value = "";
        nime.value = "";
        let prezzo = "";
        let nome = "";
        let finalPrezzo = "";
        let mensage = "";
        let codice = "";
        let bin = "";
        agi.value = "";
        document.getElementById("price").innerHTML = finalPrezzo;
        document.getElementById("user").innerHTML = nome;
        document.getElementById("offert").innerHTML = offer;
        document.getElementById("code").innerHTML = codice;
        document.getElementById("carro").innerHTML = bin;
        document.getElementById("distanza").innerHTML = kilo;
        document.getElementById("eta").innerHTML = codice;
        document.getElementById("name").innerHTML = bin;
    })
    
})



