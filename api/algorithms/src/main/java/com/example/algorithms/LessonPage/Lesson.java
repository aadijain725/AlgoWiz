package com.example.algorithms.LessonPage;

import javax.persistence.*;

@Entity
@Table
public class Lesson {
    @Id
    @SequenceGenerator(
            name = "lesson_sequence",
            sequenceName = "lesson_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "lesson_sequence"
    )

    private int id;

    // lessonId of the lesson
    private String lessonId;

    // Topic of the lesson
    private String quizID;

    // Name of the algorithm
    private String title;

    private String alt;

    private String imgDescription;

    // Animated visualization of the algorithm
    private String vizSrc;

    // Description of the algorithm
    @Column(nullable = false, length = 4096)
    private String description;

    // Pseudocode of the algorithm
    @Column(nullable = false, length = 4096)
    private String pseudocode;

    // Complexity description of the algorithm
    private String complexity;

    // Image URL of the algorithm
    @Column(nullable = false, length = 4096)
    private String imageURL;

    @Override
    public String toString() {
        return "Lesson{" +
                "lessonId='" + lessonId + '\'' +
                ", quizID='" + quizID + '\'' +
                ", title='" + title + '\'' +
                ", alt='" + alt + '\'' +
                ", imgDescription='" + imgDescription + '\'' +
                ", vizSrc='" + vizSrc + '\'' +
                ", description='" + description + '\'' +
                ", pseudocode='" + pseudocode + '\'' +
                ", complexity='" + complexity + '\'' +
                ", imageURL='" + imageURL + '\'' +
                '}';
    }

    public Lesson(String lessonId, String quizID, String title, String alt, String imgDescription, String vizSrc, String description, String pseudocode, String complexity, String imageURL) {
        this.lessonId = lessonId;
        this.quizID = quizID;
        this.title = title;
        this.alt = alt;
        this.imgDescription = imgDescription;
        this.vizSrc = vizSrc;
        this.description = description;
        this.pseudocode = pseudocode;
        this.complexity = complexity;
        this.imageURL = imageURL;
    }


    public Lesson() {

    }

    public String getImgDescription() {
        return imgDescription;
    }

    public void setImgDescription(String imgDescription) {
        this.imgDescription = imgDescription;
    }

    public String getAlt() {
        return alt;
    }

    public void setAlt(String alt) {
        this.alt = alt;
    }

    public String getLessonId() {
        return lessonId;
    }

    public void setLessonId(String lessonId) {
        this.lessonId = lessonId;
    }

    public String getQuizID() {
        return quizID;
    }

    public void setQuizID(String quizID) {
        this.quizID = quizID;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getVizSrc() {
        return vizSrc;
    }

    public void setVizSrc(String vizSrc) {
        this.vizSrc = vizSrc;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPseudocode() {
        return pseudocode;
    }

    public void setPseudocode(String pseudocode) {
        this.pseudocode = pseudocode;
    }

    public String getComplexity() {
        return complexity;
    }

    public void setComplexity(String complexity) {
        this.complexity = complexity;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }
}
