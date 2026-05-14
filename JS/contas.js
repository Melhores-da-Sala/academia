function toggleSenha() {

    const campo =
        document.getElementById("senhaCadastro") ||
        document.getElementById("senhaLogin");

    const olho =
        document.getElementById("toggle_olho_cadastro") ||
        document.getElementById("toggle_olho");

    if (campo.type === "password") {

        campo.type = "text";

        olho.classList.remove("bi-eye-slash");
        olho.classList.add("bi-eye");

    } else {

        campo.type = "password";

        olho.classList.remove("bi-eye");
        olho.classList.add("bi-eye-slash");
    }
}

// CADASTRO
const btnCadastrar = document.getElementById("btnCadastrar");

if (btnCadastrar) {

    btnCadastrar.addEventListener("click", () => {

        const nome = document.getElementById("nomeCadastro");
        const email = document.getElementById("emailCadastro");
        const senha = document.getElementById("senhaCadastro");

        const container = document.querySelector(".container_cadastro");

        const nomeValor = nome.value.trim();
        const emailValor = email.value.trim();
        const senhaValor = senha.value.trim();

        // VALIDAÇÃO
        if (!nomeValor || !emailValor || !senhaValor) {

            container.style.border = "2px solid red";

            return;
        }

        container.style.border = "2px solid transparent";

        // PEGA PRIMEIRO NOME
        const primeiroNome = nomeValor.split(" ")[0];

        // SALVA DADOS
        localStorage.setItem("nomeUsuario", primeiroNome);
        localStorage.setItem("emailUsuario", emailValor);
        localStorage.setItem("senhaUsuario", senhaValor);

        // PROFESSOR
        if (senhaValor === "Ruan123") {

            localStorage.setItem("tipoUsuario", "professor");

        } else {

            localStorage.setItem("tipoUsuario", "aluno");
        }

        window.location.href = "login.html";
    });
}

// LOGIN
const btnLogin = document.getElementById("btnLogin");

if (btnLogin) {

    btnLogin.addEventListener("click", () => {

        const email = document.getElementById("emailLogin").value.trim();
        const senha = document.getElementById("senhaLogin").value.trim();

        const container = document.querySelector(".container_login");

        const emailSalvo = localStorage.getItem("emailUsuario");
        const senhaSalva = localStorage.getItem("senhaUsuario");

        // LOGIN PROFESSOR
        if (senha === "Ruan123") {

            container.style.border = "2px solid transparent";

            window.location.href = "dashboardprofessor.html";

            return;
        }

        // LOGIN ALUNO
        if (email === emailSalvo && senha === senhaSalva) {

            container.style.border = "2px solid transparent";

            window.location.href = "painel_aluno_main.html";

        } else {

            container.style.border = "2px solid red";
        }
    });
}

// NOME NO PAINEL
const nomeUsuario = localStorage.getItem("nomeUsuario");

if (nomeUsuario) {

    const saudacoes = document.querySelectorAll(".painel_aluno_dados_perfil h2");

    saudacoes.forEach(item => {

        item.innerHTML = `Olá ${nomeUsuario}`;
    });
}

// ANIMAÇÃO
(function(){

    const canvas = document.getElementById('bg');

    if(!canvas) return;

    const ctx = canvas.getContext('2d');

    function resize(){

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resize();

    window.addEventListener('resize', resize);

    const COUNT = 120;
    const MAX_DIST = 130;

    const particles = [];

    for(let i = 0; i < COUNT; i++){

        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.55,
            vy: (Math.random() - 0.5) * 0.55,
            r: Math.random() * 2.5 + 1,
            color: Math.random() > 0.5 ? '#b06bd4' : '#8b5bbf'
        });
    }

    function draw(){

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for(let i = 0; i < COUNT; i++){

            const a = particles[i];

            for(let j = i + 1; j < COUNT; j++){

                const b = particles[j];

                const dx = a.x - b.x;
                const dy = a.y - b.y;

                const dist = Math.sqrt(dx * dx + dy * dy);

                if(dist < MAX_DIST){

                    const alpha = 1 - dist / MAX_DIST;

                    ctx.beginPath();

                    ctx.strokeStyle = `rgba(176, 107, 212, ${alpha * 0.4})`;

                    ctx.lineWidth = 0.8;

                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);

                    ctx.stroke();
                }
            }
        }

        for(const p of particles){

            ctx.beginPath();

            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

            ctx.fillStyle = p.color;

            ctx.globalAlpha = 0.85;

            ctx.fill();

            ctx.globalAlpha = 1;

            p.x += p.vx;
            p.y += p.vy;

            if(p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if(p.y < 0 || p.y > canvas.height) p.vy *= -1;
        }

        requestAnimationFrame(draw);
    }

    draw();

})();