package com.example.algorithms.quiz;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/quiz")
public class QuizController {

    private final QuizService quizService;

    @Autowired
    public QuizController(QuizService quizService) {
        this.quizService = quizService;
    }

    @GetMapping
    public List<CustomJSON> getQuiz() {

    List<CustomJSON> returnList = new ArrayList<>();

    for (Quiz qz: quizService.getQuiz()) {
        CustomJSON c = new CustomJSON(qz.getqId(), qz.getCategory(), qz.getQuestion(),
                qz.getAnswer(), List.of(qz.getOption1(), qz.getOption2(), qz.getOption3()),
                List.of(qz.getFeedbackOpt1(), qz.getFeedbackOpt2(), qz.getFeedbackOpt3()));

        returnList.add(c);

    }
    return returnList;
}

    public static class CustomJSON {
        private int qId;
        private String category;
        private String question;
        private String answer;
        private List<String> options;
        private List<String> feedbacks;

        public CustomJSON(int qId, String category, String question, String answer, List<String> options, List<String> feedbacks) {
            this.qId = qId;
            this.category = category;
            this.question = question;
            this.answer = answer;
            this.options = options;
            this.feedbacks = feedbacks;
        }

        public int getqId() {
            return qId;
        }

        public void setqId(int qId) {
            this.qId = qId;
        }

        public String getCategory() {
            return category;
        }

        public void setCategory(String category) {
            this.category = category;
        }

        public String getQuestion() {
            return question;
        }

        public void setQuestion(String question) {
            this.question = question;
        }

        public String getAnswer() {
            return answer;
        }

        public void setAnswer(String answer) {
            this.answer = answer;
        }

        public List<String> getOptions() {
            return options;
        }

        public void setOptions(List<String> options) {
            this.options = options;
        }

        public List<String> getFeedbacks() {
            return feedbacks;
        }

        public void setFeedbacks(List<String> feedbacks) {
            this.feedbacks = feedbacks;
        }
    }
}
