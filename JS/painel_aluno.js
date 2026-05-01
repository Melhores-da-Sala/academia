const nomeAluno = localStorage.getItem('nomeAluno');
const saudacao = document.querySelector('.painel_aluno_dados_perfil h2');
const saudacao_h1 = document.querySelector('.painel_aluno_painel_principal h1');

const dados = [40, 20, 10, 60, 25, 80, 50];
const dias = ["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"];
const grafico = document.getElementById("grafico");

const btn = document.getElementById("btnMenu");
const menu = document.querySelector(".acao_clicar_burguer_painel_aluno");

const container = document.querySelector(".painel_aluno_nav_botoes");
const links = document.querySelectorAll(".painel_aluno_nav_botoes a");


// ======================
// SAUDAÇÃO
// ======================
if (saudacao) {
    saudacao.textContent = nomeAluno ? `Olá, ${nomeAluno}!` : 'Olá';
}

if (saudacao_h1) {
    saudacao_h1.textContent = nomeAluno 
        ? `Bem-vindo de volta, ${nomeAluno}!` 
        : 'Bem-vindo de volta!';
}


// ======================
// GRÁFICO (só se existir)
// ======================
if (grafico) {
    dados.forEach((valor, index) => {
        const barra = document.createElement("div");
        barra.classList.add("painel_aluno_barra");

        const preenchimento = document.createElement("div");
        preenchimento.style.height = valor + "%";

        const label = document.createElement("small");
        label.textContent = dias[index];

        barra.appendChild(preenchimento);

        const containerBarra = document.createElement("div");
        containerBarra.style.display = "flex";
        containerBarra.style.flexDirection = "column";
        containerBarra.style.alignItems = "center";

        containerBarra.appendChild(barra);
        containerBarra.appendChild(label);

        grafico.appendChild(containerBarra);
    });
}


// ======================
// MENU MOBILE
// ======================
if (btn && menu) {
    btn.addEventListener("click", () => {
        menu.classList.toggle("ativo");
    });
}


// ======================
// SIDEBAR ANIMADA (barra lateral)
// ======================
if (container && links.length > 0) {

    const barra = document.createElement("div");
    barra.id = "barra-ativa";
    container.appendChild(barra);

    function moverBarra(elemento) {
        barra.style.top = elemento.offsetTop + "px";
        barra.style.height = elemento.offsetHeight + "px";
    }

    const paginaAtual = window.location.pathname.split("/").pop();

    links.forEach(link => {
        const linkPagina = link.getAttribute("href").split("/").pop();

        if (paginaAtual === linkPagina) {
            link.classList.add("painel_aluno_esta_pagina");
            moverBarra(link);
        }

        link.addEventListener("mouseenter", () => {
            moverBarra(link);
        });
    });

    container.addEventListener("mouseleave", () => {
        const ativo = document.querySelector(".painel_aluno_esta_pagina");
        if (ativo) moverBarra(ativo);
    });
}