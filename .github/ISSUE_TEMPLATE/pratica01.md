---
<<<<<<< HEAD
name: "🚀 Prática 01: Estrutura Básica React + Vite"
about: "Template para a primeira prática de construção de frontend."
title: "[Prática 01] – Estrutura Básica de um Programa em ReactJS"
labels: ["prática-01", "react"]
assignees: ""
---

## 🎯 Objetivo

Nesta prática, você irá:

- Criar seu primeiro projeto React utilizando a ferramenta **Vite**;
- Compreender a estrutura de pastas e arquivos de um projeto moderno;
- Manipular o servidor de desenvolvimento local;
- Realizar sua primeira alteração em um componente (`App.jsx`).

---

## 📝 Passo a Passo da Atividade

### 1️⃣ Preparação do Ambiente

Abra o VS Code na pasta raiz do seu repositório e execute no terminal:

```bash
# Garanta que está na branch correta
git checkout develop
git pull origin develop

# Crie a branch da tarefa
git checkout -b feature/pratica01
```

### 2️⃣ Criando o Projeto com Vite

- Navegue até a pasta de práticas e gere o scaffold do projeto:

```bash
cd praticas

# Comando para criar o projeto
npm create vite@latest pratica01 -- --template react
```

### 3️⃣ Instalação e Execução

- Agora, entre na pasta criada, instale as dependências e rode o projeto:

```bash
cd pratica01
npm install
npm run dev
```

💡 **Dica:** Pressione `Ctrl + Clique` no link `http://localhost:5173/` no terminal para abrir no navegador.

### 4️⃣ Modificação do Componente

1. No VS Code, abra `praticas/pratica01/src/App`.jsx.
2. Altere o conteúdo da tag `<h1>` ou de um parágrafo para: "Olá, Mundo! Este é meu primeiro projeto React com Vite.".
3. Salve o arquivo e observe a atualização instantânea no navegador (Hot Module Replacement).

### 📤 Entrega (Fluxo Git)

Após validar a alteração no navegador, siga estes comandos rigorosamente:

1. Parar o servidor: Pressione `Ctrl + C` no terminal.
2. Voltar para a raiz do repositório:

```bash
cd ../..
```

3. Enviar para o GitHub:

```bash
git add .
git commit -m "feat: estrutura inicial react via vite na pratica 01"
git push origin feature/pratica01
```

### ✅ Checklist de Conclusão

- [ ] Criei o Pull Request direcionado para a minha branch `develop`.
- [ ] O Check Verde (✅) apareceu no Pull Request (sem erros de sintaxe).
- [ ] No comentário do PR, escrevi: `Fecha #ID` (Substitua ID pelo número desta Issue).
- [ ] A estrutura de pastas está conforme o esperado:

```plantext
praticas/
└── pratica01/
    ├── src/
    │   ├── App.jsx
    │   └── main.jsx
=======
name: "Prática 01"
about: "Template para criar a issue da pratica01"
title: "[Prática 01] – Estrutura Básica de um Programa em ReactJS"
labels: ["pratica01", "react"]
---

## 🎯 Objetivo
Nesta prática, você irá:
- Criar o seu primeiro projeto ReactJS utilizando a ferramenta de *scaffolding* Vite;
- Compreender a estrutura básica de pastas e arquivos de um projeto React;
- Iniciar o servidor de desenvolvimento local e visualizar a aplicação no navegador;
- Realizar sua primeira modificação em um componente (`App.jsx`).

## 📝 Instruções da Atividade

**1️⃣ Preparação do ambiente**
1. Abra o **Visual Studio Code** na pasta raiz do seu repositório.
2. Abra um terminal e certifique-se de que está na branch `develop`:
```bash
git checkout develop
```
3. Crie e alterne para a branch dedicada a esta prática:

```bash
git checkout -b feature/pratica01
```
2️⃣ Criação do Projeto React
1. No terminal do VSCode, acesse a pasta praticas:
```bash
cd praticas
```
2. Crie o projeto React utilizando o Vite (nomeie a pasta como `pratica01`):
```bash
npm create vite@latest pratica01 -- --template react
```
3️⃣ Instalação e Execução
1.  Acesse a pasta do projeto recém-criado:
```bash
cd pratica01
```
2. Instale as dependências necessárias do Node.js:
```bash
npm install
```
3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
4. Pressione `Ctrl + Clique` no link fornecido no terminal (geralmente `http://localhost:5173/`) para abrir a aplicação no navegador.
5. Volte ao VSCode, acesse o arquivo `src/App.jsx` e altere o texto principal para "Olá, Mundo! Este é meu primeiro projeto React.". Salve e veja a mudança imediata no navegador.

📤 Entrega da Prática
1. No terminal do VSCode, pare o servidor pressionando Ctrl + C.
2. Volte para a pasta raiz do repositório:
```bash
cd ../..
```
3. Adicione os arquivos criados ao controle de versão (o Vite já configura o `.gitignore` para ignorar a pesada pasta `node_modules` automaticamente):
```bash
git add .
```
4. Grave suas alterações com um `commit` semântico:
```bash
git commit -m "Feat: Cria estrutura básica do projeto React na Prática 01"
```
5. Envie suas alterações para o GitHub:
```bash
git push origin feature/pratica01
```
6. No GitHub, clique no botão **Compare & pull request.**
7. **Importante:** Certifique-se de que o **base repository** é o seu repositório e a **base branch **é a `develop`.
8. Na descrição, escreva: `Nesta prática, implementei a estrutura básica de um programa em ReactJS. Fecha #ID `(substitua ID pelo número desta Issue).
9. Clique em **Create pull request** e envie o link do PR na plataforma de ensino para o professor.

📂 Estrutura Final Esperada
- Seu repositório deverá apresentar a seguinte organização dentro da pasta da prática:
```plan

praticas/
└── pratica01/
    ├── public/
    ├── src/
    │   ├── App.css
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
>>>>>>> b4597c29483c198f8f26f62156d213050e8e9e8d
    ├── index.html
    ├── package.json
    └── vite.config.js
```
<<<<<<< HEAD

_Dúvidas? Marque o professor com um comentário aqui nesta Issue!_
=======
### O que mudou e por quê?
* **Criação com Vite (`npm create vite@latest`)**: Inseri a criação do boilerplate automaticamente. Isso evita que o aluno precise criar arquivos como `package.json` ou configurar o Webpack manualmente na primeira aula.
* **Instalação e Servidor (`npm install` e `npm run dev`)**: Substituí os comandos de compilação antigos pelas chamadas reais de execução de um projeto Node/React.
* **Ajuste de Diretórios (`cd ../..`)**: Como o aluno precisa entrar na pasta `praticas/pratica01` para rodar o projeto, adicionei o comando para ele voltar à raiz do repositório antes de rodar o `git add .`, garantindo que o commit seja feito no nível correto do repositório Git.
>>>>>>> b4597c29483c198f8f26f62156d213050e8e9e8d
