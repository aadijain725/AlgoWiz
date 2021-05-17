package com.example.algorithms.quiz;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuizRepository extends JpaRepository<Quiz, Integer> {

    // Fetches all the rows from the repository
    // corresponding the the requested "quizId"
    List<Quiz> findAllByQuizId(String quizId);
}
