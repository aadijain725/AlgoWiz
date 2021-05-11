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

    private Long id;
    private String topic;
    private String algorithmName;
    @Column(nullable = false, length = 4096)
    private String description;
    @Column(nullable = false, length = 4096)
    private String pseudocode;
    private String complexity;
    @Column(nullable = false, length = 4096)
    private String imageURL;

    @Override
    public String toString() {
        return "Lesson{" +
                "id=" + this.id +
                ", topic=" + this.topic + '\'' +
                ", algorithmName=" + this.algorithmName + '\'' +
                ", description=" + this.description + '\'' +
                ", pseudocode=" + this.pseudocode + '\'' +
                ", complexity=" + this.complexity + '\'' +
                ", imageURL=" + this.imageURL + '\'' +
                '}';
    }

    public Lesson(Long id, String topic, String algorithmName, String description, String pseudocode, String complexity, String imageURL) {
        this.id = id;
        this.topic = topic;
        this.algorithmName = algorithmName;
        this.description = description;
        this.pseudocode = pseudocode;
        this.complexity = complexity;
        this.imageURL = imageURL;
    }
    public Lesson() {

    }
    public void setId(Long id) {
        this.id = id;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public void setName(String algorithmName) {
        this.algorithmName = algorithmName;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPseudocode(String pseudocode) {
        this.pseudocode = pseudocode;
    }

    public void setComplexity(String complexity) {
        this.complexity = complexity;
    }

    public void setImage(String imageURL) {
        this.imageURL = imageURL;
    }

    public Long getId() {
        return this.id;
    }

    public String getTopic() {
        return this.topic;
    }

    public String getName() {
        return this.algorithmName;
    }

    public String getDescription() {
        return this.description;
    }

    public String getPseudocode() {
        return this.pseudocode;
    }

    public String getComplexity() {
        return this.complexity;
    }

    public String getImageURL() {
        return this.imageURL;
    }
}
