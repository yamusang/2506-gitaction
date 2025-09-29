# ===== 빌드 단계 =====
FROM gradle:8.5-jdk21 AS builder
WORKDIR /app

# Gradle 캐시를 위해 먼저 build.gradle, settings.gradle만 복사
COPY build.gradle settings.gradle ./ 

# 소스 전체 복사 후 실제 빌드
COPY . .
RUN ./gradlew clean build -x test

# ===== 런타임 단계 =====
FROM openjdk:21-jdk
WORKDIR /app

# 빌드 결과 jar 복사
COPY --from=builder /app/build/libs/*.jar spring_9jwt.jar

# 포트 노출
EXPOSE 8080

# 앱 실행
ENTRYPOINT ["java","-jar","spring_9jwt.jar"]

