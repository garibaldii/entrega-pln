# AWS Helper Agent 🤖☁️ + PLN Engine 🚀

Este projeto é um ecossistema de IA . Ele combina a potência do **Google ADK** com um **Microserviço de PLN customizado** para garantir que a busca e o processamento de termos técnicos. Funcionando de forma semelhante ao modelo RAG

---

## 🏗️ Arquitetura do Sistema

O sistema é dividido em dois containers principais orquestrados via Docker:

1.  **Agent (Python/ADK):** O "cérebro" que conversa com o usuário, usa o Gemini 2.5 Flash e decide quando buscar informações.
2.  **PLN Engine (Node.js):** O "músculo" que processa o texto, remove stopwords, tokeniza e realiza buscas otimizadas em catálogos ou documentação.

---

## 🛠️ Tecnologias & Ferramentas

### Agente de IA
- **Framework:** Google ADK (`llm_agent`)
- **Modelo:** `gemini-2.5-flash`
- **Interface:** ADK Web (com suporte a transcrição de áudio)

### Engine de PLN
- **Runtime:** Node.js 18
- **Processamento:** Bibliotecas `natural` e `stopword`
- **Busca:** Algoritmo de filtragem de catálogo local

---

## 🚀 Como Rodar (Modo Docker)

Para subir o sistema completo (Agente + API de PLN), use o comando na raiz:

```bash
docker-compose up --build
