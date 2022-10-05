FROM node:14-alpine as build
WORKDIR /app
COPY package.json .
ENV NODE_OPTIONS=--max_old_space_size=2048
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html