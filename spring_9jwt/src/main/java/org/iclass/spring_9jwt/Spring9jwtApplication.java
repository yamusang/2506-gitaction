package org.iclass.spring_9jwt;

import java.util.TimeZone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Spring9jwtApplication {

	public static void main(String[] args) {
		TimeZone.setDefault(TimeZone.getTimeZone("Asia/Seoul")); // JVM 기본 타임존

		SpringApplication.run(Spring9jwtApplication.class, args);
	}

}
