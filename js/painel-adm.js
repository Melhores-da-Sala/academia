const btnMenu = document.getElementById('list');
const sidebar = document.querySelector('.sidebar');

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

btnMenu.addEventListener('click', function () {
    if (isMobile()) {
        const aberta = !sidebar.classList.contains('oculta');
        aberta ? fecharSidebar() : abrirSidebar();
    } else {
        sidebar.classList.toggle('oculta');
    }
});

overlay.addEventListener('click', fecharSidebar);

window.addEventListener('resize', () => {
    if (!isMobile()) {
        overlay.classList.remove('visivel');
    }
});

if (isMobile()) {
    sidebar.classList.add('oculta');
}

document.getElementById('link-personais').addEventListener('click', function (e) {
    e.preventDefault();

    // Remove active de todos
    document.querySelectorAll('.link-page').forEach(el => el.classList.remove('active'));

    // Adiciona active no Personais
    this.closest('.link-page').classList.add('active');

    // Abre/fecha o dropdown
    const details = document.querySelector('.dropdown');
    details.open = !details.open;
});