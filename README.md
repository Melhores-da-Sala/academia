# 📄 Documentação Individual — Painel Administrativo ERP

**📚 Disciplina:** Desenvolvimento Front-end  
**📅 Data:** 30/04/2026  

---

- 🏷️ **Nome do Projeto:** MedSync ERP  

- 🏥 **Segmento Escolhido:** Área da Saúde

- 🚀 **Nome da Equipe:** Melhores da Sala  
- 👥 **Nome dos Alunos:**  
  - Gabriel Leonardo Vicente Cancian N°02  
  - Gustavo Lopez Zampiron N°09  
  - Matheus Lima Catarucci N°20  
  - Moisés Gabriel Tafarello N°22  
  - Nicolas Luciani N°25  
  - Samuel Gustavo Gracias Dio Falco N°30 

# 📋 Introdução: Painel de Gestão para Academias 🏋️‍♂️

Hoje em dia, muitas academias e centros de treino ainda sofrem com a falta de organização. É muito comum encontrar gestores que dependem de fichas de papel, cadernos ou várias planilhas de Excel que não conversam entre si.

Isso causa problemas sérios, como:
* 💸 **Perda de dinheiro:** Dificuldade em controlar mensalidades e pagamentos.
* 🕒 **Perda de tempo:** Horas gastas em tarefas manuais e repetitivas.
* 📉 **Desorganização:** Não saber ao certo quantos alunos estão ativos ou frequentando as aulas.
---

## Introdução e Objetivo do Projeto 🎯
Este projeto apresenta o desenvolvimento de um **Painel Administrativo Web** focado no setor fitness. O objetivo central é modernizar a gestão das unidades, substituindo processos manuais e o uso de "papel e caneta" por um sistema digital centralizado, seguro e intuitivo.

**Principais Metas:**
* 🗄️ **Centralização:** Consolidar dados de alunos, planos e treinos em um único lugar.
* 💳 **Gestão Financeira:** Controle ágil de pagamentos e mensalidades pendentes.
* 📋 **Atendimento:** Acesso imediato ao histórico do aluno e exames médicos.
* ⚙️ **Eficiência:** Reduzir a burocracia para focar no resultado e saúde dos alunos.

---

## Regra de Negócio 

### Funcionamento do Sistema ⚙️
O sistema foi concebido para ser a central de inteligência da academia. Ele integra as operações da recepção, dos instrutores e da gerência em um fluxo contínuo. Desde a matrícula até o acompanhamento diário de performance, todas as interações são registradas digitalmente, garantindo que a gestão tenha controle total sobre a operação sem depender de planilhas externas.

### Processos Principais 🔄
A operação do sistema é dividida em três pilares fundamentais:

1. **Gestão de Matrículas e Recorrência:** Registro de novos alunos, escolha de planos (mensal, trimestral ou anual) e automação das datas de vencimento. O sistema monitora o status dos contratos para facilitar o controle de acesso.
2. **Prescrição e Gestão de Treinos:** Substituição das fichas físicas por treinos digitais. Os instrutores podem atualizar exercícios e cargas em tempo real, permitindo uma análise precisa da evolução do aluno.
3. **Controle Administrativo e Financeiro:** Monitoramento do fluxo de caixa e geração de relatórios estratégicos sobre a saúde do negócio, como taxas de adesão e previsão de faturamento.

### Usuários Envolvidos 👥
O painel oferece diferentes níveis de permissão para garantir a segurança e organização:

* **Administrador (Gestor):** 🔑 Acesso total a relatórios financeiros, métricas de desempenho e configurações globais.
* **Recepcionista:** 👩‍💻 Responsável pelo atendimento, cadastro de alunos, recebimento de mensalidades e suporte administrativo.
* **Instrutor:** 🏋️‍♂️ Focado na gestão das fichas de treino, avaliações físicas e acompanhamento técnico dos alunos.

## Módulos do Sistema 🧩

Nesta secção, detalhamos os módulos que compõem a interface do painel administrativo e a justificativa estratégica para cada um deles dentro da gestão da academia.

### Dashboard Principal 📊
* **Descrição:** Painel visual com métricas em tempo real, como número de alunos presentes, total de matriculados e faturamento do dia.
* **Justificativa:** Centralizar as informações mais importantes (KPIs) para que o gestor possa tomar decisões rápidas sem precisar navegar por vários menus.

### Gestão de Alunos 👥
* **Descrição:** Listagem completa com filtros por nome, CPF e status da matrícula (Ativo, Inativo ou Pendente).
* **Justificativa:** Organizar o banco de dados de clientes, facilitando a consulta de informações pessoais e o histórico de frequência.

### Planeamento de Treinos 🏋️‍♂️
* **Descrição:** Módulo técnico para a criação e edição de fichas de exercícios personalizadas.
* **Justificativa:** Digitalizar o core business da academia, eliminando o uso de papel e garantindo que o instrutor acompanhe a evolução das cargas e exercícios do aluno.

### Gestão Financeira 💰
* **Descrição:** Controlo de fluxo de caixa, pagamentos de mensalidades, vendas de produtos (suplementos/acessórios) e alertas de inadimplência.
* **Justificativa:** Garantir a saúde financeira da unidade, evitando esquecimentos em cobranças e permitindo uma previsão de receitas mais precisa.

### Cadastro de Planos e Serviços ⚙️
* **Descrição:** Área para configurar os pacotes oferecidos (Mensal, Trimestral, VIP, etc.) e os horários das aulas coletivas.
* **Justificativa:** Dar flexibilidade ao negócio para criar novas ofertas e organizar a grade de horários conforme a procura dos alunos.

## Formulários 📝

Os formulários são a porta de entrada de dados do nosso ERP. Para este projeto, desenvolvemos quatro estruturas principais: o **Cadastro de Alunos**, o **Registro de Avaliação Física**, a **Montagem de Treinos** e o **Controle Financeiro**. 

No cadastro de alunos, utilizamos campos como Nome, CPF, Plano e Data de Início. A escolha do CPF é estratégica para evitar duplicidade, enquanto o campo de Plano permite que o sistema gerencie automaticamente o acesso do cliente. Na avaliação física e na montagem de treinos, incluímos campos técnicos como medidas corporais, carga e repetições. A justificativa para esses campos é garantir que o instrutor tenha dados precisos para prescrever exercícios, eliminando de vez as fichas de papel que se perdem na academia. Por fim, o formulário financeiro registra o valor e a forma de pagamento, essencial para que o gestor tenha um fluxo de caixa organizado no final do dia.

---

## Organização do CSS 📂

A organização do nosso CSS foi pensada para facilitar a manutenção a longo prazo. Em vez de um arquivo único e gigante, dividimos o código por responsabilidades: o `base.css` cuida dos resets e fontes, o layout.css estrutura a sidebar e o container principal, o components.css estiliza botões e cards, e o responsive.css guarda as adaptações para celular. 

Essa separação traz a vantagem de podermos alterar o estilo de um botão sem o risco de quebrar a estrutura da página inteira. É uma organização profissional que permite que diferentes desenvolvedores trabalhem no código ao mesmo tempo de forma organizada.

---

## Metodologia BEM 🏷️

Para nomear as classes no HTML e CSS, aplicamos a metodologia **BEM (Block, Element, Modifier)**. Essa técnica consiste em dar nomes que explicam a função do elemento. Por exemplo, usamos `.card-treino` para o bloco principal, `.card-treino__titulo` para um elemento interno e `.card-treino--destaque` quando queríamos aplicar um modificador visual. O uso do BEM evita que estilos de uma seção "vazem" para outra, mantendo o código limpo e fácil de entender até para quem nunca viu o projeto antes.

---

## Variáveis CSS 🎨

No topo do nosso arquivo de estilos, criamos as Variáveis CSS (Custom Properties) dentro do `:root`. Definimos tokens para as cores principais da marca (como o laranja e o cinza escuro), tamanhos de fontes e espaçamentos padrão. 

O grande benefício dessa prática é o controle centralizado do design. Se o cliente decidir mudar a cor principal da academia de laranja para azul, basta alterarmos uma única linha de código na variável e todo o sistema se atualiza instantaneamente, garantindo uma consistência visual impecável em todas as páginas.

---

## Responsividade 📱

Nossa estratégia de responsividade seguiu o conceito de **Mobile-First**. Isso significa que o site foi planejado primeiro para funcionar perfeitamente em celulares e, depois, fomos expandindo o layout para tablets e computadores. Utilizamos **Media Queries** para reorganizar o conteúdo: em telas pequenas, a barra lateral se esconde em um menu hambúrguer e as tabelas de treinos se transformam em cards verticais para evitar que o usuário precise rolar a tela lateralmente, garantindo que o sistema seja útil tanto na recepção quanto no salão de musculação.

---

## UX e UI 🖥️

Trabalhamos de forma integrada os conceitos de **UI (Interface)** e **UX (Experiência)**. Enquanto a UI focou na estética — usando cores vibrantes que remetem à energia do esporte e tipografia de fácil leitura —, a UX focou na jornada do usuário. O objetivo foi garantir que o recepcionista conseguisse concluir uma matrícula em poucos passos, com botões bem posicionados e mensagens de erro claras, reduzindo o cansaço mental de quem opera o sistema o dia todo.

---

## Frameworks CSS 🛠️

Frameworks como Bootstrap ou Tailwind são ferramentas que oferecem estilos prontos para acelerar o trabalho. No entanto, para este projeto, **optamos por não utilizar frameworks**. 

A justificativa é simples: queríamos demonstrar domínio total sobre o CSS puro (Vanilla CSS). Embora os frameworks facilitem a velocidade, eles podem deixar o site pesado e com um visual "genérico". Ao criar nosso próprio código, garantimos uma ferramenta leve, única e com 100% de controle sobre cada detalhe visual.

---

## Desafios 🚀

Durante o desenvolvimento, o maior desafio foi a criação de tabelas e dashboards que não quebrassem em dispositivos móveis. Dados de treino costumam ter muitas colunas, o que é um pesadelo para telas pequenas. A solução adotada foi o uso de técnicas de **Flexbox e CSS Grid**, que permitiram reorganizar os dados de forma inteligente, empilhando as informações quando o espaço horizontal não era suficiente.

---

## Evolução 📈

O projeto passou por várias melhorias desde o protótipo inicial. No começo, a interface tinha muitos elementos visuais que distraíam o usuário. Ao longo das revisões, simplificamos o layout, melhoramos o contraste das cores para acessibilidade e refinamos o espaçamento entre os componentes. Esses ajustes foram fundamentais para transformar um simples site em um sistema de gestão profissional e robusto.

