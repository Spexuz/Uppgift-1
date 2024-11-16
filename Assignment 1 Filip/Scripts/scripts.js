document.getElementById('DivideButton').addEventListener('click', function() {
    console.log('Divide');
});    // Loggar Divide till Consolen


document.addEventListener("DOMContentLoaded", function() {
   
    let fooInput = document.getElementById("fooInput");
    let barInput = document.getElementById("barInput");
    let divideButton = document.getElementById("DivideButton");

    // Resultat Container 
    let resultContainer = document.createElement("div");
    document.body.appendChild(resultContainer); // Omstrukurerar till Container? kanske funkar bättre

    divideButton.addEventListener("click", function() {
        // Converterar Input nummer till Värden bundna till foo/bar
        let foo = parseFloat(fooInput.value);
        let bar = parseFloat(barInput.value);
        
    
        let result = foo / bar;

        // Rensar Resultatet för att tillåta flera försök
        resultContainer.innerHTML = "";

        // Kollar om nummret fungerar
        if (isNaN(result) || !isFinite(result)) {
            alert("You can't divide us!");  // triggar alert vid NaN
        } else {
            console.log("The result is: " + result);  // visar resultat i loggen
            resultContainer.innerHTML = `<p>The result is: ${result}</p>`;  // visar resultat på sidan
        }
    });
});
