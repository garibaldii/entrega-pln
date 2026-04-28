# 1. Usar uma imagem estável do Node.js
FROM node:18-slim

# 2. Criar e definir o diretório de trabalho
WORKDIR /app

# 3. Copiar os arquivos de dependências primeiro (otimiza o cache do Docker)
COPY package*.json ./

# 4. Instalar as dependências do projeto
# Usamos --only=production para manter a imagem leve, 
# mas se tiver devDependencies necessárias para rodar, use apenas npm install
RUN npm install

# 5. Copiar o restante dos arquivos do projeto
COPY . .

# 6. Expor a porta que o seu servidor Express usa (definida no server.js)
EXPOSE 3000

# 7. Comando para iniciar o servidor
CMD ["node", "server.js"]