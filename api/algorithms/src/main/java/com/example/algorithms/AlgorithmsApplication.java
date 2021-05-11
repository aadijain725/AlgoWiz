package com.example.algorithms;

import com.example.algorithms.quiz.Quiz;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class AlgorithmsApplication {

	public static void main(String[] args) {
		SpringApplication.run(AlgorithmsApplication.class, args);
	}


}
