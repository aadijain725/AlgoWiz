package com.example.algorithms.quiz;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class Quiz {
    @Id
    @SequenceGenerator(
            name = "quiz_sequence",
            sequenceName = "quiz_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "quiz_sequence"
    )

    private int qId;
    private String category;
    private String question;
    private String answer;
    private String option1;
    private String option2;
    private String option3;
    private String feedbackOpt1;
    private String feedbackOpt2;
    private String feedbackOpt3;

    public Quiz() {

    }
    public Quiz(int qId,
                String category,
                String question,
                String answer,
                String option1,
                String option2,
                String option3,
                String feedbackOpt1,
                String feedbackOpt2,
                String feedbackOpt3) {
        this.qId = qId;
        this.category = category;
        this.question = question;
        this.answer = answer;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.feedbackOpt1 = feedbackOpt1;
        this.feedbackOpt2 = feedbackOpt2;
        this.feedbackOpt3 = feedbackOpt3;
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

    public String getOption1() {
        return option1;
    }

    public void setOption1(String option1) {
        this.option1 = option1;
    }

    public String getOption2() {
        return option2;
    }

    public void setOption2(String option2) {
        this.option2 = option2;
    }

    public String getOption3() {
        return option3;
    }

    public void setOption3(String option3) {
        this.option3 = option3;
    }

    public String getFeedbackOpt1() {
        return feedbackOpt1;
    }

    public void setFeedbackOpt1(String feedbackOpt1) {
        this.feedbackOpt1 = feedbackOpt1;
    }

    public String getFeedbackOpt2() {
        return feedbackOpt2;
    }

    public void setFeedbackOpt2(String feedbackOpt2) {
        this.feedbackOpt2 = feedbackOpt2;
    }

    public String getFeedbackOpt3() {
        return feedbackOpt3;
    }

    public void setFeedbackOpt3(String feedbackOpt3) {
        this.feedbackOpt3 = feedbackOpt3;
    }

    @Override
    public String toString() {
        return "Quiz{" +
                "qId=" + qId +
                ", category='" + category + '\'' +
                ", question='" + question + '\'' +
                ", answer='" + answer + '\'' +
                ", option1='" + option1 + '\'' +
                ", option2='" + option2 + '\'' +
                ", option3='" + option3 + '\'' +
                ", feedbackOpt1='" + feedbackOpt1 + '\'' +
                ", feedbackOpt2='" + feedbackOpt2 + '\'' +
                ", feedbackOpt3='" + feedbackOpt3 + '\'' +
                '}';
    }
}
