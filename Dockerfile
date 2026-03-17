# Estágio 1: Construção (Build)
FROM node:20-slim AS build

WORKDIR /app

# Copia arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código fonte
COPY . .

# Gera a build de produção (os arquivos irão para a pasta /dist por padrão no Vite)
RUN npm run build

# Estágio 2: Servidor de Produção (Nginx)
FROM nginx:stable-alpine

# Copia os arquivos compilados do estágio de build para o diretório do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta 80 para o Easypanel
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]