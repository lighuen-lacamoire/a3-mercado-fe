# Dockerfile
# ARG NODE_VERSION=20.19.0
ARG NODE_VERSION=latest

# Configuramos la version de node para construir la app
FROM node:${NODE_VERSION} AS base

FROM base AS builder


# Configuramos el directory en el container donde haremos todo
WORKDIR /app

# Exponemos el puerto 8080 para la app
#EXPOSE 8080

# Copiamos los archivos relacionados para el mecanimos de cache de docker
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .env.docker* ./

# Instalamos las dependencias
RUN npm install --legacy-peer-deps

# Copiamos el resto del contenido al container
COPY . .

ARG ENV_VARIABLE
ENV ENV_VARIABLE=${ENV_VARIABLE}

# Hacemos la construcción (generara contenido en app/build)
RUN npm run build:docker

FROM base AS runner

# Nos paramos en el directorio raiz
WORKDIR /app

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build .
COPY --from=builder /app/public ./public
COPY --from=builder /app/.env.docker ./.env.docker

ENV VITE_PORT=3000
EXPOSE 3000

CMD [ "npm", "run", "start:docker" ]
