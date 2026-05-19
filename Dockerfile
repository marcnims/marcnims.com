FROM nginx:alpine
COPY . /usr/share/nginx/html
RUN chmod -R a+r /usr/share/nginx/html
EXPOSE 80
