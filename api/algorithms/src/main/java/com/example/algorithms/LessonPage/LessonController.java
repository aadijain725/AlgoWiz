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

        Lesson l = lessonList.get(0);
        LessonController.Data content;

        title = l.getTitle();
        lessonId = l.getLessonId();
        quizID = l.getQuizID();
        description = l.getDescription();
        vizSrc = l.getVizSrc();

        // Generate the Questions object using the data
        content = new LessonController.Data(
                lessonId,
                quizID,
                title,
                description,
                vizSrc,
                l);

        // Create and return new Data object with the data
        // generated above
        return content;
    }

    private static class Data {
        private String lessonID;
        private String quizID;
        private String title;
        private String description;
        private String vizSrc;
        private List<Col> rows;

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

        public Data(String lessonID, String quizID, String title, String description, String vizSrc, Lesson lesson) {
            this.lessonID = lessonID;
            this.quizID = quizID;
            this.title = title;
            this.description = description;
            this.vizSrc = vizSrc;
            this.rows = new ArrayList<>();

            List<ContentData> imgData = new ArrayList<>();
            imgData.add(new ImageContentData(6, "img", lesson.getImageURL(), lesson.getAlt()));
            imgData.add(new LessonContentData(6, "p", lesson.getImgDescription()));
            Col imgDataCol = new Col(imgData);
            rows.add(imgDataCol);

            List<ContentData> pseudocodeHeader = new ArrayList<>();
            pseudocodeHeader.add(new LessonContentData(12, "h2", "Pseudocode"));
            Col pseudocodeHeaderDataCol = new Col(pseudocodeHeader);
            rows.add(pseudocodeHeaderDataCol);

            List<ContentData> pseudocodeContent = new ArrayList<>();
            pseudocodeContent.add(new LessonContentData(12, "p", lesson.getPseudocode()));
            Col pseudocodeContentDataCol = new Col(pseudocodeContent);
            rows.add(pseudocodeContentDataCol);

            List<ContentData> complexityHeader = new ArrayList<>();
            complexityHeader.add(new LessonContentData(12, "h2", "Complexity"));
            Col complexityHeaderDataCol = new Col(complexityHeader);
            rows.add(complexityHeaderDataCol);

            List<ContentData> complexityContent = new ArrayList<>();
            complexityContent.add(new LessonContentData(12, "p", lesson.getComplexity()));
            Col complexityContentDataCol = new Col(complexityContent);
            rows.add(complexityContentDataCol);
        }
    }

    private static class Row {
        private List<Col> cols;
        private Lesson l;

        public Row(Lesson l) {
            this.cols = new ArrayList<>();
            this.l = l;
        }

        public List<Col> getCols() {
            return cols;
        }

        public void setCols(List<Col> cols) {
            this.cols = cols;
        }
    }

    private static class Col {
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

    private static class ContentData {
        private int xs;
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

    private static class ImageContentData extends ContentData {
        private String src;
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

    private static class LessonContentData extends ContentData {
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