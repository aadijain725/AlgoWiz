package com.example.algorithms.Homepage;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HomepageRepository
        extends JpaRepository<HomepageTopics, Long> {
}
