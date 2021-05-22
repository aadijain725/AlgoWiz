package com.example.algorithms;

import com.example.algorithms.quiz.Quiz;
import com.example.algorithms.quiz.QuizRepository;
import com.example.algorithms.quiz.QuizService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class AlgorithmsApplicationTests {

	@Test
	void contextLoads() {
	}

	@Autowired
	private QuizRepository quizRepository;

	@Test
	public void testQuiz() {

		String quizID = "graph_dijkstra_quiz";
		QuizService qs = new QuizService(quizRepository);

		List<Quiz> lst1 =  quizRepository.findAllByQuizId(quizID);
		assertEquals(lst1.size(), 3);

		Quiz res = lst1.get(0);
		assertEquals(res.getQuizId(), quizID);

	}

}
