# build frontend
FROM node:20 AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package.json ./
COPY frontend/package-lock.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# build backend
FROM maven:3.9.6-eclipse-temurin-17 AS backend-builder
WORKDIR /app/backend
COPY backend/pom.xml .
RUN mvn dependency:go-offline
COPY backend/ ./
COPY --from=frontend-builder /app/frontend/dist/ src/main/resources/static/
RUN mvn clean package

# run the application
FROM eclipse-temurin:17-jre AS runtime
WORKDIR /app
COPY --from=backend-builder /app/backend/target/*.jar app.jar
EXPOSE 8080
CMD ["java","-jar","app.jar"]
