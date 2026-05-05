# 📌 Marie  Claire

> Sistema web full-stack para gerenciar um negócio de doceria, integrando controle administrativo interno com uma vitrine digital externa.

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![Next.js](https://img.shields.io/badge/Next.js-16+-black?logo=next.js)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15+-336791?logo=postgresql)
![License](https://img.shields.io/badge/License-MIT-white)

---

## 📋 Índice

- [Sobre](#-sobre)
- [Funcionalidades](#-funcionalidades)
- [Atores do Sistema](#-atores-do-sistema)
- [Arquitetura](#-arquitetura)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Começar](#-como-começar)
- [Requisitos](#-requisitos)
- [Configuração](#-configuração)

---

## 📖 Sobre

**Marie Claire** é uma solução completa para docerias que combina:

- **Painel Administrativo**: Gestão total de ingredientes, vendas e métricas
- **Catálogo Digital**: Vitrine pública para clientes visualizarem e encomendarem produtos
- **Dashboard de Métricas**: Análise de desempenho, lucro e custos operacionais

---

## 🚀 Funcionalidades

### 📦 Gestão de Estoque e Insumos
- Cadastro e controle de ingredientes
- Monitoramento de custo unitário
- Acompanhamento da disponibilidade de insumos

### 💰 Controle de Vendas
- Registro detalhado de todas as transações
- Histórico completo de vendas realizadas
- Cruzamento de dados de vendas com custos de ingredientes

### 🛍️ Catálogo Público
- Adição e atualização de novos produtos
- Vitrine digital com fotos e descrições
- Área institucional (Nossa História, Essência, Quem Somos)
- Exibição de avaliações de clientes
- Políticas da loja (Contato, Troca e Devoluções)
- Integração de pedidos direto via WhatsApp

### 📊 Dashboard e Métricas
- Visão geral do desempenho do negócio
- Gráficos e indicadores de vendas
- Análise de lucro e custos operacionais

---

## 🎯 Objetivos

| Objetivo | Descrição |
|----------|-----------|
| **Gerenciar Ingredientes** | Controle absoluto sobre custos e disponibilidade de insumos |
| **Registrar Vendas** | Fluxo de caixa documentado de forma segura e acessível |
| **Visualizar Métricas** | Dashboard inteligente para embasar decisões de negócio |
| **Publicar Catálogo** | Facilitar contato com clientes e viabilizar encomendas |

---

## 👥 Atores do Sistema

### 1. Administradora (Gerenciadora)
-  Acesso administrativo completo e protegido
-  Gerencia estoque de ingredientes
-  Atualiza catálogo de produtos
-  Registra e analisa histórico de vendas
-  Acesso exclusivo ao dashboard de métricas

### 2. Cliente (Consumidor)
-  Acesso público focado na experiência de compra
-  Navega pelo catálogo de doces
-  Conhece a essência/história da marca
-  Consulta políticas de devolução e contato
-  Realiza encomendas via WhatsApp

---

## 🏗️ Arquitetura

```
┌─────────────────────────────────────────┐
│         CLIENTE (Browser)               │
├─────────────────────────────────────────┤
│     FRONTEND (Next.js + React)          │
│  ├─ SSR (SEO otimizado)                 │
│  └─ Client-Side (Interatividade)        │
├─────────────────────────────────────────┤
│      BACKEND (???)                      │
│                                         │
├─────────────────────────────────────────┤
│   BANCO DE DADOS (PostgreSQL)           │
│  └─ Dados Relacionais                   │
└─────────────────────────────────────────┘
```
---

## 🎨 Design (Figma)

O layout e a identidade visual do projeto foram planejados no Figma.

🔗 Acesse o protótipo:
https://www.figma.com/design/8mbmB61vOrwR9KyMuCc4za/Marie-Claire-%E2%80%94-UI-Design-System-e-Telas?node-id=44-2&t=dtbVRQc1RuCk8gSE-1

- Telas do catálogo e contato
- Componentes reutilizáveis (Header, Footer, Cards)
- Sistema de cores e tipografia
- Estrutura das páginas públicas e administrativas

## 🛠️ Tecnologias

### Frontend
- **Next.js 16+** - Framework React com SSR/SSG
- **React** - Biblioteca de UI
- **CSS** - Estilização

### Backend
- ???

### Banco de Dados
- **PostgreSQL** - Banco de dados relacional

---

## 📁 Estrutura do Projeto
```bash
marie-claire/
│
├── src/
│   ├── app/               
│   │   ├── (admin)/       
│   │   └── (public)/      
│   │ 
│   ├── components/         
│   ├── lib/          
│   ├── services/      
│   └── styles/             
│
├── docs/
└── README.md
```
---

## ⚙️ Como Começar

### Requisitos

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** 9+ ou **yarn**
- **PostgreSQL** 15+ ([Download](https://www.postgresql.org/))
- **Git** ([Download](https://git-scm.com/))

### Configuração

#### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/demicouto/MarieClaire-Doceria.git
cd marie-claire
```

#### 2️⃣ Instalar dependências

```bash
npm install
```

#### 3️⃣ Configurar banco de dados

Crie um banco de dados PostgreSQL:




## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 👨‍💼 Suporte

Para dúvidas ou problemas, entre em contato ou abra uma issue no repositório.

**Em desenvolvimento com ❤️ para Marie Claire Doceria**
