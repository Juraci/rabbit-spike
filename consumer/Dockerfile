FROM node:6.9.4

ENV HOME=/home/app

COPY package.json $HOME/pomodorify-backend/

WORKDIR $HOME/pomodorify-backend
RUN npm cache clean && npm install --silent --progress=false

COPY . $HOME/pomodorify-backend

CMD ["npm", "start"]
