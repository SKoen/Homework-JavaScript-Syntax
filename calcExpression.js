function Calc() {
    var expr = document.getElementById("text").value;
    var result = eval(expr);
    document.getElementById("result").value = result;
}
