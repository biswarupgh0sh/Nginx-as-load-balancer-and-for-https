FROM node:latest

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5000

ENTRYPOINT ["node"]

CMD ["index.js"]