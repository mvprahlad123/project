function convert() {
    x = document.calcform.x.value;
    y = parseFloat(x);
    n = y / 100;
    y = x + "% / 100% \n= " + n;
    document.calcform.y.value = n;
    document.calcform.area.value = y;
}