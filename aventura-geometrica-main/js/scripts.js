document.getElementById("retanguloCalculo").addEventListener('submit',function(event) {
      event.preventDefault();//previne que a página carregue
const width=parseFloat(document.getElementById('base').value);
const height=parseFloat(document.getElementById('altura').value);

const area=width * height;
document.getElementById('resultado').textContent="A area do retangulo é : " + area ;

});






