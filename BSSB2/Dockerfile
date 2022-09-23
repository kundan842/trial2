FROM openjdk:8-alpine
RUN mvn clean install
add target/*.jar BSSB-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","BSSB-0.0.1-SNAPSHOT.jar"]
