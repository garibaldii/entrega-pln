# Usando uma imagem leve do Python
FROM python:3.10-slim

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Instala dependências do sistema necessárias para áudio/network (opcional mas recomendado)
RUN apt-get update && apt-get install -y \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copia o arquivo de requisitos
COPY requirements.txt .

# Instala as dependências (incluindo a correção do pydantic e adk)
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Copia o restante do código do agente
COPY . .

# Expõe a porta que o 'adk web' usa por padrão
EXPOSE 8000

# Comando para rodar o agente no modo web
# Usamos 0.0.0.0 para que o container aceite conexões externas
CMD ["adk", "web", "--port", "8000", "--host", "0.0.0.0"]