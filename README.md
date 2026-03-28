# Portfólio Full‑Stack

🔗 **Deploy:** [https://portifolio-fullstack-ivory.vercel.app/](https://portifolio-fullstack-ivory.vercel.app/)

📦 **Repositório:** [https://github.com/felipedevpips-max/portifolio-fullstack](https://github.com/felipedevpips-max/portifolio-fullstack)

Projeto full‑stack desenvolvido para servir como **portfólio profissional**, integrando **backend (API)** e **frontend** em um único ambiente orquestrado com **Docker**. O objetivo é demonstrar organização de código, boas práticas, consumo de API, e deploy local simplificado.

---

## 🧩 Visão Geral

> 📸 **Preview do Projeto (Deploy em Produção)**
>
><img width="1881" height="1260" alt="home" src="https://github.com/user-attachments/assets/ddedcb15-bea3-4d4b-9d12-9d67ac2284db" />


Este é um **portfólio full‑stack em produção**, desenvolvido para apresentar projetos reais, stack técnica e informações profissionais de forma clara, moderna e performática.

A aplicação consome uma **API própria**, organizada em rotas bem definidas, e é estruturada para facilitar manutenção, evolução e deploy.

---

## 🛠️ Tecnologias Utilizadas

> 📸 **Imagem da Stack / Tecnologias**
>
>
><img width="1875" height="1256" alt="tecnologias" src="https://github.com/user-attachments/assets/ca8c19d3-1e0f-49ce-a3cc-7ce6965a561e" />



### Backend

* Node.js
* Express
* CORS
* Dotenv
* Resend (envio de emails transacionais)

### Frontend

* React
* Vite
* CSS Modules
* Consumo de API via HTTP

### Infraestrutura

* Docker
* Docker Compose

---

## 📁 Estrutura do Projeto

> 📸 **Imagem da Estrutura do Projeto**
> 
><img width="410" height="899" alt="estrutura" src="https://github.com/user-attachments/assets/f1fec8c9-2510-4d33-b26e-635cf463705b" />

---

## 🚀 Como Executar o Projeto
> 📸 **Imagem de Execução (Docker / Terminal)**
> 
><img width="1319" height="1286" alt="docker" src="https://github.com/user-attachments/assets/51e26ed1-4563-4534-9e40-3696fac54f3d" />


### Pré‑requisitos

* Docker
* Docker Compose

### Passos

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
```

2. Acesse a pasta do projeto:

```bash
cd api-docker-portifolio
```

3. Suba os containers:

```bash
docker-compose up --build
```

4. Acesse no navegador:

* Frontend: `http://localhost:5173`
* Backend (API): `http://localhost:3000`

---

## 🔗 Endpoints Principais (API)

> 📸 **Imagem da API em Execução**
>
><img width="1605" height="963" alt="endpoint" src="https://github.com/user-attachments/assets/387bd05e-8de0-409f-8aa3-7f916db29d8e" />


| Método | Rota          | Descrição              |
| ------ | ------------- | ---------------------- |
| GET    | /api/profile  | Dados do perfil        |
| GET    | /api/projects | Lista de projetos      |
| GET    | /api/techs    | Tecnologias utilizadas |
| POST   | /api/contact  | Envio de mensagem      |

---

## ✉️ Funcionalidade de Contato

> 📸 **Imagem do Formulário de Contato**
>
> *Print do formulário no frontend ou do email recebido.*
>
><img width="1871" height="1059" alt="formulario" src="https://github.com/user-attachments/assets/7219e5ea-d591-40d1-b72a-5907816ad0e7" />



O envio de mensagens é feito utilizando o Resend, uma plataforma moderna para emails transacionais, garantindo entrega confiável, boa performance e integração simples com Node.js.

A API recebe os dados do formulário no frontend e dispara o email através do serviço Resend, mantendo as chaves sensíveis protegidas via variáveis de ambiente.

Variáveis esperadas:

```
RESEND_API_KEY=
RESEND_FROM_EMAIL=
RESEND_TO_EMAIL=
```

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com foco direto em **avaliação técnica e recrutamento**, evidenciando:

* Arquitetura **full‑stack bem definida**
* Separação clara entre frontend e backend
* Consumo real de API
* Padronização de ambiente com Docker
* Boas práticas de organização de código
* Interface moderna e responsiva

O deploy ativo permite que o projeto seja avaliado em **ambiente real**, não apenas em código.

---

## 📌 Melhorias Futuras

* Autenticação administrativa
* Painel para gerenciar projetos
* Deploy em ambiente cloud
* Testes automatizados

---

## 👤 Autor

**Felipe**
Desenvolvedor Full‑Stack

🔗 GitHub: [https://github.com/felipedevpips-max](https://github.com/felipedevpips-max)

🔗 Portfólio Online: [https://portifolio-fullstack-ivory.vercel.app/](https://portifolio-fullstack-ivory.vercel.app/)
