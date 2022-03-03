function changeInsurance() {
    var typeInsurance = document.getElementById("typeInsurance").value;

    switch (typeInsurance) {
        case "B":
            SetValueInsurance(500);
            break;
        case "I":
            SetValueInsurance(1000);
            break;
        case "P":
            SetValueInsurance(1500);
            break;
        default:
            SetValueInsurance(500);
    }
}

function SetValueInsurance(value) {
    document.getElementById("valueInsurance").innerHTML = value;
}

function SendQuote() {
    alert("La cotización fue enviada. En breve un asesor se comunicará con usted. Gracias");
}