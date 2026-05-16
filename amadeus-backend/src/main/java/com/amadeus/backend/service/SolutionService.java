package com.amadeus.backend.service;

import com.amadeus.backend.model.Solution;
import com.amadeus.backend.repository.SolutionRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class SolutionService {

    private final SolutionRepository repository;

    public SolutionService(SolutionRepository repository) {
        this.repository = repository;
    }

    public List<Solution> findAll() {
        return repository.findAll();
    }

    public Optional<Solution> findBySlug(String slug) {
        return repository.findBySlug(slug);
    }

    public Optional<Solution> findById(Long id) {
        return repository.findById(id);
    }
}
