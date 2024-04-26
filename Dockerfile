FROM node:lts-alpine3.19
ARG PROD_ENV=""
WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm install
COPY . .
RUN printf "$PROD_ENV" >> .env
RUN npm run build
EXPOSE 3000
CMD [ "npm","start" ]
