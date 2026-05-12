# 🎓 Construção de Frontend
<<<<<<< HEAD

Repositório destinado às aulas teóricas e às atividades práticas da disciplina.

## 🛠️ Ambiente de Desenvolvimento

Para acompanhar a disciplina, você precisará das seguintes ferramentas:
| Ferramenta | O que é? | Recomendação |
| :--- | :--- | :--- |
| **Editor de código** | Ambiente onde você escreverá seu código (HTML, CSS, JS, JSX). | [Visual Studio Code](https://code.visualstudio.com/) |
=======
Repositório destinado às aulas teóricas e às atividades práticas da disciplina.

## 🛠️ Ambiente de Desenvolvimento
Para acompanhar a disciplina, você precisará das seguintes ferramentas:
| Ferramenta | O que é? | Recomendação |
| :--- | :--- | :--- |
| **Editor de código** | Ambiente onde você escreverá seu código (HTML, CSS, JS, JSX). | [Visual Studio Code](https://code.visualstudio.com/) | 
>>>>>>> b4597c29483c198f8f26f62156d213050e8e9e8d
| **Ambiente de Execução** | Necessário para rodar o servidor de desenvolvimento e gerenciar pacotes (npm). | [Node.js (versão LTS)](https://nodejs.org/pt-br/) |
| **Versionador** | Controla e registra o histórico de alterações do código. | [Git](https://git-scm.com/) |

## 📂 Estrutura de Pastas
<<<<<<< HEAD

Este repositório está organizado da seguinte forma:

=======
Este repositório está organizado da seguinte forma:
>>>>>>> b4597c29483c198f8f26f62156d213050e8e9e8d
- **`aulas/`**: Contém os códigos e exemplos utilizados nas aulas teóricas.
- **`praticas/`**: Contém os códigos das atividades práticas desenvolvidas pelos alunos.

## 🚀 Fluxo de Trabalho Acadêmico
<<<<<<< HEAD

As atividades seguem o fluxo de trabalho baseado no modelo [GitFlow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow).

# 🚀 Guia de Atividades: Frontend com ReactJS

Olá, desenvolvedor(a)! Este repositório utiliza o fluxo de trabalho **GitFlow**. Siga este guia passo a passo para configurar seu ambiente e entregar suas práticas sem erros.

---

## 🛠️ 1. Configuração Inicial (Apenas uma vez)

Antes de começar a codar, você precisa preparar sua "caixa de ferramentas".

### **Passo 1: Criar seu Repositório**

1. No topo desta página, clique no botão verde **`Use this template`** -> **`Create a new repository`**.
2. Escolha um nome para o seu projeto e confirme.
   > _Isso criará uma cópia idêntica na **sua** conta do GitHub._

### **Passo 2: Clonar e Identificar**

Abra o terminal no seu computador e execute:

```bash
# Clone o SEU repositório (troque SEU_USUARIO pelo seu login do GitHub)
git clone [https://github.com/SEU_USUARIO/nome-do-seu-repositorio.git](https://github.com/SEU_USUARIO/nome-do-seu-repositorio.git)

# Entre na pasta do projeto
cd nome-do-seu-repositorio

# Configure sua identidade (essencial para o registro dos commits)
git config --global user.name "Seu Nome Completo"
git config --global user.email "seu-email@exemplo.com"
```

## 🔄 2. Fluxo de Entrega (Repetir para cada Prática)

Siga este ciclo de 5 etapas para garantir que sua atividade seja computada corretamente.

**Etapa 1: Abrir a Issue**
No GitHub, vá na aba **Issues > New Issue** e selecione o template da prática atual. Isso serve como seu "checklist" de tarefas.

**Etapa 2: Criar a Branch de Trabalho**
Nunca trabalhe direto na main. Vamos usar a develop como base:

```bash
# Garanta que está na develop e atualizado
git checkout develop
git pull origin develop

# Crie sua branch de tarefa (ex: pratica-01)
git checkout -b feature/pratica-01
```

**Etapa 3: Desenvolver e Testar**

- Crie seus arquivos HTML/CSS/React na pasta correspondente.
- Abra no navegador e verifique se tudo está funcionando.

**Etapa 4: Enviar para o Nuvem**
Após finalizar a tela, salve suas alterações no Git:

```bash
# Adiciona os arquivos
git add .

# Cria o "ponto de salvamento" com uma mensagem clara
git commit -m "feat: implementada tela de e-commerce da prática 01"

# Envia para o SEU GitHub
git push origin feature/pratica-01
```

**Etapa 5: Solicitar Revisão (Pull Request)**

1. Vá ao seu repositório no GitHub.
2. Clique no botão amarelo Compare & pull request que aparecerá no topo.
3. MUITO IMPORTANTE: Certifique-se que o destino (base) é a branch develop.
4. Clique em Create Pull Request.

## ⚠️ Atenção aos Sinais (CI/CD)

Após abrir o seu **Pull Request**, o GitHub realizará uma verificação automática do seu código. Fique atento aos ícones:

| Ícone | Status       | Significado                                                        | O que fazer?                                                                  |
| :---: | :----------- | :----------------------------------------------------------------- | :---------------------------------------------------------------------------- |
|  ✅   | **Sucesso**  | Tudo certo! Seu código passou nos testes de sintaxe e estrutura.   | Nada. Apenas aguarde o feedback do professor.                                 |
|  ❌   | **Falha**    | Foram encontrados erros de compilação ou de sintaxe (HTML/CSS/JS). | Clique em **"Details"**, leia o erro, corrija no VS Code e dê um novo `push`. |
|  🟡   | **Pendente** | Os testes automáticos ainda estão sendo executados.                | Aguarde alguns segundos até que o ícone mude para verde ou vermelho.          |

---
=======
As atividades seguem o fluxo de trabalho baseado no modelo [GitFlow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow).

### 1. Configuração Inicial (realizar apenas uma vez)
Execute estes passos para preparar seu ambiente:
1. **Criar Repositório**: Clique no botão `Use this template`, no topo da página, para criar uma cópia deste repositório na sua conta GitHub.
2. **Clonar Repositório**: Faça o clone do seu repositorio para a sua máquina local:
```bash
git clone https://github.com/SEU_USUARIO/template-for-frontend-class.git
```
3. **Configurar Identificação**: Certifique-se que seu **nome** e **email** estejam configurados no Git:
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
``` 

### 2. Entrega de Atividades (repetir para cada prática)
Para cada nova atividade, siga o fluxo abaixo:
1. **Crie uma Issue**: Acesse a aba `Issues` no GitHub e clique no botão `New issue` para criar a prática usando o template correspondente.
2. **Crie uma branch**: Acesse a branch `develop` e crie uma nova branch.
3. **Desenvolva e teste**: Implemente os arquivos na pasta da prática e realize os testes.
4. **Envie para o GitHub**: Salve suas alterações e envie para o seu repositório.
5. **Solicite a revisão**: Acesse o seu repositório no GitHub e crie um `Pull Request` direcionando para a sua branch `develop`. 

> ⚠️ **Atenção!**<br>
> Se o check ✅ não aparecer no `Pull Request`, há erros de compilação ou sintaxe que precisam ser corrigidos.

### 3. **Instale as dependências e rode o projeto:** Ao acessar a pasta de um projeto React, instale os pacotes necessários e inicie o servidor local:
```bash
npm install
npm run dev   # ou npm start, dependendo de como o projeto foi criado
```

### 4. **Desenvolva e teste:** Implemente os arquivos solicitados na pasta da prática e verifique no navegador se tudo está funcionando corretamente.

### 5. **Envie para o GitHub:** Salve suas alterações, crie os commits e envie para o seu repositório:
```bash
git add .
git commit -m "Feat: Finaliza a implementação da Prática XX"
git push origin feature/praticaXX
```

### 6. Feedback e Avaliação
Envie o link do seu `Pull Request` pela plataforma de ensino da instituição. A avaliação do código será feita usando o sistema de **Code Review**:
- **Approve (Aprovado):** Seu código cumpre os requisitos solicitados.
- **Request Changes (Solicitação de Ajustes):** Foram encontrados pontos de melhoria, bugs ou erros de sintaxe. Você deve corrigir na sua máquina, fazer um novo commit+push na mesma branch e avisar no comentário do PR para uma nova revisão.

>>>>>>> b4597c29483c198f8f26f62156d213050e8e9e8d
