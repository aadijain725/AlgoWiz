package com.example.algorithms.LessonPage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
/*
This class handles business logic; use to store, retrieve, update and
delete lesson data from the lesson's repository.
 */
@Service
public class LessonService {
    private final LessonRepository lessonRepository;

    @Autowired
    public LessonService(LessonRepository lessonRepository) {
        this.lessonRepository = lessonRepository;
    }

    // Get a list of Lessons that correspond to a given lessonID
    public List<Lesson> getLesson(String lessonID) {
        return lessonRepository.findAllByLessonId(lessonID);
    }
}
