let botao = document.querySelector("#botao");
let pf = document.querySelector("#pf");

botao.addEventListener('click', function(e){
    pf.textContent = "As minhas expectativas são, aprender a como programar na prática e melhorar as minhas capacidades como programador, agregar a equipe, melhorar como profissional e pessoa.";
    pf.style.animation = "paragrafo 7s";
});


document.getElementById('esqh1').addEventListener('mouseover', function() {
    document.getElementById('porcima').style.display = 'flex';
  });
  
  document.getElementById('esqh1').addEventListener('mouseout', function() {
    document.getElementById('porcima').style.display = 'none';
  });