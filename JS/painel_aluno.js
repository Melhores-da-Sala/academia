const nomeAluno = localStorage.getItem('nomeAluno');
const saudacao = document.querySelector('.painel_aluno_dados_perfil h2');
const saudacao_h1 = document.querySelector('.painel_aluno_painel_principal h1');
const dados = [40, 20, 10, 60, 25, 80, 50];
const dias = ["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"];
const grafico = document.getElementById("grafico");


if (nomeAluno) {
    saudacao.textContent = `Olá, ${nomeAluno}!`;
} else {
    saudacao.textContent = 'Olá'; // fallback se não tiver nome
}

if (nomeAluno) {
    saudacao_h1.textContent = `Bem-vindo de volta, ${nomeAluno}!`;
} else {
    saudacao_h1.textContent = 'Bem-vindo de volta!'; // fallback se não tiver nome
}



dados.forEach((valor, index) => {
    const barra = document.createElement("div");
    barra.classList.add("painel_aluno_barra");

    const preenchimento = document.createElement("div");
    preenchimento.style.height = valor + "%";

    const label = document.createElement("small");
    label.textContent = dias[index];

    barra.appendChild(preenchimento);

    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";

    container.appendChild(barra);
    container.appendChild(label);

    grafico.appendChild(container);
});