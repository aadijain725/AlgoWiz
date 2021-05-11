package com.example.algorithms.LessonPage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path="api/v1/lesson")
public class LessonController {

    private final LessonService lessonService;

    @Autowired
    public LessonController(LessonService lessonService) {
        this.lessonService = lessonService;
    }

    @GetMapping
    public List<CustomJSON> getLesson() {

        List<CustomJSON> returnList = new ArrayList<>();

        for (Lesson lp : lessonService.getLesson()) {

            CustomJSON c = new CustomJSON(lp.getId(), lp.getTopic(), lp.getName(),
                    List.of(lp.getDescription(), lp.getPseudocode(), lp.getComplexity()), lp.getImageURL());

            returnList.add(c);

        }
        return returnList;
    }

    public static class CustomJSON {
        private Long qId;
        private String topic;
        private String algorithmName;
        private List<String> content;
        private String imageURL;

        public CustomJSON(Long qId, String topic, String algorithmName, List<String> content, String imageURL) {
            this.qId = qId;
            this.topic = topic;
            this.algorithmName = algorithmName;
            this.content = content;
            this.imageURL = imageURL;
        }

        public Long getqId() {
            return qId;
        }

        public void setqId(Long qId) {
            this.qId = qId;
        }

        public String getTopic() {
            return topic;
        }

        public void setTopic(String topic) {
            this.topic = topic;
        }

        public String getAlgorithmName() {
            return algorithmName;
        }

        public void setAlgorithmName(String algorithmName) {
            this.algorithmName = algorithmName;
        }

        public List<String> getContent() {
            return content;
        }

        public void setContent(List<String> content) {
            this.content = content;
        }

        public String getImageURL() {
            return imageURL;
        }

        public void setImageURL(String imageURL) {
            this.imageURL = imageURL;
        }
    }
}