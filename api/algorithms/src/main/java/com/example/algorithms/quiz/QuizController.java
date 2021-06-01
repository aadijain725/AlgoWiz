package com.example.algorithms.quiz;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

/*
This class is responsible for processing incoming REST API requests and
processes, and returns a response for the quiz page.
 */

@RestController
// This is the main API Route for the quiz page
// If running locally, the url would be:
// "http://localhost:8080/api/v1/quiz"
@RequestMapping(path = "api/v1/quiz")
public class QuizController {

    private final QuizService quizService;
    // List of all the quizIds
    private final List<String> quizIdList = new ArrayList<>(List.of("graph_dijkstra_quiz",
            "search_binary_quiz",
            "sort_selection_quiz"));

    @Autowired
    public QuizController(QuizService quizService) {
        this.quizService = quizService;
    }


    // Returns list of quiz content for all possible quizId's in the database
    @GetMapping
    public List<QuizContent> getAllQuizzes() {
        List<QuizContent> contentList = new ArrayList<>();
        for (String id: this.quizIdList) {
            contentList.add(this.getQuizByID(id));
        }
        return contentList;
    }

    // Returns the QuizContent object for the requested quizId in the URL path
    // If the quizId is not valid, we return a 404 not found HTTP response
    // If running locally, the url would be:
    // "http://localhost:8080/api/v1/quiz/{quizId}"
    @GetMapping(path = "/{quizId}")
    public QuizContent getQuizByID(@PathVariable String quizId) {

        // Check if the quizId is valid
        if (!this.quizIdList.contains(quizId)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

        // List of Quiz objects of the requested quizId from the client
        List<Quiz> quizList = quizService.getQuiz(quizId);
        List<Questions> questionList = new ArrayList<>();

        // Initialize a dummy title and lessonId
        String title = "dummyTitleContent";
        String lessonId = "dummyLessonId";

        // Iterate through the list of quiz objects
        for (Quiz q: quizList) {
            // Set the options and responses arrays
            List<String> options = new ArrayList<>(List.of(q.getOption1(), q.getOption2(), q.getOption3()));
            List<String> responses = new ArrayList<>(List.of(q.getFeedback1(), q.getFeedback2(), q.getFeedback3()));

            // Set the title and lessonId
            title = q.getTitle();
            lessonId = q.getLessonId();

            // Generate the Questions object using the data
            Questions question = new Questions (q.getQuestion(),
                    options,
                    q.getCorrectAnswer(),
                    responses
            );
            questionList.add(question);
        }

        // Create and return new QuizContent object with the data
        // generated above
        return new QuizContent(quizId, lessonId, title, questionList);
    }


    /*
     ###################################################################
     Helper inner class definitions for returning formatted JSON objects
     ###################################################################
    */

    private static class QuizContent {
        private final String quizId;
        private final String lessonId;
        private final String title;
        private final List<Questions> questionsList;

        public String getQuizId() {
            return quizId;
        }

        public String getTitle() {
            return title;
        }

        public List<Questions> getQuestionsList() {
            return questionsList;
        }

        public String getLessonId() { return lessonId; }

        public QuizContent(String quizId, String lessonId, String title, List<Questions> questionsList) {
            this.quizId = quizId;
            this.lessonId = lessonId;
            this.title = title;
            this.questionsList = questionsList;
        }
    }

    private static class Questions {
        private final String question;
        private final List<String> options;
        private final int correctAnswer;
        private final List<String> responses;

        public String getQuestion() {
            return question;
        }

        public List<String> getOptions() {
            return options;
        }

        public int getCorrectAnswer() {
            return correctAnswer;
        }

        public List<String> getResponses() {
            return responses;
        }

        public Questions(String question, List<String> options, int correctAnswer, List<String> responses) {
            this.question = question;
            this.options = options;
            this.correctAnswer = correctAnswer;
            this.responses = responses;
        }

    }

}
