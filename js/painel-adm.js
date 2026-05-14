const btnMenu = document.getElementById('list');
const sidebar = document.querySelector('.sidebar');

// Cria o overlay dinamicamente
const overlay = document.createElement('div');
overlay.classList.add('sidebar-overlay');
document.body.appendChild(overlay);

function isMobile() {
    return window.innerWidth <= 768;
}

function abrirSidebar() {
    sidebar.classList.remove('oculta');
    overlay.classList.add('visivel');
}

function fecharSidebar() {
    sidebar.classList.add('oculta');
    overlay.classList.remove('visivel');
}

// Ícone do menu hamburguer
btnMenu.addEventListener('click', function () {
    if (isMobile()) {
        const aberta = !sidebar.classList.contains('oculta');
        aberta ? fecharSidebar() : abrirSidebar();
    } else {
        sidebar.classList.toggle('oculta');
    }
});

// Clique fora da sidebar (no overlay) fecha ela
overlay.addEventListener('click', fecharSidebar);

// Garante estado correto ao redimensionar
window.addEventListener('resize', () => {
    if (!isMobile()) {
        overlay.classList.remove('visivel');
    }
});

// Mobile: começa com sidebar oculta
if (isMobile()) {
    sidebar.classList.add('oculta');
}