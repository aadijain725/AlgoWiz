package com.example.algorithms;

import com.example.algorithms.quiz.Quiz;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

// Needed to enable CORS
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class AlgorithmsApplication {

	public static void main(String[] args) {
		SpringApplication.run(AlgorithmsApplication.class, args);
	}

	// This bean allows for CORS requests
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurerAdapter() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				// tell it to allow cors for every route
				registry.addMapping("/**")
						// Enable this when run locally
						// TODO: this may need to change when Live
						.allowedOrigins("http://localhost:3000", "https://aadijain725.github.io")
						// Needed for REACT fetch requests CORS headers
						.allowCredentials(true);
			}
		};
	}
}
