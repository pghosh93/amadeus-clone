package com.amadeus.backend.repository;

import com.amadeus.backend.model.Solution;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface SolutionRepository extends JpaRepository<Solution, Long> {
    Optional<Solution> findBySlug(String slug);
}
