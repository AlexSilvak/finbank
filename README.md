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

- Cadastro de despesas fixas e variáveis  
- Classificação por categorias (moradia, alimentação, transporte, lazer, etc.)  
- Alertas de gastos excessivos por categoria  
- Registro de despesas parceladas
  
<img width="1914" height="973" alt="image" src="https://github.com/user-attachments/assets/4e6b7931-c06e-4c07-a69b-33f65c839267" />
<img width="1917" height="968" alt="image" src="https://github.com/user-attachments/assets/d981f07f-94d3-49eb-b4ad-367b6c33cbb7" />

 

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
