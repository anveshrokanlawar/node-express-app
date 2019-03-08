$(document).ready(function(){
       $("#content").mouseleave(function () {
              $("#demo").hide();
       });
});
function Calculate(speed, time) {
       localStorage.setItem("num1", parseInt(document.getElementById("speed").value));
       localStorage.setItem("num2", parseInt(document.getElementById("time").value));
       if (localStorage.getItem("num1") >= 0 && localStorage.getItem("num2") >= 0) {
              localStorage.setItem("num3", localStorage.getItem("num1") * localStorage.getItem("num2"));
              document.getElementById("result").innerHTML = localStorage.getItem("num3") + " km";
       }
       else {
              alert("Invalid input values");
              throw Error('Values cannot be negative');
       }
}
function loadDoc() {
       $("#demo").show();
       var xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = function () {
              if (this.readyState == 4 && this.status == 200) {
                     document.getElementById("demo").innerHTML =
                            this.responseText;
              }
       };
       xhttp.open("GET", "info.txt", true);
       xhttp.send();
}

