const nomeAluno = localStorage.getItem('nomeAluno');
const saudacao = document.querySelector('.painel_aluno_dados_perfil h2');
const saudacao_h1 = document.querySelector('.painel_aluno_painel_principal h1');

const dados = [40, 20, 10, 60, 25, 80, 50];
const dias = ["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"];
const grafico = document.getElementById("grafico");

const btn = document.getElementById("btnMenu");
const menu = document.getElementById("menuMobile") || document.querySelector(".acao_clicar_burguer_painel_aluno");

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

    function atualizarGrafico(preenchimento, valor) {
        if (window.innerWidth <= 768) {
            preenchimento.style.width = valor + "%";
            preenchimento.style.height = "100%";
        } else {
            preenchimento.style.height = valor + "%";
            preenchimento.style.width = "100%";
        }
    }

    dados.forEach((valor, index) => {
        const barra = document.createElement("div");
        barra.classList.add("painel_aluno_barra");

        const preenchimento = document.createElement("div");

        // estado inicial
        preenchimento.style.width = "0%";
        preenchimento.style.height = "0%";
        preenchimento.style.transition = "all 0.6s ease";

        const label = document.createElement("small");
        label.style.minWidth = "40px";
        label.style.fontWeight = "600";
        label.textContent = dias[index];

        barra.appendChild(preenchimento);

        const containerBarra = document.createElement("div");
        containerBarra.classList.add("container-barra");
        containerBarra.style.width = "100%";
        containerBarra.style.gap = "10px";

        containerBarra.appendChild(label);
        containerBarra.appendChild(barra);

        grafico.appendChild(containerBarra);

        setTimeout(() => {
            atualizarGrafico(preenchimento, valor);
        }, 100 + index * 80);
    });

    // corrige no resize
    window.addEventListener("resize", () => {
        document.querySelectorAll(".painel_aluno_barra div").forEach((barra, i) => {
            atualizarGrafico(barra, dados[i]);
        });
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