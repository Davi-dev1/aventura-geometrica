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
})

document.getElementById("trapezoideCalculo").addEventListener('submit',function(event) {
    event.preventDefault();//previne que a página carregue
const baseMaior=parseFloat(document.getElementById('base-maior').value);
const baseMenor=parseFloat(document.getElementById('base-menor').value);
const altura=parseFloat(document.getElementById('altura').value);

const area=(baseMaior + baseMenor) * altura / 2;
document.getElementById('trapezoide-resultado').textContent="A area do trapezoide é : " + area ;
})