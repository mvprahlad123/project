var isMetric = false;
var impbtnElem = document.getElementById("impbtn");
var metricbtnElem = document.getElementById("metricbtn");
var ftdiv = document.getElementById("ftdiv");
var lbdiv = document.getElementById("lbdiv");
var cmdiv = document.getElementById("cmdiv");
var kgdiv = document.getElementById("kgdiv");
window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calcform").onkeypress = function (e) { if (e.keyCode == 13) OnCalc(); };
});
function onUnitMetric() {
    impbtnElem.classList.remove("active");
    metricbtnElem.classList.add("active");
    ftdiv.style.display = "none";
    lbdiv.style.display = "none";
    cmdiv.style.display = "flex";
    kgdiv.style.display = "flex";
    isMetric = true;
}
function onUnitImp() {
    impbtnElem.classList.add("active");
    metricbtnElem.classList.remove("active");
    ftdiv.style.display = "flex";
    lbdiv.style.display = "flex";
    cmdiv.style.display = "none";
    kgdiv.style.display = "none";
    isMetric = false;
}
function OnCalc() {
    if (isMetric) {
        var cm = document.getElementById("cm").value;
        var kg = document.getElementById("kg").value;
        if (cm == "") cm = "0";
        if (kg == "") kg = "0";
        cm = parseFloat(cm);
        kg = parseFloat(kg);
        var m = cm / 100.0;
        var bmi = kg / (m * m);
        document.getElementById("bmi").value = bmi.toFixed(1);
    }
    else {
        var ft = document.getElementById("ft").value;
        var inch = document.getElementById("in").value;
        var lbs = document.getElementById("lb").value;
        if (ft == "") ft = "0";
        if (inch == "") inch = "0";
        if (lbs == "") lbs = "0";
        ft = parseFloat(ft);
        inch = parseFloat(inch);
        lbs = parseFloat(lbs);
        inch += 12.0 * ft;
        //var bmi=703.069*lbs/(inch*inch);
        var bmi = 703 * lbs / (inch * inch);
        document.getElementById("bmi").value = bmi.toFixed(1);
    }
    var risk = "", cat = "";
    if (bmi < 18.5) { cat = "Underweight"; risk = "Malnutrition risk"; }
    else if (bmi < 25) { cat = "Normal weight"; risk = "Low risk"; }
    else if (bmi < 30) { cat = "Overweight"; risk = "Enchanced risk"; }
    else if (bmi < 35) { cat = "Moderately obese"; risk = "Medium risk"; }
    else if (bmi < 40) { cat = "Severely obese"; risk = "High risk"; }
    else if (bmi >= 40) { cat = "Very severely obese"; risk = "Very high risk"; }
    document.getElementById("category").value = cat;
    document.getElementById("risk").value = risk;
}