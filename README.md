# 💰 Sistema Financeiro Pessoal — FinBank

## 🧾 Visão Geral

**FinBank** é um sistema de controle financeiro pessoal inspirado nos modelos de gestão utilizados por bancos e fintechs. Ele oferece uma visão clara e detalhada das finanças individuais, permitindo o acompanhamento de receitas, despesas, metas, categorias de gastos e análises inteligentes para tomada de decisão.

---

## 🎯 Objetivos do Sistema

- Gerenciar entradas e saídas de dinheiro com precisão  
- Categorizar gastos para identificar padrões de consumo  
- Estabelecer metas financeiras mensais e anuais  
- Gerar relatórios detalhados e gráficos de desempenho  
- Simular cenários de economia e investimentos  
- Garantir segurança e privacidade dos dados  

---

## 🛠️ Tecnologias Utilizadas

- **Backend:** NestJS + TypeScript  
- **Frontend:** Next.js + React  
- **Banco de Dados:** MongoDB | PostgreSQL  
- **Autenticação:** JWT + Criptografia AES  
- **Containerização:** Docker  
- **Relatórios:** Recharts + PDFKit  

---

## 🧩 Funcionalidades Principais

### 📥 Controle de Receitas

- Cadastro de fontes de renda (salário, freelance, dividendos, etc.)  
- Recorrência mensal ou pontual  
- Histórico de entradas por período  

### 📤 Controle de Despesas

  
<img width="1913" height="1026" alt="image" src="https://github.com/user-attachments/assets/3dcaf328-a1b2-4624-b9d6-fcb320b05899" />


<img width="1905" height="971" alt="image" src="https://github.com/user-attachments/assets/7e19f854-7cf4-4995-8c3a-7028831c8ac1" />


- Cadastro de despesas fixas e variáveis  
- Classificação por categorias (moradia, alimentação, transporte, lazer, etc.)  
- Alertas de gastos excessivos por categoria  
- Registro de despesas parceladas


### 📊 Tema
 - Dark / Light
 <img width="1912" height="1070" alt="image" src="https://github.com/user-attachments/assets/1bc3fec3-0f09-437c-9406-fb38f57bd6fb" />


### 📊 Relatórios e Dashboards

- Gráfico de pizza por categoria de gasto  
- Evolução mensal de saldo  
- Comparativo entre metas e gastos reais  
- Exportação de relatórios em PDF  

### 🎯 Planejamento Financeiro

- Definição de metas mensais e anuais  
 

### 🔐 Segurança

- Autenticação com JWT  
- Criptografia de dados sensíveis (AES-256)  
- Backup automático semanal  
- Controle de sessão e logout forçado  

---


## 📦 Documentação com Swagger UI
<img width="1894" height="933" alt="image" src="https://github.com/user-attachments/assets/9fde1797-fd88-46fb-91ce-3e416b687341" />


###  Ferramentas de Teste 

Jest · Delightful JavaScript Testing
https://jestjs.io/
<img width="1903" height="907" alt="image" src="https://github.com/user-attachments/assets/a921194e-dc50-4219-a74e-13398ccb5ec5" />
---
Vitest
Next Generation Testing Framework
https://vitest.dev/guide/

<img width="1901" height="851" alt="image" src="https://github.com/user-attachments/assets/9b8dd5d8-22e7-4288-9fff-48dd5cde8299" />








## 📦 Estrutura do projeto

```plaintext
finbank/
├── backend/                # API NestJS
│   ├── src/                # Código fonte do NestJS
│   ├── test/               # Testes automatizados
│   ├── .env                # Variáveis de ambiente
│   ├── Dockerfile          # Imagem da API
│   └── package.json        # Dependências e scripts
├── frontend-nextjs/        # Aplicação Next.js
│   ├── app/                # Páginas e componentes
│   └── package.json
├── docker-compose.yml      # Orquestração de containers
└── README.md
