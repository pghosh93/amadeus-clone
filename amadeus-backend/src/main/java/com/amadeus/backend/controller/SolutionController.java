package com.amadeus.backend.controller;

import com.amadeus.backend.model.Solution;
import com.amadeus.backend.service.SolutionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/solutions")
public class SolutionController {

    private final SolutionService service;

    public SolutionController(SolutionService service) {
        this.service = service;
    }

    @GetMapping
    public List<Solution> getAll() {
        return service.findAll();
    }

    @GetMapping("/{slug}")
    public ResponseEntity<Solution> getBySlug(@PathVariable String slug) {
        return service.findBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
