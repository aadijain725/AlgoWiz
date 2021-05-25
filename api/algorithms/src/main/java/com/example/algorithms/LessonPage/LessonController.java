package com.example.algorithms.LessonPage;

import com.example.algorithms.Homepage.HomepageController;
import com.example.algorithms.quiz.Quiz;
import com.example.algorithms.quiz.QuizController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import javax.persistence.Column;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path="api/v1/lesson")
public class LessonController {

    private final LessonService lessonService;

    private final List<String> lessonIDList = new ArrayList<>(List.of("graph_dijkstra_lesson",
                                                                    "search_binary_lesson",
                                                                    "sort_selection_lesson"));

    @Autowired
    public LessonController(LessonService lessonService) {
        this.lessonService = lessonService;
    }

    /*
    @GetMapping
    public List<LessonController.LessonContent> getAllLessons() {
        List<LessonController.LessonContent> contentList = new ArrayList<>();
        for (String id: this.lessonIDList) {
            contentList.add(this.getLessonbyID(id));
        }
        return contentList;
    }

     */

    @GetMapping(path = "/{lessonID}")
    public LessonController.Data getLessonbyID(@PathVariable String lessonID) {

        // Check if the lessonID is valid
        if (!this.lessonIDList.contains(lessonID)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

        // List of Lesson objects of the requested lessonID from the client
        List<Lesson> lessonList = lessonService.getLesson(lessonID);

        // Initialize a dummy title and lessonId
        String lessonId = "dummyLessonId";
        String title = "dummyTitleContent";
        String quizID = "dummyQuizId";
        String description = "dummyDescription";

        Lesson l = lessonList.get(0);
        LessonController.Data content;

        title = l.getTitle();
        lessonId = l.getLessonId();
        quizID = l.getQuizID();
        description = l.getDescription();

        // Generate the Questions object using the data
        content = new LessonController.Data(
                lessonId,
                quizID,
                title,
                description,
                l);

        // Create and return new Data object with the data
        // generated above
        return content;
    }

    private static class Data {
        private String lessonId;
        private String quizId;
        private String title;
        private String description;
        private Lesson lesson;
        private ImageData imgData;
        private List<ContentData> contentData;

        public Data(String lessonId, String quizId, String title, String description, Lesson lesson) {
            this.lessonId = lessonId;
            this.quizId = quizId;
            this.title = title;
            this.description = description;
            this.lesson = lesson;
            this.imgData = makeImageData();
            this.contentData = makeContentData();
        }

        private ImageData makeImageData() {
            return new ImageData(lesson.getImageURL(), lesson.getAlt(), lesson.getImgDescription());
        }

        private List<ContentData> makeContentData() {
            List<ContentData> newContentData = new ArrayList<>();

            newContentData.add(new ContentData("Pseudocode", lesson.getPseudocode()));
            newContentData.add(new ContentData("Complexity", lesson.getComplexity()));

            return newContentData;
        }
    }

    private static class ImageData {
        private String imageURL;
        private String alt;
        private String imgDescription;

        public ImageData(String imageURL, String alt, String imgDescription) {
            this.imageURL = imageURL;
            this.alt = alt;
            this.imgDescription = imgDescription;
        }

        public String getImageURL() {
            return imageURL;
        }

        public String getAlt() {
            return alt;
        }

        public String getImgDescription() {
            return imgDescription;
        }
    }

    private static class ContentData {
        private String header;
        private String content;

        public ContentData(String header, String content) {
            this.header = header;
            this.content = content;
        }

        public String getHeader() {
            return header;
        }

        public String getContent() {
            return content;
        }
    }





/*
    private static class LessonContent {
        private final String lessonId;
        private final String quizId;
        private final String title;
        private final String description;
        private final List<LessonController.Data> data;

        public LessonContent(String lessonId, String quizId, String title, String description, List<Data> data) {
            this.lessonId = lessonId;
            this.quizId = quizId;
            this.title = title;
            this.description = description;
            this.data = data;
        }

        public String getLessonId() {
            return lessonId;
        }

        public String getQuizId() {
            return quizId;
        }

        public String getTitle() {
            return title;
        }

        public String getDescription() {
            return description;
        }

        public List<LessonController.Data> getData() {
            return data;
        }

        @Override
        public String toString() {
            return "LessonContent{" +
                    "lessonID='" + lessonId + '\'' +
                    ", quizID='" + quizId + '\'' +
                    ", title='" + title + '\'' +
                    ", description='" + description + '\'' +
                    ", data=" + data.toString() +
                    '}';
        }
    }



    private static class Data {
        private String title;
        private String vizSrc;
        private String alt;
        private String imgDescription;
        private String pseudocode;
        private String complexity;
        private String imageURL;

        public Data(String title, String vizSrc, String alt, String imgDescription, String pseudocode, String complexity, String imageURL) {
            this.title = title;
            this.vizSrc = vizSrc;
            this.alt = alt;
            this.imgDescription = imgDescription;
            this.pseudocode = pseudocode;
            this.complexity = complexity;
            this.imageURL = imageURL;
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

        public String getAlt() {
            return alt;
        }

        public void setAlt(String alt) {
            this.alt = alt;
        }

        public String getImgDescription() {
            return imgDescription;
        }

        public void setImgDescription(String imgDescription) {
            this.imgDescription = imgDescription;
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

        @Override
        public String toString() {
            return "Data{" +
                    "title='" + title + '\'' +
                    ", vizSrc='" + vizSrc + '\'' +
                    ", alt='" + alt + '\'' +
                    ", imgDescription='" + imgDescription + '\'' +
                    ", pseudocode='" + pseudocode + '\'' +
                    ", complexity='" + complexity + '\'' +
                    ", imageURL='" + imageURL + '\'' +
                    '}';
        }
    }

 */
}