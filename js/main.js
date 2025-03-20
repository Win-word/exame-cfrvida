

var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var cp = document.getElementById("imgExame");
alert("Pagina de Realizacao de exame!");


function changePage1(){
    
    cp.src = "exame/imageExame1.jpg";
    b1.style.background = "red";
    b2.style.background = "#f2b50c";

}

function changePage2(){
    
    cp.src = "exame/imageExame2.jpg";
    b2.style.background = "red";
    b1.style.background = "#f2b50c";

}



