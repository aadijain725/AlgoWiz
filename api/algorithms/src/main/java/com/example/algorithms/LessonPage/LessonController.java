package com.example.algorithms.LessonPage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;


import java.util.ArrayList;
import java.util.List;

/*
This class is responsible for processing incoming REST API requests and
processes, and returns a response for the lesson's page.
 */
@RestController
@RequestMapping(path="api/v1/lesson")
public class LessonController {

    private final LessonService lessonService;

    // List of expected lesson IDs
    private final List<String> lessonIDList = new ArrayList<>(List.of("graph_dijkstra_lesson",
            "search_binary_lesson",
            "sort_selection_lesson"));

    @Autowired
    public LessonController(LessonService lessonService) {
        this.lessonService = lessonService;
    }

    // Returns the Lesson object for the requested lessonId in the URL path
    // If the lessonId is not valid, we return a 404 not found HTTP response
    // If running locally, the url would be:
    // "http://localhost:8080/api/v1/lesson/{lessonID}"
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
        String vizSrc = "dummyVizSrc";

        // Get the lesson corresponding to the lessonID
        Lesson l = lessonList.get(0);
        LessonController.Data content;

        // Assign the parameters initialized above to the corresponding lesson fields
        title = l.getTitle();
        lessonId = l.getLessonId();
        quizID = l.getQuizID();
        description = l.getDescription();
        vizSrc = l.getVizSrc();

        // Generate the Data object using the lesson data
        content = new LessonController.Data(lessonId, quizID, title, description, vizSrc, l);

        return content;
    }

    // Outer structure storing lesson data
    private static class Data {
        private String lessonID;
        private String quizID;
        private String title;
        private String description;
        private String vizSrc;
        private List<Col> rows;

        public Data(String lessonID, String quizID, String title, String description, String vizSrc, Lesson lesson) {
            this.lessonID = lessonID;
            this.quizID = quizID;
            this.title = title;
            this.description = description;
            this.vizSrc = vizSrc;
            this.rows = new ArrayList<>();

            // Generate image content
            rows.add(makeImageCol(lesson.getImageURL(), lesson.getAlt(), lesson.getImgDescription()));

            // Generate Lesson content
            rows.add(makeContentCol("Pseudocode", "h2"));
            rows.add(makeContentCol(lesson.getPseudocode(), "p"));
            rows.add(makeContentCol("Complexity", "h2"));
            rows.add(makeContentCol(lesson.getComplexity(), "p"));
        }

        public String getLessonID() {
            return lessonID;
        }

        public void setLessonID(String lessonID) {
            this.lessonID = lessonID;
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

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public String getVizSrc() {
            return vizSrc;
        }

        public void setVizSrc(String vizSrc) {
            this.vizSrc = vizSrc;
        }

        public List<Col> getRows() {
            return rows;
        }

        public void setRows(List<Col> rows) {
            this.rows = rows;
        }
    }

    // Creates a new Col for image fields
    private static Col makeImageCol(String url, String alt, String description) {
        List<ContentData> imgData = new ArrayList<>();
        imgData.add(new ImageContentData(6, "img", url, alt));
        imgData.add(new LessonContentData(6, "p", description));
        return new Col(imgData);
    }

    // Creates a new Col for text fields
    private static Col makeContentCol(String content, String type) {
        List<ContentData> complexityHeader = new ArrayList<>();
        complexityHeader.add(new LessonContentData(12, type, content));
        return new Col(complexityHeader);
    }

    // Inner structure storing additional lesson data
    private static class Col {
        // Contains data in each "cols"
        private List<ContentData> cols;

        public Col(List<ContentData> cols) {
            this.cols = cols;
        }

        public List<ContentData> getCols() {
            return cols;
        }

        public void setCols(List<ContentData> cols) {
            this.cols = cols;
        }
    }

    // Object that stores HTML column width and HTML type
    // This class is never directly used and therefore has no defined constructors
    private static class ContentData {
        // xs for HTML
        private int xs;

        // type for HTML
        private String type;

        public int getXs() {
            return xs;
        }

        public void setXs(int xs) {
            this.xs = xs;
        }

        public String getType() {
            return type;
        }

        public void setType(String type) {
            this.type = type;
        }
    }

    // Subclass of ContentData, stores image link and alternate
    private static class ImageContentData extends ContentData {
        // URL of the image
        private String src;

        // Alt for the image in case it does not load
        private String alt;

        public ImageContentData(int xs, String type, String src, String alt) {
            this.src = src;
            this.alt = alt;
            super.xs = xs;
            super.type = type;
        }

        public String getSrc() {
            return src;
        }

        public void setSrc(String src) {
            this.src = src;
        }

        public String getAlt() {
            return alt;
        }

        public void setAlt(String alt) {
            this.alt = alt;
        }
    }

    // Subclass of ContentData, stores lesson text data
    private static class LessonContentData extends ContentData {
        // Text for the lesson content
        private String text;

        public LessonContentData(int xs, String type, String text) {
            this.text = text;
            super.xs = xs;
            super.type = type;
        }

        public String getText() {
            return text;
        }

        public void setText(String text) {
            this.text = text;
        }
    }
}