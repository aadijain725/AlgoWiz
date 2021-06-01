package com.example.algorithms.LessonPage;

import com.example.algorithms.quiz.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LessonRepository extends JpaRepository<Lesson, Integer> {

    // Fetches all the rows from the repository
    // corresponding the the requested "lessonID"
    List<Lesson> findAllByLessonId(String lessonID);
}

