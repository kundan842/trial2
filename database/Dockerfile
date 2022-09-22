FROM mysql
ENV MYSQL_ROOT_PASSWORD "kundan842"
ENV MYSQL_DATABASE "projecttrial"
COPY docker-entrypoint-initdb.d
COPY my.cnf /etc/mysql/my.cnf
EXPOSE 3306 