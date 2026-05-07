document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o ícone do menu e a caixa de links
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    // Adiciona o evento de clique no ícone
    menuIcon.addEventListener("click", function() {
        // Alterna (liga/desliga) a classe 'ativo' nos links
        navLinks.classList.toggle("ativo");
    });
}); 