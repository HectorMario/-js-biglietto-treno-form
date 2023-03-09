const dati = document.getElementById("envia")

dati.addEventListener("click", function(){
    const kilo = document.getElementById("distanza");
    const age = document.getElementById("eta").value;
    const prezzo = 0.21 * kilo.value;
    console.log(prezzo);
    console.log(age);
    if(isNaN(prezzo)){
        mensage = "Si prega di mettere solo numeri"
        document.getElementById("price").innerHTML = mensage;
    } else if(isNaN(age)){
        mensage = "Si prega di mettere solo numeri"
        document.getElementById("price").innerHTML = mensage;
    } else {
        finalPrezzo = ""
        mensage = ""
        if(age < 18){
            finalPrezzo = ((prezzo) - (prezzo * 0.2)).toFixed(2);
        } else if(age>=65){
            finalPrezzo = ((prezzo) - (prezzo * 0.4)).toFixed(2);
        } else{
            finalPrezzo = prezzo.toFixed(2);
        }
        
        console.log(finalPrezzo)
        document.getElementById("price").innerHTML = "Devi Pagare $" + finalPrezzo;
    }
    
})


