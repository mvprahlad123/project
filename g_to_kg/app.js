function convert() {
    let x = document.getElementById('x').value;
    var y = parseFloat(x) / 1000;
    var txt = x + " g / 1000\n";
    txt += "= " + y + " kg";
    var y2 = Math.floor(y);
    var y3 = (y - y2) * 1000;
    document.getElementById('outtext').value = y;
    document.getElementById("y2").value = y2;
    document.getElementById("y3").value = y3.toFixed();
    document.calcform.TA.value = txt;
    return (y);
}