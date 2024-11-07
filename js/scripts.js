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


