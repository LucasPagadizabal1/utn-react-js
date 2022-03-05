function changeTypeInsurance() {
    var typeInsurance = document.getElementById("typeInsuranceId").value;

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

changeTypeInsurance();

function SetValueInsurance(value) {
    document.getElementById("typeInsuranceValueId").value = String.fromCharCode(36) + value;
}

function SendInfo(e) {
    e.preventDefault();

    alert("La información fue enviada");
    cleanForm();
    return false;
}

function cleanForm() {
    document.getElementById("firstNameId").value = "";
    document.getElementById("lastNameId").value = "";
    document.getElementById("dniId").value = "";
    document.getElementById("emailId").value = "";
    document.getElementById("phoneId").value = "";
    document.getElementById("addressId").value = "";
    changeTypeInsurance();
}