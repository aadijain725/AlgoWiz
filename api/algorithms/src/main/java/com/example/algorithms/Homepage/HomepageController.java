package com.example.algorithms.Homepage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/*
This class is responsible for processing incoming REST API requests and
processes, and returns a response for the homepage.
 */
@RestController
// This is the main API Route for the homepage page
// If running locally, the url would be:
// "http://localhost:8080/api/v1/home"
@CrossOrigin
@RequestMapping(path="api/v1/home")
public class HomepageController {
    private final HomepageService algoHomeService;

    @Autowired
    public HomepageController(HomepageService algoHomeService) {
        this.algoHomeService = algoHomeService;
    }

    @GetMapping
    public List<HomeTopicList> getTopics() {

        // Map topic to list of data of each algorithm under the topic
        Map<String, List<Data>> topicToDataMap = new HashMap<>();

        // Iterate through the list of HomepageTopics objects fetched
        // the repository
        for (HomepageTopics hp: algoHomeService.getTopics()) {
            // Topic name
            String topic = hp.getTopic();

            // Initialize a Data object containing the information
            // about the topic.
            Data topicData = new Data(hp.getId(),
                    hp.getQuizId(),
                    hp.getLessonId(),
                    hp.getAlgorithmName(),
                    hp.getHomepageDescription(),
                    hp.getImageURL());

            // Check if the "topic" is already in the map.
            // If it is, append the new data object to the list of values of the topic
            // Otherwise, insert a new key-value pair with topic as the key and Data object as the value
            if (!topicToDataMap.containsKey(topic)) {
                topicToDataMap.put(topic, new ArrayList<>(List.of(topicData)));
            } else {
                List<Data> currDataList = topicToDataMap.get(topic);
                currDataList.add(topicData);
                topicToDataMap.put(topic, currDataList);
            }
        }

        List<HomeTopicList> returnList = new ArrayList<>();
        // Iterate through the map generate HomeTopicList objects with the
        // information in the map.
        for (String topic: topicToDataMap.keySet()) {
            HomeTopicList homeTopicList = new HomeTopicList(topic, topicToDataMap.get(topic));
            returnList.add(homeTopicList);
        }

        // Return the list of HomepageTopics
        return returnList;
    }


    /*
     ###################################################################
     Helper inner class definitions for returning formatted JSON objects
     ###################################################################
    */

    private static class HomeTopicList {
        private final String topicName;
        private final List<Data> data;

        public HomeTopicList(String topicName, List<Data> data) {
            this.topicName = topicName;
            this.data = data;
        }

        public String getTopicName() {
            return topicName;
        }

        public List<Data> getData() {
            return data;
        }

        @Override
        public String toString() {
            return "CustomJSON{" +
                    "topicName='" + topicName + '\'' +
                    ", data=" + data +
                    '}';
        }
    }

    private static class Data {
        private final long id;
        private final String quizId;
        private final String lessonId;
        private final String algorithmName;
        private final String homePageDescription;
        private final String imageURL;

        public Data(long id,
                    String quizId,
                    String lessonId,
                    String algorithmName,
                    String homePageDescription,
                    String imageURL) {

            this.id = id;
            this.quizId = quizId;
            this.lessonId = lessonId;
            this.algorithmName = algorithmName;
            this.homePageDescription = homePageDescription;
            this.imageURL = imageURL;
        }

        public long getId() {
            return id;
        }

        public String getQuizId() {
            return quizId;
        }

        public String getLessonId() {
            return lessonId;
        }

        public String getAlgorithmName() {
            return algorithmName;
        }

        public String getHomePageDescription() {
            return homePageDescription;
        }

        public String getImageURL() {
            return imageURL;
        }

        @Override
        public String toString() {
            return "Data{" +
                    "id=" + id +
                    ", quizId='" + quizId + '\'' +
                    ", lessonId='" + lessonId + '\'' +
                    ", algorithmName='" + algorithmName + '\'' +
                    ", homePageDescription='" + homePageDescription + '\'' +
                    ", imageURL='" + imageURL + '\'' +
                    '}';
        }
    }
}
