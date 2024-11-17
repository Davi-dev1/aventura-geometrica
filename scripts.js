document.getElementById("retanguloCalculo").addEventListener('submit',function(event) {
      event.preventDefault();//previne que a página carregue
const width=parseFloat(document.getElementById('retangulo-base').value);
const height=parseFloat(document.getElementById('retangulo-altura').value);

const area=width * height;
document.getElementById('retangulo-resultado').textContent="A area do retangulo é : " + area ;

});


document.getElementById("circuloCalculo").addEventListener('submit',function(event) {
    event.preventDefault();//previne que a página carregue
const radius=parseFloat(document.getElementById('raio').value);

const area=3.14 * radius * radius;
document.getElementById('resultado').textContent="A area do circulo é : " + area ;

});

document.getElementById("trianguloCalculo").addEventListener('submit',function(event) {
    event.preventDefault();//previne que a página carregue
const base=parseFloat(document.getElementById('triangulo-base').value);
const height=parseFloat(document.getElementById('triangulo-altura').value); 

const resultado=(base * height) / 2;     
document.getElementById('triangulo-resultado').textContent="A area do triangulo é : " + resultado ;

});


document.getElementById("romboedroCalculo").addEventListener('submit',function(event) {
    event.preventDefault();//previne que a página carregue
const diagonalMenor=parseFloat(document.getElementById('Diagonal-menor').value);
const diagonalMaior=parseFloat(document.getElementById('Diagonal-maior').value);

const area=(diagonalMenor * diagonalMaior) / 2;
document.getElementById('romboedro-resultado').textContent="A area do losango do romboedro é : " + area ;

const areatotal=area * 6;
document.getElementById('romboedro-resultado').textContent="A area total do romboedro é : " + areatotal ;
});

document.getElementById("trapezoideCalculo").addEventListener('submit',function(event) {
    event.preventDefault();//previne que a página carregue
const baseMaior=parseFloat(document.getElementById('base-maior').value);
const baseMenor=parseFloat(document.getElementById('base-menor').value);
const altura=parseFloat(document.getElementById('altura').value);

const area=(baseMaior + baseMenor) * altura / 2;
document.getElementById('trapezoide-resultado').textContent="A area do trapezoide é : " + area ;
});

document.getElementById('PentaCalculo').addEventListener('submit',function(event) {
    event.preventDefault();//previne que a página carregue   
const lado=parseFloat(document.getElementById('lado').value);
const apotema=parseFloat(document.getElementById('apotema').value);

const area=(5 * lado * apotema) / 2;
document.getElementById('pentagono-resultado').textContent="A area do pentagono regular é : " + area ;
});
document.getElementById("HexagonoCalculo").addEventListener('submit',function(event) {
    event.preventDefault();//previne que a página carregue
const lado=parseFloat(document.getElementById('lado').value);

const area=(6 * lado * lado) / 2;
document.getElementById('hexagono-resultado').textContent="A area do hexagono regular é : " + area ;
});

getElementById("heptagonoCalculo").addEventListener('submit',function(event) {
    event.preventDefault();//previne que a página carregue
const lado=parseFloat(document.getElementById('lado').value);
const apotema=parseFloat(document.getElementById('apotema').value);

const area=(7 * lado * apotema) / 2;
document.getElementById('heptagono-resultado').textContent="A area do heptagono regular é : " + area ;
});

document.getElementById("QuadradoCalculo").addEventListener('submit',function(event) {
    event.preventDefault();//previne que a página carregue
const lado=parseFloat(document.getElementById('lado_quadrado').value);

const area=lado * lado;
document.getElementById('Quadrado-resultado').textContent="A area do quadrado é : " + area ;
});

document.getElementById("CuboideCalculo").addEventListener('submit',function(event) { //*
    event.preventDefault();//previne que a página carregue
const comprimento=parseFloat(document.getElementById('comprimentocuboide').value);
const largura=parseFloat(document.getElementById('Espaço para a largura').value);
const altura=parseFloat(document.getElementById('Espaço para a altura').value);

const area=2*(comprimento*largura+largura*altura+comprimento*altura);
document.getElementById('Cuboide-resultado').textContent="A area do cuboide é : " + area ;
}); 

document.getElementById('CuboCalculo').addEventListener('submit',function(event) {  
    event.preventDefault();//previne que a página carregue
const lado=parseFloat(document.getElementById('lado').value);

const area=6 * lado * lado;
document.getElementById('Cubo-resultado').textContent="A area do cubo é : " + area ;
});