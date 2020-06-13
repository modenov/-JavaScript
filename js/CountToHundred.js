function CountToHundred(){
    var count = 0;
    while (count < 100) {
        count++;
        document.getElementById("theCount").innerHTML += count + ";<br>";
    }
}