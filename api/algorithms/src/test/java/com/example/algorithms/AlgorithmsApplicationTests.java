package com.example.algorithms;

import com.example.algorithms.Homepage.HomepageRepository;
import com.example.algorithms.Homepage.HomepageTopics;
import com.example.algorithms.LessonPage.Lesson;
import com.example.algorithms.LessonPage.LessonRepository;
import com.example.algorithms.quiz.Quiz;
import com.example.algorithms.quiz.QuizRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

/*
AlgorithmsApplicationTests class tests for homepage, lesson page and quiz page.
Testing for functionalities of each repository and make sure they are returning
the correct output.
 */
@DataJpaTest
class AlgorithmsApplicationTests {

	// Initialize QuizRepository
	@Autowired
	private QuizRepository quizTestRepository;

	// Initialize HomepageRepository
	@Autowired
	private HomepageRepository homepageTestRepository;

	// Initialize HomepageRepository
	@Autowired
	private LessonRepository lessonTestRepository;

	// Deletes all the elements from repositories
	// and resets the state of the repositories
	// after each test is executed.
	@AfterEach
	void tearDown() {
		quizTestRepository.deleteAll();
		homepageTestRepository.deleteAll();
		lessonTestRepository.deleteAll();
	}


	////////////////////////////////////////////////////////////////////////////////
	/////////////////////// Quiz Repository Tests //////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////
	@Test
	public void testCreateNewQuizObject() {
		Quiz q1 = new Quiz(
				"qid1",
				"lid1",
				"title1",
				"question1",
				"q1op1",
				"q1op2",
				"q1op3",
				0,
				"q1f1",
				"q1f2",
				"q1f3"
		);
		assertNotNull(q1);
	}

	@Test
	public void testNumberOfElementsInEmptyQuizRepository() {
		long expectedItemCount = quizTestRepository.count();
		assertEquals(expectedItemCount, 0);
	}

	@Test
	public void testNumberOfElementsInNonEmptyQuizRepository() {
		Quiz q1 = new Quiz(
				"qid1",
				"lid1",
				"topic1",
				"topic1 question1",
				"question1 option1",
				"question1 option2",
				"question1 option3",
				1,
				"question1 feedback1",
				"question1 feedback2",
				"question1 feedback3"
		);

		Quiz q2 = new Quiz(
				"qid2",
				"lid2",
				"topic2",
				"topic2 question1",
				"question1 option1",
				"question1 option2",
				"question1 option3",
				1,
				"question1 feedback1",
				"question1 feedback2",
				"question1 feedback3"
		);

		quizTestRepository.saveAll(List.of(q1, q2));
		long expectedItemCount = quizTestRepository.count();
		assertEquals(expectedItemCount, 2);
	}

	@Test
	public void testFindByQuizIdExists() {
		Quiz arrayQuestion1 = new Quiz(
				"ds_array_quiz",
				"ds_array_lesson",
				"Data Structures",
				"array question1",
				"array question1 option1",
				"array question1 option2",
				"array question1 option3",
				0,
				"array question1 feedback1",
				"array question1 feedback2",
				"array question1 feedback3"
		);

		Quiz hashTableQuestion1 = new Quiz(
				"ds_hashTable_quiz",
				"ds_hashTable_lesson",
				"Data Structures",
				"Hash Table question1",
				"Hash Table question1 option1",
				"Hash Table question1 option2",
				"Hash Table question1 option3",
				0,
				"Hash Table question1 feedback1",
				"Hash Table question1 feedback2",
				"Hash Table question1 feedback3"
		);

		Quiz arrayQuestion2 = new Quiz(
				"ds_array_quiz",
				"ds_array_lesson",
				"Data Structures",
				"array question2",
				"array question2 option1",
				"array question2 option2",
				"array question2 option3",
				0,
				"array question2 feedback1",
				"array question2 feedback2",
				"array question2 feedback3"
		);
		quizTestRepository.saveAll(List.of(arrayQuestion1, hashTableQuestion1, arrayQuestion2));

		List<Quiz> actual = quizTestRepository.findAllByQuizId("ds_array_quiz");
		List<Quiz> expected = List.of(arrayQuestion1, arrayQuestion2);

		assertEquals(expected, actual);
	}

	@Test
	public void testFindByQuizIdDoesNotExist() {
		Quiz q = new Quiz(
				"qid1",
				"lid1",
				"topic1",
				"topic1 question1",
				"question1 option1",
				"question1 option2",
				"question1 option3",
				1,
				"question1 feedback1",
				"question1 feedback2",
				"question1 feedback3"
		);
		quizTestRepository.save(q);

		List<Quiz> actual = quizTestRepository.findAllByQuizId("random_quiz_id");
		List<Quiz> expected = new ArrayList<>();

		assertEquals(expected, actual);
	}


	////////////////////////////////////////////////////////////////////////////////
	///////////////////// Homepage Repository Tests ////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////

	@Test
	public void testCreateHomepageTopic() {
		HomepageTopics hp = new HomepageTopics(
				"exTopic",
				"exQuizId",
				"exLessonId",
				"exAlgoName",
				"exHpDescrption",
				"https://www.exmapleUrl.com"
		);
		assertNotNull(hp);
	}

	@Test
	public void testNumberOfElementsInEmptyHomepageRepository() {
		long expectedItemCount = homepageTestRepository.count();
		assertEquals(expectedItemCount, 0);
	}

	@Test
	public void testNumberOfElementsInNonEmptyHomepageRepository() {
		HomepageTopics hp1 = new HomepageTopics(
				"exTopic1",
				"exQuizId1",
				"exLessonId1",
				"exAlgoName1",
				"exHpDescription1",
				"https://www.exampleUrl1.com"
		);

		HomepageTopics hp2 = new HomepageTopics(
				"exTopic2",
				"exQuizId2",
				"exLessonId2",
				"exAlgoName2",
				"exHpDescription2",
				"https://www.exampleUrl2.com"
		);

		HomepageTopics hp3 = new HomepageTopics(
				"exTopic3",
				"exQuizId3",
				"exLessonId3",
				"exAlgoName3",
				"exHpDescription3",
				"https://www.exampleUrl3.com"
		);
		homepageTestRepository.saveAll(List.of(hp1, hp2, hp3));

		long expectedItemCount = homepageTestRepository.count();
		assertEquals(expectedItemCount, 3);
	}


	//////////////////////////////////////////////////////////////////////////////
	///////////////////// Lesson Repository Tests ////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////

	// test empty lesson data
	@Test
	public void testElementsInLessonRepository() {
		long expectedItemCount = lessonTestRepository.count();
		assertEquals(expectedItemCount, 0);
	}

	// test lesson page not null
	@Test
	public void testLessonIdNotNull() {
		Lesson lesson = new Lesson(
				"graph_dijkstra_lesson",
				"graph_dijkstra_quiz",
				"Dijkstra",
				"Dijkstra algorithm",
				"Dijkstra image description",
				"Dijkstra visualsrc",
				"Dijkstra algorithm description",
				"pseudocode for Dijkstra",
				"time complexity",
				"image url"
		);
		assertNotNull(lesson);
	}

	// test for list of lessons in the lesson repository
	@Test
	public void testNumberOfElementsInLessonRepository() {
		Lesson lesson1 = new Lesson(
				"graph_dijkstra_lesson",
				"graph_dijkstra_quiz",
				"Dijkstra",
				"Dijkstra algorithm",
				"Dijkstra image description",
				"Dijkstra visualsrc",
				"Dijkstra algorithm description",
				"pseudocode for Dijkstra",
				"time complexity",
				"image url"
		);

		Lesson lesson2 = new Lesson(
				"search_binary_lesson",
				"search_binary_quiz",
				"Binary Search",
				"Binary search algorithm",
				"Binary search image description",
				"Binary Search visualsrc",
				"Binary Search algorithm description",
				"pseudocode for binary Search",
				"time complexity",
				"image url"
		);

		lessonTestRepository.saveAll(List.of(lesson1, lesson2));

		long expectedItemCount = lessonTestRepository.count();
		assertEquals(expectedItemCount, 2);
	}

}
