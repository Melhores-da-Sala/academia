// Selecionamos o ícone do menu e a sidebar
const btnMenu = document.getElementById('list');
const sidebar = document.querySelector('.sidebar');

// Adicionamos um "ouvinte de evento" para o clique
btnMenu.addEventListener('click', function () {
    // O toggle adiciona a classe 'oculta' se não tiver, e remove se já tiver
    sidebar.classList.toggle('oculta');
});
