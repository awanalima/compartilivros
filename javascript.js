/*window.alert("Antes de iniciar sua inscrição, gostaríamos de te conhecer um pouquinho!")
var nome = window.prompt ("Qual seu nome?")
var livro = window.prompt (nome + ", qual seu livro favorito?")
window.alert("Obrigado por compartilhar conosco, " + nome +"! Boa leitura!")
window.alert("É um prazer te conhecer, " + nome + "! Volte sempre!") */

window.addEventListener('scroll', function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 500)
})